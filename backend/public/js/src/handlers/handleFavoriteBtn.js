import createImageCard from '../components/createImageCard/createImageCard.js'
import { state } from '../state.js'

const cardsContainer = document.querySelector('.cards-container')
const moreImgBtn = document.querySelector('.more-img-btn')

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

  document.querySelectorAll('.favorite-btn').forEach((button) => {
    button.addEventListener('click', handleFavoriteBtn)
  })
}
export default handleFavoriteBtn
