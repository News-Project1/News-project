import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Articles = () => {
  const { categoryId } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8000/api/articles?category=${categoryId}`);
      console.log('Articles Response:', response.data);
      if (response.data && Array.isArray(response.data.data)) {
        setArticles(response.data.data);
      } else {
        setArticles([]);
      }
    } catch (err) {
      console.error('Error fetching articles:', err);
      setError('فشل في تحميل المقالات.');
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [categoryId]);

  if (loading) {
    return <div className="text-center py-10">جاري التحميل...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-beige p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-blue-gray mb-6 text-center">مقالات الفئة</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.length > 0 ? (
            articles.map((article) => (
              <div key={article._id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4">
                <h2 className="text-2xl font-semibold text-blue-gray mb-2">{article.title}</h2>
                <p className="text-gray-600">الفئة: {article.categoryIds[0]?.name}</p>
                <p className="text-gray-600">المؤلف: {article.author.username}</p>
                <a href={`/article/${article._id}`} className="text-blue-500 hover:underline mt-2 block">اقرأ المزيد</a>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">لا توجد مقالات متاحة في هذه الفئة</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;