const bcrypt = require("bcryptjs");
const User = require("../../../Model/User");

const { SECRET_KEY } = require("../../../config");
const { UserInputError } = require("apollo-server");
const { Validation } = require("../../../utils/validation/validations");
const generateToken = require("../../../commons/generateToken");

const register = async (username, password, confirmPassword, email) => {
  // Validate user data
  Validation.checkUserValidation(username, password, confirmPassword, email);

  // Make sure user doesn't already exist
  const user = await User.findOne({ username });
  if (user) {
    throw new UserInputError("User is taken", {
      error: {
        username: "This username is taken",
      },
    });
  }

  // Hash password and create an auth token
  password = await bcrypt.hash(password, 12);

  const newUser = new User({
    username,
    email,
    password,
    createdAt: new Date().toISOString(),
  });

  // Add user into DB
  const res = await newUser.save();

  // Return Token
  const token = generateToken(res)

  return {
    ...res._doc,
    id: res.id,
    token,
  };
};

module.exports = register;
