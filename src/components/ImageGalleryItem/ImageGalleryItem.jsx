import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ pictures, toggleModal }) => {
  return (
    <>
      {pictures &&
        pictures.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <li key={id} className={css.imageGalleryItem}>
              <img
                className={css.imageGalleryItemImage}
                src={webformatURL}
                alt=""
                onClick={() => toggleModal(largeImageURL)}
              />
            </li>
          );
        })}
    </>
  );
};

ImageGalleryItem.prototype = {
  pictures: PropTypes.exact(
    PropTypes.objectOf({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
