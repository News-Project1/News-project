
const Article = require('../models/Article'); // استخدم اسم النموذج الموجود

// Controller to get articles with the most likes
exports.getMostLikedArticle = async (req, res) => {
  try {
    const articles = await Article.aggregate([
      { $match: { isDeleted: false } }, // Filter out deleted articles
      { $project: { title: 1, content: 1, featuredImage: 1, likes: { $size: "$likes" }, media: 1 } }, // Project likes size and media
      { $sort: { likes: -1 } }, // Sort by number of likes in descending order
      { $limit: 5 } // Limit to top 5 most liked articles (يمكنك تعديل هذا الرقم حسب الحاجة)
    ]).exec(); // Make sure to use .exec() to execute the query

    if (articles.length === 0) {
      return res.status(404).json({ message: 'No articles found.' });
    }

    // Convert relative paths to absolute URLs for featuredImage and media
    const articlesWithFullUrls = articles.map((article) => ({
      ...article,
      featuredImage: article.featuredImage ? `http://localhost:8000/${article.featuredImage.replace(/\\/g, '/')}` : null, // تحويل المسار النسبي للـ featuredImage
      media: article.media.map((mediaUrl) => `http://localhost:8000/${mediaUrl.replace(/\\/g, '/')}`), // تحويل المسارات الأخرى (إذا كانت موجودة)
    }));

    res.json(articlesWithFullUrls); // Return the articles with full URLs
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
