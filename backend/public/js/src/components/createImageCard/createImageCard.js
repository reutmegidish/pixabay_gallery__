import handleModal from '../../handlers/handleModal.js'
import { getPageState, state } from '../../state.js'
import generateImgCardUI from './generateImgCardUI.js'
import handleMoreImages from '../../handlers/handleMoreImages.js'
import handleAddToFavorite from '../../handlers/handleAddToFavorite.js'
import { getElement, selectors } from '../../utils/selectors.js'

function createImageCard(
  images = state.imagesData,
  headingText = 'Search Results'
) {
  const page = getPageState()

  const cardsContainer = getElement(selectors.cardsContainer)
  const moreImgBtn = getElement(selectors.moreImgBtn)
  const resultsHeading = getElement(selectors.resultsHeading)

  resultsHeading.textContent = state.currentQuery
    ? `${headingText} for '${state.currentQuery}'`
    : headingText

  cardsContainer.innerHTML = ''

  if (images.length === 0) {
    if (page === 1) {
      cardsContainer.innerHTML = '<p>No images found.</p>'
    } else {
      cardsContainer.insertAdjacentHTML(
        'beforeend',
        '<p>No more images available.</p>'
      )
    }

    moreImgBtn.classList.add('hidden')
    return
  }

  const imagesCards = images.map((image) => generateImgCardUI(image)).join('')

  if (page === 1) {
    cardsContainer.insertAdjacentHTML('afterbegin', imagesCards)
  } else {
    cardsContainer.insertAdjacentHTML('beforeend', imagesCards)
  }

  moreImgBtn.classList.remove('hidden')
  moreImgBtn.addEventListener('click', handleMoreImages)

  handleModal(images)

  document.querySelectorAll(selectors.favoriteBtn).forEach((button) => {
    button.addEventListener('click', (e) => handleAddToFavorite(e, images))
  })
}

export default createImageCard
