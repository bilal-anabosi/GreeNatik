const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRoles } = require('../middelware/auth');
const { createNewBlog, fetchAllBlogs, fetchBlogById, validateBlogId, uploadMiddleware } = require('../controllers/blogController');

// Route to create a new blog
router.post('/create-new-blog', authenticateToken, authorizeRoles(['admin', 'author']), uploadMiddleware.single('file'), createNewBlog);

// Route to fetch all blogs
router.get('/', fetchAllBlogs);

// Route to fetch a single blog by ID
router.get('/:id', validateBlogId, fetchBlogById, (req, res) => {
    res.json(res.blog);
});

module.exports = router;
