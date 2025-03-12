const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    videoUrl: { type: String, required: true }, // URL of video file
    thumbnail: { type: String }, // Preview image for the video
    categoryIds: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    isPremium: { type: Boolean, default: true }, // True = requires subscription
    views: { type: Number, default: 0 }, // Track views
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Video', videoSchema);
