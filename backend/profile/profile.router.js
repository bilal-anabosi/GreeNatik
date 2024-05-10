const { Router } = require("express");
const controller = require('../profile/profile.controller');
const auth = require('../middelware/auth.js');


const router = Router();

router.get('/',auth.authenticateToken,controller.profile);
//router.get('/a',auth.authenticateToken,auth.authorizeRoles(['admin']),controller.(req,res)=>{
   // return res.json ({massage:"done"})
//});





module.exports = router;