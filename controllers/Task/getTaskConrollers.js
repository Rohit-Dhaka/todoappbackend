const Task = require('../../models/Task.js');

async function alltask(req, res) {
    try {
        const userId = req.user._id; 
    
        // Use find instead of findById
        const alltask = await Task.find({ user: userId });

        if (!alltask || alltask.length === 0) {
            return res.status(404).json({ msg: "No tasks found for this user" });
        }

        return res.status(200).json({ msg: "Tasks found successfully", alltask });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { alltask };
