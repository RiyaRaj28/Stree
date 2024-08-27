const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userControllers');

userRouter.get("/", userController.getHello);
userRouter.post("/createUser", userController.createUser);

module.exports = userRouter;