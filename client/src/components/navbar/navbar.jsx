
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-3 px-6 flex items-center justify-between">
      {/* أيقونة المستخدم */}
      <div className="flex items-center">
        <img
          src="/path-to-your-image.png" // استبدل بمسار صورة البروفايل
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* الروابط */}
      <ul className="flex space-x-6 text-sm font-semibold">
        <li><Link className="hover:text-gray-300" to="/">الرئيسيه</Link></li>
        <li><Link className="hover:text-gray-300" to="/about">من نحن  </Link></li>
        <li><Link className="hover:text-gray-300" to="/contact">تواصل معنا</Link></li>
        <li><Link className="hover:text-gray-300" to="/payment">اشتراك</Link></li>
       
      </ul>

      {/* أزرار تسجيل الدخول والتسجيل */}
      <div className="flex space-x-3">
        <Link className="bg-white text-blue-600 px-4 py-1 rounded-md hover:bg-gray-200" to="/login">تسجيل دخول</Link>
        <Link className="bg-yellow-500 text-white px-4 py-1 rounded-md hover:bg-yellow-400" to="/register">انشاء حساب</Link>
      </div>
    </nav>
  );
};

export default Navbar;
