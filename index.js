const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./REST-api/resolvers");

const server = new GraphQLServer({
  typeDefs: "REST-api/schema.graphql",
  resolvers,
});
server.start(() => console.log("Server is running on localhost:4000"));
