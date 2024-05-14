const Product = require('../models/Product');

// Fetch products controller
const getProducts = async (req, res) => {
  try {
    // Ensure user is authenticated and has the admin role
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ message: "Not authorized" });
    }
    
    // Search for products owned by the specific user ID
    const products = await Product.find({ owner: req.user.id });

    
    // Send the products in the response
    res.status(200).json({ products });
  } catch (error) {
    // Handle errors
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getProducts,
};
