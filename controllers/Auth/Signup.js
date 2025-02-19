const User = require('../../models/User.js')


async function signup(req,res){
    try{
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(404).json({msg:"All Filled Required"})
        }
        const isExists = await User.findOne({email})
        if(isExists){
            return res.status(403).json({msg:"User already exists"})
        }
        const saveuser = new User({name,email,password})
        await saveuser.save()
        return res.status(201).json({msg:"User create successfully"})

    }
    catch(error){
        return res.status(500).json({error:"Internal server error"})
    }
}
module.exports = {signup}