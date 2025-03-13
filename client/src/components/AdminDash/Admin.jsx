import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import OverviewSection from './OverviewSection';
import ContentSection from './ContentSection';
import JournalistsSection from './JournalistsSection';
import CommentsSection from './CommentsSection';
import AnalyticsSection from './AnalyticsSection';
import TrendingSection from './TrendingSection';
import {
  Home,
  FileText,
  Edit,
  Users,
  MessageSquare,
  Flag,
  BarChart2,
  TrendingUp,
  Settings,} from 'lucide-react';
const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const recentArticles = [
    { id: 1, title: 'نتائج قمة الاقتصاد العالمي في اتفاقيات تجارية جديدة', author: 'جين سميث', status: 'منشور', date: '2025-03-13', views: 4328 },
    { id: 2, title: 'عملاق التكنولوجيا يعلن عن منتج ذكاء اصطناعي ثوري', author: 'جون دو', status: 'قيد الانتظار', date: '2025-03-13', views: 0 },
    { id: 3, title: 'مؤتمر تغير المناخ: النقاط الرئيسية', author: 'أليكس جونسون', status: 'منشور', date: '2025-03-12', views: 2156 },
    { id: 4, title: 'فريق رياضي يفوز بالبطولة بعد جفاف عقد من الزمن', author: 'مايكل براون', status: 'منشور', date: '2025-03-12', views: 5891 },
  ];

  const pendingJournalists = [
    { id: 1, name: 'روبرت تشين', email: 'robert.chen@example.com', specialty: 'تكنولوجيا', application: '2025-03-10' },
    { id: 2, name: 'سارة ويليامز', email: 'sarah.w@example.com', specialty: 'سياسة', application: '2025-03-11' },
  ];

  const reportedComments = [
    { id: 1, user: 'user123', comment: 'هذا المقال متحيز تمامًا ويحتوي على معلومات مضللة.', article: 'مؤتمر تغير المناخ', reports: 5, reason: 'معلومات مضللة' },
    { id: 2, user: 'news_reader', comment: 'يجب أن تستحي من نشر هذا القمامة!', article: 'قمة الاقتصاد العالمي', reports: 3, reason: 'مضايقة' },
  ];

  const analyticsData = {
    totalViews: '127,584',
    avgTimeOnSite: '4د 32ث',
    topCategories: ['سياسة', 'تكنولوجيا', 'رياضة'],
    userDemographics: { age: { '18-24': 15, '25-34': 32, '35-44': 28, '45-54': 18, '55+': 7 }, location: { 'أمريكا الشمالية': 45, أوروبا: 30, آسيا: 15, أخرى: 10 } },
  };

  const trendingArticles = [
    { id: 1, title: 'فريق رياضي يفوز بالبطولة بعد جفاف عقد من الزمن', views: 5891, comments: 342, featured: true },
    { id: 2, title: 'نتائج قمة الاقتصاد العالمي في اتفاقيات تجارية جديدة', views: 4328, comments: 167, featured: false },
    { id: 3, title: 'دراسة صحية جديدة تكشف عن فوائد مذهلة للقهوة', views: 3945, comments: 208, featured: false },
    { id: 4, title: 'المجتمع المحلي يعيد البناء بعد الكارثة الطبيعية', views: 3574, comments: 285, featured: true },
  ];

  const navItems = [
    { id: 'overview', label: 'نظرة عامة على اللوحة', icon: <Home size={20} /> },
    { id: 'content', label: 'إدارة المحتوى', icon: <FileText size={20} /> },
    { id: 'journalists', label: 'حسابات الصحفيين', icon: <Edit size={20} /> },
    { id: 'users', label: 'إدارة المستخدمين', icon: <Users size={20} /> },
    { id: 'comments', label: 'مراقبة التعليقات', icon: <MessageSquare size={20} /> },
    { id: 'reports', label: 'التقارير والعلم', icon: <Flag size={20} /> },
    { id: 'analytics', label: 'تحليلات الموقع', icon: <BarChart2 size={20} /> },
    { id: 'trending', label: 'المحتوى الرائج', icon: <TrendingUp size={20} /> },
    { id: 'settings', label: 'الإعدادات', icon: <Settings size={20} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewSection />;
      case 'content':
        return <ContentSection articles={recentArticles} />;
      case 'journalists':
        return <JournalistsSection journalists={pendingJournalists} />;
      case 'comments':
        return <CommentsSection comments={reportedComments} />;
      case 'analytics':
        return <AnalyticsSection analytics={analyticsData} />;
      case 'trending':
        return <TrendingSection articles={trendingArticles} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100" dir="rtl">
      <Sidebar navItems={navItems} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-6">
        <Header activeTab={activeTab} navItems={navItems} />
        {renderContent()}
      </div>
    </div>
  );
};

export default Admin;