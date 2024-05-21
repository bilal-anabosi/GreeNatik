const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middelware/auth');
const reviewsModel = require('../models/reviewsModel');

router.get('/:productId', authenticateToken, async (req, res) => {
    try {
        const reviews = await reviewsModel.find({ product: req.params.productId }).populate('user');
        res.json(reviews ? reviews : []);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.post('/:productId', authenticateToken, async (req, res) => {
    try {
        const { rating, comment } = req.body;
        const review = new reviewsModel({
            product: req.params.productId,
            user: req.user.id,
            rating,
            comment
        });
        await review.save();
        res.json(review);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;

