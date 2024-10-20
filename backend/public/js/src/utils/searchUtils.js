import { getElement, selectors } from './selectors.js'

export function initSearchInput() {
  const searchInput = getElement(selectors.searchInput)
  const tagSelect = getElement(selectors.tagSelect)

  searchInput.value = ''
  tagSelect.value = ''
}

export function triggerFormBlink() {
  const searchForm = getElement(selectors.searchForm)

  searchForm.classList.add('blink-border')
  setTimeout(() => {
    searchForm.classList.remove('blink-border')
  }, 2000)
}
