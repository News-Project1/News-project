const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// إدارة المقالات
router.get('/articles', adminController.getArticles);
router.put('/articles/:id/status', adminController.updateArticleStatus);

//http://localhost:8000/admin/articles
//http://localhost:8000/admin/articles/<articleId>/status

// إدارة التعليقات
router.get('/comments', adminController.getComments);
router.put('/comments/:id/status', adminController.updateCommentStatus);

//http://localhost:8000/admin/comments
//http://localhost:8000/admin/comments/<commentId>/status


// معالجة التقارير
router.get('/reports', adminController.getReports);
router.put('/reports/:id/status', adminController.updateReportStatus);

//http://localhost:8000/admin/reports
//http://localhost:8000/admin/reports/<reportId>/status

// إدارة المستخدمين
router.get('/users', adminController.getUsers);
router.put('/users/:id/role', adminController.updateUserRole);
router.put('/users/:id/status', adminController.toggleUserStatus);

//http://localhost:8000/admin/users
//http://localhost:8000/admin/users/<userId>/role




// إدارة الفيديوهات
router.get('/videos', adminController.getVideos);
router.post('/videos', adminController.addVideo);
router.put('/videos/:id', adminController.updateVideo);
router.delete('/videos/:id', adminController.deleteVideo);

//http://localhost:8000/admin/videos
//

// إدارة التصنيفات
router.get('/categories', adminController.getCategories);
router.post('/categories', adminController.addCategory);
router.put('/categories/:id', adminController.updateCategory);
router.delete('/categories/:id', adminController.deleteCategory);

// عرض التحليلات
router.get('/analytics', adminController.getAnalytics);
//http://localhost:8000/admin/analytics
module.exports = router;