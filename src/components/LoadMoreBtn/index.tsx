import css from "./style.module.css";

interface LoadMoreProps {
  onClick: () => void;
}

function LoadMoreBtn({ onClick }: LoadMoreProps) {
  return (
    <button className={css.loadMoreBtn} onClick={onClick}>
      Load More
    </button>
  );
}

export default LoadMoreBtn;
