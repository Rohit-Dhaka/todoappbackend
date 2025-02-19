const User = require('../../models/User.js')


async function logout(req,res){
   return res.json({msg:"User logout seccessfully"})
}
module.exports = {logout}