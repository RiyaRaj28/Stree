const express = require("express");
const authController = require("../controllers/authControllers");
const authSchemas = require("../validators/authValidator");
const validate = require("../middlewares/validateMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const authRouter = express.Router();

authRouter.post('/login', validate(authSchemas.loginSchema), authController.login);
authRouter.post('/register', validate(authSchemas.registerSchema), authController.register);
authRouter.get('/getUser', authMiddleware, authController.getUser);




module.exports = authRouter