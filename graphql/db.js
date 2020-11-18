let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 1,
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8,
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 99,
  },
  {
    id: 3,
    name: "Logan",
    score: 2,
  },
];

const getMovies = () => movies;
const getMovieById = (id) => movies.find((movie) => movie.id === id);
const addMovie = (name, score) => {
  movies.push({
    id: movies.length,
    name,
    score,
  });

  return movies[movies.length - 1];
};

const deleteMovie = (id) => {
  const cleanedMoive = movies.filter((movie) => movie.id !== id);
  if (cleanedMoive.length < movies.length) {
    movies = cleanedMoive;
    return true;
  } else {
    return false;
  }
};

module.exports = {
  movies,
  getMovies,
  getMovieById,
  addMovie,
  deleteMovie,
};
