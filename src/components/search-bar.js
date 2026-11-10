export function renderSearchBar(value = '') {
	return `<label class="search-field"><span class="search-icon" aria-hidden="true">⌕</span>
		<input data-search type="search" value="${value}" placeholder="Busque por jogo, matéria ou tema" aria-label="Buscar jogos" />
	</label>`;
}
