import React from 'react';

const AnalyticsSection = ({ analytics }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">تحليلات الموقع</h3>
        <div className="flex space-x-2">
          <select className="border rounded px-3 py-1 text-sm">
            <option>آخر 7 أيام</option>
            <option>آخر 30 يومًا</option>
            <option>هذا العام</option>
            <option>كل الوقت</option>
          </select>
          <button className="bg-gray-100 px-3 py-1 rounded text-sm">تصدير البيانات</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1">إجمالي مشاهدات الصفحات</p>
          <p className="text-2xl font-bold">{analytics.totalViews}</p>
          <p className="text-green-500 text-sm">+8.5% من الفترة السابقة</p>
        </div>

        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1">متوسط وقت الإقامة</p>
          <p className="text-2xl font-bold">{analytics.avgTimeOnSite}</p>
          <p className="text-green-500 text-sm">+0:42 من الفترة السابقة</p>
        </div>

        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1">الفئة الأعلى أداءً</p>
          <p className="text-2xl font-bold">{analytics.topCategories[0]}</p>
          <p className="text-gray-500 text-sm">
            تليها: {analytics.topCategories[1]}, {analytics.topCategories[2]}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-medium mb-3">الديموغرافيا - العمر</h4>
          <div className="space-y-2">
            {Object.entries(analytics.userDemographics.age).map(([age, percentage]) => (
              <div key={age}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{age}</span>
                  <span>{percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">الديموغرافيا - الموقع</h4>
          <div className="space-y-2">
            {Object.entries(analytics.userDemographics.location).map(
              ([location, percentage]) => (
                <div key={location}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{location}</span>
                    <span>{percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">الأكثر قراءة</h4>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="p-3 text-sm font-semibold">عنوان المقال</th>
                <th className="p-3 text-sm font-semibold">المشاهدات</th>
                <th className="p-3 text-sm font-semibold">التعليقات</th>
                <th className="p-3 text-sm font-semibold">الوقت المتوسط</th>
                <th className="p-3 text-sm font-semibold">الفئة</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">
                  فريق رياضي يفوز بالبطولة بعد جفاف عقد من الزمن
                </td>
                <td className="p-3">5,891</td>
                <td className="p-3">342</td>
                <td className="p-3">5د 12ث</td>
                <td className="p-3">رياضة</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">
                  نتائج قمة الاقتصاد العالمي في اتفاقيات تجارية جديدة
                </td>
                <td className="p-3">4,328</td>
                <td className="p-3">167</td>
                <td className="p-3">4د 45ث</td>
                <td className="p-3">سياسة</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">
                  دراسة صحية جديدة تكشف عن فوائد مذهلة للقهوة
                </td>
                <td className="p-3">3,945</td>
                <td className="p-3">208</td>
                <td className="p-3">3د 58ث</td>
                <td className="p-3">صحة</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">
                  المجتمع المحلي يعيد البناء بعد الكارثة الطبيعية
                </td>
                <td className="p-3">3,574</td>
                <td className="p-3">285</td>
                <td className="p-3">6د 22ث</td>
                <td className="p-3">محلي</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;