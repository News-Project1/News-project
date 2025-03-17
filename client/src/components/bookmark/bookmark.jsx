import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Bookmark= () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = "http://localhost:8000/user";

 
  const fetchBookmarks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/bookmarks`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // افتراض وجود توكن في localStorage
        },
      });
      setBookmarks(response.data);
    } catch (err) {
      setError("فشل في جلب المقالات المحفوظة: " + (err.response?.data?.error || err.message));
      console.error("Fetch Bookmarks Error:", err);
    } finally {
      setLoading(false);
    }
  };

  
  const handleToggleBookmark = async (articleId) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/bookmarks/${articleId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBookmarks((prevBookmarks) =>
        prevBookmarks.filter((bookmark) => bookmark._id !== articleId)
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error(
        "فشل في تحديث المفضلة: " + (error.response?.data?.error || error.message)
      );
      console.error("Toggle Bookmark Error:", error.response || error);
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  if (loading) {
    return <div className="text-center p-6">جارٍ التحميل...</div>;
  }

  if (error) {
    return <div className="text-center p-6 text-red-600">{error}</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">المقالات المحفوظة</h2>
      {bookmarks.length === 0 ? (
        <p className="text-gray-500">لا توجد مقالات محفوظة حاليًا.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3">العنوان</th>
                <th className="p-3">المؤلف</th>
                <th className="p-3">الفئات</th>
                <th className="p-3">تاريخ النشر</th>
                <th className="p-3">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {bookmarks.map((article) => (
                <tr key={article._id} className="border-b">
                  <td className="p-3">{article.title}</td>
                  <td className="p-3">
                    {article.author?.full_name || article.author?.username || "غير معروف"}
                  </td>
                  <td className="p-3">
                    {article.categoryIds
                      ?.map((cat) => cat.name || cat)
                      .join(", ") || "غير محدد"}
                  </td>
                  <td className="p-3">
                    {article.publishDate
                      ? new Date(article.publishDate).toLocaleDateString("ar-EG")
                      : "غير منشور"}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleToggleBookmark(article._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      إزالة من المفضلة
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Bookmark;