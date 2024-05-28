const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  cover: {
    type: String,
    required: true
  },
  title: {
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
    type: String,
    enum: ['LifeStyle', 'Climate Change', 'Eco-friendly', 'Recycle', 'Family']
  },
  content: {
    type: String
  },
  metaData: {
    type: String
  },
  blogStatus: {
    type: String,
    enum: ['Published', 'Draft'],
    default: 'Draft'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
}, {
  timestamps: true
});

const BlogModel = mongoose.model('Blog', BlogSchema);
module.exports = BlogModel;
