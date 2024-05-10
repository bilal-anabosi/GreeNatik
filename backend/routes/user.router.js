const { Router } = require("express");
const controller = require('../controllers/user.controller.js');


const router = Router();
router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.patch('/sendcode',controller.sendcode);
router.patch('/forgetpassword',controller.forgetpassword);




module.exports = router;