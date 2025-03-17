const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAuthenticated, isAdmin } = require('../middleware/adminMiddleware');
// إدارة المقالات
router.get('/articles',isAuthenticated, isAdmin,adminController.getArticles);
router.put('/articles/:id/status', isAuthenticated, isAdmin,adminController.updateArticleStatus);
router.put('/articles/:id',isAuthenticated, isAdmin, adminController.updateArticle); 
router.delete('/articles/:id',isAuthenticated, isAdmin, adminController.deleteArticle); 


// إدارة التعليقات
router.get('/comments', isAuthenticated, isAdmin,adminController.getComments);
router.put('/comments/:id/status', isAuthenticated, isAdmin ,adminController.updateCommentStatus);


// معالجة التقارير
router.get('/reports', isAuthenticated, isAdmin ,adminController.getReports);
router.put('/reports/:id/status',isAuthenticated, isAdmin, adminController.updateReportStatus);


// إدارة المستخدمين
router.get('/users', isAuthenticated, isAdmin, adminController.getUsers);
router.put('/users/:id/role',isAuthenticated, isAdmin, adminController.updateUserRole);
router.put('/users/:id/status',isAuthenticated, isAdmin, adminController.toggleUserStatus);


// إدارة الفيديوهات
router.get('/videos',isAuthenticated, isAdmin, adminController.getVideos);
router.post('/videos',isAuthenticated, isAdmin , adminController.addVideo);
router.put('/videos/:id',isAuthenticated, isAdmin, adminController.updateVideo);
router.delete('/videos/:id',isAuthenticated, isAdmin, adminController.deleteVideo);

// إدارة التصنيفات
router.get('/categories',isAuthenticated, isAdmin, adminController.getCategories);
router.post('/categories',isAuthenticated, isAdmin, adminController.addCategory);
router.put('/categories/:id',isAuthenticated, isAdmin, adminController.updateCategory);
router.delete('/categories/:id',isAuthenticated, isAdmin , adminController.deleteCategory);

// عرض التحليلات
router.get('/analytics',isAuthenticated, isAdmin , adminController.getAnalytics);


module.exports = router;


// const express = require('express');
// const router = express.Router();
// const adminController = require('../controllers/adminController');
// const { isAuthenticated, isAdmin } = require('../middleware/adminMiddleware');

// // إدارة المقالات
// router.get('/articles', isAuthenticated,isAdmin ,adminController.getArticles);
// router.put('/articles/:id/status',isAuthenticated,isAdmin, adminController.updateArticleStatus);

// //http://localhost:8000/admin/articles
// //http://localhost:8000/admin/articles/<articleId>/status

// // إدارة التعليقات
// router.get('/comments',isAuthenticated,isAdmin,adminController.getComments);
// router.put('/comments/:id/status',isAuthenticated,isAdmin, adminController.updateCommentStatus);

// //http://localhost:8000/admin/comments
// //http://localhost:8000/admin/comments/<commentId>/status


// // معالجة التقارير
// router.get('/reports', isAuthenticated,isAdmin,adminController.getReports);
// router.put('/reports/:id/status', isAuthenticated,isAdmin,adminController.updateReportStatus);

// //http://localhost:8000/admin/reports
// //http://localhost:8000/admin/reports/<reportId>/status

// // إدارة المستخدمين
// router.get('/users', adminController.getUsers);
// router.put('/users/:id/role', isAuthenticated,isAdmin,adminController.updateUserRole);
// router.put('/users/:id/status', isAuthenticated,isAdmin,adminController.toggleUserStatus);

// //http://localhost:8000/admin/users
// //http://localhost:8000/admin/users/<userId>/role




// // إدارة الفيديوهات
// router.get('/videos', isAuthenticated,isAdmin,adminController.getVideos);
// router.post('/videos', isAuthenticated,isAdmin,adminController.addVideo);
// router.put('/videos/:id', isAuthenticated,isAdmin,adminController.updateVideo);
// router.delete('/videos/:id', isAuthenticated,isAdmin,adminController.deleteVideo);

// //http://localhost:8000/admin/videos
// //

// // إدارة التصنيفات
// router.get('/categories', isAuthenticated,isAdmin,adminController.getCategories);
// router.post('/categories', isAuthenticated,isAdmin,adminController.addCategory);
// router.put('/categories/:id', isAuthenticated,isAdmin,adminController.updateCategory);
// router.delete('/categories/:id', isAuthenticated,isAdmin,adminController.deleteCategory);

// // عرض التحليلات
// router.get('/analytics', adminController.getAnalytics);
// //http://localhost:8000/admin/analytics
// module.exports = router;