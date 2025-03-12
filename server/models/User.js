const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['reader', 'journalist', 'admin'],
      default: 'reader'
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Article'
      }
    ]
  },
  {
    timestamps: true // Automatically adds createdAt & updatedAt fields
  }
);

module.exports = mongoose.model('User', userSchema);
