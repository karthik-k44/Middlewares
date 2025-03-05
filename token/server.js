import express from "express"
const app = express()
import Token from "./middleWares/token.js"
import validation from "./middleWares/validation.js"


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