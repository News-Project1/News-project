import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArticle = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8000/api/articles/${id}`);
      console.log('Article Response:', response.data);
      setArticle(response.data.data.article);

      // Fetch related articles (same category, exclude current article)
      const categoryId = response.data.data.article.categoryIds[0]._id;
      const relatedResponse = await axios.get(`http://localhost:8000/api/articles?category=${categoryId}&page=1&limit=3`);
      const allArticles = relatedResponse.data.data;
      const filteredRelated = allArticles.filter(a => a._id !== id);
      setRelatedArticles(filteredRelated.slice(0, 3));
    } catch (err) {
      console.error('Error fetching article:', err);
      setError('فشل في تحميل المقال.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">جاري التحميل...</div>;
  }

  if (error || !article) {
    return <div className="text-center py-10 text-red-600">{error || 'المقال غير موجود'}</div>;
  }

  return (
    <div className="min-h-screen bg-beige p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-blue-gray mb-6">{article.title}</h1>
        <img src={article.featuredImage} alt={article.title} className="w-full h-64 object-cover mb-4 rounded" />
        <p className="text-gray-700 mb-4">{article.content}</p>
        <p className="text-gray-600">الفئة: {article.categoryIds[0].name}</p>
        <p className="text-gray-600">المؤلف: {article.author.username}</p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">مقالات ذات صلة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.length > 0 ? (
            relatedArticles.map((related) => (
              <div key={related._id} className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="text-xl font-semibold">{related.title}</h3>
                <a href={`/article/${related._id}`} className="text-blue-500 hover:underline">اقرأ المزيد</a>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">لا توجد مقالات ذات صلة</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;