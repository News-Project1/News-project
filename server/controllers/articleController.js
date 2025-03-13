const Article = require('../models/Article');
const mongoose = require('mongoose');

// ✅ Create article
exports.createArticle = async (req, res) => {
  try {
    const { title, content, featuredImage, media, categoryIds, tags, author, publishDate } = req.body;

    if (!title || !content || !author) {
      return res.status(400).json({ success: false, message: 'العنوان والمحتوى واسم المؤلف مطلوبان' });
    }

    if (!mongoose.Types.ObjectId.isValid(author)) {
      return res.status(400).json({ success: false, message: 'معرف المؤلف غير صالح' });
    }
    const authorObjectId = new mongoose.Types.ObjectId(author);

    let categoryObjectIds = [];
    if (categoryIds) {
      const ids = Array.isArray(categoryIds) ? categoryIds : [categoryIds];
      for (const id of ids) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(400).json({ success: false, message: `معرف الفئة غير صالح: ${id}` });
        }
        categoryObjectIds.push(new mongoose.Types.ObjectId(id));
      }
    }

    const article = new Article({
      title,
      content,
      featuredImage,
      media,
      categoryIds: categoryObjectIds,
      tags,
      author: authorObjectId,
      publishDate: publishDate || new Date(),
    });

    const savedArticle = await article.save();
    res.status(201).json({ success: true, data: savedArticle, message: 'تم إضافة المقال بنجاح' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'خطأ في الخادم', error: error.message });
  }
};

// ✅ Get articles (for Items Cards Page/Category Pages)
exports.getArticles = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      category,
      sortBy = 'createdAt',
      order = 'desc',
      status = 'published'
    } = req.query;

    let query = { status, isDeleted: false };

    if (category) {
      if (!mongoose.Types.ObjectId.isValid(category)) {
        return res.status(400).json({ success: false, message: 'معرف الفئة غير صالح' });
      }
      query.categoryIds = { $in: [new mongoose.Types.ObjectId(category)] }; // Use $in for array
    }

    const skip = (page - 1) * limit;
    const sortOptions = {};
    sortOptions[sortBy] = order === 'desc' ? -1 : 1;

    const articles = await Article.find(query)
      .populate({
        path: 'author',
        select: 'name', // Updated: Use 'name' instead of 'username', remove 'profilePicture'
        options: { strictPopulate: false }
      })
      .populate({
        path: 'categoryIds',
        select: 'name',
        options: { strictPopulate: false }
      })
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit));

    const totalArticles = await Article.countDocuments(query);

    res.status(200).json({
      success: true,
      data: articles,
      pagination: {
        total: totalArticles,
        page: parseInt(page),
        pages: Math.ceil(totalArticles / limit)
      }
    });
  } catch (error) {
    console.error('Error in getArticles:', error);
    res.status(500).json({ success: false, message: 'خطأ في الخادم', error: error.message });
  }
};

// ✅ Get single article by ID (for Article Detail Page)
exports.getArticleById = async (req, res) => {
  try {
    const { id } = req.params;

    const article = await Article.findOne({ _id: id, isDeleted: false })
      .populate('author', 'name') // Updated: Use 'name', remove 'profilePicture bio'
      .populate('categoryIds', 'name')
      .populate('videoId', 'videoUrl title'); // Updated: Use 'videoUrl' instead of 'url'

    if (!article) {
      return res.status(404).json({ success: false, message: 'لم يتم العثور على المقال' });
    }

    article.views = (article.views || 0) + 1;
    await article.save();

    const relatedArticles = await Article.find({
      categoryIds: { $in: article.categoryIds },
      _id: { $ne: id },
      status: 'published',
      isDeleted: false,
    })
      .populate('author', 'name') // Updated: Use 'name'
      .populate('categoryIds', 'name')
      .limit(3);

    res.status(200).json({
      success: true,
      data: {
        article,
        relatedArticles,
        engagementStats: {
          likes: article.likes ? article.likes.length : 0,
          views: article.views,
        },
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'خطأ في الخادم', error: error.message });
  }
};

// ✅ Update article
exports.updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const allowedUpdates = ['title', 'content', 'featuredImage', 'media', 'categoryIds', 'tags', 'publishDate', 'status'];
    const invalidUpdates = Object.keys(updates).filter(field => !allowedUpdates.includes(field));

    if (invalidUpdates.length > 0) {
      return res.status(400).json({ success: false, message: `الحقول غير المسموح بتحديثها: ${invalidUpdates.join(', ')}` });
    }

    if (updates.categoryIds) {
      updates.categoryIds = Array.isArray(updates.categoryIds)
        ? updates.categoryIds.map(id => new mongoose.Types.ObjectId(id))
        : [new mongoose.Types.ObjectId(updates.categoryIds)];
    }
    if (updates.author) {
      updates.author = new mongoose.Types.ObjectId(updates.author);
    }

    const article = await Article.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!article) {
      return res.status(404).json({ success: false, message: 'لم يتم العثور على المقال' });
    }

    res.status(200).json({ success: true, data: article, message: 'تم تحديث المقال بنجاح' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'خطأ في تحديث المقال', error: error.message });
  }
};