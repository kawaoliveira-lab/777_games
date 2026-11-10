export function renderGameCard(game, favorites = []) {
	const isFavorite = favorites.includes(game.id);
	return `<article class="game-card">
		<a class="game-art ${game.theme}" href="#/jogo/${game.id}" aria-label="Ver detalhes de ${game.title}">
			<span class="art-kicker">${game.category}</span>
			<span class="art-illustration" aria-hidden="true">${game.icon}</span>
			<span class="art-caption">${game.subject}</span>
		</a>
		<div class="game-card-body">
			<div class="card-title-row"><h3><a href="#/jogo/${game.id}">${game.title}</a></h3>
				<button class="icon-button favorite-button ${isFavorite ? 'is-favorite' : ''}" type="button" data-favorite="${game.id}" aria-label="${isFavorite ? 'Remover dos' : 'Adicionar aos'} favoritos" aria-pressed="${isFavorite}">${isFavorite ? '♥' : '♡'}</button>
			</div>
			<p>${game.description}</p>
			<div class="card-meta"><span>${game.age}</span><span>${game.duration}</span></div>
		</div>
	</article>`;
}
