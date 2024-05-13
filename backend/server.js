const express = require('express');
const cors = require('cors');
// Make sure the path matches the location of your productRoutes file

const productRoutes = require('./routes/productRoutes'); 
const userRouter = require('./routes/user.router.js');
const profileRouter = require('./profile/profile.router.js');

const connectDB = require('./DB/connection');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(express.urlencoded());
const PORT = process.env.PORT || 4000;

connectDB();
app.use(cors({
    origin: 'https:http://localhost:4000'
}));

app.use('/api/products', productRoutes);
app.use('/user', userRouter);
app.use('/profile', profileRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
