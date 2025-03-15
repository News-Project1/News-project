// Middleware/userMiddleware.js
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.isAuthenticated = (req, res, next) => {
  const token =
    req.cookies.authToken || // التحقق من الكوكيز
    (req.headers.authorization
      ? req.headers.authorization.split(" ")[1] // التحقق من رأس الطلب
      : null);

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // إضافة معلومات المستخدم إلى الطلب
    next(); // الانتقال إلى الخطوة التالية
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};

exports.isReader = (req, res, next) => {
  if (req.user.role !== "reader") {
    return res.status(403).json({ message: "Forbidden: Reader access only." });
  }
  next(); // الانتقال إلى الخطوة التالية
};