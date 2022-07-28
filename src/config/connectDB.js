const { Sequelize } = require("sequelize");
require("dotenv").config();
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("bookDoctor", "admin", "JAZIgQlPEh_k[4fb", {
  host: process.env.LOCAL_HOST,
  dialect: "mysql",
  logging: false,
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { connectDB };
