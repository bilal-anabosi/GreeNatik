// controllers/postController.js
const Post = require('../models/SinglePostModel'); // Import your Post model

// Controller function to input the formation
const createPost = async (req, res) => {
    try {
        
        // Extract data from request body
        const { material, quantity, condition, notes, city, street, zip, date, time } = req.body;

        // Create a new post object
        const newPost = new Post({
            contributers: {
                material,
                quantity,
                condition,
                notes,
                city,
                street,
                zip,
                date,
                time
            }
        });

        // Save the new post to the database
        await newPost.save();

        // Send a success response
        res.status(201).json({ success: true, message: 'Post created successfully', post: newPost });
    } catch (error) {
        // If an error occurs, send a 500 status response with the error message
        console.error('Error creating post:', error);
        res.status(500).json({ success: false, message: 'Failed to create post', error: error.message });
    }
};

const likePost = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params; // postId

        const post = await Post.findByIdAndUpdate(id, {
            $addToSet: {
                likes: userId,
            },
        }, 
        {
            new: true,
        });

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        return res.status(200).json({ message: "Success", post });
    } catch (error) {
        return res.json(error);
    }
};

module.exports = {
    createPost,likePost
};