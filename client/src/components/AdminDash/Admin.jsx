import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import OverviewSection from "./OverviewSection";
import ContentSection from "./ContentSection"; // تأكد من المسار الصحيح
import JournalistsSection from "./JournalistsSection";
import CommentsSection from "./CommentsSection";
import AnalyticsSection from "./AnalyticsSection";
import TrendingSection from "./TrendingSection";
import SettingsSection from "./SettingsSection";
import {
  Home,
  FileText,
  Edit,
  Users,
  MessageSquare,
  Flag,
  BarChart2,
  TrendingUp,
  Settings,
  LogOut,
} from "lucide-react";
import axios from "axios";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState([]);
  const [journalists, setJournalists] = useState([]);
  const [reports, setReports] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = "http://localhost:8000/admin";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [articlesRes, commentsRes, journalistsRes, reportsRes, analyticsRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/articles`),
          axios.get(`${API_BASE_URL}/comments`),
          axios.get(`${API_BASE_URL}/users`),
          axios.get(`${API_BASE_URL}/reports`),
          axios.get(`${API_BASE_URL}/analytics`),
        ]);

        // تحويل publishDate إلى date وجلب اسم المؤلف
        const formattedArticles = articlesRes.data.map(article => ({
          ...article,
          date: article.publishDate ? new Date(article.publishDate).toLocaleDateString('ar-EG') : 'غير محدد',
          author: article.author.username || 'غير معروف', // افتراض أن الـ API يعيد اسم المؤلف عبر populate
          status: article.status === 'published' ? 'منشور' : article.status === 'pending' ? 'قيد الانتظار' : 'مرفوض'
        }));

        setArticles(formattedArticles);
        setComments(commentsRes.data);
        setJournalists(journalistsRes.data.filter(user => user.role === "journalist"));
        setReports(reportsRes.data);
        setAnalytics(analyticsRes.data);
      } catch (err) {
        setError("فشل في جلب البيانات من الخادم. يرجى المحاولة لاحقًا.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const adminProfile = {
    name: "محمد علي",
    email: "mohamed.admin@example.com",
    role: "مدير لوحة التحكم",
    language: "العربية",
    timezone: "GMT+2 (القاهرة)",
    twoFactorEnabled: true,
    notificationsEnabled: true,
    avatar: "https://example.com/admin-avatar.jpg",
    joinDate: "01 يناير 2023",
    lastLogin: "14 مارس 2025، 09:00"
  };

  const navItems = [
    { id: "overview", label: "نظرة عامة على اللوحة", icon: <Home size={20} /> },
    { id: "content", label: "إدارة المحتوى", icon: <FileText size={20} /> },
    { id: "journalists", label: "حسابات الصحفيين", icon: <Edit size={20} /> },
    { id: "users", label: "إدارة المستخدمين", icon: <Users size={20} /> },
    { id: "comments", label: "مراقبة التعليقات", icon: <MessageSquare size={20} /> },
    { id: "reports", label: "التقارير والعلم", icon: <Flag size={20} /> },
    { id: "analytics", label: "تحليلات الموقع", icon: <BarChart2 size={20} /> },
    { id: "trending", label: "المحتوى الرائج", icon: <TrendingUp size={20} /> },
    { id: "settings", label: "الإعدادات", icon: <Settings size={20} /> },
    {
      id: "logout",
      label: "تسجيل الخروج",
      icon: <LogOut size={20} />,
      onClick: () => {
        alert("تم تسجيل الخروج بنجاح!");
      },
    },
  ];

  const renderContent = () => {
    if (loading) {
      return <div className="text-center p-6">جارٍ التحميل...</div>;
    }
    if (error) {
      return <div className="text-center p-6 text-red-600">{error}</div>;
    }

    switch (activeTab) {
      case "overview":
        return <OverviewSection />;
      case "content":
        return <ContentSection articles={articles} />;
      case "journalists":
        return <JournalistsSection journalists={journalists} />;
      case "comments":
        return <CommentsSection comments={comments} />;
      case "analytics":
        return <AnalyticsSection analytics={analytics} />;
      case "trending":
        return <TrendingSection articles={articles} />;
      case "settings":
        return <SettingsSection userProfile={adminProfile} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100" dir="rtl">
      <Sidebar
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="flex-1 p-6">
        <Header activeTab={activeTab} navItems={navItems} />
        {renderContent()}
      </div>
    </div>
  );
};

export default Admin;