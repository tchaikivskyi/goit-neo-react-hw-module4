import css from "./style.module.css";

interface Photo {
  webformatURL: string;
  tags: string;
}

interface ImageCardProps {
  photo: Photo;
  onClick: () => void;
}

function ImageCard({ photo, onClick }: ImageCardProps) {
  return (
    <div className={css.item} onClick={onClick}>
      <img src={photo.webformatURL} alt={photo.tags} />
    </div>
  );
}

export default ImageCard;
