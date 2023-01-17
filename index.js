require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const MONGOOSE = process.env.DATABASE_URL;
// Apollo Server
// typeDefs: GraphQL Type Definitions
// resolvers: How to perform queries/mutations

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGOOSE, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connection Success");
    return server.listen({ port: 4200 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
