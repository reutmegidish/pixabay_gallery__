import { getFavoritesFromLocalStorage } from '../utils/localStorageUtils.js'
import createImageGallery from '../components/createImageGallery/createImageGallery.js'
import { isFavorites, state } from '../state.js'

function handleFavoritesBtn() {
  state.savedFavorites = getFavoritesFromLocalStorage()

  isFavorites(true)
  createImageGallery(state.savedFavorites)
}

export default handleFavoritesBtn
