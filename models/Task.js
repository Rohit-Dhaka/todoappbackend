const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    completed: { 
        type: Boolean, 
        default: false  // By default, a task is not completed
    }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
