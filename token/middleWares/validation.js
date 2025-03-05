function validation (req,res,next){
    if(req.token)
    {
        console.log("Token is valid")
        next()  
        return
    }
    console.log("Token is invalid")
    res.status(401).send("Unauthorized")
}

export default validation   
