const express = require ("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminControllers");
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

adminRouter.get("/getAllUsers", authMiddleware, adminMiddleware, adminController.getAllUsers);
adminRouter.get("/getAllIncidents", authMiddleware, adminMiddleware, adminController.getAllIncidents);
adminRouter.get("/getAllContactMessages", authMiddleware,adminMiddleware, adminController.getAllContactMessages);
adminRouter.get("/getUser/:id", authMiddleware, adminMiddleware, adminController.getUserById);
adminRouter.patch("/updateUser/:id", authMiddleware, adminMiddleware, adminController.updateUser);

adminRouter.delete("/deleteUser/:id", authMiddleware, adminMiddleware, adminController.deleteUser);

module.exports = adminRouter;
