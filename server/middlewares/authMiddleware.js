const jwt = require("jsonwebtoken")
const User = require("../models/userSchema");

const authMiddleware = async (req, res, next) => {
        const token = req.header("Authorization");
        if(!token){
            res.status(401).json({ error: "Unauthorized, no token" });
        }

        const jwtToken = token.replace("Bearer", "").trim();
        console.log("token from middleware ", jwtToken); 

        try{
            const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

            const userData = await User.findOne({ email : isVerified.email}).select({ password : 0}); 
            console.log(userData);

            req.user = userData;
            req.token = token; 
            req.userId = userData._id; 

            next();
        }catch (error)
        {
            return res.status(401).json({ error: "Unauthorized" });
        }
    
}

module.exports = authMiddleware;