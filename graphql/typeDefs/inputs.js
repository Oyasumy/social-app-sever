var InputQL = `
    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    input LoginInput {
        password: String!
        email: String!
    }
`;

module.exports = InputQL;
