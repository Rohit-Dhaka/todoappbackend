const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const ConnectDb = require('./db/ConnectDb.js')
dotenv.config();
const PORT = process.env.PORT || 3000;
const router = require('./routes/index.js')

app.use(express.json())
app.use(cors())
app.use('/api/v1',router)


ConnectDb()
app.listen(PORT,()=>{
    console.log("app listening on port 3000")
})