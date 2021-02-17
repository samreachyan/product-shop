const express = require('express')
const addOrderItems = require('../controller/orderController')
const protect = require('../middleware/authMiddleware')
const router = express.Router()

router.route('/').post(protect, addOrderItems)

module.exports = router