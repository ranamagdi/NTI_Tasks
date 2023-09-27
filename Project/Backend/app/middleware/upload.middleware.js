const multer  = require('multer')
const uploadusers = multer({ dest: 'public/uploads/users' })
const uploadproducts = multer({ dest: 'public/uploads/products' })
module.exports = {uploadproducts,uploadusers}
