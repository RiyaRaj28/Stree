const User = require("../userSchema")

async function findUserInUserSchema(userEmail){
    try{
        const user = await User.findOne({
            email: userEmail
        });
        return user;
    }catch(err){
        console.log(`Error ${err.message}`);
    }
    
}


module.exports = findUserInUserSchema;