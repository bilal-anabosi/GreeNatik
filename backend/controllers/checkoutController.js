const Checkout = require('../models/CheckoutModel');
const User = require('../models/usermodel');

async function createCheckout(req, res) {
  const { address, deliveryInstructions, paymentMethod, items } = req.body;

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
      items: items
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
