const AuthServices = require("../services/auth.service");
const transporter = require("../utils/mailer");

const register = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await AuthServices.register(newUser);
    if (result) {
      res.status(201).json({ message: "User registered successfully!" });
      await transporter.sendMail({
        from: "oscarardila96@gmail.com",
        to: result.email,
        subject: "Sucessfull registration",
        html: "<h1>You have registered successfully!</h1> <p>Tienes que confirmar tu email</p><p>Solo haz click en el <a href='#' target='new blank'>enlace </a>"
      });
    } else {
      next({ message: "Something went wrong" });
    }
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      next({ error: "Missing information", message: "Email not provided" });
    }
    if (!password) {
      next({ error: "Missing information", message: "Password not provided" });
    }
    const result = await AuthServices.login({ email, password });
    if (result.isValid) {
      const { username, id, email } = result.user;
      const userData = { username, email, id };
      const token = await AuthServices.genToken(userData);
      userData.token = token;
      res.json(userData);
    } else {
      next({ message: "User not found" });
    }
  } catch (error) {
    next({ message: "Something went wrong" });
  }
};

module.exports = { register, login };