const User = require('../models/userSchema');

const login = async(req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;
        res.json({
            msg : "login"
        })
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const register = async(req, res) => {
    try{
        const data = req.body; 
        const { email, password, firstName, lastName } = req.body;
        const userExist = await User.findOne({ email })

        if(userExist)
        {
            return res.status(400).json({error : "Email already exists"});
        }

        const UserCreated = await User.create({ firstName, lastName, email, password });
            
        console.log(req.body);
        res.status(200).json({ user : UserCreated});
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

module.exports = {
    login,
    register,
}