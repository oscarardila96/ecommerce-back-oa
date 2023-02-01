const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routerApi = require("./routes");
const error = require("./middlewares/error.middleware");
// const db = require("./utils/database");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
routerApi(app);
app.use(error);

// db.sync({ force: true })
//   .then(() => console.log("OK"))
//   .catch(error => console.log(error))

module.exports = app;


