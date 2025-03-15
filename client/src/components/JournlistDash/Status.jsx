import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Status() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/journalist/status", { withCredentials: true })
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
    return <div className="p-4">Loading article status...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-4">حالة المقالات</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">العنوان</th>
              <th className="px-4 py-2 border-b">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td className="px-4 py-2 border-b">{article.title}</td>
                <td className="px-4 py-2 border-b">{article.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}