import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const ADD_MOVIE = 'ADD_MOVIE';

export const getMovies = () => {
  // Add the code for this action
  const promise = axios.get('http://localhost:5000/movies');
  return {
      type: GET_MOVIES,
      payload: promise
  }
};

export const getMovie = (match) => {
  // Add the code for this action
  const promise = axios.get(`http://localhost:5000/movies/${match}`);
  return {
      type: GET_MOVIE,
      payload: promise
  }
};

export const addMovie = (movie) => {
  // Add the code for this action
  const promise = axios.post(`http://localhost:5000/movies/new-movie`, movie);
  return {
      type: ADD_MOVIE,
      payload: promise
  }
};