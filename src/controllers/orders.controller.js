const OrdersServices = require("../services/orders.service");

const createOrder = async (req, res, next) => {
  try {
    const newOrder = req.body;
    const result = await OrdersServices.create(newOrder);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { createOrder };