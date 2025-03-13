import React from 'react';
import { Check, X, Eye } from 'lucide-react';

const CommentsSection = ({ comments }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">مراقبة التعليقات</h3>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="ابحث عن التعليقات..."
            className="border rounded px-3 py-1 text-sm"
          />
          <select className="border rounded px-3 py-1 text-sm">
            <option>جميع التقارير</option>
            <option>مضايقة</option>
            <option>معلومات مضللة</option>
            <option>سبام</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-2">التعليقات المبلغ عنها</h4>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="p-3 text-sm font-semibold">المستخدم</th>
                <th className="p-3 text-sm font-semibold">التعليق</th>
                <th className="p-3 text-sm font-semibold">المقال</th>
                <th className="p-3 text-sm font-semibold">التقارير</th>
                <th className="p-3 text-sm font-semibold">السبب</th>
                <th className="p-3 text-sm font-semibold">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <tr key={comment.id} className="border-b">
                  <td className="p-3">{comment.user}</td>
                  <td className="p-3">{comment.comment}</td>
                  <td className="p-3">{comment.article}</td>
                  <td className="p-3">{comment.reports}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        comment.reason === 'مضايقة'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {comment.reason}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-600 hover:text-green-600">
                        <Check size={16} />
                      </button>
                      <button className="p-1 text-gray-600 hover:text-red-600">
                        <X size={16} />
                      </button>
                      <button className="p-1 text-gray-600 hover:text-blue-600">
                        <Eye size={16} />
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
        <h4 className="font-medium mb-2">التعليقات الأخيرة</h4>
        <div className="space-y-3">
          <div className="border p-3 rounded">
            <div className="flex justify-between mb-1">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                <p className="font-medium">reader42</p>
              </div>
              <p className="text-sm text-gray-500">اليوم، 14:35</p>
            </div>
            <p className="mb-2">
              مقال رائع! أعجبتني التحليلات العميقة لسياسات الطاقة المتجددة.
            </p>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">
                في: مؤتمر تغير المناخ: النقاط الرئيسية
              </p>
              <div className="flex space-x-2">
                <button className="text-red-600">حذف</button>
                <button className="text-blue-600">رد</button>
              </div>
            </div>
          </div>

          <div className="border p-3 rounded">
            <div className="flex justify-between mb-1">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                <p className="font-medium">sports_fan</p>
              </div>
              <p className="text-sm text-gray-500">اليوم، 13:22</p>
            </div>
            <p className="mb-2">
              كم عاشق، لا أصدق أننا فزنا أخيرًا! تغطيتك أعطت الشعور المثالي.
            </p>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">
                في: فريق رياضي يفوز بالبطولة بعد جفاف عقد من الزمن
              </p>
              <div className="flex space-x-2">
                <button className="text-red-600">حذف</button>
                <button className="text-blue-600">رد</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;