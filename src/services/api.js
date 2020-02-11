import axios from 'axios';

export const filmApi = () =>
  axios.create({
    baseURL:
      'https://api.themoviedb.org/3/search/movie?api_key=6e09219c6174d28a7f04d7d8467efd6f&language=en-US&include_adult=false',
    timeout: 120000,
  });

export const mapApi = location =>
  axios.create({
    baseURL: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=cinema%20theaters%20in&key=AIzaSyA4EqCSNTYOo287BeAkT4hIKfHlWFEZeXw&location=${location}`,
    timeout: 120000,
  });

export const mapDetailApi = id =>
  axios.create({
    baseURL: `https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyA4EqCSNTYOo287BeAkT4hIKfHlWFEZeXw&place_id=${id}`,
    timeout: 120000,
  });
