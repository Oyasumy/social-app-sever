var TypeQL = `
   type Post {
        id: ID!
        body: String!
        username: String!
        createdAt: String!
      }

    type User {
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }
`;

module.exports = TypeQL;
