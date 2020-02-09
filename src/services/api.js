import axios from 'axios';

const api = () =>
  axios.create({
    baseURL:
      'https://api.themoviedb.org/3/search/movie?api_key=6e09219c6174d28a7f04d7d8467efd6f&language=en-US&include_adult=false',
    timeout: 120000,
  });

export default api;
