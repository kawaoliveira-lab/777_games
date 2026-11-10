import { renderGameCard } from '../game-card.js';

export function renderGameDetails({ game, isFavorite }) {
	if (!game) return `<section class="detail-page section-wrap"><a class="text-link" href="#/jogos">← Voltar aos jogos</a><p class="empty-state">Este jogo não foi encontrado.</p></section>`;
	const card = renderGameCard(game, isFavorite ? [game.id] : []);
	return `<section class="detail-page section-wrap">
		<a class="text-link back-link" href="#/jogos">← Voltar aos jogos</a>
		<div class="detail-layout"><div class="detail-art">${card.match(/<a class="game-art[\s\S]*?<\/a>/)?.[0] || ''}</div>
			<div class="detail-copy"><span class="eyebrow">${game.category.toUpperCase()} · ${game.subject.toUpperCase()}</span><h1>${game.title}</h1><p>${game.description}</p>
				<dl class="detail-meta"><div><dt>Faixa etária</dt><dd>${game.age}</dd></div><div><dt>Duração média</dt><dd>${game.duration}</dd></div></dl>
				<div class="detail-actions"><a class="button-primary" href="${game.href}">Jogar agora <span aria-hidden="true">↗</span></a><button class="button-secondary" type="button" data-favorite="${game.id}">${isFavorite ? '♥ Salvo nos favoritos' : '♡ Salvar nos favoritos'}</button></div>
			</div>
		</div>
	</section>`;
}
