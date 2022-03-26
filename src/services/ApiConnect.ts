import axios from "axios";
const apiUrl = "https://api.themoviedb.org/3/";
export const apiKey = process.env.apiKey;
// const requestURL = `https://api.themoviedb.org/3/trending/day?api_key=b6099557b06d992c34b3851b02a36032&language=en-US`;

export const getTrendingList = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=b6099557b06d992c34b3851b02a36032&language=en-US`
    )
    .then((response) => {
      // console.log(response);
      return response.data;
    });
};

export const getTopRatedList = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=b6099557b06d992c34b3851b02a36032&language=en-US&page=1`
    )
    .then((response) => {
      //   console.log(response);
      return response.data;
    });
};
