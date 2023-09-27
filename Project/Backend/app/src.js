const express=require("express")
const app=express()
const cors=require("cors")
const path=require("path")

app.use(cors())
app.use(express.static(path.join(__dirname,"../public")))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const userRoutes = require("../routes/users.routes")
app.use("/users",userRoutes)

const productRoutes = require("../routes/products.routes")
app.use("/products",productRoutes)

const orderRoutes = require("../routes/order.routes")
app.use("/orders",orderRoutes)

module.exports=app
