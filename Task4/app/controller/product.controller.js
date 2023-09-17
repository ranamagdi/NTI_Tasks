
const productModle=require('../db/module/module')
class Product{


    static add = (req, res)=> {
        res.render("add", {
            pageTitle: "add Product"
        })
    }

    static addLogic =async(req, res)=>{
        try{
            const productData=new productModle(req.body)
            await productData.save()
            res.send(productData)

        }
        catch(e){
            res.render("add", {
                errors:e.errors,
                pageTitle: "add product error",
                productData:req.body
            })
          }

    }


    static showAll = async(req,res)=>{

        try{

                let allProducts= await productModle.find()
                if(req.query.searchKey){
                    allProducts = await productModle.find({'name':{'$regex':req.query.searchKey,'$options':'i'}}||
                   {'barcode':{'$regex':req.query.searchKey,'$options':'i'}})


                }
                res.render("home", {
                    pageTitle: "All Products",
                    allProducts,
                    hasproducts: allProducts.length
                })

        }
        catch(e){
            res.send(e)
          }

    }

    static showSingle =async(req,res)=>{
        try{

            const productsData= await productModle.findById(req.params.productId)

            res.render("show", {
                pageTitle: "Single Product",
                productsData
            })

    }
    catch(e){
        res.send(e)
      }

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

    static edit = async(req, res)=> {
        try{
               const productsData= await productModle.findById(req.params.productId)
                res.render("edit",  {
                    pageTitle: "edit Product",
                    productsData
                })

        }
        catch(e){
            res.send(e)
          }


    }
    static editLogic =async(req,res)=>{
        try{
              await productModle.findByIdAndUpdate(req.params.productId,req.body,{runValidators:true})

                res.redirect('/')

        }
        catch(e){
            res.render("edit", {
                errors:e.errors,
                pageTitle: "edit product error",
                productData:req.body
            })
          }

    }
    static del = async(req, res)=> {
        try{

               await productModle.findByIdAndDelete(req.params.productId)
                // console.log(userData)
                res.redirect('/')

        }
        catch(e){
            res.send(e)
          }

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
