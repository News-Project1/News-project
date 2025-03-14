// ArticleRow.js
import React from 'react';
import ActionButtons from './ActionButtons';

const ArticleRow = ({ article }) => {
  return (
    <tr className="border-b">
      <td className="p-3">{article.title}</td>
      <td className="p-3">{article.author}</td>
      <td className="p-3">
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            article.status === 'منشور'
              ? 'bg-green-100 text-green-800'
              : article.status === 'مرفوض'
              ? 'bg-red-100 text-red-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {article.status}
        </span>
      </td>
      <td className="p-3">{article.date}</td>
      <td className="p-3">{article.views.toLocaleString()}</td>
      <td className="p-3">
        <ActionButtons status={article.status} articleId={article.id} />
      </td>
    </tr>
  );
};

export default ArticleRow;