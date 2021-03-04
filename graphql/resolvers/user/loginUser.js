const { UserInputError } = require("apollo-server");
const generateToken = require("../../../commons/generateToken");
const User = require("../../../Model/User");
const { Validation } = require("../../../utils/validation/validations");
const bcrypt = require("bcryptjs");

const loginUser = async (email, password) => {
  // Validate user data
  Validation.checkLoginUserValidation(email, password);

  //   Check exist data
  const user = await User.findOne({ email });
  if (!user) {
    throw new UserInputError("User not found!");
  }

  //   Compare Password
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new UserInputError("Wrong credentials!");
  }

  const token = generateToken(user);

  return {
    ...user._doc,
    id: user.id,
    token,
  };
};

module.exports = loginUser;
