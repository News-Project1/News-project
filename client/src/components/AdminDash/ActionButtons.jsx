// ActionButtons.js
import React from 'react';
import { Edit, Trash, Check, X } from 'lucide-react';
import axios from 'axios';

const ActionButtons = ({ status, articleId }) => {
  const API_BASE_URL = "http://localhost:8000/admin";

  const updateStatus = async (newStatus) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/articles/${articleId}/status`, { status: newStatus });
      alert(`تم تحديث الحالة إلى: ${newStatus}`);
      // يمكنك إضافة تحديث للحالة محليًا هنا
    } catch (err) {
      alert('فشل في تحديث الحالة');
      console.error(err);
    }
  };

  return (
    <div className="flex space-x-2">
      <button className="p-1 text-blue-600 hover:text-blue-800" title="تعديل">
        <Edit size={18} />
      </button>
      <button className="p-1 text-red-600 hover:text-red-800" title="حذف">
        <Trash size={18} />
      </button>
      {status !== 'منشور' && (
        <button
          className="p-1 text-green-600 hover:text-green-800"
          title="نشر"
          onClick={() => updateStatus('published')}
        >
          <Check size={18} />
        </button>
      )}
      {status !== 'مرفوض' && (
        <button
          className="p-1 text-yellow-600 hover:text-yellow-800"
          title="رفض"
          onClick={() => updateStatus('rejected')}
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default ActionButtons;