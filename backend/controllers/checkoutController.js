const Checkout = require('../models/CheckoutModel');
const User = require('../models/usermodel');

// Function to generate random order number
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

async function createCheckout(req, res) {
  const { address, deliveryInstructions, paymentMethod, items, totalAfterDiscount } = req.body;

  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  const userId = req.user.id;

  try {
    const checkout = await Checkout.create({
      user: userId,
      address: address,
      deliveryInstructions: deliveryInstructions,
      paymentMethod: paymentMethod,
      items: items,
      numOrder: generateOrderNumber(), // Generates the random order number
      total: totalAfterDiscount // Store the total after discount
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

module.exports = {
  createCheckout
};
