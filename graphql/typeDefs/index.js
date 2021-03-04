const gql = require("graphql-tag");
const  InputQL  = require("./inputs");
const TypeQL= require("./types");

module.exports = gql`
  ${TypeQL}

  ${InputQL}

  type Query {
    getPosts: [Post]
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(loginInput:LoginInput):User!
  }
`;
