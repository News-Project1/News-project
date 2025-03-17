// import { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { Play, Pause, Mic } from "lucide-react";
// import { motion } from "framer-motion";

// const API_BASE_URL = "http://localhost:8000/api"; // رابط الـ API
// const LATEST_ARTICLES_ENDPOINT = `${API_BASE_URL}/articles/latest`;
// const RADIO_API_ENDPOINT = `${API_BASE_URL}/radios`;

// export default function NewsTicker() {
//   const [news, setNews] = useState([]); // تخزين الأخبار العاجلة
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [radioUrl, setRadioUrl] = useState("https://montecarlodoualiya128k.ice.infomaniak.ch/mc-doualiya.mp3"); // رابط البث المباشر الصحيح
//   const audioRef = useRef(null); // مرجع لكائن الصوت
//   const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // 🔄 جلب الأخبار من الـ API عند تحميل الصفحة
//   useEffect(() => {
//     const fetchLatestArticles = async () => {
//       try {
//         const response = await axios.get(LATEST_ARTICLES_ENDPOINT);
//         setNews(response.data); // تعيين المقالات
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching latest articles:", error);
//         setError("حدث خطأ أثناء جلب المقالات");
//         setLoading(false);
//       }
//     };

//     fetchLatestArticles();
//   }, []);

//   // 🔄 تغيير الخبر المعروض كل 4 ثوانٍ
//   useEffect(() => {
//     if (news.length === 0) return; // لا تقم بتشغيل الـ interval إذا لم تكن هناك أخبار

//     const interval = setInterval(() => {
//       setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length);
//     }, 4000);

//     return () => clearInterval(interval); // تنظيف الـ interval عند إزالة المكون
//   }, [news]);

//   // 🔄 جلب رابط الراديو عند تحميل الصفحة
//   useEffect(() => {
//     const fetchRadioStream = async () => {
//       try {
//         const response = await axios.get(RADIO_API_ENDPOINT);
//         if (response.data.length > 0) {
//           setRadioUrl(response.data[0].streamUrl);
//         }
//       } catch (error) {
//         console.error("Error fetching radio stream:", error);
//         setError("حدث خطأ أثناء جلب رابط الراديو");
//       }
//     };

//     fetchRadioStream();
//   }, []);

//   // ✅ تشغيل وإيقاف الراديو
//   const handlePlayPause = () => {
//     if (!audioRef.current) {
//       audioRef.current = new Audio(radioUrl);
//       audioRef.current.crossOrigin = "anonymous";
//     }

//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play().catch(error => console.error("Audio play error:", error));
//     }

//     setIsPlaying(!isPlaying);
//   };

//   // ✅ تنظيف الصوت عند تفكيك المكون
//   useEffect(() => {
//     return () => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current = null;
//       }
//     };
//   }, []);

//   return (
//     <div className="flex items-center justify-between w-full bg-gradient-to-r from-[#213058] to-[#213058] text-white py-3 px-4 text-sm border-b border-[#F0E6D7]/20 shadow-md">
//       {/* شريط الأخبار المتغير */}
//       <div className="flex items-center">
//         <span className="text-[#F4AE3F] font-bold ml-3">آخر الأخبار</span>
//         <span className="text-[#F0E6D7]/60 mx-2">|</span>
//         {loading ? (
//           <p className="text-[#F0E6D7]/70">جارٍ تحميل الأخبار...</p>
//         ) : error ? (
//           <p className="text-red-400">{error}</p>
//         ) : news.length > 0 ? (
//           <motion.a
//             key={currentNewsIndex}
//             href={`/news/${news[currentNewsIndex]._id}`}
//             className="text-[#F0E6D7] hover:text-[#F4AE3F] transition"
//             initial={{ opacity: 0, y: -5 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 5 }}
//             transition={{ duration: 0.5 }}
//           >
//             {news[currentNewsIndex].title}
//           </motion.a>
//         ) : (
//           <p className="text-[#F0E6D7]/70">لا توجد أخبار متاحة</p>
//         )}
//       </div>

//       {/* قسم تشغيل النشرة الصوتية */}
//       <div className="flex items-center text-[#F0E6D7]">
//         <Mic size={16} className="ml-2 text-[#F4AE3F]" />
//         <p className="ml-2 font-semibold">استمع إلى "إيجاز" اليوم</p>
//         <span className="mx-2 text-[#F0E6D7]/70">7:55 دقيقة</span>
//         <button
//           className={`p-2 rounded-full flex items-center justify-center w-8 h-8 transition ${
//             isPlaying
//               ? "bg-[#F4AE3F] text-[#213058] hover:bg-[#F0E6D7]"
//               : "bg-[#28696A] text-[#F0E6D7] hover:bg-[#F4AE3F] hover:text-[#213058]"
//           }`}
//           onClick={handlePlayPause}
//         >
//           {isPlaying ? <Pause size={16} /> : <Play size={16} />}
//         </button>
//       </div>
//     </div>
//   );
// }