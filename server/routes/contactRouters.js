const express = require('express');
const contactRouter = express.Router();
const contactController = require('../controllers/contactController');

contactRouter.post('/contactData', contactController.contactData);


module.exports = contactRouter;