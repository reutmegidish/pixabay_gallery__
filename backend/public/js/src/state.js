export const state = {
  currentPage: 0,
  currentQuery: '',
  selectedTag: '',
  imagesData: [],
}

export function initPageState() {
  state.currentPage = 1
}
export function initSelectedTag() {
  state.selectedTag = ''
}

export function initImagesData() {
  state.imagesData = []
}
export function incrementPageState() {
  state.currentPage += 1
}

export function updateCurrentQueryState(query) {
  state.currentQuery = query
}

export function updateSelectedTagState(tag) {
  state.selectedTag = tag
}

export function getPageState() {
  return state.currentPage
}

export function getCurrentQuery() {
  return state.currentQuery
}

export function getSelectedTag() {
  return state.selectedTag
}
