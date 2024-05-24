const express = require("express");
const router = express.Router();
const User = require("../models/usermodel");
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({ postStatus: "Active" }).populate({
      path: "owner",
      match: { role: "admin" },
      select: "username image",
    });

    // Filter posts to ensure only those with an 'admin' owner are included
    const filteredPosts = posts.filter((post) => post.owner);

    const formattedPosts = filteredPosts.map((post) => ({
      id: post._id,
      city: post.address.city,
      ownerUsername: post.owner.username,
      ownerImage: post.owner.image,
      title: post.title,
      requesting: post.requesting,
      pickUpDetails: post.pickUpDetails,
      percentage: post.percentage,
      quantity: post.quantity,
      details: post.moreDetails,
      date: post.createdAt,
    }));

    res.json(formattedPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
