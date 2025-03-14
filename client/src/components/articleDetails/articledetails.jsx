import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const fetchArticle = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8000/api/articles/${id}`);
      const { article, relatedArticles, comments, engagementStats } = response.data.data;
      setArticle(article);
      setRelatedArticles(relatedArticles);
      setComments(comments);
      setLikes(engagementStats.likes);
      setViews(engagementStats.views);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('فشل في تحميل المقال.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const handleLike = async () => {
    if (!isLoggedIn) {
      alert('يرجى تسجيل الدخول للإعجاب بالمقال');
      return;
    }
    try {
      const response = await axios.post(`http://localhost:8000/api/articles/${id}/like`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setLikes(response.data.data.likes);
    } catch (err) {
      console.error('Error liking article:', err);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert('يرجى تسجيل الدخول للتعليق');
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:8000/api/articles/${id}/comment`,
        { content: newComment },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setComments([response.data.data, ...comments]);
      setNewComment('');
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  const handleReport = async () => {
    if (!isLoggedIn) {
      alert('يرجى تسجيل الدخول للإبلاغ عن المقال');
      return;
    }
    const reason = prompt('ما سبب التقرير؟');
    if (reason) {
      try {
        await axios.post(
          `http://localhost:8000/api/articles/${id}/report`,
          { reason },
          { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        );
        alert('تم تقديم التقرير بنجاح');
      } catch (err) {
        console.error('Error reporting article:', err);
      }
    }
  };

  if (loading) return <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#3E4A56] to-[#CECAB3]/30">
    <div className="text-[#3E4A56] text-xl font-semibold">جاري التحميل...</div>
  </div>;
  
  if (error || !article) return <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#3E4A56] to-[#CECAB3]/30">
    <div className="text-red-600 text-xl font-semibold">{error || 'المقال غير موجود'}</div>
  </div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3E4A56]/10 to-[#CECAB3]/20 py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl bg-white rounded-xl shadow-xl overflow-hidden border border-[#CECAB3]/50">
        <div className="relative">
          <img src={article.featuredImage} alt={article.title} className="w-full h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3E4A56]/80 to-transparent flex items-end">
            <h1 className="text-4xl md:text-5xl font-bold text-white p-8 rtl:text-right">{article.title}</h1>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-8 border-b border-[#CECAB3] pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-[#3E4A56] rounded-full flex items-center justify-center text-white font-bold">
                {article.author?.name?.charAt(0) || '?'}
              </div>
              <div>
                <p className="font-medium text-[#3E4A56]">{article.author?.name || 'مجهول'}</p>
                <p className="text-sm text-gray-500">الفئة: {article.categoryIds[0]?.name || 'غير معروف'}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="flex items-center text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 rtl:ml-1" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>{views}</span>
              <span className="flex items-center text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 rtl:ml-1" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>{likes}</span>
            </div>
          </div>
          
          <article className="prose max-w-none mb-10 text-[#3E4A56] leading-relaxed rtl:text-right">
            <p className="whitespace-pre-line">{article.content}</p>
          </article>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={handleLike}
              className="px-6 py-2.5 bg-[#3E4A56] text-white rounded-full flex items-center hover:bg-[#3E4A56]/80 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rtl:ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              إعجاب ({likes})
            </button>
            <button
              onClick={handleReport}
              className="px-6 py-2.5 bg-white border border-[#3E4A56] text-[#3E4A56] rounded-full flex items-center hover:bg-[#CECAB3]/20 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rtl:ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              إبلاغ
            </button>
          </div>
          
          <div className="bg-[#CECAB3]/10 p-6 rounded-xl mb-10">
            <h2 className="text-2xl font-bold text-[#3E4A56] mb-6 flex items-center rtl:text-right">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 rtl:ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              التعليقات ({comments.length})
            </h2>
            
            {isLoggedIn ? (
              <form onSubmit={handleCommentSubmit} className="mb-8">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="أضف تعليقك..."
                  className="w-full p-4 border border-[#CECAB3] rounded-lg mb-3 focus:ring-2 focus:ring-[#3E4A56] focus:border-transparent resize-none outline-none"
                  rows="3"
                  required
                />
                <button type="submit" className="px-6 py-2.5 bg-[#3E4A56] text-white rounded-full hover:bg-[#3E4A56]/80 transition-colors duration-200 float-right rtl:float-left">
                  إرسال التعليق
                </button>
              </form>
            ) : (
              <div className="bg-white p-4 rounded-lg border border-[#CECAB3] text-center mb-6">
                <p className="text-[#3E4A56]">يرجى تسجيل الدخول للتعليق</p>
              </div>
            )}
             <div className="space-y-4">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div key={comment._id} className="bg-white p-5 rounded-lg shadow-sm border-l-4 rtl:border-r-4 rtl:border-l-0 border-[#3E4A56]">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-[#3E4A56] rounded-full flex items-center justify-center text-white text-sm mr-3 rtl:ml-3">
                        {comment.author?.username?.charAt(0) || '?'}
                      </div>
                      <p className="font-medium text-[#3E4A56]">{comment.author?.username || 'مجهول'}</p>
                    </div>
                    <p className="text-gray-700 rtl:text-right">{comment.content}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[#CECAB3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <p className="mt-4">لا توجد تعليقات بعد</p>
                  </div>
                )}
              </div>
            </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#3E4A56] mb-6 flex items-center rtl:text-right">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 rtl:ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              مقالات ذات صلة
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.length > 0 ? (
                relatedArticles.map((related) => (
                  <div key={related._id} className="bg-[#CECAB3]/10 rounded-xl shadow-sm overflow-hidden border border-[#CECAB3]/40 hover:shadow-md transition-shadow duration-200">
                    <a href={`/article/${related._id}`} className="block h-full">
                      <div className="p-5">
                        <h3 className="text-xl font-semibold text-[#3E4A56] mb-3 line-clamp-2">{related.title}</h3>
                        <div className="mt-4 flex justify-end">
                          <span className="text-[#3E4A56] font-medium inline-flex items-center hover:underline">
                            اقرأ المزيد
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 rtl:ml-1 rtl:transform rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-8 text-gray-500 bg-[#CECAB3]/10 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[#CECAB3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <p className="mt-4">لا توجد مقالات ذات صلة</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;