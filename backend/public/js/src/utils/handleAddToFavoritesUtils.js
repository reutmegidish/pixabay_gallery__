import { getFavoritesFromLocalStorage } from './localStorageUtils.js'

export function findImageByIdInImages(images, imageId) {
  return images.find((img) => img.id === imageId)
}

export function findFavoriteImageIndexById(favorites, imageId) {
  return favorites.findIndex((fav) => fav.id === imageId)
}

export function toggleFavoriteImage(image, imageId, button) {
  const favorites = getFavoritesFromLocalStorage()
  const imageIndex = findFavoriteImageIndexById(favorites, imageId)
  const isFavorite = imageIndex > -1

  if (isFavorite) {
    removeFavotites(favorites, imageIndex, button)
  } else {
    addFavorite(favorites, button, image)
  }
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

export function removeFavotites(favorites, imageIndex, button) {
  favorites.splice(imageIndex, 1)
  button.classList.remove('favorited')
}

export function addFavorite(favorites, button, image) {
  favorites.push({
    id: image.id,
    tags: image.tags,
    previewURL: image.previewURL,
    webformatURL: image.webformatURL,
    pageURL: image.pageURL,
  })
  button.classList.add('favorited')
}
