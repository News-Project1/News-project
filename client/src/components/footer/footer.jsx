// components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h4 className="text-2xl font-bold mb-4">يوميات الشرق</h4>
            <p className="text-gray-400">موقع إخباري متخصص في عرض أحدث الأخبار والمقالات</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">أقسام الموقع</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">الرئيسية</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">الأخبار</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">المقالات</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">كاريكاتير</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">تواصل معنا</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">حول الموقع</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">اتصل بنا</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">الأسئلة الشائعة</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© 2025 يوميات الشرق - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;