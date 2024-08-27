const User = require('../models/userSchema');

const getHello = (req, res) => {
    res.send("Hello World from controller!");
}

const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = {
    getHello,
    createUser
};
