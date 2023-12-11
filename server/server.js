require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

//Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix

app.use(express.json());

app.use("/api/auth", router);


// app.get("/",(req,res)=> {
// res.status(200).send('welcome to my website')
// });

// app.get("/home",(req,res)=> {
//     res.status(200).send('welcome to my home page')
//     });


const PORT = 5000;

connectDb().then(()=>{
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});
});