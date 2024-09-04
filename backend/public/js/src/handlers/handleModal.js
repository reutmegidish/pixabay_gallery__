import createModalContentUI from '../components/createModal/createModalContentUI.JS'

function handleModal(images) {
  const modal = document.querySelector('.modal')
  const overlay = document.querySelector('.overlay')
  const btnCloseModal = document.querySelector('.close-modal')
  const imagesContainer = document.querySelector('.cards-container')
  const modalContent = document.querySelector('.modal-content')

  const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
  }

  const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')

    modalContent.innerHTML = ''
  }

  imagesContainer.querySelectorAll('.card-image').forEach((card) => {
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
