const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
require("dotenv").config();

const options = {
  apis: ["./src/routes/users.route.js", "./src/routes/auth.route.js", "./src/models/users.js", "./src/routes/products.route.js", "./src/models/products.js", "./src/models/products_in_cart.js", "./src/routes/products_in_cart.route.js", "./src/routes/orders.route.js", "./src/models/orders.js"],
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node.js e-Commerce Marketplace",
      version: "0.0.9",
      description: "API for an e-Commerce website"
    }
  }
};

const swaggerSpecs = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
  app.get("/api/v1/docs/json", (req, res) => {
    res.setHeader({ "Content-Type": "application/json" });
    res.send(swaggerSpecs)
  });
  console.log(`Documentation is available at ${process.env.URL}:${port}/api/v1/docs`);
}

module.exports = swaggerDocs;