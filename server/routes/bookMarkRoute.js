const express = require("express");
const router = express.Router();
const { getBookmarks, toggleBookmark } = require("../controllers/bookMarkController");

// جلب المقالات المحفوظة
router.get("/bookmarks", getBookmarks);

// إضافة/إزالة مقال من المفضلة
router.put("/bookmarks/:articleId",toggleBookmark);

module.exports = router;