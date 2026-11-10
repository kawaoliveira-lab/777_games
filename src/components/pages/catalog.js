import { renderGameCard } from '../game-card.js';
import { renderSearchBar } from '../search-bar.js';
import { renderCategoryFilter } from '../category-filter.js';

export function renderCatalog({ games, categories, favorites, search = '', category = 'Todos', resultsOnly = false }) {
	const cards = games.length ? games.map((game) => renderGameCard(game, favorites)).join('') : '<p class="empty-state">Nenhum jogo encontrado. Tente outra busca ou categoria.</p>';
	if (resultsOnly) return cards;
	return `<section class="catalog-page section-wrap">
		<div class="page-heading"><span class="eyebrow">CATÁLOGO</span><h1>Escolha sua próxima descoberta.</h1><p>Encontre um jogo por tema, matéria ou curiosidade.</p></div>
		<div class="catalog-tools">${renderSearchBar(search)}${renderCategoryFilter(categories, category)}</div>
		<div class="results-heading"><h2>Todos os jogos</h2><span data-result-count>${games.length} ${games.length === 1 ? 'jogo' : 'jogos'}</span></div>
		<div class="game-grid" data-results>${cards}</div>
	</section>`;
}
