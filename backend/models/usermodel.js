const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      required: true,
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },

    address: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
    },
    sendCode: {
      type: String,
      default: null,
    },
    cart: {
      type: [
        {
          productId: {
            type: Schema.Types.ObjectId,
            ref: "products",
            required: true,
          },
          quantity: { type: Number, default: 1, required: false },
          size: {
            type: String,
            required: true,
          },
        },
      ],
      default: function () {
        // Check if the user's role is 'user', initialize cart as empty array
        if (this.role === "user") {
          return [];
        }
      },
    },
    
  },
  {
    timestamps: true,
  }
);

const userModel = model("user", userSchema);

module.exports = userModel;
