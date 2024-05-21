const express = require('express');
const router = express.Router();
const { authenticateToken,authorizeRoles } = require('../middelware/auth');
const { createCheckout, getCheckoutDetails } = require('../controllers/checkoutController');

router.post('/', authenticateToken,authorizeRoles(['user']) ,createCheckout);
router.get('/details', authenticateToken, authorizeRoles(['user']),  getCheckoutDetails);

module.exports = router;
