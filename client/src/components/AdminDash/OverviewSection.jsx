import React from 'react';
import { FileText, Users, MessageSquare, User } from 'lucide-react';

const OverviewSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">إجمالي المقالات</p>
            <p className="text-2xl font-bold">1,248</p>
          </div>
          <FileText className="text-blue-500" size={24} />
        </div>
        <p className="text-green-500 text-sm mt-2">+12% من الشهر الماضي</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">المستخدمون النشطون</p>
            <p className="text-2xl font-bold">24,589</p>
          </div>
          <Users className="text-purple-500" size={24} />
        </div>
        <p className="text-green-500 text-sm mt-2">+8% من الشهر الماضي</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">التعليقات</p>
            <p className="text-2xl font-bold">18,756</p>
          </div>
          <MessageSquare className="text-yellow-500" size={24} />
        </div>
        <p className="text-green-500 text-sm mt-2">+15% من الشهر الماضي</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">الصحفيون</p>
            <p className="text-2xl font-bold">87</p>
          </div>
          <User className="text-green-500" size={24} />
        </div>
        <p className="text-green-500 text-sm mt-2">+3 جدد هذا الشهر</p>
      </div>
    </div>
  );
};

export default OverviewSection;