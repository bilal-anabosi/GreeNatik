// routes/SinglepostRoutes.js

const express = require('express');
const controllerPost = require("../controllers/singlepostController");
const { createPost, likePost } = require('../controllers/singlepostController'); // Import the createPost controller function
const {authenticateToken,authorizeRoles} = require('../middelware/auth');
// Route: POST /api/posts
// Create a new post
const router = express.Router();

router.post('/forms', authenticateToken, authorizeRoles(['user']), controllerPost.createPost );
router.post('/:id/like', authenticateToken, authorizeRoles(['user']), controllerPost.likePost);


module.exports = router;