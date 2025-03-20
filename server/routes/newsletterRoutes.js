const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletterController');

// مسار للاشتراك في النشرة الإخبارية
router.post('/subscribe', newsletterController.subscribeNewsletter);

module.exports = router;
