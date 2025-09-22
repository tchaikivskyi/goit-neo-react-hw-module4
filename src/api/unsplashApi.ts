// import axios from "axios";

// const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

// export const unsplash = axios.create({
//   baseURL: "https://api.unsplash.com",
//   headers: {
//     Authorization: `Client-ID ${ACCESS_KEY}`,
//   },
// });

// export const searchPhotosByQuery = async (query: string, page = 1) => {
//   const response = await unsplash.get("/search/photos", {
//     params: { query, page,  per_page: 12 },
//   });
//   return response.data; 
// };

import axios from "axios";

export const fetchPhotosByQuery = async (
  searchedQuery,
  page = 1,
  per_page = 15
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
  } catch (error) {
    throw new Error(
      `HTTP error! ${error.response?.status || ""} ${error.message}`
    );
  }
};