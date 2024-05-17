const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRoles } = require('../middelware/auth');
const { getProducts,createProduct } = require('../controllers/productController');
const upload = require('../middelware/upload');

// Route to fetch products
router.get('/', authenticateToken, authorizeRoles(['admin']), getProducts);
router.post('/', authenticateToken,authorizeRoles(['admin']), upload.array('images', 10), createProduct);


module.exports = router;

