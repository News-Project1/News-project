// // middleware/authMiddleware.js
// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ success: false, message: 'No token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // إضافة الـ user إلى الطلب
//     next();
//   } catch (error) {
//     return res.status(401).json({ success: false, message: 'Invalid or expired token' });
//   }
// };

// module.exports = authMiddleware;
