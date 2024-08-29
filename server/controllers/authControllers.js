const User = require('../models/userSchema');
const bcrypt = require('bcryptjs')

const login = async(req, res) => {
    try{
        const { userName, password } = req.body;

        const userExist = await User.findOne({ userName });

        if(!userExist){
            return res.status(400).json({error : "Invalid credentials"});
        }

        const user = await bcrypt.compare(password, userExist.password);

        if(user){
            return res.status(200).json({
                message : "Login Successful!", 
                token : await userExist.generateToken(),
                userId : userExist._id.toString(),
            })
        }
        else{
            res.status(401).json({error : "Invalid user name or password!"});
        }
    }
    catch(err)
    {
        console.error(err.message);
        // res.status(500).send('Server Error');
        next(err);
    }
}

const register = async(req, res) => {
    try{
        const { email, password, userName } = req.body;
        const userExist = await User.findOne({ email })
        const userNameExist = await User.findOne({ userName});

        if(userExist)
        {
            return res.status(400).json({error : "Email already exists"});
        }

        if(userNameExist)
        {
            return res.status(400).json({error : "User name already exists"});
        }

        const userCreated = await User.create({ 
            email, 
            password,
            userName,
        });
            
        console.log(req.body);
        res.status(201).json({ 
            user : userCreated,
            message : "User created successfully", 
            token : await userCreated.generateToken(),
            userId : userCreated._id.toString(),
        });
    }
    catch(err)
    {
        console.error(err.message);
        // res.status(500).send('Server Error');
        next(err);
    }
}

const getUser = async(req, res) => {
    try{
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData})
    } catch(err)
    {
        console.error(`error from user route ${err}`);
    }
}

module.exports = {
    login,
    register,
    getUser
}