const userModel = require("../../database/models/users.models")
const {resGenerator,fileHandler} = require("../helper")
class User {
    static addUser = async (req, res) => {
        try {
            const userData = new userModel({...req.body, userType:"user"})
            await userData.save()
            resGenerator(res, 200, true, userData, "user added")
        }
        catch (e) {
            resGenerator(res, 500, false, e, "error in insert user")
        }
    }
    static addAdmin = async (req, res) => {
        try {
            const userData = new userModel({...req.body, userType:"admin"})
            await userData.save()
            resGenerator(res, 200, true, userData, "user or admin added")
        }
        catch (e) {
            resGenerator(res, 500, false, e, "error in insert user or admin")
        }
    }

    static login = async (req, res) => {
        try {
            const userData = await userModel.logMe(req.body.email, req.body.password)
            const token = await userData.generateToken()
            resGenerator(res, 200, true, {userData, token}, "login successfully")
        }
        catch (e) {
            resGenerator(res, 500, false, e.message, "error in login")
        }
    }

    static logOut = async(req,res)=> {
        try{
            req.user.tokens = req.user.tokens.filter(t => t.token != req.token)
            console.log(req.user.tokens)
            await req.user.save()
            resGenerator(res, 200, true, null, "logged out successfully ")
        }
        catch (e) {
            resGenerator(res, 500, false, e.message, "error in logout")
        }
    }

    static delAllUsers = async(req,res)=>{
        try{
            await userModel.deleteMany()
            resGenerator(res, 200, true, null, "delete all successfully")
    }
    catch (e) {
        resGenerator(res, 500, false, e.message, "error in delete all")
    }
    }
    static delSingle = async (req, res) => {
        try {
            const userData = await userModel.findByIdAndDelete(req.params.id)
            if (!userData)
                resGenerator(res, 404, false, userData, "User not found")
            resGenerator(res, 200, true, userData, "user deleted")
        }
        catch (e) {
            resGenerator(res, 500, false, e.message, "error in delete user")
        }
    }
    static editSingle = async(req,res)=>{
        try{
            const userData = await userModel.findById(req.params.id)
            for(let key in req.body){
                userData[key]= req.body[key]
            }
            await userData.save()
            resGenerator(res, 200,true, userData, "edited successuflly")
        }
        catch(e){
            resGenerator(res, 500, false, e.message, "error in edit user")
        }
    }
    static showSingle = async (req, res) => {
        try {
            const userData = await userModel.findById(req.params.id)  // null
            if (!userData)
                resGenerator(res, 404, false, userData, "User not found")
            resGenerator(res, 200, true, userData, "data showed")
        }
        catch (e) {
            resGenerator(res, 500, false, e, "error in show data")
        }
    }
    static showAll = async (req, res) => {
        try {
            const userData = await userModel.find()
            resGenerator(res, 200, true, userData, "data showed")
        }
        catch (e) {
            resGenerator(res, 500, false, e, "error in show data")
        }
    }

    static uploadimg = async(req,res)=>{
        try{

            const newName = fileHandler(req)

            req.user.image=process.env.appURL+(newName.replace('public',''))//appurl frontend
            await req.user.save()
            resGenerator(res, 200, true, req.user, "img uploaded")
        }
        catch(e){
            resGenerator(res, 500, false, e, "error in upload img")
        }
    }

}
module.exports=User
