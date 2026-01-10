import dotenv from 'dotenv' 
dotenv.config()
//dotenv setup

import express from "express"
const app=express()
//express setup

const port=process.env.PORT;
//connect port from dotenv

app.get("/",(req,res)=>{
    res.send("ExpressJS running")
})
//basic routing

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})
//express listening