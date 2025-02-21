const Task = require('../../models/Task.js')


async function searchtask(req,res){
    try {
        const { title } = req.query;
        const userId = req.user._id
        if (!title) {
          return res.status(400).json({ message: "Search query is required" });
        }
    
        const tasks = await Task.find({user:userId, title: { $regex: title, $options: "i" } });
        res.json(tasks);
      } catch (error) {
        res.status(500).json({ message: "Server Error" });
      }
}

module.exports = {searchtask}