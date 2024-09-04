import handleModal from '../../handlers/handleModal.js'
import { getPageState, state } from '../../state.js'
import generateImgCardUI from './generateImgCardUI.js'
import handleMoreImages from '../../handlers/handleMoreImages.js'
import handleAddToFavorite from '../../handlers/handleAddToFavorite.js'

function createImageCard(
  images = state.imagesData,
  headingText = 'Search Results'
) {
  const page = getPageState()
  const imagesContainer = document.querySelector('.cards-container')
  const moreImgBtn = document.querySelector('.more-img-btn')
  const resultsHeading = document.getElementById('results-heading')

  resultsHeading.textContent = state.currentQuery
    ? `${headingText} for '${state.currentQuery}'`
    : headingText

  imagesContainer.innerHTML = ''

  if (images.length === 0) {
    if (page === 1) {
      imagesContainer.innerHTML = '<p>No images found.</p>'
    } else {
      imagesContainer.insertAdjacentHTML(
        'beforeend',
        '<p>No more images available.</p>'
      )
    }

    moreImgBtn.classList.add('hidden')
    return
  }

  const imagesCards = images.map((image) => generateImgCardUI(image)).join('')

  if (page === 1) {
    imagesContainer.insertAdjacentHTML('afterbegin', imagesCards)
  } else {
    imagesContainer.insertAdjacentHTML('beforeend', imagesCards)
  }

  moreImgBtn.classList.remove('hidden')
  moreImgBtn.addEventListener('click', handleMoreImages)

  handleModal(images)

  document.querySelectorAll('.favorite-btn').forEach((button) => {
    button.addEventListener('click', (e) => handleAddToFavorite(e, images))
  })
}

export default createImageCard
