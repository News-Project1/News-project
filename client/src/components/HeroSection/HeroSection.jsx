import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* خلفية الفيديو */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
{/* طبقة شفافة مع تأثير الزجاج */}


      {/* المحتوى */}
      <div className="relative text-center text-white z-10 px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          اكتشف العوالم المخفية
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          استكشف ثقافات غير معروفة، وقبائل غامضة، وتقاليد فريدة من نوعها حول
          العالم.
        </p>

        {/* زر الاستكشاف */}
        <a
          href="#explore"
          className="mt-6 inline-block bg-yellow-500 text-black px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition duration-300"
        >
          استكشف الآن
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
