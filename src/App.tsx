import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import { Toaster } from "react-hot-toast";
import { fetchPhotosByQuery } from "./api/unsplashApi";
import Loader from "./components/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage";
import ImageModal from "./components/ImageModal";

interface Photo {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  user: string;
  likes: number;
}

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [totalHits, setTotalHits] = useState(0);

  const handleSearch = async (newQuery: string) => {
    if (newQuery === query) return;
    setLoading(true);
    setError(null);
    setPage(1);

    try {
      const data = await fetchPhotosByQuery(newQuery, 1);
      setPhotos(data.hits as Photo[]);
      setTotalHits(data.totalHits);
      setQuery(newQuery);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch photos. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setLoading(true);
    setError(null);
    const nextPage = page + 1;

    try {
      const data = await fetchPhotosByQuery(query, nextPage);
      setPhotos((prev: Photo[]) => [...prev, ...(data.hits as Photo[])]);
      setPage(nextPage);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch more photos.");
    } finally {
      setLoading(false);
    }
  };

  const openModal = (photo: Photo) => setSelectedPhoto(photo);
  const closeModal = () => setSelectedPhoto(null);

  const canLoadMore = photos.length < totalHits;

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery photos={photos} onPhotoClick={openModal} />
      {loading && <Loader />}
      {photos.length > 0 && !loading && canLoadMore && (
        <LoadMoreBtn onClick={loadMore} />
      )}
      {selectedPhoto && (
        <ImageModal photo={selectedPhoto} onClose={closeModal} />
      )}
      <Toaster position="top-right" />
    </>
  );
}

export default App;
