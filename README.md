# JogaSaber

Plataforma estática de jogos educativos. A aplicação não precisa de backend, framework ou etapa de build: usa HTML, CSS e módulos JavaScript nativos.

## Arquitetura

- `index.html`: documento inicial e carregamento dos estilos e da aplicação.
- `src/data/`: catálogo e dados estáticos dos jogos.
- `src/services/`: busca, filtros e favoritos persistidos no navegador.
- `src/components/`: elementos reutilizáveis da interface.
- `src/components/pages/`: conteúdo de cada tela.
- `src/styles/`: estilos globais, layout, componentes e responsividade.
- `src/main.js`: inicialização, rotas por hash e eventos da interface.
- `public/game/`: arquivos independentes dos jogos publicados.

## Executar

Abra a pasta `777_games` com uma extensão de servidor estático, como Live Server no VS Code, e acesse o endereço local indicado pela extensão. Servir a pasta por HTTP evita restrições do navegador ao carregar módulos JavaScript com `file://`. Não há API ou banco de dados.

## Adicionar um jogo

1. Coloque os arquivos do jogo em uma pasta própria dentro de `public/game/`.
2. Adicione um objeto ao catálogo em `src/data/games.js`, com um `id` único, descrição, categoria, ícone, tema e caminho `href` para o HTML do jogo.
3. Use uma categoria existente ou inclua a nova em `categories`, no mesmo arquivo.

Busca, filtros, detalhes e favoritos são alimentados pelo catálogo; os favoritos ficam no `localStorage` do navegador atual.