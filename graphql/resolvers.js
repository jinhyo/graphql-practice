const { getMovies, getMovieById, addMovie, deleteMovie } = require("./db");

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getMovieById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

module.exports = resolvers;
