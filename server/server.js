require('dotenv').config();
const express = require('express');

const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const connectDB = require("./config/db");
//heba
const newsRoutes = require("./routes/newsRoutes");


const app = express();
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


// app.use('/auth', authRoutes);

//heba 
app.use("/breaking-news", newsRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
