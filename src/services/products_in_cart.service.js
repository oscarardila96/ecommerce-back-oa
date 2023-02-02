const { products_in_cart, products, cart } = require("../models");

class ProductsInCartServices {
  static async addProduct(newProductInCart) {
    try {
      const result = await products_in_cart.create(newProductInCart);
      const product = await products.findOne({
        where: {
          id: newProductInCart.product_id
        }
      });
      await cart.update({
        total_price: product.price * newProductInCart.quantity
      }, {
        where: {
          id: newProductInCart.cart_id
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = ProductsInCartServices;
