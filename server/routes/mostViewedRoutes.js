// routes/mostViewedRoutes.js
const express = require('express');
const router = express.Router();
const mostViewedController = require("../controllers/mostViewedController")

// راوتر لجلب المقالات الأكثر مشاهدة
router.get('/most-viewed', mostViewedController.getMostViewedArticles);

module.exports = router;
