import createImageCard from '../components/createImageCard/createImageCard.js'
import { state } from '../state.js'
import { selectors, getElement } from '../../src/utils/selectors.js'

const cardsContainer = getElement(selectors.cardsContainer)
const moreImgBtn = getElement(selectors.moreImgBtn)

const getFavoritesFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('favorites')) || []
}

function handleFavoriteBtn() {
  const savedFavorites = getFavoritesFromLocalStorage()

  if (savedFavorites.length === 0) {
    cardsContainer.innerHTML = '<p>No favorite images found.</p>'
    return
  }

  cardsContainer.innerHTML = ''
  state.currentQuery = ''

  createImageCard(savedFavorites, 'Favorite Images')

  moreImgBtn.classList.add('hidden')

  document.querySelectorAll(selectors.favoriteBtn).forEach((button) => {
    button.addEventListener('click', handleFavoriteBtn)
  })
}
export default handleFavoriteBtn
