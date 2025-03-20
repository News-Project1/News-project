const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },  // البريد الإلكتروني يجب أن يكون فريدًا
});

module.exports = mongoose.model('Subscriber', subscriberSchema);
