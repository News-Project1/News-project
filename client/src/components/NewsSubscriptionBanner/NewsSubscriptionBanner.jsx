// import React from 'react';

// const newsArticles = [
//   { id: 1, category: 'حيونات', image: 'animal.jpg' },
//   { id: 2, category: 'علوم', image: 'scince.jpg' },
//     { id: 3, category: 'قبائل', image: 'Tribes.jpg' },
//     { id: 4, category: 'ترحال', image: 'travel.jpg' },
//     { id: 5, category: 'طعام وصحة', image: 'health.jpg' },
//     { id: 6, category: 'استكشاف', image: 'exploration.jpg' },

// ];

// const NewsList = () => {
//     return (
//         <div className="text-center p-6">
//             <h2 className="text-3xl font-bold text- mb-6">
//                 أحدث الأخبار في مختلف المجالات
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {newsArticles.map(article => (
//                     <div
//                         key={article.id}
//                         className="relative rounded-3xl p-6 flex flex-col justify-end items-center text-white"
//                         style={{
//                             backgroundImage: url(${article.image}),
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                             height: '200px'
//                         }}
//                     >
//                         <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
//                         <span className="relative text-teal-50 font-bold">
//                             {article.category}
//                         </span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default NewsList;
// import React from "react";
// import { ArrowLeft } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const NewsSubscriptionBanner = () => {
//   const navigate = useNavigate();

//   const handleVideoNavigation = () => {
//     navigate('/videos');
//   };

//   return (
//     <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center rounded-lg shadow-md my-8">
//       <div className="text-center md:text-right mb-4 md:mb-0">
//         <h2 className="text-2xl font-bold">احصل على أخبار مخصصة لك</h2>
//         <p className="text-sm mt-2 text-gray-300">سجل مجانًا في أقل من دقيقة</p>
//       </div>

//       <div className="flex flex-col sm:flex-row gap-3">
//         <button 
//           onClick={handleVideoNavigation}
//           className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 font-bold transition duration-200 shadow-md"
//         >
//           <ArrowLeft size={18} />
//           شاهد الفيديوهات
//         </button>

//         <button 
//           className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-md flex items-center justify-center gap-2 font-bold transition duration-200 shadow-md"
//         >
//           سجل الآن
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NewsSubscriptionBanner;