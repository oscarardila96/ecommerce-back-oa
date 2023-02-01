const UsersServices = require("../services/users.service");

const getUsersProductsInCart = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UsersServices.getProductsInCart(id);
    if (result) {
      res.json(result);
    } else {
      res.status(400).json({ message: "No results were found" })
    }
  } catch (error) {
    next(error);
  }
};

const getUsersOrders = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UsersServices.getOrders(id);
    if (result) {
      res.json(result);
    } else {
      res.status(400).json({ message: "No results were found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsersProductsInCart, getUsersOrders } 