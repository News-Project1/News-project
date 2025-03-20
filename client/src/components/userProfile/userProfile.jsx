import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8000/auth/profile", {
          withCredentials: true,
        });
        setUser(response.data.user);
        setLoading(false);
      } catch (err) {
        setError("لم يتم العثور على بيانات المستخدم.");
        setLoading(false);
        // إذا كان الخطأ متعلقا بتوثيق المستخدم، يمكنك إعادة توجيه المستخدم إلى صفحة تسجيل الدخول
        if (err.response?.status === 401) {
          navigate("/login");
        }
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (loading) {
    return <div>جاري تحميل البيانات...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-6 bg-white rounded-md shadow-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">ملف المستخدم</h1>
      <div className="mb-4">
        <strong>الاسم:</strong> {user.name}
      </div>
      <div className="mb-4">
        <strong>البريد الإلكتروني:</strong> {user.email}
      </div>
      <div className="mb-4">
        <strong>الدور:</strong> {user.role}
      </div>
      <div className="mb-4">
        <strong>تاريخ التسجيل:</strong>{" "}
        {new Date(user.createdAt).toLocaleDateString()}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        onClick={() => navigate("/edit-profile")}
      >
        تعديل الملف
      </button>
    </div>
  );
};

export default UserProfile;
