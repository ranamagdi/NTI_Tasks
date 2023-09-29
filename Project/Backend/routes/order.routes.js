const orderController = require("../app/controller/orders.controller")
 const {userAuth,adminAuth} = require("../app/middleware/auth.middleware")

const router = require("express").Router()


router.post("/add",userAuth, orderController.addOrder)


router.delete("/delete",adminAuth,orderController.delAllOrders)
router.delete("/delete/:id",userAuth,orderController.delSingle)

router.get("/all/:id",userAuth,orderController.showSingle)
router.get("/all",adminAuth,orderController.showAll)

router.patch("/edit/:id",userAuth,orderController.editSingle)


module.exports=router
