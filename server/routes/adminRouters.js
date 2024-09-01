const express = require ("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminControllers");
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

adminRouter.get("/getAllUsers", authMiddleware, adminMiddleware, adminController.getAllUsers);
adminRouter.get("/getUser/:id", authMiddleware, adminMiddleware, adminController.getUserById);
adminRouter.patch("/updateUser/:id", authMiddleware, adminMiddleware, adminController.updateUserById);
adminRouter.delete("/deleteUser/:id", authMiddleware, adminMiddleware, adminController.deleteUser);

adminRouter.get("/getAllIncidents", authMiddleware, adminMiddleware, adminController.getAllIncidents);
adminRouter.get("/getIncident/:id", authMiddleware, adminMiddleware, adminController.getIncidentById);
adminRouter.patch("/updateIncident/:id", authMiddleware, adminMiddleware, adminController.updateIncident);
adminRouter.delete("/deleteIncident/:id", authMiddleware, adminMiddleware, adminController.deleteIncident);

adminRouter.get("/getAllContactMessages", authMiddleware,adminMiddleware, adminController.getAllContactMessages);
adminRouter.get("/getContactMessage/:id", authMiddleware, adminMiddleware, adminController.getContactMessageById);
adminRouter.patch("/updateContactMessage/:id", authMiddleware, adminMiddleware, adminController.updateContactMessage);
adminRouter.delete("/deleteContactMessage/:id", authMiddleware, adminMiddleware, adminController.deleteContactMessage);

module.exports = adminRouter;
