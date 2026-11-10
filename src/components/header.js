export function renderHeader(activePage, favoriteCount) {
	return `<header class="site-header">
		<a class="brand" href="#/inicio" aria-label="JogaSaber, início">
			<span class="brand-mark" aria-hidden="true">J</span><span>joga<span class="brand-accent">saber</span></span>
		</a>
		<nav class="main-nav" aria-label="Navegação principal">
			<a class="nav-link ${activePage === 'inicio' ? 'is-active' : ''}" href="#/inicio">Início</a>
			<a class="nav-link ${activePage === 'jogos' ? 'is-active' : ''}" href="#/jogos">Explorar jogos</a>
			<a class="nav-link ${activePage === 'favoritos' ? 'is-active' : ''}" href="#/favoritos">Favoritos <span class="nav-count">${favoriteCount}</span></a>
		</nav>
		<a class="header-cta" href="#/jogos">Encontrar um jogo <span aria-hidden="true">↗</span></a>
	</header>`;
}
