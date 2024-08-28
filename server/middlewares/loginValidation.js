const mongoose = require("mongoose");
const zod = require("zod");

const loginSchema = require("../validators/authValidator").loginSchema;

function loginValidation(req, res, next){
    const {userName, password} = req.body;
    const parsedValues = loginSchema.safeParse({userName, password});
    if(!parsedValues.success){
        const errors = parsedValues.error.format();
        const userNameErrors = errors.userName?._errors || [];
        const passwordErrors = errors.password?._errors || [];

        console.log(`${passwordErrors}`);
        console.log(`hello ${userNameErrors}`);
        return res.status(400).json({
            msg: `Login validation failed`,
            err: {
                userNameError: userNameErrors[0] || null,
                passwordError: passwordErrors[0] || null
            }
            
        })
    }
    
    next();

}

module.exports = loginValidation;