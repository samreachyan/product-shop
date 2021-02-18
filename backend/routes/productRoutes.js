const express = require('express')
const { getProducts, getProductById, deleteProduct, updateProduct } = require('../controller/productController')
const { protect, admin } = require('../middleware/authMiddleware')
const router = express.Router()

router.route('/').get(getProducts)
router.route('/:id')
        .get(getProductById)
        .delete(protect, admin, deleteProduct)
        .put(protect, admin, updateProduct)
        .delete(protect, admin, deleteProduct)

module.exports = router