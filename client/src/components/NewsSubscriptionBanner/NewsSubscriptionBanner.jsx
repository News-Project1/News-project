import React from "react";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft } from "lucide-react";

const NewsSubscriptionBanner = () => {
  return (
    <div className="bg-gray-700 text-white p-8 flex flex-col md:flex-row justify-between items-center rounded-xl">
      <div className="text-center md:text-right">
        <h2 className="text-2xl font-bold">احصل على أخبار مخصصة لك</h2>
        <p className="text-sm mt-2">سجل مجانًا في أقل من دقيقة</p>
      </div>
      {/* <Button className="mt-4 md:mt-0 flex items-center gap-2 bg-white text-teal-800 hover:bg-gray-200 px-6 py-3 rounded-full shadow-lg">
        <ArrowLeft size={20} /> سجل الآن
      </Button> */}
    </div>
  );
};

export default NewsSubscriptionBanner;
