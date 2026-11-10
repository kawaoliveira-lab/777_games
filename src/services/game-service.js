export function getGameById(games, id) {
  return games.find((game) => game.id === id);
}

export function filterGames(games, search = '', category = 'Todos') {
  const query = search.trim().toLocaleLowerCase('pt-BR');
  return games.filter((game) => {
    const matchesCategory = category === 'Todos' || game.category === category;
    const searchableText = `${game.title} ${game.description} ${game.category} ${game.subject}`.toLocaleLowerCase('pt-BR');
    return matchesCategory && (!query || searchableText.includes(query));
  });
}