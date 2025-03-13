const Article = require("../models/Article");

// ✅ Create article
exports.createArticle = async (req, res) => {
  try {
    const article = new Article(req.body);
    await article.save();
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ Get all articles
exports.getArticles = async (req, res) => {
  const articles = await Article.find().populate("author categoryIds");
  res.json(articles);
};
