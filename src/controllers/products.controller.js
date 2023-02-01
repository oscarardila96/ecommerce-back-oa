const ProductsServices = require("../services/products.services");

const getAvailableProducts = async (req, res, next) => {
  try {
    const result = await ProductsServices.getAvailableProducts();
    if (result) {
      res.json(result);
    } else {
      res.status(400).json({ message: "No results were found" })
    }
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const newProduct = req.body;
    const result = await ProductsServices.createProduct(newProduct);
    if (result) {
      res.json({ message: "Product sucessfully created" });
    } else {
      res.status(400).json({ message: "Unable to create product" });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { getAvailableProducts, createProduct };