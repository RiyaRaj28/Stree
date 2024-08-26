const express = require('express');
const incidentRouter = express.Router();
const incidentController = require('../controllers/incidentControllers');

incidentRouter.get('/getAllIncidents', incidentController.getAllIncidents);
incidentRouter.post('/addIncident', incidentController.addNewIncident);

module.exports = incidentRouter;
