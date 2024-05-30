const express = require('express');
const router = express.Router();
const { getAllBlogs,getBlogById, getUserBlogs,createBlog } = require('../controllers/blogController');
const { authenticateToken, authorizeRoles } = require('../middelware/auth');
const uploadBlog = require('../middelware/uploadBlog');

router.get('/user-blogs', authenticateToken,authorizeRoles(['admin']), getUserBlogs);
router.post('/create-new-blog', authenticateToken, authorizeRoles(['admin']), uploadBlog.single('cover'), createBlog);
router.get('/blogs', getAllBlogs);
router.get('/blogs/:id', getBlogById);

module.exports = router;
