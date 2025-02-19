const mongoose = require('mongoose')


const ConnectDb = async function(next){
  try{
    await mongoose.connect(process.env.url).then(()=>{
      console.log("App connect to database")
    })
  }
  catch(error){
    process.exit(1)    
  }
}

module.exports = ConnectDb