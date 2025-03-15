
// const express = require('express');
// const router = express.Router();
// const paymentController = require('../controllers/paymentController');
// const authMiddleware = require('../middleware/PaymentAuthMiddleware'); // الميدل وير للتحقق من التوكن

// // حماية route باستخدام middleware
// router.post('/payment', paymentController.processPayment);

// module.exports = router;
// routes/paymentRoutes.js

const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
// const PaymentAuthMiddleware = require('../middleware/PaymentAuthMiddleware'); // استدعاء الميدل وير للحماية

// حماية مسار الدفع عبر ميدل وير التحقق من التوكن
router.post('/payment', paymentController.processPayment);

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const paymentController = require('../controllers/paymentController');

// // route بدون حماية
// router.post('/payment', paymentController.processPayment);

// module.exports = router;
