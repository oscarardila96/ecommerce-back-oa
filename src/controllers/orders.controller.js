const OrdersServices = require("../services/orders.service");
const UsersServices = require("../services/users.service")
const transporter = require("../utils/mailer");

const makePurchase = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await OrdersServices.makePurchase(id);
    if (result) {
      res.status(200).json({ message: "Successful purchase!" });
      const user = await UsersServices.getById(id);
      console.log(user);
      await transporter.sendMail({
        from: "oscarardila96@gmail.com",
        to: user.email,
        subject: "Successful purchase",
        html: "<h1>You have purchased your products successfully!</h1> <p>Track your order</p><p>To get more info, please click on the <a href='#' target='new blank'>link</a>"
      })
    } else {
      next({ message: "Something went wrong" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { makePurchase };