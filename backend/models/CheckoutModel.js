const mongoose = require("mongoose");
const { Schema, model } = mongoose;

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

const checkoutSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User', 
      required: true, 
    },
    address: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      addressLine1: { type: String, required: true },
      addressLine2: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
      businessName: { type: String, required: false },
    },
    deliveryInstructions: { type: String, required: false },
    paymentMethod: {
      type: String,
      required: true,
      enum: ['cashonDelivery', 'Credit / Debit Card', 'Pay with Payoneer', 'Cash on Delivery','Payment with Paypal']
    },
    totalPoints: { type: Number, default: 300 },
    items: [
      {
        name: { type: String, required: true },
        description: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: false }
      }
    ],
    numOrder: {
      type: String,
      required: true,
      default: generateOrderNumber
    },
    total: { type: Number, default: 0.0 }
  },
  {
    timestamps: true,
  }
);

const Checkout = model("Checkout", checkoutSchema);

module.exports = Checkout;
