const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // this field is mandatory
        trim: true, // trims whitespace from the ends
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price cannot be negative'] // validation to ensure price is not negative
    },
    inStock: {
        type: Boolean,
        default: true // products are in stock by default
    },
    category: {
        type: String,
        required: true,
        enum: ['Electronics', 'Clothing', 'Accessories', 'Books', 'Home & Kitchen'], // Only these categories are allowed
    },
    imageUrl: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now // default to the current date and time
    },
    tags: [{
        type: String
    }]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
