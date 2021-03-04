const postResolvers = require("./posts");
const userResolvers = require("./user/users");

module.exports = {
  Query: {
    ...postResolvers.Query,
    ...userResolvers.Query,
  },
  Mutation:{
    ...userResolvers.Mutation
  }
};
