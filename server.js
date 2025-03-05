import express from "express"

const appp = express()

appp.get('/',(req,res)=>{
    res.send("hello This is home page ")
})

appp.get("/user", (req,res)=>{
    res.send("This is a user page ")
})

appp.listen(3000)