import { state } from '../state.js'
import {
  findImageByIdInImages,
  toggleFavoriteImage,
} from '../utils/handleAddToFavoritesUtils.js'
import handleFavoritesBtn from './handleFavoritesBtn.js'

function handleAddToFavorites(e, images) {
  const button = e.currentTarget
  const imageId = Number(button.getAttribute('data-id'))
  const image = findImageByIdInImages(images, imageId)
  const isFavorite = state.isFavorites
  if (!image) {
    console.error('Image not found in the provided images array.')
    return
  }

  toggleFavoriteImage(image, imageId, button)
  if (isFavorite) handleFavoritesBtn()
}

export default handleAddToFavorites
