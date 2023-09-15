const DealWithJson = require("../helper/dealWithJson.helper")

class product{
    static add = (req, res)=> {
        res.render("add", {
            pageTitle: "add Product"
        })
    }

    static addLogic = (req, res)=>{
        const productsData = {id: Date.now(), ...req.body }
        const allProducts = DealWithJson.readFromJSON()
        allProducts.push(productsData)
        DealWithJson.writeToJSON(allProducts)
        res.redirect("/")
    }


    static showAll = (req,res)=>{
        let allProducts = DealWithJson.readFromJSON()
        // console.log(allProducts)
        if(req.query.searchKey){
            allProducts = allProducts.filter( u=>{
                u.name.includes(req.query.searchKey)||
                u.barcode.includes(req.query.searchKey)
            } )
        }
        res.render("home", {
            pageTitle: "All Products",
            allProducts,
            hasproducts: allProducts.length
        })
    }

    static show_active = (req,res)=>{
        const allProducts = DealWithJson.readFromJSON()
        const id = req.params.productId
        const index = allProducts.findIndex( product => product.id == id )
        // console.log(allProducts)
        if(req.query.searchKey){
            allProducts = allProducts.filter( u=>{
                u.name.includes(req.query.searchKey)||
                u.barcode.includes(req.query.searchKey)
            } )
        }
        res.render("showActive", {
            pageTitle: "Active Products",
            allProducts,
            hasproducts: allProducts.length,
            isActive: allProducts[index].status=='Active'
        })
    }
    static show_deactive = (req,res)=>{
        let allProducts = DealWithJson.readFromJSON()
        const id = req.params.productId
        const index = allProducts.findIndex( product => product.id == id )
        // console.log(allProducts)
        if(req.query.searchKey){
            allProducts = allProducts.filter( u=>{
                u.name.includes(req.query.searchKey)||
                u.barcode.includes(req.query.searchKey)
            } )
        }
        res.render("showDeactive", {
            pageTitle: "Deactive Products",
            allProducts,
            hasproducts: allProducts.length,
            isActive: allProducts[index].status=='Active'
        })
    }
    static showSingle = (req, res)=> {
        const id = req.params.productId
        const allProducts = DealWithJson.readFromJSON()
        const index = allProducts.findIndex( product => product.id == id )
        if(index == -1 ) res.send("product not found")
        res.render("show", {
            pageTitle: "Single Product",
            productsData: allProducts[index]
        })
    }
    static edit = (req, res)=> {
        const id = req.params.productId
        const allProducts = DealWithJson.readFromJSON()
        const index = allProducts.findIndex( product => product.id == id )
        if(index == -1 ) res.send("product not found")
        res.render("edit",  {
            pageTitle: "edit Product",
            productsData: allProducts[index],
            isActive: allProducts[index].status=='Active'

        })
    }
    static editLogic = (req,res)=>{
        const id = req.params.productId
        const allProducts = DealWithJson.readFromJSON()
        const index = allProducts.findIndex( product => product.id == id )
        if(index == -1 ) res.send("product not found")
        allProducts[index]= {id, ...req.body}
        DealWithJson.writeToJSON(allProducts)
        res.redirect("/")
    }
    static del = (req, res)=> {
        const id = req.params.productId
        const allProducts = DealWithJson.readFromJSON()
        const index = allProducts.findIndex( product => product.id == id )
        if(index == -1 ) res.send("product not found")
        allProducts.splice(index, 1)
        DealWithJson.writeToJSON(allProducts)
        res.redirect("/")
    }
}

module.exports = product
