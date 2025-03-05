import express from "express"

const app = express()

function Token (req,res,next){
    console.log("Creating Token")
    setInterval(() => {
        const TOKEN ="123456"
        req.token=TOKEN
        next()
    }, 1000)
}

function validation (req,res,next){
    if(req.token)
    {
        console.log("Token is valid")
        next()  
    }
}
app.use(Token)
app.use(validation)
app.get('/', (req, res) => {
    console.log("Home page ")
    res.send("hello This is home page ")
})

// app.get("/user", (req, res) => {
//     res.send("This is a user page ")
// })

// app.get("*",(req, res) => {
//     res.status(404).send("404 Page Not Found")
// })

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))