const Article = require('../models/Article');
const Comment = require('../models/Comment');
const Report = require('../models/Report');
const User = require('../models/User');
const Video = require('../models/Video');
const Category = require('../models/Category');

// إدارة المقالات
exports.getArticles = async (req, res) => {
//   try {
//     const articles = await Article.find().populate('author categoryIds');
//     res.status(200).json(articles);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
try {
    const articles = await Article.find({ isDeleted: false })
      .populate('author', 'username') // جلب اسم المؤلف
      .exec();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: 'خطأ في جلب المقالات', error: err });
  }
};

exports.updateArticleStatus = async (req, res) => {
//   const { id } = req.params;
//   const { status } = req.body;
//   try {
//     const article = await Article.findByIdAndUpdate(id, { status }, { new: true });
//     if (!article) return res.status(404).json({ error: 'Article not found' });
//     res.status(200).json(article);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
try {
    const { status } = req.body; // يتوقع { status: "published" }
    const article = await Article.findByIdAndUpdate(
      req.params.articleId,
      { status },
      { new: true }
    ).populate('author', 'username');
    if (!article) return res.status(404).json({ message: 'المقال غير موجود' });
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: 'خطأ في تحديث الحالة', error: err });
  }
};

// إدارة التعليقات
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate('author article video');
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCommentStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const comment = await Comment.findByIdAndUpdate(id, { status }, { new: true });
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// معالجة التقارير
exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find().populate('article reportedBy');
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateReportStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const report = await Report.findByIdAndUpdate(id, { status }, { new: true });
    if (!report) return res.status(404).json({ error: 'Report not found' });
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// إدارة المستخدمين
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, { role }, { new: true });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.toggleUserStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    user.isDeleted = !user.isDeleted;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// إدارة الفيديوهات
exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate('categoryIds');
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Video.findByIdAndUpdate(id, req.body, { new: true });
    if (!video) return res.status(404).json({ error: 'Video not found' });
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Video.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    if (!video) return res.status(404).json({ error: 'Video not found' });
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// إدارة التصنيفات
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByIdAndUpdate(id, req.body, { new: true });
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// عرض التحليلات
exports.getAnalytics = async (req, res) => {
  try {
    const articles = await Article.find();
    const users = await User.find();
    const videos = await Video.find();
    res.status(200).json({
      totalArticles: articles.length,
      totalUsers: users.length,
      totalVideos: videos.length,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};