const express = require("express");
const router = express.Router();
const multer = require('multer');
const { BlogCard } = require('../models/blog');

const uploadMiddleware = multer({ dest: '../uploads/blog' }); 
const fs = require('fs');

router.get('/single-blog/:id', async(req,res)=>{
  const {id} =req.params;
  try {
    const blogDoc = await BlogCard.findById(id).populate();
    res.json(blogDoc); // Make sure to send the response
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
