const mongoose = require ('mongoose');
const {Schema, model}= mongoose;


const newBlogSchema= new mongoose.Schema ({
  cover:{
    type: String,
    required: true
  },
  title:{
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  readingTime: {
    type: String,
    required: true
  },
  blogCategory: {
    type: String
  },
  content: {
    type: String
  },
  metaData: {
    type: String
  },
  blogStatus: {
    type: String
  }

}, {
  timestamps: true,
});

const BlogCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  tag: { type: String, required: true },
  timestamp: { type: String, required: true },
  readtime: { type: String, required: true }
});

const BlogModel= model ('Blog', newBlogSchema);
const BlogCard= model ('BlogCard', BlogCardSchema)
module.exports= {BlogModel, BlogCard};
