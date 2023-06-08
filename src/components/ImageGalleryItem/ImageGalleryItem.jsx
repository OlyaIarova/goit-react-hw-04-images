import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import {
  ImageGalleryItemWrp,
  ImageGalleryItemImage,
} from "./ImageGalleryItem.styled.jsx";

const ImageItem = ({ image }) => {
  const [showModal, setShowModal] = useState(false); // стан модного вікна (відкрито або закрито)
  const { webformatURL, tags, largeImageURL } = image;

  // переключення стану модального вікна
  const handleToggleModal = () => {
     setShowModal(prevModal => !prevModal); 
  };

  return (
    <>
      <ImageGalleryItemWrp>
        <ImageGalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={handleToggleModal}
        />
      </ImageGalleryItemWrp>
      {showModal && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={handleToggleModal}
        />
      )}
    </>
  );
};

ImageItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageItem;

//  class ImageItem extends Component {
//    state = {
//      showModal: false,
//    };
//    handleToggleModal = () => {
//      this.setState(prevState => ({
//        showModal: !prevState.showModal,
//      }));
//    };
//    render() {
//      const { showModal } = this.state;
//      const { tags, webformatURL, largeImageURL } = this.props.image;
//      return (
//        <>
//          <ImageGalleryItemWrp>
//            <ImageGalleryItemImage
//              onClick={this.handleToggleModal}
//              src={webformatURL}
//              alt={tags}
//            />
//          </ImageGalleryItemWrp>
//          {showModal && (
//            <Modal
//              onClose={this.handleToggleModal}
//              largeImageURL={largeImageURL}
//            />
//          )}
//        </>
//      );
//    }
//  }

// ImageItem.propTypes = {
//   image: PropTypes.shape({
//     webformatURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
//   }).isRequired,
// };
// export default ImageItem;
