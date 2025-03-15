// components/Sidebar.jsx
import React from 'react';

function Sidebar() {
  const articles = [
    {
      id: 1,
      title: 'لمرضى السكري... ابتعدوا عن هذه الفواكه في الصيف',
      image: '',
      number: 1
    },
    {
      id: 2,
      title: 'ما علامات نقص الكالسيوم في الجسم؟',
      image: '',
      number: 2
    },
    {
      id: 3,
      title: 'ما أبرز بنود الإعلان الدستوري الذي وقعه الرئيس السوري؟',
      image: '',
      number: 3
    },
    {
      id: 4,
      title: 'ما الوقت المثالي للتوقف عن شرب القهوة؟ خبيرة تكشف السر لنوم أفضل وصحة مثالية',
      image: '',
      number: 4
    }
    ,
    {
      id: 5,
      title: 'ما الوقت المثالي للتوقف عن شرب القهوة؟ خبيرة تكشف السر لنوم أفضل وصحة مثالية',
      image: '',
      number: 5
    },
    {
      id: 6,
      title: 'ما الوقت المثالي للتوقف عن شرب القهوة؟ خبيرة تكشف السر لنوم أفضل وصحة مثالية',
      image: '',
      number: 6
    }
    ,
    {
      id: 7,
      title: 'ما الوقت المثالي للتوقف عن شرب القهوة؟ خبيرة تكشف السر لنوم أفضل وصحة مثالية',
      image: '',
      number: 7
    }
   
    
    
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-xl font-bold">الأكثر قراءة</h3>
      </div>
      <div>
        {articles.map((article) => (
          <div key={article.id} className="flex p-4 border-b border-gray-100 hover:bg-gray-50">
            {article.image && (
              <div className="w-24 h-24 flex-shrink-0 ml-4">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover rounded" />
              </div>
            )}
            <div className="flex flex-1">
              <div className="text-3xl font-bold text-teal-500 ml-3">{article.number}</div>
              <p className="font-medium text-gray-800">{article.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;