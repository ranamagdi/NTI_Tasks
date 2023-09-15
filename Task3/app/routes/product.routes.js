const router = require("express").Router()
const userController = require("../controller/product.controller")
//post method
router.get("/add", userController.add)
router.post("/add", userController.addLogic)

//all users
router.get("/", userController.showAll)
//single user
router.get("/show/:productId", userController.showSingle)
//edit user
router.get("/edit/:productId", userController.edit)
router.post("/edit/:productId", userController.editLogic)
//delete user
router.get("/delete/:productId", userController.del)

router.get("/active/:productId", userController.show_active)
router.get("/deactive/:productId", userController.show_deactive)

module.exports = router
