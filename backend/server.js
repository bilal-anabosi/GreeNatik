const express = require('express');
const cors = require('cors');
// Make sure the path matches the location of your productRoutes file
const productRoutes = require('./routes/productRoutes'); 
const connectDB = require('./DB/connection');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 4000;

connectDB();
app.use(cors());
app.use(express.json()); // for parsing application/json

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
