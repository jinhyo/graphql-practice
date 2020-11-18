const { jin, people, getPersonById } = require("./db");

const resolvers = {
  Query: {
    name: () => "hi Jin",
    jin: () => jin,
    people: () => people,
    person: (_, { id }) => getPersonById(id),
  },
};

module.exports = resolvers;
