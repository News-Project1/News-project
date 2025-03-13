import React from 'react';
import ArticleTable from './ArticleTable';
import FilterBar from './FilterBar';

const ContentSection = ({ articles }) => {
  const filterOptions = ['جميع الفئات', 'سياسة', 'تكنولوجيا', 'رياضة', 'ترفيه'];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">إدارة المحتوى</h3>
        <FilterBar searchPlaceholder="ابحث عن المقالات..." filterOptions={filterOptions} />
      </div>

      <ArticleTable articles={articles} />

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">عرض 4 من 1,248 مقال</p>
        <div className="flex space-x-1">
          <button className="px-3 py-1 border rounded text-sm">السابق</button>
          <button className="px-3 py-1 border rounded bg-blue-600 text-white text-sm">
            1
          </button>
          <button className="px-3 py-1 border rounded text-sm">2</button>
          <button className="px-3 py-1 border rounded text-sm">3</button>
          <button className="px-3 py-1 border rounded text-sm">التالي</button>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;