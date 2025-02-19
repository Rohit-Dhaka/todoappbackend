const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        uniuqe:true
    },
    password:{
        type:String,
        required:true
    }   
})

userSchema.pre('save' , async function (next){
    if(!this.isModified('password')){
       return next()
    }
    const saltRound = 10
    const hashedPassword = await bcrypt.hash(this.password, saltRound)
    this.password = hashedPassword
    return next()
})


const User = mongoose.model("User", userSchema)
module.exports = User