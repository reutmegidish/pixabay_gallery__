import {
  initImagesData,
  initPageState,
  updateCurrentQueryState,
  updateSelectedTagState,
} from '../state.js'
import { handleSearch } from './handleSearch.js'

function handleSubmit(e) {
  e.preventDefault()

  const searchInput = document.getElementById('search-input')
  const tagSelect = document.querySelector('.tag-select')
  const searchBox = document.querySelector('.search-box')

  let selectedTag = tagSelect.value
  let query = searchInput.value.trim()

  if (query || selectedTag) {
    updateCurrentQueryState(query)
    updateSelectedTagState(selectedTag)

    initPageState()
    initImagesData()

    handleSearch()

    searchInput.value = ''
    tagSelect.value = ''
  } else {
    searchBox.classList.add('blink-border')

    setTimeout(() => {
      searchBox.classList.remove('blink-border')
    }, 2000)
  }
}

export default handleSubmit
