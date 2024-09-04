import handleSubmit from './src/handlers/handleSubmit.js'
import createTags from './src/components/createTags/createTags.js'
import handleFavoriteBtn from './src/handlers/handleFavoriteBtn.js'
import { loadRandomImages } from './src/handlers/loadRandomImages.js'

const initializeApp = () => {
  const searchForm = document.getElementById('search-form')
  const favoritesButton = document.getElementById('favorites-button')
  const tagSelect = document.querySelector('.tag-select')

  searchForm.addEventListener('submit', handleSubmit)
  favoritesButton.addEventListener('click', handleFavoriteBtn)

  createTags(tagSelect)

  loadRandomImages()
}

document.addEventListener('DOMContentLoaded', initializeApp)
