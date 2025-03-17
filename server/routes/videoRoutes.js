const express = require('express');
const router = express.Router();
const { getAllVideos, getVideoById } = require('../controllers/videoController');

// الحصول على جميع مقاطع الفيديو
router.get('/', getAllVideos);

// الحصول على فيديو معين بناءً على الـ id
router.get('/:id', getVideoById);

module.exports = router;