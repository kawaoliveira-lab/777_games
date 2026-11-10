import { renderGameCard } from '../game-card.js';

export function renderHome({ games, favorites }) {
	const featuredGame = games.find((game) => game.featured) || games[0];
	const otherGames = games.filter((game) => game.id !== featuredGame?.id).slice(0, 3);
	return `<section class="hero-section">
		<div class="hero-copy"><span class="eyebrow"><span class="eyebrow-dot"></span> APRENDER PODE SER UMA AVENTURA</span>
			<h1>Curiosidade<br />que vira <em>conquista.</em></h1>
			<p>Jogos que transformam cada descoberta em uma nova fase. Escolha um tema e comece a explorar.</p>
			<a class="button-primary" href="#/jogos">Explorar os jogos <span aria-hidden="true">↗</span></a>
			<div class="hero-proof"><span class="proof-icons" aria-hidden="true">✦ ◉ ▲</span><span>Conhecimento em movimento</span></div>
		</div>
		<div class="hero-visual" aria-label="Ilustração de um mundo de aprendizado">
			<div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div>
			<span class="floating-symbol symbol-star">✳</span><span class="floating-symbol symbol-plus">+</span>
			<div class="hero-world"><span class="world-sun"></span><span class="world-hill hill-back"></span><span class="world-hill hill-front"></span><span class="world-character">${featuredGame?.icon || '✦'}</span></div>
			<div class="visual-label"><span class="visual-label-icon">✦</span><span><b>Uma fase de cada vez</b><small>Explore no seu ritmo</small></span></div>
			<span class="visual-index">01 / 04</span>
		</div>
	</section>
	<section class="home-games section-wrap">
		<div class="section-heading"><div><span class="eyebrow">SEU PRÓXIMO DESAFIO</span><h2>Comece por aqui</h2></div><a class="text-link" href="#/jogos">Ver todos os jogos <span aria-hidden="true">→</span></a></div>
		<div class="game-grid">${featuredGame ? renderGameCard(featuredGame, favorites) : '<p class="empty-state">Estamos preparando novos jogos.</p>'}${otherGames.map((game) => renderGameCard(game, favorites)).join('')}</div>
	</section>`;
}
