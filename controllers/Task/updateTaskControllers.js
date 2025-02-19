const Task = require('../../models/Task.js')


async function updatetask(req,res){
    try{
        const id = req.params.id
        const {title,desc} = req.body;
        const updatetask = await Task.findByIdAndUpdate(id,{title,desc},{new:true})
        if(!updatetask){
            return res.status(400).json({msg:"task not update"})
        }
        return res.status(200).json({msg:"Task update successfully"})

    }
    catch(error){
        return res.status(500).json({error:"Internal server error"})
    }
}
module.exports= {updatetask}