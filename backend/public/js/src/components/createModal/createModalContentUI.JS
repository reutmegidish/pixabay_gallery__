function createModalContentUI(image) {
  return `
    <img
      src="${image.webformatURL}"
      alt="${image.tags}"
      class="card-modal-image"
      data-id="${image.id}"
    />
    <p><strong>Tag:</strong> ${image.tags}</p>
    <p><strong>Image ID:</strong> ${image.id}</p>
    <a href=${image.pageURL} target="_blank"><strong>Open image page on PIXABAY!</strong></a>
  `
}
export default createModalContentUI
