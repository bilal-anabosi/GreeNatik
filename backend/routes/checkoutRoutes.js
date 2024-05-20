const express = require('express');
const router = express.Router();
const { authenticateToken,authorizeRoles } = require('../middelware/auth');
const { createCheckout } = require('../controllers/checkoutController');

router.post('/', authenticateToken,authorizeRoles(['user']) ,createCheckout);

module.exports = router;
