const Task = require("../../models/Task.js");

async function addtask(req, res) {
    try {
        const { title, desc } = req.body;
        const userId = req.user?._id;         
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized: User not found" });
        }

        if (!title || !desc) {
            return res.status(400).json({ msg: "All fields are required" });
        }
    
        const createdTask = new Task({ title, desc, user: userId });
        await createdTask.save();
        return res.status(201).json({ msg: "Task created successfully", task: createdTask });
    } catch (error) {
        console.error("Error creating task:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { addtask };


