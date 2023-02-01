const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  let { authorization: token } = req.headers;
  token = token.replace("Bearer ", "");
  console.log(token);
  if (token) {
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      { algorithms: "HS512" },
      (err, decoded) => {
        if (err) {
          res.status(498).json({ error: "Invalid token", message: "Your token is not valid, please send a valid token" });
        } else {
          console.log(decoded);
          next();
        }
      })
  } else {
    res.status(400).json({ error: "No token provided", message: "No authentication token was provided" })
  }
};

module.exports = authMiddleware;