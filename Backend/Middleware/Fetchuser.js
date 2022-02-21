var jwt = require('jsonwebtoken')
const secret = "Younus1@"

const Fetchuser =(req,res,next)=>{
     const token = req.header('auth-token')
    if(!token){
        res.status(401).send("Acess Denied")
    }
    try{

const data =jwt.verify(token , secret)
        req.user = data.user
        next();
    }catch(error){
 res.status(400).send({res :error})
    }

}
module.exports= Fetchuser;