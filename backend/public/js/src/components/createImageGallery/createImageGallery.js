import handleModal from '../../handlers/handleModal.js'
import { state } from '../../state.js'
import {
  addFavoriteListeners,
  clearImageContainer,
  handleNoImages,
  hideMoreImgBtnShowBackBtn,
  renderHeadingText,
  renderImages,
  showMoreImgBtnHideBackBtn,
} from '../../utils/domUtils.js'

function createImageGallery(images) {
  const isFavorites = state.isFavorites

  clearImageContainer()
  renderHeadingText()

  if (isFavorites) {
    hideMoreImgBtnShowBackBtn()
    addFavoriteListeners()
  } else {
    showMoreImgBtnHideBackBtn()
  }

  if (handleNoImages(images)) return

  renderImages(images)
  handleModal(images)
  addFavoriteListeners(images)
}

export default createImageGallery
