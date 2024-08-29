const express = require('express');
const incidentRouter = express.Router();
const incidentController = require('../controllers/incidentControllers');
const authMiddleware = require('../middlewares/authMiddleware');

incidentRouter.get('/getAllIncidents', authMiddleware, incidentController.getAllIncidents);
incidentRouter.post('/addIncident', authMiddleware,  incidentController.addNewIncident);

module.exports = incidentRouter;
