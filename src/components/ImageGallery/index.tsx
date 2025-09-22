import css from "./style.module.css";
import ImageCard from "./ImageCard";

interface Photo {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  user: string;
  likes: number;
}

interface ImageGalleryProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

function ImageGallery({ photos, onPhotoClick }: ImageGalleryProps) {
  return (
    <ul className={css.list}>
      {photos.map((photo, index) => (
        <li key={`${photo.id}-${index}`}>
          <ImageCard photo={photo} onClick={() => onPhotoClick(photo)} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
