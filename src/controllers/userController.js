let db = require("../models");
let bcrypt = require("bcryptjs");
const { handleUserLogin } = require("../services/userServices");
let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    res.status(400).json({
      errCode: 1,
      errMessage: "Missing parameter!",
    });
  }
  let userData = await handleUserLogin(email, password);
  return res.json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};
module.exports = { handleLogin };
