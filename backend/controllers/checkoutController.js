const { response } = require('express');
const Checkout = require('../models/CheckoutModel');
const User = require('../models/usermodel');
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
};async function getCheckoutDetails(req, res) {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  const userId = req.user.id;

  try {
    const checkouts = await Checkout.find({ user: userId }).populate('items'); 

    const checkoutDetails = checkouts.map(checkout => {
      const itemsDetails = checkout.items.map(item => ({
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image,
        quantity: item.quantity
      }));

      return {
        status: checkout.status, // Access the status property from checkout
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
      total: totalAfterDiscount 
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
  createCheckout,
  getCheckoutDetails
};
