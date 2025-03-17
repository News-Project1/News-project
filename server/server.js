require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");
require('./models'); // تأكد من أن الموديلات مُحمّلة
const authRoutes = require("./routes/authRoutes");
const journalistRoutes = require("./routes/journalistRoutes");
const articleRoutes = require("./routes/articleRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const videoRoutes = require('./routes/videoRoutes'); // تمت إضافة Video Routes
const adminRoutes = require('./routes/adminRoutes');
const contactMessage = require("./routes/contactMessageRoutes");
const paymentRoutes = require('./routes/PaymentRoutes'); // ربط الـ API بـ paymentRoutes
const radioRoutes = require("./routes/radioRoutes");
const path = require("path");

const app = express();

// Middleware لخدمة الملفات الثابتة (مثل الصور)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Middleware لتحليل JSON
app.use(express.json());

// Middleware لتحليل الكوكيز
app.use(cookieParser());

// Middleware لتفعيل CORS
app.use(
  cors({
    origin: (_, callback) => {
      callback(null, true);
    },
    credentials: true,
  })
);

// الاتصال بقاعدة البيانات
connectDB();

// ربط الـ Routes
app.use('/api', paymentRoutes); // ربط الـ API بـ paymentRoutes
app.use("/auth", authRoutes);
app.use("/api", contactMessage);
app.use("/api/articles", articleRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/journalist", journalistRoutes);
app.use("/api/videos", videoRoutes); // تمت إضافة Video Routes
app.use('/admin', adminRoutes);
app.use("/api/radios", radioRoutes);


// تشغيل الخادم
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));