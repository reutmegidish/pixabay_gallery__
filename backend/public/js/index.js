import handleSubmit from './src/handlers/handleSubmit.js'
import createTags from './src/components/createTags/createTags.js'
import handleFavoritesBtn from './src/handlers/handleFavoritesBtn.js'
import { loadRandomImages } from './src/handlers/loadRandomImages.js'
import { getElement, selectors } from './src/utils/selectors.js'

const initializeApp = () => {
  const searchForm = getElement(selectors.searchForm)
  const favoritesButton = getElement(selectors.favoritesButton)
  const tagSelect = getElement(selectors.tagSelect)

  searchForm.addEventListener('submit', handleSubmit)
  favoritesButton.addEventListener('click', handleFavoritesBtn)

  createTags(tagSelect)
  loadRandomImages()
}

document.addEventListener('DOMContentLoaded', initializeApp)
