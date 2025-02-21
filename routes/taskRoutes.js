const express = require('express')
const taskRoutes = express.Router()
const {addtask ,alltask ,removetask ,updatetask ,searchtask} = require('../controllers/Task/index.js')
const verifyToken = require('../middleware/verifyToken.js')

taskRoutes.post('/addtask' ,verifyToken ,addtask)
taskRoutes.get('/alltask',verifyToken ,alltask)
taskRoutes.delete('/removetask/:id'  ,removetask)
taskRoutes.put('/updatetask/:id',verifyToken ,updatetask)
taskRoutes.get('/searchtask' ,verifyToken ,searchtask)




module.exports = taskRoutes