const fetch = require("node-fetch");

const API_URL = `https://yts.mx/api/v2/list_movies.json?`;

exports.getMovies = (limit, rating) => {
  let URL = API_URL;
  if (limit > 0) {
    URL += `limit=${limit}`;
  }
  if (rating > 0) {
    URL += `&minimum_rating=${rating}`;
  }

  const movies = fetch(`${URL}`)
    .then((res) => res.json())
    .then((json) => json.data.movies);

  return movies;
};
