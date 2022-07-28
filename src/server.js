const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { viewEngine } = require("./config/viewEngine");
const { initWebRoutes } = require("./routes/web");
const { connectDB } = require("./config/connectDB");
require("dotenv").config();
let cors = require("cors");
let app = express();

let port = process.env.PORT || 6969;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
});

initWebRoutes(app);

connectDB();

app.listen(port, () => console.log("Server is running on the port", port));
