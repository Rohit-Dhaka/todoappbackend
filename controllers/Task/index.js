const {addtask} = require('./addTaskConrollers.js')
const {alltask} = require('./getTaskConrollers.js')
const {removetask} = require('./removeTaskControllers.js')
const {updatetask} = require('./updateTaskControllers.js')
const {searchtask} = require('./searchTaskControllers.js')
module.exports = {addtask ,alltask ,removetask,updatetask ,searchtask }