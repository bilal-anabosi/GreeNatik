const Blog = require('../models/blogModel');

// Get all blogs for the authenticated user
const getUserBlogs = async (req, res) => {
    try {
        //role ? admin ?
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ message: "Not authorized" });
      }
        const userId = req.user.id;
        const blogs = await Blog.find({ owner: userId });
        res.status(200).json({ success: true, blogs });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error });
    }

};
const createBlog = async (req, res) => {
    try {
        const { title, content, readingTime, summary, category, status } = req.body;
        const coverPicture = req.file.path;

        const newBlog = new Blog({
            ...req.body,
            title,
            content,
            readingTime,
            coverPicture,
            summary,
            category, // Assuming the categories come as a comma-separated string
            status,
            owner: req.user.id // Assuming the user ID is added to the request by authenticateToken middleware
        });

        await newBlog.save();

        res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
    } catch (error) {
        res.status(400).json({ message: 'Error creating blog', error: error.message });
    }
};

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
  
module.exports = {
    getUserBlogs,
    createBlog,
    getAllBlogs,
    getBlogById
};
