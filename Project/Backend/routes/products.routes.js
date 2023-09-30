const productController = require("../app/controller/products.controller")
 const {userAuth,adminAuth} = require("../app/middleware/auth.middleware")
 const {uploadproducts,uploadusers} = require("../app/middleware/upload.middleware")
const router = require("express").Router()


router.post("/add",adminAuth,uploadproducts.single("image"), productController.addProduct)


router.delete("/delete",adminAuth,productController.delAllProducts)
router.delete("/delete/:id",adminAuth,productController.delSingle)

router.get("/all/:id",productController.showSingle)
router.get("/all",productController.showAll)
router.get('/showFamily',productController.showFamily)
router.get('/showCook',productController.showCook)
router.get('/showEconomic',productController.showEconomic)



router.patch("/edit/:id",adminAuth,productController.editSingle)

router.post("/uploadimg", adminAuth, uploadproducts.single("image"), productController.uploadimg)
module.exports=router
