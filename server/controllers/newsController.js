const News = require("../models/newsModel");

// ✅ جلب الأخبار العاجلة
const getBreakingNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 }).limit(5);
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: "خطأ في جلب الأخبار" });
  }
};

// ✅ إضافة خبر جديد
const addNews = async (req, res) => {
  try {
    const newNews = new News({ title: req.body.title });
    await newNews.save();
    res.status(201).json(newNews);
  } catch (error) {
    res.status(500).json({ message: "خطأ في إضافة الخبر" });
  }
};

module.exports = { getBreakingNews, addNews };
