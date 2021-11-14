
require('dotenv').config();
const express =require('express');
const app =express();
//import CORS library 
const cors =require('cors');
//import mongoose library and connect DB
const mongoose=require('mongoose');
const userRoutes =require('./controllers/user.controller');
const source =process.env.ATLAS_CONNETCION


app.use(cors())
app.use(express.json())
app.use('/users',userRoutes)
mongoose.connect(source,{
//options
})

const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("DB connected.");
})
const PORT =process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Successfully served on port = ${PORT}`)
})


