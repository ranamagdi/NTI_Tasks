const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({

    orderDate:{
        type:Date,
        max:new Date,
        min:"2015-1-1",
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        min:1
    },
    totalAmount:{
        type:Number,
        required:true
    },
    barCode:{
        type:String,
        trim:true,
        required:true,
        length:8,
        unique: true,
    },
    status:{
        type:Boolean,
        default:false
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true
    },







},

{
    timestamps : true
}
)

const CartSchema=new mongoose.Schema({
    items:[orderSchema],
    subTotal:{
        default:0,
        type:Number
    }

},{
    timestamps : true
})



const orderModel = new mongoose.model("order", CartSchema)
module.exports = orderModel
