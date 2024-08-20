const express = require("express");

const authRouter = express.Router();

authRouter.post('/login', function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    res.json({
        msg : "login"
    })
})

authRouter.post('/register', function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    res.json({
        msg : "register"
    })
})

module.exports = authRouter