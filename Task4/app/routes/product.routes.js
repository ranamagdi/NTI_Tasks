const router = require("express").Router()
const productController = require("../controller/product.controller")
//post method
router.get("/add", productController.add)
router.post("/add", productController.addLogic)

//all users
router.get("/", productController.showAll)
// //single user
router.get("/show/:productId", productController.showSingle)
// //edit user
router.get("/edit/:productId", productController.edit)
router.post("/edit/:productId", productController.editLogic)
// router.get("/toggleStatus/:productId", productController.toggleStatusProduct);
// //delete user
router.get("/delete/:productId", productController.del)

// router.get("/active", productController.show_active)
// router.get("/deactive", productController.show_deactive)

module.exports = router
