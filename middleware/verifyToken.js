const User = require('../models/User.js')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config()


async function verifyToken(req,res,next){
    try{
        const token = req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(400).json({msg:"Token not found"})
        }
        const decode = jwt.verify(token, process.env.SECRET_KEY);
        
        const user = await User.findById(decode._id)
        
        if(!user){
            return res.status(400).json({msg:"user not found"})
        }
        req.user = user;        
        next();        
    }
    catch(error){
        
    }
}
module.exports = verifyToken

