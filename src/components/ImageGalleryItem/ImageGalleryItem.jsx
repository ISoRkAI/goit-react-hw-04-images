import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ largeImageURL, webformatURL, toggleModal }) => {
  return (
    <>
      <li className={css.imageGalleryItem}>
        <img
          className={css.imageGalleryItemImage}
          src={webformatURL}
          alt=""
          onClick={() => toggleModal(largeImageURL)}
        />
      </li>
    </>
  );
};
ImageGalleryItem.prototype = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,

  onDeleteContact: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
