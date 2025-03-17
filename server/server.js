// // server.js
// require("dotenv").config();
// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const passport = require("passport");
// require("./controllers/passportConfig");

// const authRoutes = require("./routes/authRoutes");
// const journalistRoutes = require("./routes/journalistRoutes");
// const articleRoutes = require("./routes/articleRoutes");
// const categoryRoutes = require("./routes/categoryRoutes");
// const connectDB = require("./config/db");
// const contactMessage = require("./routes/contactMessageRoutes");

// const app = express();
// app.use(express.json());
// app.use(cookieParser());
// app.use(passport.initialize());
// app.use(
//   cors({
//     origin: (_, callback) => {
//       callback(null, true);
//     },
//     credentials: true,
//   })
// );

// connectDB();

// app.use("/auth", authRoutes);
// app.use("/api", contactMessage);
// app.use("/api/articles", articleRoutes);
// app.use("/api/categories", categoryRoutes);
// app.use("/api/journalist", journalistRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const journalistRoutes = require("./routes/journalistRoutes");
const articleRoutes = require("./routes/articleRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const adminRoutes = require('./routes/adminRoutes');
const connectDB = require("./config/db");
const contactMessage = require("./routes/contactMessageRoutes");

const path = require("path");

const app = express();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: (_, callback) => {
      callback(null, true);
    },
    credentials: true,
  })
);
connectDB();

app.use("/auth", authRoutes);
app.use("/api", contactMessage);
app.use("/api/articles", articleRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/journalist", journalistRoutes);
app.use('/admin', adminRoutes);
// routes/admin.js



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
