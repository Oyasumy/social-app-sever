const { UserInputError } = require("apollo-server");
const Joi = require("joi");

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  confirmPassword: Joi.ref("password"),

  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
});

const userLoginSchema = Joi.object({
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
});

// Check User Register
const checkUserValidation = ( username, password, confirmPassword, email ) => {
  try {
    const { error, value } = userSchema.validate({ username, password, confirmPassword, email });

    if (error) {
      throw new UserInputError("Data input is not approve", error);
    }

    return value;
  } catch (err) {
    throw new UserInputError("Data input is not approve", {
      error: {
        inputData: err,
      },
    });
  }
};

// Check User Login
const checkLoginUserValidation = ( email,password ) => {
  try {
    const { error, value } = userLoginSchema.validate({password, email });

    if (error) {
      throw new UserInputError("Data input is not approve", error);
    }

    return value;
  } catch (err) {
    throw new UserInputError("Data input is not approve", {
      error: {
        inputData: err,
      },
    });
  }
};

module.exports = {
  checkUserValidation,
  checkLoginUserValidation
};
