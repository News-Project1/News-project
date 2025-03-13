import React from 'react';
import JournalistCard from './JournalistCard';

const JournalistsSection = ({ journalists }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">إدارة الصحفيين</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
          إضافة صحفي جديد
        </button>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-2">الطلبات المعلقة</h4>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="p-3 text-sm font-semibold">الاسم</th>
                <th className="p-3 text-sm font-semibold">البريد الإلكتروني</th>
                <th className="p-3 text-sm font-semibold">التخصص</th>
                <th className="p-3 text-sm font-semibold">تاريخ الطلب</th>
                <th className="p-3 text-sm font-semibold">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {journalists.map((journalist) => (
                <tr key={journalist.id} className="border-b">
                  <td className="p-3">{journalist.name}</td>
                  <td className="p-3">{journalist.email}</td>
                  <td className="p-3">{journalist.specialty}</td>
                  <td className="p-3">{journalist.application}</td>
                  <td className="p-3">
                    <div className="flex space-x-2">
                      <button className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                        موافقة
                      </button>
                      <button className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
                        رفض
                      </button>
                      <button className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                        عرض التفاصيل
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">الصحفيون النشطون</h4>
        <div className="flex justify-between items-center mb-2">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="ابحث عن الصحفيين..."
              className="border rounded px-3 py-1 text-sm"
            />
            <select className="border rounded px-3 py-1 text-sm">
              <option>جميع التخصصات</option>
              <option>سياسة</option>
              <option>تكنولوجيا</option>
              <option>رياضة</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <JournalistCard
            name="جين سميث"
            specialty="محررة سياسة"
            articles={87}
            joined="15 يناير 2023"
          />
          <JournalistCard
            name="جون دو"
            specialty="كاتب تكنولوجيا"
            articles={42}
            joined="22 مارس 2024"
          />
          <JournalistCard
            name="أليكس جونسون"
            specialty="مراسل بيئي"
            articles={65}
            joined="5 سبتمبر 2023"
          />
        </div>
      </div>
    </div>
  );
};

export default JournalistsSection;