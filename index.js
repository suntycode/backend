const express = require("express")
const app = express();
require("dotenv").config();
// import port no
const PORT = process.env.PORT || 4000
// body parser
app.use(express.json());
// route add
// const todoRoute = require("./todoApp/routes/route")
const blogRoutes =require("./blogApp/routes/route")

app.use("/api/v1",blogRoutes)
// app start
app.listen(3000,()=>{
    console.log("app is at port no")
})

// default get request
app.get("/",(req,res)=>{
    res.send("<h1>hi ready to rock</h1>")
})

// dbconnect
const dbConnect = require("./config/dbconnect");
dbConnect();

