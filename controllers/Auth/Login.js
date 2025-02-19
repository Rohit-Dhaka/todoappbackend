const User = require('../../models/User.js')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config()

async function login(req,res){
    try{
        const {email,password} = req.body;
        if( !email || !password){
            return res.status(404).json({msg:"All Filled Required"})
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({msg:"Email not vailed"})
        }
        const isPassword = await bcrypt.compare(password, user.password)
        if(!isPassword){
            return res.status(401).json({msg:"Password invalied"})
        }
        const token = jwt.sign({
            _id:user.id,
            email:user.email
        },process.env.SECRET_KEY ,{expiresIn:'5d'})
        return res.status(200).json({msg:"User login successfully",token})

    }
    catch(error){
        return res.status(500).json({error:"Internal server error"})
    }
}
module.exports = {login}