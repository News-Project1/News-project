import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'فيصل العلي ',
      role: 'المدير التنفيذي',
      image: 'https://img.youm7.com/ArticleImgs/2019/5/4/28534-%D8%A7%D8%B9%D8%B1%D9%81-%D8%B5%D9%81%D8%A7%D8%AA%D9%83-%D9%85%D9%86-%D8%B5%D9%88%D8%B1%D8%A9-%D8%A8%D8%B1%D9%88%D9%81%D8%A7%D9%8A%D9%84%D9%83-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%81%D9%8A%D8%B3-%D8%A8%D9%88%D9%83-(3).jpg',
      description: 'قائد الفريق مع أكثر من 10 سنوات من الخبرة في إدارة المشاريع التقنية.',
    },
    {
      name: ' ماريا وريدات',
      role: 'مديرة التسويق',
      image: 'https://via.placeholder.com/150',
      description: 'خبيرة في بناء العلامات التجارية وإستراتيجيات التسويق الرقمي.',
    },
    {
      name: 'خالد عمر',
      role: 'مطور رئيسي',
      image: 'https://via.placeholder.com/150',
      description: 'مطور شغوف بتصميم تجارب مستخدم سلسة ومبتكرة.',
    },
    {
      name: 'فيصل العلي ',
      role: 'المدير التنفيذي',
      image: 'https://img.youm7.com/ArticleImgs/2019/5/4/28534-%D8%A7%D8%B9%D8%B1%D9%81-%D8%B5%D9%81%D8%A7%D8%AA%D9%83-%D9%85%D9%86-%D8%B5%D9%88%D8%B1%D8%A9-%D8%A8%D8%B1%D9%88%D9%81%D8%A7%D9%8A%D9%84%D9%83-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%81%D9%8A%D8%B3-%D8%A8%D9%88%D9%83-(3).jpg',
      description: 'قائد الفريق مع أكثر من 10 سنوات من الخبرة في إدارة المشاريع التقنية.',
    },
    {
      name: ' ماريا وريدات',
      role: 'مديرة التسويق',
      image: 'https://img.youm7.com/ArticleImgs/2019/5/4/28534-%D8%A7%D8%B9%D8%B1%D9%81-%D8%B5%D9%81%D8%A7%D8%AA%D9%83-%D9%85%D9%86-%D8%B5%D9%88%D8%B1%D8%A9-%D8%A8%D8%B1%D9%88%D9%81%D8%A7%D9%8A%D9%84%D9%83-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%81%D9%8A%D8%B3-%D8%A8%D9%88%D9%83-(3).jpg',
      description: 'خبيرة في بناء العلامات التجارية وإستراتيجيات التسويق الرقمي.',
    },
    {
      name: 'خالد عمر',
      role: 'مطور رئيسي',
      image: 'https://img.youm7.com/ArticleImgs/2019/5/4/28534-%D8%A7%D8%B9%D8%B1%D9%81-%D8%B5%D9%81%D8%A7%D8%AA%D9%83-%D9%85%D9%86-%D8%B5%D9%88%D8%B1%D8%A9-%D8%A8%D8%B1%D9%88%D9%81%D8%A7%D9%8A%D9%84%D9%83-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%81%D9%8A%D8%B3-%D8%A8%D9%88%D9%83-(3).jpg',
      description: 'مطور شغوف بتصميم تجارب مستخدم سلسة ومبتكرة.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#28696A]/10 to-[#F0E6D7]/20">
      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-[#28696A] to-[#213058] py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">من نحن</h1>
          <p className="text-xl text-[#F0E6D7] max-w-2xl mx-auto">
            نحن فريق شغوف يعمل على تقديم أفضل الحلول الرقمية لعملائنا، مع التركيز على الإبداع والجودة.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F0E6D7]/20 to-transparent"></div>
      </header>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-[#213058] mb-6 rtl:text-right">قصتنا</h2>
            <p className="text-lg text-[#213058] leading-relaxed rtl:text-right">
              بدأت رحلتنا في عام 2015، عندما قررنا بناء منصة تجمع بين الإبداع والتكنولوجيا لتقديم تجارب رقمية فريدة. نحن هنا لنصنع الفارق من خلال تقديم حلول مبتكرة تلبي احتياجات عملائنا وتتجاوز توقعاتهم. فريقنا يضم خبراء في مجالات التصميم، التطوير، والتسويق، ونعمل معًا لتحقيق أهداف مشتركة.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Story"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#F4AE3F] w-32 h-32 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2015</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-[#F0E6D7]/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#F0E6D7] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#28696A] mr-3 rtl:ml-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-bold text-[#213058] rtl:text-right">رؤيتنا</h3>
              </div>
              <p className="text-[#213058] leading-relaxed rtl:text-right">
                أن نكون المنصة الرائدة في تقديم الحلول الرقمية المبتكرة التي تدعم نمو الأعمال وتعزز التجربة الرقمية للمستخدمين.
              </p>
            </div>
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#F0E6D7] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#28696A] mr-3 rtl:ml-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-bold text-[#213058] rtl:text-right">مهمتنا</h3>
              </div>
              <p className="text-[#213058] leading-relaxed rtl:text-right">
                تقديم خدمات عالية الجودة باستخدام أحدث التقنيات، مع التركيز على رضا العملاء والابتكار المستمر.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#213058] text-center mb-12">فريقنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-[#F0E6D7] hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#F4AE3F]"
                />
                <h3 className="text-xl font-semibold text-[#213058]">{member.name}</h3>
                <p className="text-[#28696A] font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      
    </div>
  );
};

export default AboutUs;