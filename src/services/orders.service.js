const { orders } = require("../models");

class OrdersServices {
  static async create(newOrder) {
    try {
      const result = orders.create(newOrder);
      return result
    } catch (error) {
      throw error;
    }
  }
};

module.exports = OrdersServices;