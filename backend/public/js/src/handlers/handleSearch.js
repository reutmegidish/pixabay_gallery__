import createImageCard from '../components/createImageCard/createImageCard.js'
import { fetchImages } from '../services/api/api.js'
import { state } from '../state.js'

export async function handleSearch() {
  try {
    const images = await fetchImages()
    if (images.length > 0) {
      state.imagesData = [...state.imagesData, ...images]
    }
    createImageCard(undefined, 'Search Results')
  } catch (error) {
    console.error('An error occurred:', error.message)
  }
}
