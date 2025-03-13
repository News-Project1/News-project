// import React from 'react';

// const DigiboostLandingPage = () => {
//   return (
//     <div className="font-sans">
//       {/* Navbar */}
//       <nav className="bg-gray-900 text-white p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="flex items-center">
//             <div className="flex items-center">
//               <div className="bg-teal-400 rounded-full p-1 mr-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <span className="text-xl font-bold">Digiboost</span>
//             </div>
//           </div>
//           <div className="hidden md:flex space-x-8">
//             <a href="#" className="border-b-2 border-teal-400">Home</a>
//             <a href="#" className="hover:text-teal-400">Services</a>
//             <a href="#" className="hover:text-teal-400">Project</a>
//             <a href="#" className="hover:text-teal-400">About Us</a>
//           </div>
//           <div className="flex space-x-4">
//             <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded-md">Get Started</button>
//             <button className="border border-white hover:bg-white hover:text-gray-900 text-white px-4 py-2 rounded-md">Let's Talk</button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="bg-gray-900 text-white py-16">
//         <div className="container mx-auto grid md:grid-cols-2 gap-10 px-4">
//           <div>
//             <div className="mb-8">
//               <h1 className="text-5xl font-bold mb-2">
//                 We Are <span className="text-teal-400">Creative</span>
//               </h1>
//               <h2 className="text-5xl font-bold">Digital Agency</h2>
//               <div className="mt-4">
//                 <p className="text-sm">Establish</p>
//                 <p className="text-3xl font-bold">2011</p>
//               </div>
//             </div>
            
//             {/* Stats */}
//             <div className="flex space-x-10 mt-16">
//               <div>
//                 <p className="text-2xl font-bold">12 <span className="text-teal-400">+</span></p>
//                 <p className="text-xs">Years of<br />Experience</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">83K <span className="text-teal-400">+</span></p>
//                 <p className="text-xs">Completed<br />Project</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">4.2K <span className="text-teal-400">+</span></p>
//                 <p className="text-xs">Trusted<br />Companies</p>
//               </div>
//             </div>
//           </div>
          
//           <div>
//             <p className="mb-4">We are a creative agency with several services that focused on quality and innovations for your business</p>
            
//             {/* Video Section */}
//             <div className="relative mt-8 rounded-lg overflow-hidden">
//               <img src="/api/placeholder/600/400" alt="Team meeting" className="w-full h-64 object-cover rounded-lg" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="bg-teal-400 rounded-full p-4 cursor-pointer">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Clients Section */}
//       <section className="py-10 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-center items-center gap-12">
//             <img src="/api/placeholder/120/40" alt="Spotify" className="h-8 opacity-50" />
//             <img src="/api/placeholder/120/40" alt="Microsoft" className="h-8 opacity-50" />
//             <img src="/api/placeholder/120/40" alt="Google" className="h-8 opacity-50" />
//             <img src="/api/placeholder/120/40" alt="YouTube" className="h-8 opacity-50" />
//             <img src="/api/placeholder/120/40" alt="Discord" className="h-8 opacity-50" />
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-10">
//             <div>
//               <img src="/api/placeholder/500/400" alt="Team working" className="rounded-lg w-full h-80 object-cover" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-600 uppercase">ABOUT US</p>
//               <h2 className="text-4xl font-bold mt-2 mb-4">
//                 Why You Sould Choose <span className="text-teal-400">Digiboost</span>
//               </h2>
//               <p className="text-gray-600 mb-8">
//                 We are a digital agency that specializes in web design, SEO, social media management. Our experienced team works closely with clients to deliver customized solutions that meet their specific needs.
//               </p>
//               <button className="text-teal-400 flex items-center">
//                 Learn More
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DigiboostLandingPage;
import React from 'react';

const DigiboostLandingPage = () => {
  return (
    <div className="font-sans text-right" dir="rtl">
      {/* Navbar - Sticky */}
      <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold ml-2">Digiboost</span>
              <div className="bg-teal-400 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="ml-8 border-b-2 border-teal-400">الرئيسية</a>
            <a href="#" className="ml-8 hover:text-teal-400">الخدمات</a>
            <a href="#" className="ml-8 hover:text-teal-400">المشاريع</a>
            <a href="#" className="hover:text-teal-400">من نحن</a>
          </div>
          <div className="flex space-x-reverse space-x-4">
            <button className="border border-white hover:bg-white hover:text-gray-900 text-white px-4 py-2 rounded-md">دعنا نتحدث</button>
            <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded-md">ابدأ الآن</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 px-4">
          <div className="order-1 md:order-1">
            <div className="mb-8">
              <h1 className="text-5xl font-bold mb-2">
                نحن <span className="text-teal-400">مبدعون</span>
              </h1>
              <h2 className="text-5xl font-bold">وكالة رقمية</h2>
              <div className="mt-4">
                <p className="text-sm">تأسست عام</p>
                <p className="text-3xl font-bold">2011</p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex flex-row-reverse space-x-reverse space-x-10 mt-16">
              <div>
                <p className="text-2xl font-bold">12 <span className="text-teal-400">+</span></p>
                <p className="text-xs">سنوات من<br />الخبرة</p>
              </div>
              <div>
                <p className="text-2xl font-bold">83K <span className="text-teal-400">+</span></p>
                <p className="text-xs">مشروع<br />مكتمل</p>
              </div>
              <div>
                <p className="text-2xl font-bold">4.2K <span className="text-teal-400">+</span></p>
                <p className="text-xs">شركة<br />تثق بنا</p>
              </div>
            </div>
          </div>
          
          <div className="order-2 md:order-2">
            <p className="mb-4">نحن وكالة إبداعية تقدم العديد من الخدمات التي تركز على الجودة والابتكار لأعمالك</p>
            
            {/* Video Section */}
            <div className="relative mt-8 rounded-lg overflow-hidden">
              <img src="/api/placeholder/600/400" alt="اجتماع فريق العمل" className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-teal-400 rounded-full p-4 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12">
            <img src="/api/placeholder/120/40" alt="Spotify" className="h-8 opacity-50" />
            <img src="/api/placeholder/120/40" alt="Microsoft" className="h-8 opacity-50" />
            <img src="/api/placeholder/120/40" alt="Google" className="h-8 opacity-50" />
            <img src="/api/placeholder/120/40" alt="YouTube" className="h-8 opacity-50" />
            <img src="/api/placeholder/120/40" alt="Discord" className="h-8 opacity-50" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="order-2 md:order-1">
              <p className="text-sm text-gray-600 uppercase">من نحن</p>
              <h2 className="text-4xl font-bold mt-2 mb-4">
                لماذا يجب عليك اختيار <span className="text-teal-400">Digiboost</span>
              </h2>
              <p className="text-gray-600 mb-8">
                نحن وكالة رقمية متخصصة في تصميم الويب، تحسين محركات البحث، وإدارة وسائل التواصل الاجتماعي. يعمل فريقنا ذو الخبرة بشكل وثيق مع العملاء لتقديم حلول مخصصة تلبي احتياجاتهم الخاصة.
              </p>
              <button className="text-teal-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                اعرف المزيد
              </button>
            </div>
            <div className="order-1 md:order-2">
              <img src="/api/placeholder/500/400" alt="فريق العمل" className="rounded-lg w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigiboostLandingPage;