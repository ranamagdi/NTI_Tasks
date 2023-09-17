const mongoose=require('mongoose')
const validator=require('validator')
const productModle=mongoose.model('product',{
    name:{
        type:String,
        trim:true,
        minLength:3,
        maxLength:20,
        required:true,
    },
    barcode:{
        type:Number,
        length:6,
        required:true,
        unique:true,

    },
    description:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50,

    },
    pricebefore:{
        type:Number,
        required:true,


    },
    priceafter:{
        type:Number,
        required:true,

    },
    status:{
        type:String,
        required:true,
    }


})
module.exports=productModle
