export function renderCategoryFilter(categories, selected = 'Todos') {
	return `<div class="category-list" aria-label="Filtrar por categoria">${categories.map((category) =>
		`<button class="category-chip ${category === selected ? 'is-active' : ''}" type="button" data-category="${category}" aria-pressed="${category === selected}">${category}</button>`
	).join('')}</div>`;
}
