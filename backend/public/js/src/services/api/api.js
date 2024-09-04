import {
  getCurrentQuery,
  getPageState,
  getSelectedTag,
  state,
} from '../../state.js'

export const fetchImages = async function (perPage = 20) {
  const query = getCurrentQuery()
  const currentPage = getPageState()
  const tag = getSelectedTag()

  const url = `/api/search?q=${encodeURIComponent(
    query
  )}&page=${currentPage}&perPage=${perPage}&category=${tag}`

  try {
    const res = await fetch(url)

    if (!res.ok) {
      const errorText = await res.text()
      throw new Error(`Error fetching data: ${errorText}`)
    }

    const result = await res.json()

    if (!result.hits || result.hits.length === 0) {
      return []
    }

    const images = result.hits.map(
      ({ id, tags, previewURL, webformatURL }) => ({
        id,
        tags,
        previewURL,
        webformatURL,
      })
    )

    return images
  } catch (err) {
    console.error('Error fetching images:', err)
    throw err
  }
}
