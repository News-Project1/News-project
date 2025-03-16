import React, { useState, useEffect } from 'react';
import { FileText, Users, MessageSquare, User } from 'lucide-react';
import axios from 'axios';

const OverviewSection = () => {
  // حالة لتخزين البيانات
  const [analytics, setAnalytics] = useState({
    totalArticles: 0,
    totalUsers: 0,
    totalVideos: 0,
    totalJournalists: 0,
    articlesChange: 0,
    usersChange: 0,
    commentsChange: 0,
    journalistsChange: 0,
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // جلب البيانات عند تحميل المكون
  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        // جلب بيانات التحليلات من API
        const analyticsResponse = await axios.get('http://localhost:8000/admin/analytics');
        
        // جلب عدد الصحفيين (نحتاج إلى فلترة المستخدمين بناءً على الدور)
        const usersResponse = await axios.get('http://localhost:8000/admin/users');
        const journalistsCount = usersResponse.data.filter(user => 
          user.role === 'journalist' && !user.isDeleted
        ).length;

        // جلب التعليقات لتحديد النسبة المئوية
        const commentsResponse = await axios.get('http://localhost:8000/admin/comments');
        const totalComments = commentsResponse.data.length;

        // حساب التغيرات (هذا مثال، قد تحتاج لتعديله بناءً على منطقك)
        const currentDate = new Date();
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);

        // تحديث الحالة بالبيانات
        setAnalytics({
          totalArticles: analyticsResponse.data.totalArticles,
          totalUsers: analyticsResponse.data.totalUsers,
          totalVideos: analyticsResponse.data.totalVideos,
          totalJournalists: journalistsCount,
          articlesChange: calculateChange(analyticsResponse.data.totalArticles, 12), // قيمة افتراضية
          usersChange: calculateChange(analyticsResponse.data.totalUsers, 8),
          commentsChange: calculateChange(totalComments, 15),
          journalistsChange: 3 // قيمة ثابتة كما في الكود الأصلي
        });
        
        setLoading(false);
      } catch (err) {
        setError('فشل في جلب البيانات');
        setLoading(false);
        console.error(err);
      }
    };

    fetchAnalytics();
  }, []);

  // دالة مساعدة لحساب التغيير المئوي
  const calculateChange = (current, percentage) => {
    return Math.round((current * percentage) / (100 + percentage));
  };

  // عرض حالة التحميل أو الخطأ
  if (loading) return <div>جاري التحميل...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">إجمالي المقالات</p>
            <p className="text-2xl font-bold">{analytics.totalArticles.toLocaleString()}</p>
          </div>
          <FileText className="text-blue-500" size={24} />
        </div>
        <p className="text-green-500 text-sm mt-2">
          +{analytics.articlesChange}% من الشهر الماضي
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">المستخدمون النشطون</p>
            <p className="text-2xl font-bold">{analytics.totalUsers.toLocaleString()}</p>
          </div>
          <Users className="text-purple-500" size={24} />
        </div>
        <p className="text-green-500 text-sm mt-2">
          +{analytics.usersChange}% من الشهر الماضي
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">التعليقات</p>
            <p className="text-2xl font-bold">{analytics.totalVideos.toLocaleString()}</p>
          </div>
          <MessageSquare className="text-yellow-500" size={24} />
        </div>
        <p className="text-green-500 text-sm mt-2">
          +{analytics.commentsChange}% من الشهر الماضي
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">الصحفيون</p>
            <p className="text-2xl font-bold">{analytics.totalJournalists}</p>
          </div>
          <User className="text-green-500" size={24} />
        </div>
        <p className="text-green-500 text-sm mt-2">
          +{analytics.journalistsChange} جدد هذا الشهر
        </p>
      </div>
    </div>
  );
};

export default OverviewSection;