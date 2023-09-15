const express=require("express")
const path = require("path")
const hbs = require("hbs")

const app = express()

app.use(express.urlencoded({extended:true}))

const staticDir = path.join(__dirname, "../public")
const viewDir = path.join(__dirname, "../resources/views")
const partialDir = path.join(__dirname, "../resources/layouts")

app.use( express.static(staticDir) )
app.set("view engine", "hbs")
app.set("views", viewDir)
hbs.registerPartials(partialDir)

const productRoutes = require("./routes/product.routes")

app.use(productRoutes)

app.get("*", (req,res)=>{
    res.render('err404')
})
module.exports = app
