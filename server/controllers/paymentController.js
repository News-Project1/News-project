
// const Payment = require('../models/Payment'); // موديل Payment
// const jwt = require('jsonwebtoken');
// const User = require('../models/User'); // موديل User

// // دالة لإتمام عملية الدفع
// exports.processPayment = async (req, res) => {
//   const { cardNumber, cardHolder, expiryDate, cvv } = req.body;

//   try {
//     // التحقق من التوكن
//     // const token = req.headers.authorization.split(' ')[1]; // استخراج التوكن من الـ headers
//     // const decoded = jwt.verify(token, process.env.JWT_SECRET); // فك التوكن

//     // التحقق من المستخدم في الـ database
//     // const user = await User.findById(decoded.userId);

//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }

//     // تخزين بيانات الدفع في MongoDB
//     const payment = new Payment({
//       user: user._id,
//       cardNumber,
//       cardHolder,
//       expiryDate,
//       cvv,
//     });

//     await payment.save();

//     res.status(200).json({ success: true, message: 'Payment processed successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Error processing payment' });
//   }
// };
// paymentController.js

// const jwt = require('jsonwebtoken');
const Payment = require('../models/Payment'); // موديل Payment
const jwt = require("jsonwebtoken");
require("dotenv").config();

// دالة لإتمام عملية الدفع
exports.processPayment = async (req, res) => {
  const { cardNumber, cardHolder, expiryDate, cvv } = req.body;

  try {
    // استخراج التوكن من الهيدر
    const token = req.cookies.authToken;
    if (!token) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    // فك تشفير التوكن للحصول على userId
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token Data:", decoded);
    const userId = decoded.id; // يفترض أن التوكن يحتوي على userId

    
console.log("Extracted User ID:", userId);


    // تخزين بيانات الدفع في MongoDB مع ربطها بالمستخدم
    const payment = new Payment({
      userId,
      cardNumber,
      cardHolder,
      expiryDate,
      cvv,
    });

    await payment.save();

    res.status(200).json({ success: true, message: 'Payment processed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error processing payment' });
  }
};








// const Payment = require('../models/Payment'); // موديل Payment

// // دالة لإتمام عملية الدفع
// exports.processPayment = async (req, res) => {
//   const { cardNumber, cardHolder, expiryDate, cvv } = req.body;

//   try {
//     // تخزين بيانات الدفع في MongoDB
//     const payment = new Payment({
//       cardNumber,
//       cardHolder,
//       expiryDate,
//       cvv,
//     });

//     await payment.save();

//     res.status(200).json({ success: true, message: 'Payment processed successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Error processing payment' });
//   }
// };
