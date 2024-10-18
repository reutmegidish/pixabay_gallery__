import {
  initImagesData,
  initPageState,
  updateCurrentQueryState,
  updateSelectedTagState,
} from '../state.js'
import { getElement, selectors } from '../utils/selectors.js'
import { handleSearch } from './handleSearch.js'

function handleSubmit(e) {
  e.preventDefault()

  const searchInput = getElement(selectors.searchInput)
  const tagSelect = getElement(selectors.tagSelect)
  const searchForm = getElement(selectors.searchForm)

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
    searchForm.classList.add('blink-border')

    setTimeout(() => {
      searchForm.classList.remove('blink-border')
    }, 2000)
  }
}

export default handleSubmit
