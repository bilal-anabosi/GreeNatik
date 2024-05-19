const express = require('express');
const cors = require('cors');
const path = require('path');
// Make sure the path matches the location of your productRoutes file

const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/user.router.js');
const profileRouter = require('./profile/profile.router.js');
const PostRoutes = require('./routes/singlepostRoutes.js');
const StoreRoutes = require('./routes/StoreRoutes');
const WishlistRoutes=require('./routes/wishlistRoutes.js')
const connectDB = require('./DB/connection');
const { authenticateToken } = require('./middelware/auth');
require('dotenv').config();


const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 4000;

connectDB();
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/user', userRouter);
app.use('/profile', profileRouter);
app.use('/api/products', authenticateToken, productRouter);
app.use('/posts', PostRoutes);
app.use('/store',StoreRoutes );
app.use('/wishlist',WishlistRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
