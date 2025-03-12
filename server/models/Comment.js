const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    article: { type: Schema.Types.ObjectId, ref: 'Article' },
    video: { type: Schema.Types.ObjectId, ref: 'Video' }, // NEW: Allows commenting on videos
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    status: { type: String, enum: ['visible', 'hidden', 'flagged'], default: 'visible' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);
