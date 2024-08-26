const express = require("express");
const authController = require("../controllers/authControllers");
const authRouter = express.Router();

authRouter.get('/login', authController.login);
authRouter.post('/register', authController.register);

module.exports = authRouter