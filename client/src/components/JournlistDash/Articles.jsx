import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/journalist/articles", { withCredentials: true })
      .then((response) => {
        setArticles(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setError("Failed to fetch articles. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-4">Loading articles...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-4">المقالات</h1>
      <Link
        to="/journalist/articles/new"
        className="mb-4 inline-block bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
      >
        إنشاء مقال جديد
      </Link>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">العنوان</th>
              <th className="px-4 py-2 border-b">الحالة</th>
              <th className="px-4 py-2 border-b">التاريخ</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td className="px-4 py-2 border-b">{article.title}</td>
                <td className="px-4 py-2 border-b">{article.status}</td>
                <td className="px-4 py-2 border-b">{article.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}