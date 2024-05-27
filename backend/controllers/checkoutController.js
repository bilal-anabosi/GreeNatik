const Checkout = require('../models/CheckoutModel');
const User = require('../models/usermodel');
const Product = require('../models/Product');

const generateOrderNumber = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  let orderNumber = "";
  for (let i = 0; i < 2; i++) {
    orderNumber += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  for (let i = 0; i < 2; i++) {
    orderNumber += digits.charAt(Math.floor(Math.random() * digits.length));
  }
  return orderNumber;
};

async function getCheckoutDetails(req, res) {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  const userId = req.user.id;
  try {
    const checkouts = await Checkout.find({ user: userId }).populate('items.productId');

    const checkoutDetails = checkouts.map(checkout => {
      const itemsDetails = checkout.items.map(item => ({
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: item.quantity,
        size: item.size,
      }));

      return {
        status: checkout.status,
        checkoutDate: checkout.createdAt,
        items: itemsDetails,
        numOrder: checkout.numOrder,
        totalAmount: checkout.total
      };
    });

    res.status(200).json(checkoutDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Could not retrieve checkout details", error: error.message });
  }
}

async function createCheckout(req, res) {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: "User not authenticated" });
  }
  const { address, deliveryInstructions, paymentMethod, items, totalAfterDiscount } = req.body;

  const userId = req.user.id;

  try {
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Items are required" });
    }

    const productDetails = await Promise.all(items.map(async (item) => {
      if (!item.productId || !item.size || !item.quantity) {
        throw new Error('Product ID, size, and quantity are required for each item');
      }

      const product = await Product.findById(item.productId);
      if (!product) {
        throw new Error(`Product with ID ${item.productId} not found`);
      }

      const sizeDetails = product.sizes.find(size => size.size === item.size);
      if (!sizeDetails) {
        throw new Error(`Size ${item.size} not found for product with ID ${item.productId}`);
      }

      if (sizeDetails.quantity < item.quantity) {
        throw new Error(`Insufficient quantity for size ${item.size} of product with ID ${item.productId}`);
      }

      sizeDetails.quantity -= item.quantity; // Decrement the quantity

      await product.save(); // Save the updated product

      return {
        productId: product._id,
        name: product.title,
        size: item.size,
        quantity: item.quantity,
        price: sizeDetails.regularPrice,
        image: product.images[0],
      };
    }));

    const checkout = await Checkout.create({
      user: userId,
      address: address,
      deliveryInstructions: deliveryInstructions,
      paymentMethod: paymentMethod,
      items: productDetails,
      numOrder: generateOrderNumber(),
      total: totalAfterDiscount,
    });

    const user = await User.findById(userId);
    user.cart = [];
    await user.save();

    res.status(201).json(checkout);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Could not create checkout", error: error.message });
  }
}

module.exports = { createCheckout, getCheckoutDetails };
