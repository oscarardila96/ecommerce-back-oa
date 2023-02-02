const { users, cart } = require("../models")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthServices {
  static async register(newUser) {
    try {
      const result = await users.create(newUser);
      if (result) {
        const { id } = result;
        await cart.create({ user_id: id });
      };
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async login(credentials) {
    try {
      const { email, password } = credentials;
      const user = await users.findOne({ where: { email } });
      if (user) {
        const isValid = bcrypt.compareSync(password, user.password);
        return isValid ? { isValid, user } : { isValid }
      }
      return { isValid: false };
    } catch (error) {
      throw error;
    }
  }
  static async genToken(data) {
    try {
      const token = jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: "1h",
        algorithm: "HS512"
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;