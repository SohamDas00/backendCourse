import dotenv from 'dotenv' 
dotenv.config()
//dotenv setup

import express from "express"
import router from './router/about.router.js';
const app=express()
//express setup

const port=process.env.PORT;
//connect port from dotenv

app.use('/middleware',(req,res,next)=>{
    console.log(`Request send from client ${Date.now()}`);
    next();
})
//Middleware apply for route /middleware

app.get("/",(req,res)=>{
    res.send("ExpressJS running")
})
app.get("/middleware",(req,res)=>{
    res.send("Middleware running")
})
//basic routing 

app.use('/about',router)
//advance routing
app.use(express.json())
//buildIn middleware

app.get('/error',(req,res)=>{
    throw new Error("This is test error");
})
app.use((err,req,res,next)=>{
    console.error(err.message)
    res.send("This is a ERROR")
})
//error handeling using middleware

app.use(express.static("public"))
//extract static file

app.get('/products',(req,res)=>{
    const products=[
        {id:1,name:'Laptop',cost:10000},
        {id:2,name:'mobile',cost:5000},
    ]
    res.status(200).json({products})
})
app.get('/products/:id',(req,res)=>{
    const products=[
        {id:1,name:'Laptop',cost:10000},
        {id:2,name:'mobile',cost:5000},
    ]
    const product=products.find(p=>p.id===Number(req.params.id))
    if(!product){
        res.status(404).send("Product not found!")
    }
    res.status(200).json(product)
})
app.post('/products',(req,res)=>{
    const newProduct=req.body;
    res.status(201).json(newProduct)
})
//restful API

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
//controller CRUD

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})
//express listening