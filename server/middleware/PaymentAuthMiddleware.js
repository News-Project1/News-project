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




// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//   const token = req.cookies.authToken; // قراءة التوكن من الكوكيز

//   if (!token) {
//     return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // حفظ بيانات المستخدم في الطلب
//     next(); // السماح بمتابعة تنفيذ الطلب
//   } catch (error) {
//     return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
//   }
// };

// module.exports = authMiddleware;



// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // حفظ بيانات المستخدم في الطلب
//     next(); // السماح بمتابعة تنفيذ الطلب
//   } catch (error) {
//     return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
//   }
// };

// module.exports = authMiddleware;






const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.isAuthenticated = (req, res, next) => {
  // Read the token from either the cookie or the Authorization header
  let token =
    req.cookies.authToken || // Check the cookie
    (req.headers.authorization
      ? req.headers.authorization.split(" ")[1] // Check the Authorization header
      : null);

  console.log("Token:", token); // Log the token for debugging
  console.log("Token source:", req.cookies.authToken ? "Cookie" : "Authorization Header"); // Log the token source

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded User:", decoded); // Log the decoded token for debugging
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token verification failed:", error); // Log the error for debugging
    return res.status(401).json({ message: "Invalid token" });
  }
};


exports.isUser = (req, res, next) => {
  console.log("Checking Role:", req.user.role); // ✅ Log the role

  if (!req.user || req.user.role !== "reader") {
    return res.status(403).json({ message: "Access denied. reader only." });
  }
  next();
};

