import createImageGallery from '../components/createImageGallery/createImageGallery.js'
import { isFavorites, state } from '../state.js'

function handleBackButton() {
  isFavorites(false)
  createImageGallery(state.imagesData)
}
export default handleBackButton
