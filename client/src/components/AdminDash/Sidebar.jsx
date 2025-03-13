import React from 'react';

const Sidebar = ({ navItems, activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-white shadow p-4">
      <div className="flex items-center mb-6">
        <h1 className="text-xl font-bold">لوحة التحكم الإدارية</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`w-full flex items-center space-x-2 p-2 rounded ${
                  activeTab === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;