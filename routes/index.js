const authRoutes = require('./authRoutes')
const taskRoutes = require('./taskRoutes.js')
const express = require('express')
const router = express.Router()

router.use('/auth' , authRoutes)
router.use('/task',taskRoutes)

module.exports = router