const ProductsInCartServices = require("../services/products_in_cart.service");

const addProductToCart = async (req, res, next) => {
  try {
    const newProductInCart = req.body;
    await ProductsInCartServices.addProduct(newProductInCart);
    res.json({ message: "Product successfully added to the cart" })
  } catch (error) {
    next(error)
  }
};

module.exports = { addProductToCart };