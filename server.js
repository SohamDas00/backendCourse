import dotenv from 'dotenv' 
dotenv.config()
//dotenv setup

import express from "express"
import router from './router/about.router.js';
const app=express()
//express setup

const port=process.env.PORT;
//connect port from dotenv

app.get("/",(req,res)=>{
    res.send("ExpressJS running")
})
//basic routing 

app.use('/about',router)
//advance routing

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})
//express listening