import { renderGameCard } from '../game-card.js';
import { renderSearchBar } from '../search-bar.js';
import { renderCategoryFilter } from '../category-filter.js';

export function renderFavorites({ games, favorites, search = '', category = 'Todos', categories = [], resultsOnly = false }) {
	const emptyMessage = search || category !== 'Todos'
		? 'Nenhum favorito corresponde a esta busca ou categoria.'
		: 'Nenhum favorito por enquanto. Explore os jogos e guarde os que gostar.';
	const cards = games.length ? games.map((game) => renderGameCard(game, favorites)).join('') : `<p class="empty-state">${emptyMessage}</p>`;
	if (resultsOnly) return cards;
	return `<section class="catalog-page section-wrap">
		<div class="page-heading"><span class="eyebrow">SUA COLEÇÃO</span><h1>Jogos para voltar sempre.</h1><p>Seus jogos favoritos ficam guardados neste dispositivo.</p></div>
		<div class="catalog-tools">${renderSearchBar(search)}${renderCategoryFilter(categories, category)}</div>
		<div class="results-heading"><h2>Favoritos</h2><span data-result-count>${games.length} ${games.length === 1 ? 'jogo' : 'jogos'}</span></div>
		<div class="game-grid" data-results>${cards}</div>
	</section>`;
}
