const express = require("express");
let homeController = require("../controllers/homeController");
let userController = require("../controllers/userController");
let route = express.Router();

let initWebRoutes = (app) => {
  app.get("/", homeController.getHomePage);
  app.post("/api/v1/login", userController.handleLogin);
  return app.use("/", route);
};

module.exports = { initWebRoutes };
