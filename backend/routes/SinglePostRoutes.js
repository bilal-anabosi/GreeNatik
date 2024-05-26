const express = require('express');
const router = express.Router();
const { getPostDetailsById } = require('../controllers/SinglePostController');
const { createContribution } = require('../controllers/SinglePostController');
const {  likePost,getLikedPosts } = require('../controllers/SinglePostController');
const { authenticateToken } = require('../middelware/auth');


// Route to get post details by ID
router.get('/:postId', getPostDetailsById);

// Route for creating a new contribution
router.post('/:postId/contributions', authenticateToken, createContribution);

// Route for Change like status
router.post('/:postId/likes', authenticateToken , likePost);


router.post('/likedposts', getLikedPosts);

module.exports = router;
