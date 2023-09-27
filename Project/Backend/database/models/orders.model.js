const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({

    orderDate:{
        type:Date,
        max:new Date,
        min:"2015-1-1",
        required:true
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
    products:{
        type:[],
        ref:"product",
        required:true
    }






},

{
    timestamps : true
}
)




const orderModel = new mongoose.model("order", orderSchema)
module.exports = orderModel
