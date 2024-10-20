import createImageGallery from '../components/createImageGallery/createImageGallery.js'
import { fetchImages } from '../services/api/api.js'
import { isFavorites, state } from '../state.js'

export async function handleSearch() {
  try {
    const images = await fetchImages()
    isFavorites(false)

    if (images.length > 0) {
      state.imagesData = [...state.imagesData, ...images]
    }
    createImageGallery(state.imagesData)
  } catch (error) {
    console.error('An error occurred:', error.message)
  }
}
