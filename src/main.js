import { games, categories } from './data/games.js';
import { filterGames, getGameById } from './services/game-service.js';
import { getFavorites, toggleFavorite } from './services/favorites-service.js';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderHome } from './components/pages/home.js';
import { renderCatalog } from './components/pages/catalog.js';
import { renderFavorites } from './components/pages/favorites.js';
import { renderGameDetails } from './components/pages/game-details.js';

const app = document.querySelector('#app');
const state = { search: '', category: 'Todos' };

function currentRoute() {
	const [, page = 'inicio', gameId] = window.location.hash.split('/');
	return { page, gameId };
}

function getVisibleGames(page) {
	const source = page === 'favoritos'
		? games.filter((game) => getFavorites().includes(game.id))
		: games;
	return filterGames(source, state.search, state.category);
}

function renderPageContent() {
	const { page, gameId } = currentRoute();
	const favorites = getFavorites();

	if (page === 'jogos') {
		return renderCatalog({ games: getVisibleGames(page), categories, favorites, search: state.search, category: state.category });
	}
	if (page === 'favoritos') {
		return renderFavorites({ games: getVisibleGames(page), favorites, search: state.search, category: state.category, categories });
	}
	if (page === 'jogo') {
		const game = getGameById(games, gameId);
		return renderGameDetails({ game, isFavorite: favorites.includes(gameId) });
	}
	return renderHome({ games, favorites });
}

function render() {
	const { page } = currentRoute();
	const activePage = ['jogos', 'favoritos'].includes(page) ? page : 'inicio';
	app.innerHTML = `${renderHeader(activePage, getFavorites().length)}
		<main id="page-content" class="page-content">${renderPageContent()}</main>
		${renderFooter()}`;
}

function updateResults() {
	const results = document.querySelector('[data-results]');
	if (!results) return;
	const { page } = currentRoute();
	const visibleGames = getVisibleGames(page);
	const resultCount = document.querySelector('[data-result-count]');
	if (resultCount) {
		resultCount.textContent = `${visibleGames.length} ${visibleGames.length === 1 ? 'jogo' : 'jogos'}`;
	}
	results.innerHTML = page === 'favoritos'
		? renderFavorites({ games: visibleGames, favorites: getFavorites(), search: state.search, category: state.category, categories, resultsOnly: true })
		: renderCatalog({ games: visibleGames, categories, favorites: getFavorites(), search: state.search, category: state.category, resultsOnly: true });
}

app.addEventListener('input', (event) => {
	if (event.target.matches('[data-search]')) {
		state.search = event.target.value;
		updateResults();
	}
});

app.addEventListener('click', (event) => {
	const categoryButton = event.target.closest('[data-category]');
	if (categoryButton) {
		state.category = categoryButton.dataset.category;
		document.querySelectorAll('[data-category]').forEach((button) => {
			button.classList.toggle('is-active', button.dataset.category === state.category);
		});
		updateResults();
		return;
	}

	const favoriteButton = event.target.closest('[data-favorite]');
	if (favoriteButton) {
		toggleFavorite(favoriteButton.dataset.favorite);
		render();
	}
});

window.addEventListener('hashchange', () => {
	state.search = '';
	state.category = 'Todos';
	render();
	window.scrollTo(0, 0);
});

if (!window.location.hash) window.location.hash = '#/inicio';
render();
