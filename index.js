require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const MONGOOSE = process.env.DATABASE_URL;
// Apollo Server
// typeDefs: GraphQL Type Definitions
// resolvers: How to perform queries/mutations

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

// Whitelist Endpoint using GraphQL API
const server = new ApolloServer({
  cors: {
    origin: ["https://studio.apollographql.com", "http://localhost:3000"],
    credentials: true,
  },
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
