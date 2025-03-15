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

  // Function to get image or placeholder
  const getImageUrl = (article) => {
    if (article.featuredImage) {
      return article.featuredImage;
    }
    return "/api/placeholder/400/250"; // Placeholder image if no featured image
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#CECAB3]">
        <div className="p-6 rounded-lg bg-white shadow-md">
          <div className="text-[#3E4A56] text-xl font-semibold">جاري التحميل...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#CECAB3]">
        <div className="p-6 rounded-lg bg-white shadow-md">
          <div className="text-red-600 text-xl font-semibold">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#CECAB3] p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#3E4A56] mb-10 text-center pt-6">مقالات مختارة</h1>
        
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div 
                key={article._id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={getImageUrl(article)} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#3E4A56] to-transparent opacity-30"></div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-[#3E4A56] mb-3">{article.title}</h2>
                  
                  {article.content && (
                    <p className="text-gray-700 mb-4 line-clamp-2">
                      {typeof article.content === 'string' 
                        ? article.content.substring(0, 150) + (article.content.length > 150 ? '...' : '')
                        : ''}
                    </p>
                  )}
                  
                  <div className="flex flex-col space-y-2 mb-4">
                    {article.categoryIds && article.categoryIds[0] && (
                      <p className="text-gray-600 text-sm flex items-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-[#CECAB3] mr-2"></span>
                        <span>الفئة: {typeof article.categoryIds[0] === 'object' ? article.categoryIds[0].name : article.categoryIds[0]}</span>
                      </p>
                    )}
                    
                    {article.author && (
                      <p className="text-gray-600 text-sm flex items-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-[#CECAB3] mr-2"></span>
                        <span>المؤلف: {typeof article.author === 'object' && article.author.full_name ? article.author.full_name : 'غير معروف'}</span>
                      </p>
                    )}
                    
                    {article.publishDate && (
                      <p className="text-gray-600 text-sm flex items-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-[#CECAB3] mr-2"></span>
                        <span>تاريخ النشر: {new Date(article.publishDate).toLocaleDateString('ar-EG')}</span>
                      </p>
                    )}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a 
                      href={`/article/${article._id}`} 
                      className="inline-block px-4 py-2 bg-[#3E4A56] text-white rounded hover:bg-opacity-90 transition-colors duration-300 text-center w-full"
                    >
                      اقرأ المزيد
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto text-center">
            <div className="inline-block p-4 rounded-full bg-[#CECAB3] mb-4">
              <svg className="w-8 h-8 text-[#3E4A56]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <p className="text-[#3E4A56] text-lg">لا توجد مقالات متاحة في هذه الفئة</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;