function isImageFavorited(imageId) {
  let favorites = []

  try {
    const localStorageFavorites = localStorage.getItem('favorites')
    favorites = localStorageFavorites ? JSON.parse(localStorageFavorites) : []
  } catch (error) {
    console.error(`Local Storage error: ${error.message}`)
    favorites = []
  }

  return favorites.some((image) => image.id === imageId)
}

function generateImgCardUI(image) {
  const isFavorited = isImageFavorited(image.id)

  return `
      <div class="card">
      <img
        src="${image.webformatURL}"
        alt="${image.tags}"
        class="card-image"
        data-id="${image.id}"
      />
      <div class="card-content">
        <button
          class="favorite-btn ${isFavorited ? 'favorited' : ''}"
          data-id="${image.id}"
        >
          <i class="fas fa-heart"></i>
        </button>
      </div>
    </div>
    `
}

export default generateImgCardUI
