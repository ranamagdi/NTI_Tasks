const userModel = require("../../database/models/users.models")
const {resGenerator} = require("../helper")
const jwt = require("jsonwebtoken")

const userAuth=async(req,res,next)=>{
    try{
        //bearer ey......
        const token = req.header("Authorization").replace("bearer ", "")
        const decoded = jwt.verify(token, process.env.jwtKey)
        const userData = await userModel.findOne({
            _id: decoded._id,
            "tokens.token": token
        })
        if(!userData) throw new Error("unauthorized")
        req.user = userData
        req.token = token
        next()
    }
    catch(e){
        resGenerator(res, 500, false, e.message, "unauthorized")
    }
}


const adminAuth=async(req,res,next)=>{
    // try{
    //     if( !req.user.userType == "admin") throw new Error("Admins only")
    //     next()
    // }
    // catch(e){
    //     resGenerator(res, 500, false, e.message, "unauthorized")
    // }

    try{
        //bearer ey......
        const token = req.header("Authorization").replace("bearer ", "")
        const decoded = jwt.verify(token, process.env.jwtKey)
        const userData = await userModel.findOne({
            _id: decoded._id,
            "tokens.token": token,
            userType:'admin'
        })
        if(!userData) throw new Error("unauthorized")
        req.user = userData
        req.token = token
        next()
    }
    catch(e){
        resGenerator(res, 500, false, e.message, "unauthorized")
    }
}


module.exports={userAuth,adminAuth}
