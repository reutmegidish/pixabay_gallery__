export function getFavoritesFromLocalStorage() {
  try {
    const favorites = localStorage.getItem('favorites')
    return favorites ? JSON.parse(favorites) : []
  } catch (error) {
    console.error(`Error accessing LocalStorage: ${error}`)
    return []
  }
}
