const multer = require('multer');
const fs = require('fs');
const BlogModel = require('../models/blog'); // Ensure correct import

const uploadMiddleware = multer({ dest: '../uploads/blog' });

const createNewBlog = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { originalname, path: tempPath } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = `${tempPath}.${ext}`;
    fs.renameSync(tempPath, newPath);

    const { title, summary, readingTime, blogCategory, content, metaData, blogStatus } = req.body;

    const blogData = {
      cover: newPath,
      title,
      summary,
      readingTime,
      blogCategory,
      content,
      metaData,
      blogStatus,
      owner: req.user.id
    };

    const newBlog = new BlogModel(blogData);
    const savedBlog = await newBlog.save();

    res.status(201).json(savedBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const fetchAllBlogs = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const blogs = await BlogModel.find({ owner: req.user.id });
    res.status(200).json({ blogs });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const fetchAllBlogsPublic = async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    console.log('Fetched blogs:', blogs); // Log the fetched blogs
    res.status(200).json({ blogs });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message }); // Include the error message in the response
  }
};

const fetchBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await BlogModel.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json({ blog });
  } catch (error) {
    console.error('Error fetching blog by ID:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message }); // Include the error message in the response
  }
};

const updateBlog = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const blogId = req.params.id;
    const updatedData = { ...req.body };

    if (req.file) {
      const { originalname, path: tempPath } = req.file;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];
      const newPath = `${tempPath}.${ext}`;
      fs.renameSync(tempPath, newPath);
      updatedData.cover = newPath;
    }

    const updatedBlog = await BlogModel.findByIdAndUpdate(blogId, updatedData, { new: true });

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json({ updatedBlog });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message }); // Include the error message in the response
  }
};

module.exports = {
  createNewBlog,
  fetchAllBlogs,
  fetchAllBlogsPublic,
  fetchBlogById,
  updateBlog,
};
