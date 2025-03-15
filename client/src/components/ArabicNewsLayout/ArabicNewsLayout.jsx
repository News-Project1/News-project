// components/ArabicNewsLayout/ArabicNewsLayout.jsx
import React from 'react';
import MainFeature from '../MainFeature/MainFeature';
import Sidebar from '../sidebar/saidbar';
import CartoonSection from '../CartoonSection/CartoonSection';
import Footer from '../Footer/Footer';

function ArabicNewsLayout() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans" dir="rtl">
    
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-3/4">
            <MainFeature />
            <CartoonSection />
          </div>
          <div className="w-full lg:w-1/4">
            <Sidebar />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ArabicNewsLayout;