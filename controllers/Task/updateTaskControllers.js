const Task = require('../../models/Task.js');
const mongoose = require('mongoose');

async function updatetask(req, res) {
    try {
        const id = req.params.id;
        const { title, desc, completed } = req.body;
        const userId =req.user.id

        // Validate ObjectId to prevent crashes
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid Task ID" });
        }

        
        const parsedCompleted = completed === "true" || completed === true;

        // Corrected Query
        const updatetask = await Task.findOneAndUpdate(
            { _id: id ,user:userId},  
            { title, desc, completed: parsedCompleted },
            { new: true }
        );

        if (!updatetask) {
            return res.status(404).json({ msg: "Task not found or unauthorized" });
        }

        return res.status(200).json({ msg: "Task updated successfully", task: updatetask });
    } catch (error) {
        console.error("Update Task Error:", error);
        return res.status(500).json({ error: "Internal server error", details: error.message });
    }
}

module.exports = { updatetask };
