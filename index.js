
//loads .env file contents into process.env
require('dotenv').config()
const express = require('express')
const cors = require('cors')

//import connection.js file to connect mongodb
require('./db/connection')

//import router
const router = require('./routes/router')

// create server app using express
const server = express()

//use cors and express json to your server app
// Application specific middleware
server.use(cors())
server.use(express.json())
// use router in server 
server.use(router)

//create port to listen ypur server app
const PORT = process.env.PORT || 3000

// api test
server.get('/',(req,res)=>{
    res.status(200).json("E cart server started")
})

//Run server app in the specified port
server.listen(PORT,()=>{
    console.log(`E cart server started at port:${PORT}`);
})