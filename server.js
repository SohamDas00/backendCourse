import dotenv from 'dotenv' 
dotenv.config()
//dotenv setup

import express from "express"
import router from './router/about.router.js';
const app=express()
//express setup

const port=process.env.PORT;
//connect port from dotenv

app.use((req,res,next)=>{
    console.log(`Request send from client ${Date.now()}`);
    next();
    
})

app.get("/",(req,res)=>{
    res.send("ExpressJS running")
})
//basic routing 

app.use('/about',router)
//advance routing
app.use(express.json())

app.post("/users",(req,res)=>{
    const {name,email}=req.body;
    res.json({
        message:`Hi ${name} my email is: ${email}`
    })
})
app.put("/users/:id",(req,res)=>{
    const userId=req.params.id;
    const {name,email}=req.body;
    res.json({
        message:`The name ${userId} updated to ${name} with email ${email}`
    })
})
app.delete("/users/:id",(req,res)=>{
    const userId=req.params.id;
    res.json({
        message:`The user with id ${userId} is successfully deleted`
    })
})


app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})
//express listening