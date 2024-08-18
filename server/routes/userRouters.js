const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const controller = require('../controllers/userControllers');

router.get("/", controller.getHello);
router.post("/createUser", controller.createUser);

module.exports = router;