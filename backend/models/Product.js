const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['FoodWare', 'Gardening', 'Pets','Shopping bags','Office','Skin care','Electronics','Clothing','Home'],
    required: true
  }, 
  longDescription: {
    type: String,
    required: true
  },
  sizes: [{
    size: String,
    quantity: Number,
    unit: {
      type: String,
      enum: ['clothing', 'kg', 'g', 'mL', 'L', 'number']
    }
  }],
  images: [String],
  regularPrice: Number,
  salePrice: Number,
  inStock: {
    type: Boolean,
    default: true
  },
  status: {
    type: String,
    enum: ['Active', 'Disabled'],
    default: 'Active'
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now // Set default value to current date/time
  }
}, {
  timestamps: true
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
