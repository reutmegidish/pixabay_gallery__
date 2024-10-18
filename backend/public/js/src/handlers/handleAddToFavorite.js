function handleAddToFavorite(e, images) {
  const button = e.currentTarget
  const imageId = Number(button.getAttribute('data-id'))

  let favorites = JSON.parse(localStorage.getItem('favorites')) || []

  const image = images.find((img) => img.id === imageId)

  if (!image) {
    console.error('Image not found in the provided images array.')
    return
  }

  const imageIndex = favorites.findIndex((fav) => fav.id === imageId)

  if (imageIndex > -1) {
    favorites.splice(imageIndex, 1)
    button.classList.remove('favorited')
  } else {
    favorites.push({
      id: image.id,
      tags: image.tags,
      previewURL: image.previewURL,
      webformatURL: image.webformatURL,
      pageURL: image.pageURL,
    })
    button.classList.add('favorited')
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
}

export default handleAddToFavorite
