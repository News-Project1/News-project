const express = require("express");
const router = express.Router();
const { isAuthenticated, isJournalist } = require("../middleware/authMiddleware");
const journalistController = require("../controllers/journalistController");

// ✅ Get all articles by the logged-in journalist
router.get("/articles", isAuthenticated, isJournalist, journalistController.getArticles);

// ✅ Create a new article
router.post("/articles", isAuthenticated, isJournalist, journalistController.createArticle);

// ✅ Edit an existing article
router.put("/articles/:id", isAuthenticated, isJournalist, journalistController.updateArticle);

// ✅ Delete an article
router.delete("/articles/:id", isAuthenticated, isJournalist, journalistController.deleteArticle);

// ✅ Get article analytics (views, likes)
router.get("/analytics", isAuthenticated, isJournalist, journalistController.getAnalytics);

// ✅ Get article status (Pending, Published, Rejected)
router.get("/status", isAuthenticated, isJournalist, journalistController.getStatus);

module.exports = router;
