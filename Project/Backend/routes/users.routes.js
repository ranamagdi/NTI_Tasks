const userController = require("../app/controller/users.controller")
 const {userAuth,adminAuth} = require("../app/middleware/auth.middleware")
 const {uploadproducts,uploadusers} = require("../app/middleware/upload.middleware")
const router = require("express").Router()

router.post("/add", userController.addUser)
router.post("/addAdmin",adminAuth, userController.addAdmin)

router.post("/login", userController.login)
router.post("/logout",userAuth, userController.logOut)

router.delete("/delete",adminAuth,userController.delAllUsers)
router.delete("/delete/:id",adminAuth,userController.delSingle)

router.get("/all/:id",adminAuth,userController.showSingle)
router.get("/all",adminAuth,userController.showAll)
router.get("/myprofile",userAuth,userController.myProfile)

router.patch("/edit/:id",userAuth,userController.editSingle)

router.post("/uploadimg", userAuth, uploadusers.single("img"), userController.uploadimg)


module.exports=router
