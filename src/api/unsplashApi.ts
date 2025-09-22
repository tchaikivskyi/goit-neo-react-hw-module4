import axios from "axios";

export const fetchPhotosByQuery = async (
  searchedQuery: string,
  page: number = 1,
  per_page: number = 15
) => {
  const requestParams = {
    key: import.meta.env.VITE_PIXABAY_API,
    image_type: "photo",
    per_page,
    page,
    safesearch: true,
    orientation: "horizontal",
    q: searchedQuery,
  };

  try {
    const response = await axios.get("https://pixabay.com/api/", {
      params: requestParams,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `HTTP error! ${error.response?.status || ""} ${error.message}`
      );
    } else {
      throw new Error(`Unexpected error: ${String(error)}`);
    }
  }
};
