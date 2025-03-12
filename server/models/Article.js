// models/Article.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    featuredImage: {
      type: String
    },
    media: [
      {
        type: String
      }
    ],
    categoryIds: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Category'
      }
    ],
    tags: [
      {
        type: String
      }
    ],
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    status: {
      type: String,
      enum: ['pending', 'published', 'rejected'],
      default: 'pending'
    },
    publishDate: {
      type: Date
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    reports: [
      {
        reportedBy: {
          type: Schema.Types.ObjectId,
          ref: 'User'
        },
        reason: {
          type: String
        },
        createdAt: {
          type: Date,
          default: Date.now
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Article', articleSchema);
