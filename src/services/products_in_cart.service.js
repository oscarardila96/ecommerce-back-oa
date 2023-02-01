const { products_in_cart, cart, products } = require("../models");

class ProductsInCartServices {
  static async addProduct(newProductInCart) {
    try {
      const result = await products_in_cart.create(newProductInCart);
      const { total_price } = result;
      const productPrice = await products.findOne({ where: { id: result.product_id } });
      await cart.update({ total_price: total_price + (productPrice * result.quantity) }, { where: result.cart_id });
      // await products_in_cart.findAll({ where: { id: 2 } });

      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = ProductsInCartServices;
