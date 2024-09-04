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
  `
}
export default createModalContentUI
