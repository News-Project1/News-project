// controllers/mostViewedController.js
// const Video = require('../models/Video'); // استخدم نموذج المقالات الموجود

const Article = require('../models/Article')
// Controller to get most viewed articles
exports.getMostViewedArticles = async (req, res) => {
  try {
    // تحديد الفترة الزمنية (اليوم أو الأسبوع) بناءً على الفلتر في الـ query
    const filter = req.query.filter || 'today'; // default to 'today'

    // تحديد الفترة الزمنية
    let dateRange = {};
    if (filter === 'week') {
      const lastWeek = new Date();
      lastWeek.setDate(lastWeek.getDate() - 7);
      dateRange = { publishDate: { $gte: lastWeek } };
    } else if (filter === 'today') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      dateRange = { publishDate: { $gte: today } };
    }

    // جلب المقالات الأكثر مشاهدة حسب العدد
    const articles = await Article.find(dateRange)
      .sort({ views: -1 }) // ترتيب المقالات حسب عدد المشاهدات (أعلى عدد أولًا)
      .limit(5) // جلب 5 مقالات الأكثر مشاهدة
      .exec();

    if (articles.length === 0) {
      return res.status(404).json({ message: 'No articles found.' });
    }

    // تحويل المسارات النسبية إلى URLs كاملة
    const articlesWithFullUrls = articles.map((article) => ({
      ...article.toObject(),
      featuredImage: article.featuredImage ? `http://localhost:8000/${article.featuredImage.replace(/\\/g, '/')}` : null, // تحويل المسار النسبي للـ featuredImage
      media: article.media.map((mediaUrl) => `http://localhost:8000/${mediaUrl.replace(/\\/g, '/')}`), // تحويل المسارات الأخرى (إذا كانت موجودة)
    }));

    res.json(articlesWithFullUrls); // إعادة المقالات مع URLs كاملة
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
