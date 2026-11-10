const STORAGE_KEY = 'jogasaber:favorites';

export function getFavorites() {
  try {
    const value = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export function toggleFavorite(gameId) {
  const favorites = getFavorites();
  const nextFavorites = favorites.includes(gameId)
    ? favorites.filter((id) => id !== gameId)
    : [...favorites, gameId];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextFavorites));
  return nextFavorites;
}