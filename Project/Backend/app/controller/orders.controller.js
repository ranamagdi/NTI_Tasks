const orderModel = require("../../database/models/orders.model")
const productModel = require("../../database/models/products.model")

const {resGenerator,fileHandler} = require("../helper")
class Order {
    static cart=async()=>{
        const carts=await orderModel.find().populate({
            path:"items.productId",
            select:"productName price totalAmount"
        })
        return carts[0]
    }
    static addItem=async payload=>{
        const newitem=await orderModel.create(payload)
        return newitem
    }
    static addOrder = async (req, res) => {
        try {
            req.params.id=productModel._id
            const productId = await orderModel.find()
            const orderData = new orderModel({userId: req.user._id ,...req.body})
            await orderData.save()
            resGenerator(res, 200, true, orderData,"order added")

        }
        catch (e) {
            resGenerator(res, 500, false, e.message, "error in insert order")
        }
    }

    static delAllOrders = async(req,res)=>{
        try{
            await orderModel.deleteMany()
            resGenerator(res, 200, true, null, "delete all successfully")
    }
    catch (e) {
        resGenerator(res, 500, false, e.message, "error in delete all")
    }
    }
    static delSingle = async (req, res) => {
        try {
            const orderData = await orderModel.findByIdAndDelete(req.params.id)
            if (!orderData)
                resGenerator(res, 404, false, orderData, "Order not found")
            resGenerator(res, 200, true, orderData, "Order deleted")
        }
        catch (e) {
            resGenerator(res, 500, false, e.message, "error in delete Order")
        }
    }




    static editSingle = async(req,res)=>{
        try{
            const orderData = await orderModel.findById(req.params.id)
            for(let key in req.body){
                orderData[key]= req.body[key]
            }
            await orderData.save()
            resGenerator(res, 200,true, orderData, "edited successuflly")
        }
        catch(e){
            resGenerator(res, 500, false, e.message, "error in edit order")
        }
    }
    static showSingle = async (req, res) => {
        try {
            const orderData = await orderModel.findById(req.params.id)  // null
            if (!orderData)
                resGenerator(res, 404, false, orderData, "order not found")
            resGenerator(res, 200, true, orderData, "data showed")
        }
        catch (e) {
            resGenerator(res, 500, false, e, "error in show data")
        }
    }
    static showAll = async (req, res) => {
        try {
            const orderData = await orderModel.find()
            resGenerator(res, 200, true, orderData, "data showed")
        }
        catch (e) {
            resGenerator(res, 500, false, e, "error in show data")
        }
    }

    // static deleteProduct = async(req,res)=>{
    //     try {
    //         const orderData = await orderModel.findById(req.params.id)
    //         orderData.
    //         if (!orderData)
    //             resGenerator(res, 404, false, orderData, "Order not found")
    //         resGenerator(res, 200, true, orderData, "Order deleted")
    //     }
    //     catch(e){
    //         resGenerator(res, 500, false, e, "error in upload img")
    //     }
    // }

}
module.exports=Order
