const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,         
        trim: true, 
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    userName : {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

//middleware to hash the password before saving, only if the password was not modified
userSchema.pre("save", async function(next) {
    const user = this; 

    if(!user.isModified("password")){
        next();
    }

    try{
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch(error)
    {
        next(error);
    }

})

//adding jwt token to the user
userSchema.methods.generateToken = async function(){
    try{
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
        process.env.JWT_SECRET_KEY,
        ); 
    } catch(error)
    {
        console.error(error.message);
    }

}

const User = new mongoose.model('User', userSchema);
module.exports = User;