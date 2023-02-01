const { products, users } = require("../models")
const { Op } = require("sequelize");

class ProductsServices {
  static async getAvailableProducts() {
    try {
      const result = await products.findAll({
        where: {
          available_qty: {
            [Op.gt]: 0
          },
        },
        attributes: { exclude: ["user_id"] },
        include: {
          model: users,
          as: "user",
          attributes: ["username"]
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async createProduct(newProduct) {
    try {
      const result = await products.create(newProduct);
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = ProductsServices;