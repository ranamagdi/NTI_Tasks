
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


    static show_active =async(req,res)=>{

        let allProducts= await productModle.find()
        if(req.query.searchKey){
            allProducts = await productModle.find({'name':{'$regex':req.query.searchKey,'$options':'i'}}||
           {'barcode':{'$regex':req.query.searchKey,'$options':'i'}})


        }
        let activeProducts=await productModle.find({status:"active"})
        // let activeProducts = allProducts.filter((p) => p.status == "active");

        res.render("showActive", {
            pageTitle: "Active Products",
            allProducts:activeProducts,
            hasproducts: activeProducts.length,

        })
    }
    static show_deactive = async (req,res)=>{
        let allProducts= await productModle.find()
        if(req.query.searchKey){
            allProducts = await productModle.find({'name':{'$regex':req.query.searchKey,'$options':'i'}}||
           {'barcode':{'$regex':req.query.searchKey,'$options':'i'}})


        }
        let deactiveProducts=await productModle.find({status:"deactive"})
        // let activeProducts = allProducts.filter((p) => p.status == "active");
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

    static toggleStatusProduct = async(req, res) => {

        let allProducts= await productModle.findById(req.params.productId)
        // console.log(index)
        if (allProducts.status == 'active') {

          allProducts.status = "deactive";
          await allProducts.save()
          Product.show_active(req, res);
        } else {
          allProducts.status = "active";
          await allProducts.save()
          Product.show_deactive(req, res);
        }

      };


}

module.exports = Product
