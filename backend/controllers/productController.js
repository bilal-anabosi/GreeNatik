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
const createProduct = async (req, res) => {
  try {
    // Ensure user is authenticated
    console.log('Request Body:', req.body);
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    const sizes = JSON.parse(req.body.sizes);
    const images = req.files.map(file => file.path);
    const productData = { ...req.body, owner: req.user.id, sizes, images };
    const newProduct = new Product(productData);

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error creating product:',error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = {
  getProducts,
  createProduct,
};

