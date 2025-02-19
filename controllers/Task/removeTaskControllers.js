const Task = require('../../models/Task.js')

async function removetask(req,res){
    try{
        const id = req.params.id;
        const removetask = await Task.findByIdAndDelete(id)
        if(!removetask){
            return res.status(400).json({msg:"Task not found"})
        }
        return res.status(200).json({msg:"Task delete successfully"})
    }
    catch(error){
        return res.status(500).json({error:"Internal server error"})
    }
}
module.exports = {removetask}