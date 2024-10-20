import { incrementPageState, state } from '../state.js'
import { handleSearch } from './handleSearch.js'

async function handleMoreImages() {
  incrementPageState()
  await handleSearch()
}

export default handleMoreImages
