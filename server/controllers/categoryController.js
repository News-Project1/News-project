const Category = require("../models/Category");

// ✅ Create category
exports.createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ Get all categories (excluding soft-deleted ones)
exports.getCategories = async (req, res) => {
  const categories = await Category.find({ deleted: { $ne: true } });
  res.json(categories);
};

// ✅ Update category
exports.updateCategory = async (req, res) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(category);
};

