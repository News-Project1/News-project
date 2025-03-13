import React from 'react';

const TrendingSection = ({ articles }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">إدارة المحتوى الرائج</h3>
        <div className="flex space-x-2">
          <select className="border rounded px-3 py-1 text-sm">
            <option>جميع الفئات</option>
            <option>سياسة</option>
            <option>تكنولوجيا</option>
            <option>رياضة</option>
          </select>
          <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
            وضع مميز للمختار
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-3 text-sm font-semibold">عنوان المقال</th>
              <th className="p-3 text-sm font-semibold">المشاهدات</th>
              <th className="p-3 text-sm font-semibold">التعليقات</th>
              <th className="p-3 text-sm font-semibold">مميز</th>
              <th className="p-3 text-sm font-semibold">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id} className="border-b">
                <td className="p-3">{article.title}</td>
                <td className="p-3">{article.views.toLocaleString()}</td>
                <td className="p-3">{article.comments}</td>
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={article.featured}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                </td>
                <td className="p-3">
                  <div className="flex space-x-2">
                    <button className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                      عرض
                    </button>
                    {article.featured ? (
                      <button className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                        إلغاء التمييز
                      </button>
                    ) : (
                      <button className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                        تمييز
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6"></div>
    </div>
  );
};

export default TrendingSection;