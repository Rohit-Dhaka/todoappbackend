const express = require('express')
const authRoutes = express.Router()
const {signup ,login ,logout } = require('../controllers/Auth/index.js')



authRoutes.post('/signup'  ,signup)
authRoutes.post('/login' ,login)
authRoutes.post('/logout' ,logout)



module.exports = authRoutes