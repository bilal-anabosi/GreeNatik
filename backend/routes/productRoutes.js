const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRoles } = require('../middelware/auth');
const { getProducts,createProduct } = require('../controllers/productController');

// Route to fetch products
router.get('/', authenticateToken, authorizeRoles(['admin']), getProducts);
router.post('/', authenticateToken,authorizeRoles(['admin']), createProduct);

module.exports = router;

