import './index.css'

const ImageItems = props => {
  const {eachImagesList, onClickingThumbnail, imagesList} = props
  const {thumbnailUrl, id} = eachImagesList

  const onClickingThumbnailImage = () => {
    onClickingThumbnail(imagesList, id)
  }
  return (
    <li className="image-items-list-container">
      <button
        type="button"
        className="image-item-button"
        onClick={onClickingThumbnailImage}
      >
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image-style"
        />
      </button>
    </li>
  )
}

export default ImageItems
