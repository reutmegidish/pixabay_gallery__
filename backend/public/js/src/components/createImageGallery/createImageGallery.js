import handleModal from '../../handlers/handleModal.js'
import { state } from '../../state.js'
import {
  addFavoriteListeners,
  clearImageContainer,
  handleNoImages,
  renderHeadingText,
  renderImages,
  toggleButtons,
} from '../../utils/createImageGalleryUtils.js'

function createImageGallery(images) {
  const isFavorites = state.isFavorites

  clearImageContainer()
  renderHeadingText()
  toggleButtons(isFavorites)
  if (handleNoImages(images)) return
  renderImages(images)
  handleModal(images)
  addFavoriteListeners(images)
}

export default createImageGallery
