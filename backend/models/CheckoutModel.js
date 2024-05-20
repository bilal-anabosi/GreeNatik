const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const checkoutSchema = new Schema(
  {
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true, 
    },
    address: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      addressLine1: {
        type: String,
        required: true,
      },
      addressLine2: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zip: {
        type: String,
        required: true,
      },
       businessName: {
        type: String,
        required: false,
      },

    },
    deliveryInstructions: {
        type: String,
        required: false,
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ['cashonDelivery', 'Credit / Debit Card', 'Pay with Payoneer', 'Cash on Delivery']
    },
    totalPoints: {
      type: Number,
      default: 300,
    },

    items: [
      {
        name: {
          type: String,
          required: true,
        },
        description: {
            type: String,
            required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        image: {
            type:String,
            required:false
        },
      },
    ],
    totalAfterDiscount: {
        type: Number,
        default: 0, 
      },
     
    },
    {
      timestamps: true,
    }
);

const Checkout = model("Checkout", checkoutSchema);

module.exports = Checkout;