// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function Status() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     axios.get("http://localhost:8000/api/journalist/status", { withCredentials: true })
//       .then((response) => {
//         setArticles(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching article status:", error);
//         setError("Failed to fetch article status. Please try again later.");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div className="p-4">Loading article status...</div>;
//   }

//   if (error) {
//     return <div className="p-4 text-red-500">{error}</div>;
//   }

//   return (
//     <div className="p-4 sm:p-6">
//       <h1 className="text-2xl font-bold mb-4">حالة المقالات</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 border-b">العنوان</th>
//               <th className="px-4 py-2 border-b">الحالة</th>
//             </tr>
//           </thead>
//           <tbody>
//             {articles.map((article) => (
//               <tr key={article.id}>
//                 <td className="px-4 py-2 border-b">{article.title}</td>
//                 <td className="px-4 py-2 border-b">{article.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Status() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/journalist/status", { withCredentials: true })
      .then((response) => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching article status:", error);
        setError("Failed to fetch article status. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-medium">Loading article status...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-lg font-medium">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">حالة المقالات</h1>
      
      {articles.length === 0 ? (
        <div className="text-center p-4 border rounded bg-gray-50">
          لا توجد مقالات لعرضها
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 border-b text-right font-semibold text-gray-700">العنوان</th>
                <th className="px-6 py-3 border-b text-right font-semibold text-gray-700">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b text-right">{article.title}</td>
                  <td className="px-6 py-4 border-b text-right">
                    <StatusBadge status={article.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Component to display status with appropriate color
function StatusBadge({ status }) {
  const getStatusColor = () => {
    switch (status.toLowerCase()) {
      case 'pending':
      case 'قيد المراجعة':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
      case 'تمت الموافقة':
        return 'bg-green-100 text-green-800';
      case 'rejected':
      case 'مرفوض':
        return 'bg-red-100 text-red-800';
      case 'published':
      case 'منشور':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
      {status}
    </span>
  );
}