import createModalContentUI from '../components/createModal/createModalContentUI.JS'
import { getElement, selectors } from '../utils/selectors.js'

function handleModal(images) {
  const modal = getElement(selectors.modal)
  const overlay = getElement(selectors.overlay)
  const btnCloseModal = getElement(selectors.btnCloseModal)
  const cardsContainer = getElement(selectors.cardsContainer)
  const modalContent = getElement(selectors.modalContent)

  const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
  }

  const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')

    modalContent.innerHTML = ''
  }

  cardsContainer.querySelectorAll(selectors.cardImage).forEach((card) => {
    card.addEventListener('click', (e) => {
      const cardId = e.currentTarget.getAttribute('data-id')
      const image = images.find((img) => img.id.toString() === cardId)

      modalContent.innerHTML = ''

      modalContent.insertAdjacentHTML('afterbegin', createModalContentUI(image))
      openModal()
    })
  })

  btnCloseModal.addEventListener('click', closeModal)
  overlay.addEventListener('click', closeModal)

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal()
    }
  })
}

export default handleModal
