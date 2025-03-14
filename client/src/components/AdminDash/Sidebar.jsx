import React from "react";

const Sidebar = ({ navItems, activeTab, setActiveTab }) => {
  const handleClick = (item) => {
    // إذا كان هناك onClick مخصص، نفذه
    if (item.onClick) {
      item.onClick();
    } else {
      // إذا لم يكن هناك onClick، قم بتغيير التبويب النشط فقط
      setActiveTab(item.id);
    }
  };

  return (
    <div className="w-64 bg-white shadow-md">
      <ul className="p-4">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`p-2 mb-2 cursor-pointer rounded ${
              activeTab === item.id ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            }`}
            onClick={() => handleClick(item)}
          >
            <div className="flex items-center">
              {item.icon}
              <span className="mr-2">{item.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;