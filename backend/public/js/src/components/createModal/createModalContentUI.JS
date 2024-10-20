function createModalContentUI(image) {
  return `
  <div class="card-modal-image-container">
    <img
      src="${image.webformatURL}"
      alt="${image.tags}"
      class="card-modal-image"
      data-id="${image.id}"
    />
    </div>
    <p><strong>Tag:</strong> ${image.tags}</p>
    <p><strong>Image ID:</strong> ${image.id}, <strong>Downloads:</strong> ${image.downloads}</p>
    <p><strong>Views:</strong> ${image.views}, <strong>Likes:</strong> ${image.likes}</p>
    <a href=${image.pageURL} target="_blank"><strong>Open image page on PIXABAY!</strong></a>
  `
}
export default createModalContentUI
