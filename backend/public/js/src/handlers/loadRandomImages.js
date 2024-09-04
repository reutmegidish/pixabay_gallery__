import { state } from '../state.js'
import { handleSearch } from './handleSearch.js'

export async function loadRandomImages() {
  state.currentPage = 1
  handleSearch()
}
