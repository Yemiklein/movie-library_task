import axios from "axios";
import { Movie, MovieDetails } from "../../types/movie";

const API_KEY = "da93b27d3d525687d0bbd9ae4d588e85";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async (): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}/movie`, {
    params: { api_key: API_KEY },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};
