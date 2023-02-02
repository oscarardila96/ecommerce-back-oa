const { users, cart, products_in_cart, orders } = require("../models");

class UsersServices {
  static async getProductsInCart(id) {
    try {
      const result = await users.findOne({
        where: { id },
        attributes: ["username"],
        include: {
          model: cart,
          as: "carts",
          attributes: ["total_price"],
          include: {
            model: products_in_cart,
            as: "products_in_carts",
            attributes: { exclude: ["id", "cart_id"] }
          }
        }
      })
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getOrders(id) {
    try {
      const result = await users.findOne({
        where: { id },
        attributes: ["username"],
        include: {
          model: orders,
          as: "orders"
        }
      })
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = UsersServices;