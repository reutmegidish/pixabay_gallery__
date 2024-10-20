import {
  initImagesData,
  initPageState,
  updateCurrentQueryState,
  updateSelectedTagState,
} from '../state.js'
import { initSearchInput, triggerFormBlink } from '../utils/searchUtils.js'
import { getElement, selectors } from '../utils/selectors.js'
import { handleSearch } from './handleSearch.js'

function handleSubmit(e) {
  e.preventDefault()
  const searchInput = getElement(selectors.searchInput)
  const tagSelect = getElement(selectors.tagSelect)

  let selectedTag = tagSelect.value
  let query = searchInput.value.trim()

  if (query || selectedTag) {
    updateCurrentQueryState(query)
    updateSelectedTagState(selectedTag)
    initPageState()
    initImagesData()
    handleSearch()
    initSearchInput()
  } else {
    triggerFormBlink()
  }
}

export default handleSubmit
