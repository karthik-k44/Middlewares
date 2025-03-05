function Token (req,res,next){
    console.log("Creating Token")
    setInterval(() => {
        const TOKEN ="123456"
        req.token=true
        next()
    }, 1000)
}

export default Token