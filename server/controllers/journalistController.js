const Article = require("../models/Article");

// ✅ Get all articles by the logged-in journalist (excluding soft-deleted ones)
exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find({ author: req.user._id, isDeleted: false }).populate("categoryIds");
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Create a new article
exports.createArticle = async (req, res) => {
  try {
    const newArticle = new Article({
      ...req.body,
      author: req.user._id, // Assign logged-in journalist as the author
      likes: [],
    });

    await newArticle.save();
    res.status(201).json(newArticle);
    console.log(newArticle);
    
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ Edit an existing article (only before admin approval)
exports.updateArticle = async (req, res) => {
  try {
    const article = await Article.findOne({ _id: req.params.id, author: req.user._id });

    if (!article) {
      return res.status(404).json({ message: "Article not found or not authorized." });
    }
    if (article.status !== "pending") {
      return res.status(403).json({ message: "You can only edit pending articles." });
    }

    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedArticle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Soft delete an article (instead of permanent deletion)
exports.softDeleteArticle = async (req, res) => {
  try {
    const article = await Article.findOne({ _id: req.params.id, author: req.user._id });

    if (!article) {
      return res.status(404).json({ message: "Article not found or not authorized." });
    }
    if (article.status !== "pending") {
      return res.status(403).json({ message: "You can only delete pending articles." });
    }

    article.isDeleted = true;
    await article.save();

    res.json({ message: "Article soft deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get article analytics (views, likes)
exports.getAnalytics = async (req, res) => {
  try {
    const articles = await Article.find({ author: req.user._id, isDeleted: false }, "title views likes");
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get article status (Pending, Published, Rejected)
exports.getStatus = async (req, res) => {
  try {
    const articles = await Article.find({ author: req.user._id, isDeleted: false }, "title status");
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
