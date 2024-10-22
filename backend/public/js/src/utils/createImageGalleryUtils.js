import generateImgCardUI from '../components/createImageGallery/generateImgCardUI.js'
import { state } from '../state.js'
import { getFavoritesFromLocalStorage } from './localStorageUtils.js'
import { getElement, selectors } from './selectors.js'
import handleAddToFavorites from '../handlers/handleAddToFavorites.js'
import handleBackButton from '../handlers/handleBackButton.js'
import handleMoreImages from '../handlers/handleMoreImages.js'

export function clearImageContainer() {
  const cardsContainer = getElement(selectors.cardsContainer)
  cardsContainer.innerHTML = ''
}

export function renderHeadingText() {
  const mainHeading = getElement(selectors.mainHeading)
  const { currentQuery, selectedTag, isFavorites } = state
  const searchPrefix = 'Search Results'
  const queryHeading = `${searchPrefix} for '${currentQuery}':`
  const tagHeading = `${searchPrefix} for '${selectedTag}' category:`
  const queryAndTagHeading = `${searchPrefix} for '${currentQuery}' in the '${selectedTag}' category:`
  const randomHeading = `Random ${searchPrefix}:`

  if (isFavorites) {
    mainHeading.textContent = 'Favorites'
  } else if (selectedTag && currentQuery) {
    mainHeading.textContent = queryAndTagHeading
  } else if (selectedTag) {
    mainHeading.textContent = tagHeading
  } else if (currentQuery) {
    mainHeading.textContent = queryHeading
  } else {
    mainHeading.textContent = randomHeading
  }
}

export function hideMoreImgBtnShowBackBtn() {
  const moreImgBtn = getElement(selectors.moreImgBtn)
  const backButton = getElement(selectors.backButton)

  moreImgBtn.classList.add('hidden')
  backButton.classList.remove('hidden')
  backButton.addEventListener('click', handleBackButton)
}

export function showMoreImgBtnHideBackBtn() {
  const moreImgBtn = getElement(selectors.moreImgBtn)
  const backButton = getElement(selectors.backButton)

  backButton.classList.add('hidden')
  moreImgBtn.classList.remove('hidden')
  moreImgBtn.addEventListener('click', handleMoreImages)
}

export function handleNoImages(images) {
  const moreImgBtn = getElement(selectors.moreImgBtn)
  const cardsContainer = getElement(selectors.cardsContainer)

  if (images.length === 0) {
    cardsContainer.innerHTML = '<p>No images found.</p>'
    moreImgBtn.classList.add('hidden')
    return true
  }
  return false
}

export function renderImages(images) {
  const cardsContainer = getElement(selectors.cardsContainer)
  cardsContainer.innerHTML = images
    .map((image) => generateImgCardUI(image))
    .join('')
}

export function addFavoriteListeners(images) {
  const buttons = document.querySelectorAll(selectors.favoriteBtn)
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => handleAddToFavorites(e, images))
  })
}

export function toggleButtons(isFavorites) {
  if (isFavorites) {
    hideMoreImgBtnShowBackBtn()
  } else {
    showMoreImgBtnHideBackBtn()
  }
}

export function isImageFavorited(imageId) {
  const favorites = getFavoritesFromLocalStorage()
  return favorites.some((image) => image.id === imageId)
}
