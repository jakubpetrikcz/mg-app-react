import axios from "axios";
const apiUrl = "https://api.themoviedb.org/3";
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

export const getTrendingList = () => {
  return axios
    .get(`${apiUrl}/trending/movie/day?api_key=${apiKey}&language=en-US`)
    .then((response) => {
      // console.log(response);
      return response.data;
    });
};

export const getTopRatedList = () => {
  return axios
    .get(`${apiUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    .then((response) => {
      //   console.log(response);
      return response.data;
    });
};

export const getPopularList = (page: number) => {
  return axios
    .get(
      `${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
    )
    .then((response) => {
      //console.log(response);
      return response.data;
    });
};

export const getMovieDetailList = (id: string) => {
  return axios
    .get(
      `${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US
  `
    )
    .then((response) => {
      return response.data;
    });
};

export const getCreditsList = (id: string) => {
  return axios
    .get(`${apiUrl}/movie/${id}/credits?api_key=${apiKey}&language=en-US`)
    .then((response) => {
      return response.data;
    });
};

export const getDiscoverList = (page: number) => {
  return axios
    .get(
      `${apiUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=${page}`
    )
    .then((response) => {
      return response.data;
    });
};

export const getSearchList = (page: number, query: string) => {
  return axios
    .get(
      `${apiUrl}/search/movie?api_key=${apiKey}&language=en-US&page=${page}&query=${query}
  `
    )
    .then((response) => {
      return response.data;
    });
};
