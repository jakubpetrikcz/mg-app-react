import axios from "axios";
const apiUrl = "https://api.themoviedb.org/3";
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

export const getTrendingList = async () => {
  const response = await axios
    .get(`${apiUrl}/trending/movie/day?api_key=${apiKey}&language=en-US`);
  return response.data;
};

export const getTopRatedList = async () => {
  const response = await axios
    .get(`${apiUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
  return response.data;
};

export const getPopularList = async (page: number) => {
  const response = await axios
    .get(
      `${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
    );
  return response.data;
};

export const getMovieDetailList = async (id: string) => {
  const response = await axios
    .get(
      `${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US
  `
    );
  return response.data;
};

export const getCreditsList = async (id: string) => {
  const response = await axios
    .get(`${apiUrl}/movie/${id}/credits?api_key=${apiKey}&language=en-US`);
  return response.data;
};

export const getDiscoverList = async (page: number) => {
  const response = await axios
    .get(
      `${apiUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=${page}`
    );
  return response.data;
};

export const getSearchList = async (page: number, query: string) => {
  const response = await axios
    .get(
      `${apiUrl}/search/movie?api_key=${apiKey}&language=en-US&page=${page}&query=${query}
  `
    );
  return response.data;
};
