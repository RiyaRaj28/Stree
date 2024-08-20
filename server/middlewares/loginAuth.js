const mongoose = require("mongoose");
const zod = require("zod");

const emailCheck = zod.object({
    email: zod.string().email()
})


function loginAuth(req, res, next){
    const email = req.body.email;
    const password = req.body.password;
    const parsedEmail = emailCheck.safeParse({email});
    if(!parsedEmail.success){
        return res.status(411).json({
            msg: "Enter a valid email address"
        })
    }
    next();

}