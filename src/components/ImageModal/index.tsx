import Modal from "react-modal";
import css from "./style.module.css";

interface Photo {
  largeImageURL: string;
  tags: string;
  user: string;
  likes: number;
}

interface ImageModalProps {
  photo: Photo | null;
  onClose: () => void;
}

Modal.setAppElement("#root");

function ImageModal({ photo, onClose }: ImageModalProps) {
  if (!photo) return null;

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose} 
      shouldCloseOnOverlayClick={true} 
      shouldCloseOnEsc={true}
      overlayClassName={css.overlay}
      className={css.modal}
      closeTimeoutMS={200}
    >
      <img src={photo.largeImageURL} alt={photo.tags} className={css.image} />
    </Modal>
  );
}

export default ImageModal;
