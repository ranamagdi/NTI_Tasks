const productModel = require("../../database/models/products.model")
const fs=require('fs')
const {resGenerator,fileHandler} = require("../helper")
class Product {
    static addProduct = async (req, res) => {
        try {


            const newName = fileHandler(req)
            req.user.image=process.env.appURL+(newName.replace('public',''))//appurl frontend
            const productData = new productModel({image: req.user.image,...req.body})
            await productData.save()

            resGenerator(res, 200, true, productData, "product added")

        }
        catch (e) {
            resGenerator(res, 500, false, e.message, "error in insert product")
        }
    }
    static delAllProducts = async(req,res)=>{
        try{
            await productModel.deleteMany()
            resGenerator(res, 200, true, null, "delete all successfully")
    }
    catch (e) {
        resGenerator(res, 500, false, e.message, "error in delete all")
    }
    }
    static delSingle = async (req, res) => {
        try {
            const productData = await productModel.findByIdAndDelete(req.params.id)
            if (!productData)
                resGenerator(res, 404, false, productData, "Product not found")
            resGenerator(res, 200, true, productData, "product deleted")
        }
        catch (e) {
            resGenerator(res, 500, false, e.message, "error in delete product")
        }
    }




    static editSingle = async(req,res)=>{
        try{
            const productData = await productModel.findById(req.params.id)
            for(let key in req.body){
                productData[key]= req.body[key]
            }
            await productData.save()
            resGenerator(res, 200,true, productData, "edited successuflly")
        }
        catch(e){
            resGenerator(res, 500, false, e.message, "error in edit product")
        }
    }
    static showSingle = async (req, res) => {
        try {
            const productData = await productModel.findById(req.params.id)  // null
            if (!productData)
                resGenerator(res, 404, false, productData, "Product not found")
            resGenerator(res, 200, true, productData, "data showed")
        }
        catch (e) {
            resGenerator(res, 500, false, e, "error in show data")
        }
    }
    static showAll = async (req, res) => {
        try {
            const productData = await productModel.find()
            resGenerator(res, 200, true, productData, "data showed")
        }
        catch (e) {
            resGenerator(res, 500, false, e, "error in show data")
        }
    }
    static showFamily = async (req, res) => {
        try {

            const productData = await productModel.find()
            const family = productData.filter(c=> c.category=="family")


            resGenerator(res, 200, true, family, "data showed")

        }
        catch (e) {
            resGenerator(res, 500, false, e.message, "error in show data")
        }
    }

    static showCook = async (req, res) => {
        try {

            const productData = await productModel.find()
            const family = productData.filter(c=> c.category=="cook")


            resGenerator(res, 200, true, family, "data showed")

        }
        catch (e) {
            resGenerator(res, 500, false, e.message, "error in show data")
        }
    }

    static showEconomic = async (req, res) => {
        try {

            const productData = await productModel.find()
            const family = productData.filter(c=> c.category=="economic")


            resGenerator(res, 200, true, family, "data showed")

        }
        catch (e) {
            resGenerator(res, 500, false, e.message, "error in show data")
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
module.exports=Product
