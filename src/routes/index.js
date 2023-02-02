const authRouter = require("./auth.route");
const productsRouter = require("./products.route");
const usersRouter = require("./users.route");
const productsInCartRouter = require("./products_in_cart.route");
const ordersRouter = require("./orders.route");


const routerApi = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/products", productsRouter);
  app.use("/api/v1/users", usersRouter);
  app.use("/api/v1/productsInCart", productsInCartRouter);
  app.use("/api/v1/orders", ordersRouter);
};

module.exports = routerApi;