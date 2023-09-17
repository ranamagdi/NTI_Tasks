const DealWithJson = require("../helper/dealWithJson.helper")

class Product{

    static searchProducts = (req, res, productData) => {
        const searchKey = req.query.searchKey;
        const allProducts = productData;
        if (allProducts && searchKey) {
          const filteredProducts = allProducts.filter((p) => {
            return (
              p.name.toUpperCase().includes(searchKey.toUpperCase()) ||
              p.barcode.toString().includes(searchKey)
            );
          });
          return filteredProducts;
        }
      };
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
            allProducts = Product.searchProducts(req, res, allProducts);
        }
        res.render("home", {
            pageTitle: "All Products",
            allProducts,
            hasproducts: allProducts.length
        })
    }

    static show_active = (req,res)=>{
        const allProducts = DealWithJson.readFromJSON();
        let activeProducts = allProducts.filter((p) => p.status == "active");
        if (req.query.searchKeyh) {
        activeProducts = Product.searchProducts(req, res, activeProducts);
        }
        res.render("showActive", {
            pageTitle: "Active Products",
            allProducts:activeProducts,
            hasproducts: activeProducts.length,

        })
    }
    static show_deactive = (req,res)=>{
        const allProducts = DealWithJson.readFromJSON();
        let deactiveProducts = allProducts.filter((p) => p.status == "deactive");
        if (req.query.searchKeyh) {
        deactiveProducts = Product.searchProducts(req, res, deactiveProducts);
        }

        res.render("showDeactive", {
            pageTitle: "Deactive Products",
            allProducts:deactiveProducts,
            hasproducts: deactiveProducts.length,

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
            isActive: allProducts[index].status=='active'

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

    static toggleStatusProduct = (req, res) => {
        const id = req.params.productId
        const allProducts = DealWithJson.readFromJSON()
        const index = allProducts.findIndex( product => product.id == id )
        console.log(index)
        if (allProducts[index].status == 'active') {

          allProducts[index].status = "deactive";
          DealWithJson.writeToJSON(allProducts);
          Product.show_active(req, res);
        } else {
          allProducts[index].status = "active";
          DealWithJson.writeToJSON(allProducts);
          Product.show_deactive(req, res);
        }

      };


}

module.exports = Product
