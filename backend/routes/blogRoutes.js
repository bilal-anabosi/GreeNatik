const express = require("express");
const router = express.Router();
const multer = require('multer');
const uploadMiddleware = multer({ dest: '../uploads/blog' }); 
const fs = require('fs');
const { BlogCard } = require('../models/blog');
const { param } = require('express-validator'); // Correct import

// Fetch all blogs
router.get('/', async (req, res) => {
    console.log('Fetching blogs...');
    try {
        const blogs = await BlogCard.find();
        console.log('Blogs fetched:', blogs);
        res.json(blogs);
    } catch (err) {
        console.error('Error fetching blogs:', err);
        res.status(500).json({ message: 'Error fetching blogs' });
    }
});

// Fetch a single blog by ID
router.get('/:id', param('id').isMongoId(), getBlog, (req, res) => {
    res.json(res.blog);
});

// Middleware to get a blog by ID
async function getBlog(req, res, next) {
    let blog;
    try {
        blog = await BlogCard.findById(req.params.id);
        if (blog == null) {
            return res.status(404).json({ message: 'Cannot find blog' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.blog = blog;
    next();
}

module.exports = router;
