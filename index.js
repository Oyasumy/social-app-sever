const { ApolloServer } = require("apollo-server");

const mongoose = require("mongoose");
const { MONGOOSE_CONNECT } = require("./config");

const typeDefs = require("./graphql/typeDefs/index");
const resolvers = require("./graphql/resolvers/index");


const sever = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGOOSE_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongodb connected . . .");
    sever.listen({ port: 5000 });
  })
  .then(() => console.log(`sever listening`))
  .catch((er) => console.error(er));
