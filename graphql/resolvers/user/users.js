const loginUser = require("./loginUser");
const registerUser = require("./registerUser");
module.exports = {
  Mutation: {
    register(_, { registerInput: { username, email, password, confirmPassword } }, context, info) {
      return registerUser(username, password, confirmPassword, email);
    },
    login(_, { loginInput: { email, password } }, context, info) {
      return loginUser(email, password);
    },
  },
};
