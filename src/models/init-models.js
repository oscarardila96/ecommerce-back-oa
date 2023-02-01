const DataTypes = require("sequelize").DataTypes;
const _cart = require("./cart");
const _orders = require("./orders");
const _products = require("./products");
const _products_in_cart = require("./products_in_cart");
const _products_in_order = require("./products_in_order");
const _users = require("./users");

function initModels(sequelize) {
  const users = _users(sequelize, DataTypes);
  const products = _products(sequelize, DataTypes);
  const cart = _cart(sequelize, DataTypes);
  const orders = _orders(sequelize, DataTypes);
  const products_in_cart = _products_in_cart(sequelize, DataTypes);
  const products_in_order = _products_in_order(sequelize, DataTypes);


  products_in_cart.belongsTo(cart, { as: "cart", foreignKey: "cart_id" });
  cart.hasMany(products_in_cart, { as: "products_in_carts", foreignKey: "cart_id" });
  products_in_order.belongsTo(orders, { as: "order", foreignKey: "order_id" });
  orders.hasMany(products_in_order, { as: "products_in_orders", foreignKey: "order_id" });
  products_in_cart.belongsTo(products, { as: "product", foreignKey: "product_id" });
  products.hasMany(products_in_cart, { as: "products_in_carts", foreignKey: "product_id" });
  products_in_order.belongsTo(products, { as: "product", foreignKey: "product_id" });
  products.hasMany(products_in_order, { as: "products_in_orders", foreignKey: "product_id" });
  cart.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(cart, { as: "carts", foreignKey: "user_id" });
  orders.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(orders, { as: "orders", foreignKey: "user_id" });
  products.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(products, { as: "products", foreignKey: "user_id" });

  return {
    users,
    products,
    cart,
    orders,
    products_in_cart,
    products_in_order
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
