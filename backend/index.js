const express = require('express');
const cors = require('cors');
const path = require('path');
// Make sure the path matches the location of your productRoutes file

const productRoutes = require('./routes/productRoutes.js'); 
const userRouter = require('./routes/user.router.js');
const profileRouter = require('./profile/profile.router.js');

const connectDB = require('./DB/connection.js');
require('dotenv').config();


const app = express();

const pth= path.join(__dirname, 'uploads')
app.use(express.static(pth));

app.use(express.json());
app.use(express.urlencoded());

const PORT = process.env.PORT || 4000;

connectDB();
app.use(cors());

app.use('/api/products', productRoutes);
app.use('/user', userRouter);
app.use('/profile', profileRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
