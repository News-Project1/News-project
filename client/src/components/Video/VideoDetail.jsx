import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/videos/${id}`);
        setVideo(response.data);
      } catch (err) {
        console.error('Error fetching video:', err); // طباعة الخطأ بالتفصيل
        setError('فشل في تحميل الفيديو');
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  if (loading) return <div>جاري التحميل...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
      <video controls className="w-full" src={video.videoUrl} />
      <p className="mt-4">{video.description}</p>
    </div>
  );
};

export default VideoDetail;