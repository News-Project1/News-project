import React from 'react';
import { Eye, Edit, Check, Trash } from 'lucide-react';

const ActionButtons = ({ status }) => {
  return (
    <div className="flex space-x-2">
      <button className="p-1 text-gray-600 hover:text-blue-600">
        <Eye size={16} />
      </button>
      <button className="p-1 text-gray-600 hover:text-yellow-600">
        <Edit size={16} />
      </button>
      {status === 'قيد الانتظار' && (
        <button className="p-1 text-gray-600 hover:text-green-600">
          <Check size={16} />
        </button>
      )}
      <button className="p-1 text-gray-600 hover:text-red-600">
        <Trash size={16} />
      </button>
    </div>
  );
};

export default ActionButtons;