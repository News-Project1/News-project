const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["reader", "journalist", "admin"], default: "reader" },
    isSubscribed: { type: Boolean, default: false }, // Tracks if user has paid
    bookmarks: [{ type: Schema.Types.ObjectId, ref: "Article" }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
