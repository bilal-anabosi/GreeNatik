const express = require("express");
const router = express.Router();
const multer = require('multer');
const uploadMiddleware = multer({ dest: './uploads/blog' }); // Adjusted path
const fs = require('fs');
const { BlogModel } = require('../models/blog');
const path = require('path');

router.post('/', uploadMiddleware.single('file'), async (req, res) => {
    try {
        console.log('File received:', req.file);
        console.log('Form data:', req.body);

        const { originalname, path: tempPath } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = `${tempPath}.${ext}`;
        fs.renameSync(tempPath, newPath);

        const { title, summary, readingTime, blogCategory, content, metaData, blogStatus } = req.body;

        const blogDoc = await BlogModel.create({
            cover: newPath,
            title,
            summary,
            readingTime,
            blogCategory,
            content,
            metaData,
            blogStatus,
        });

        res.json(blogDoc);
    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).json({ message: 'Error creating blog' });
    }
});

module.exports = router;
