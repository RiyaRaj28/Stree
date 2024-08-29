const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userControllers');
const authMiddleware = require('../middlewares/authMiddleware');

userRouter.get("/", userController.getHello);
userRouter.post("/createUser", userController.createUser);
userRouter.get('/incidents', authMiddleware, userController.getUserIncidents); 
userRouter.patch('/incidents/:id', authMiddleware, userController.updateUserIncident); 
userRouter.delete('/incidents/:id', authMiddleware, userController.deleteUserIncident); 


module.exports = userRouter;
module.exports = userRouter;