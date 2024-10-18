import { TAGS } from '../../utils/tags.js'

function createTags(selectElement) {
  TAGS.forEach((tag) => {
    const option = document.createElement('option')
    option.value = tag.value
    option.textContent = tag.label

    selectElement.appendChild(option)
  })
}
export default createTags
