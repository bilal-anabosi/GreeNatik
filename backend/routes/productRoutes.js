const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRoles } = require('../middelware/auth');
const { getProducts } = require('../controllers/productController');

// Route to fetch products
router.get('/', authenticateToken, authorizeRoles(['admin']), getProducts);

module.exports = router;

