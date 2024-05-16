const Product = require('../models/Product');

// Fetch latest products
const getLatestProducts = async (req, res) => {
  try {
    const latestProducts = await Product.find()
                                        .sort({ createdAt: -1 })
                                        .limit(5);

    // Send the latest products in the response
    res.status(200).json({ latestProducts });
  } catch (error) {
    // Handle errors
    console.error('Error fetching latest products:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Fetch latest products with sale 
const getLatestProductsWithSale = async (req, res) => {
  try {

    const latestProductsWithSale = await Product.find({ salePrice: { $exists: true, $ne: null } })
                                                .sort({ createdAt: -1 })
                                                .limit(5);

    // Send the latest products with sale in the response
    res.status(200).json({ latestProductsWithSale });
  } catch (error) {
    // Handle errors
    console.error('Error fetching latest products with sale:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Fetch top selling products controller
const getTopSellingProducts = async (req, res) => {
  try {
    // Search for top selling products
    const topSellingProducts = await Product.find({ salePrice: { $exists: true, $ne: null } })
                                            .sort({ salesCount: -1 }); // Sort by sales count in descending order

    // Send the top selling products in the response
    res.status(200).json({ topSellingProducts });
  } catch (error) {
    // Handle errors
    console.error('Error fetching top selling products:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports = {
  getLatestProducts, getLatestProductsWithSale, getTopSellingProducts
};