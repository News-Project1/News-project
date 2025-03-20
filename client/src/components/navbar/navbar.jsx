import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaBookmark,
} from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      // Check for the token in cookies
      const token = Cookies.get("authToken");
      if (token) {
        try {
          const response = await axios.get(
            "http://localhost:8000/api/auth/check",
            {
              headers: {
                Authorization: `${token}`, // Send token in the header
              },
              withCredentials: true,
            }
          );

          if (response.data.user) {
            setUser(response.data.user);
          }
        } catch (error) {
          console.error("فشل في التحقق من المصادقة:", error);
        }
      }
    };

    checkAuth();
  }, []);

  // تسجيل الخروج
  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout", {}, { withCredentials: true });
      setUser(null);
      Cookies.remove("authToken"); // Remove token from cookies on logout
      navigate("/");
    } catch (error) {
      console.error("فشل في تسجيل الخروج:", error);
    }
  };

  return (
    <div className="relative">
      <nav className="bg-gradient-to-r from-[#28696A] via-[#213058] to-[#213058] text-white py-4 px-6 flex items-center justify-between shadow-lg fixed top-0 left-0 right-0 z-50">
        {/* الشعار + الاسم */}
        <div className="flex items-center space-x-3">
          <img
            src="src/image-logoo-removebg-preview.png"
            alt="شعار الموقع"
            className="w-48 h-16 object-contain"
          />
        </div>

        {/* قائمة سطح المكتب مع تأثيرات جميلة */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          <li>
            <Link className="hover:text-[#F4AE3F]" to="/">
              الرئيسية
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#F4AE3F]" to="/about">
              من نحن
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#F4AE3F]" to="/contact">
              تواصل معنا
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#F4AE3F]" to="/categories">
              التصنيفات
            </Link>
          </li>
          {user && user.role === "صحفي" && (
            <li>
              <Link className="hover:text-[#F4AE3F]" to="/journalist">
                لوحة الصحفي
              </Link>
            </li>
          )}
          {user && user.role === "admin" && (
            <li>
              <Link className="hover:text-[#F4AE3F]" to="/admin">
                لوحة الإدارة
              </Link>
            </li>
          )}
          <li>
            <Link className="hover:text-[#F4AE3F]" to="/videos">
              بودكاست
            </Link>
          </li>
        </ul>

        {/* العناصر في أقصى اليمين */}
        <div className="flex items-center space-x-3">
          {!user ? (
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/login"
                className="bg-[#F0E6D7] text-[#213058] px-4 py-2 rounded-lg hover:bg-[#F4AE3F] hover:text-white transition-all duration-300 shadow-md font-bold"
              >
                تسجيل دخول
              </Link>
              <Link
                to="/register"
                className="bg-[#28696A] text-white px-4 py-2 rounded-lg hover:bg-[#F4AE3F] hover:shadow-lg transition-all duration-300 shadow-md font-bold"
              >
                إنشاء حساب
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/profile"
                className="hover:text-[#F4AE3F] transition-colors duration-300 flex items-center"
              >
                {/* عرض صورة المستخدم إذا كانت موجودة */}
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt="User Profile"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <FaUser className="text-xl" />
                  )}
                </div>
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-[#F4AE3F] flex items-center space-x-2 cursor-pointer transition-colors duration-300"
              >
                <div className="bg-[#F0E6D7] p-2 rounded-full text-[#213058]">
                  <FaSignOutAlt className="text-xl" />
                </div>
                <span className="hidden md:block text-sm">تسجيل الخروج</span>
              </button>
            </div>
          )}

          {/* زر القائمة للجوال مع تصميم جديد */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none bg-[#F0E6D7] p-2 rounded-lg text-[#213058] hover:bg-[#F4AE3F] hover:text-white transition-all duration-300"
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {/* قائمة الجوال مع تصميم جديد وانتقالات متحركة */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#213058] to-[#28696A] text-white p-6 space-y-4 shadow-lg fixed top-24 right-0 left-0 z-40 animate-fadeIn rounded-b-lg">
          {/* روابط الجوال */}
          <Link
            to="/"
            className="block text-sm font-medium hover:bg-[#F4AE3F]"
            onClick={() => setIsOpen(false)}
          >
            الرئيسية
          </Link>
          <Link
            to="/about"
            className="block text-sm font-medium hover:bg-[#F4AE3F]"
            onClick={() => setIsOpen(false)}
          >
            من نحن
          </Link>
          <Link
            to="/contact"
            className="block text-sm font-medium hover:bg-[#F4AE3F]"
            onClick={() => setIsOpen(false)}
          >
            تواصل معنا
          </Link>
          <Link
            to="/payment"
            className="block text-sm font-medium hover:bg-[#F4AE3F]"
            onClick={() => setIsOpen(false)}
          >
            اشتراك
          </Link>
          <Link
            to="/categories"
            className="block text-sm font-medium hover:bg-[#F4AE3F]"
            onClick={() => setIsOpen(false)}
          >
            التصنيفات
          </Link>
          <Link
            to="/articles"
            className="block text-sm font-medium hover:bg-[#F4AE3F]"
            onClick={() => setIsOpen(false)}
          >
            المقالات
          </Link>
          {user && user.role === "صحفي" && (
            <Link
              to="/journalist"
              className="block text-sm font-medium hover:bg-[#F4AE3F]"
              onClick={() => setIsOpen(false)}
            >
              لوحة الصحفي
            </Link>
          )}
          {user && user.role === "admin" && (
            <Link
              to="/admin"
              className="block text-sm font-medium hover:bg-[#F4AE3F]"
              onClick={() => setIsOpen(false)}
            >
              لوحة الإدارة
            </Link>
          )}
          <Link
            to="/videos"
            className="block text-sm font-medium hover:bg-[#F4AE3F]"
            onClick={() => setIsOpen(false)}
          >
            الفيديوهات
          </Link>

          {/* تسجيل دخول / إنشاء حساب */}
          {!user ? (
            <div className="space-y-3 mt-4">
              <Link
                to="/login"
                className="block text-center text-sm bg-[#F0E6D7] text-[#213058] py-3 rounded-lg hover:bg-[#F4AE3F] hover:text-white transition-all font-bold"
              >
                تسجيل دخول
              </Link>
              <Link
                to="/register"
                className="block text-center text-sm bg-[#28696A] text-white py-3 rounded-lg hover:bg-[#F4AE3F] transition-all font-bold"
              >
                إنشاء حساب
              </Link>
            </div>
          ) : (
            <div className="space-y-3 mt-4">
              <Link
                to="/profile"
                className="block text-sm hover:bg-[#F4AE3F] p-3 rounded-lg transition-all flex items-center space-x-2 justify-between"
              >
                <div className="flex items-center space-x-2">
                  <div className="bg-[#F0E6D7] p-1.5 rounded-full text-[#213058]">
                    <FaUser className="text-lg" />
                  </div>
                  <span>البروفايل</span>
                </div>
                <span className="text-[#F0E6D7] text-xl">›</span>
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-sm text-right hover:bg-[#F4AE3F] p-3 rounded-lg transition-all flex items-center space-x-2 justify-between"
              >
                <div className="flex items-center space-x-2">
                  <div className="bg-[#F0E6D7] p-1.5 rounded-full text-[#213058]">
                    <FaSignOutAlt className="text-lg" />
                  </div>
                  <span>تسجيل الخروج</span>
                </div>
                <span className="text-[#F0E6D7] text-xl">›</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* مساحة فارغة لتعويض ارتفاع Navbar الثابت */}
      <div className="pt-24"></div>
    </div>
  );
};

export default Navbar;
