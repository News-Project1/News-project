import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bookmark from "../bookmark/bookmark";

const UserProfile = () => {
  // Simulated data for preview - would be replaced by your actual API call
  const [user, setUser] = useState({
    name: "محمد أحمد",
    email: "mohammed@example.com",
    role: "صحفي",
    createdAt: "2024-02-15T12:00:00.000Z",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Navigation function (simulated)
  const navigateToEditProfile = () => {
    console.log("Navigating to edit profile");
  };

  // Custom SVG icons as components
  const UserIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
    </svg>
  );

  const EmailIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
    </svg>
  );

  const RoleIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M21 11h-1.5v-.5h-2v.5H16v2h1.5v.5h2V13H21v-2zM8 9l-3 3 3 3v-2h2v2l3-3-3-3v2H8V9zm11-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 5h14v2H5V5zm14 14H5v-9h14v9z"></path>
    </svg>
  );

  const CalendarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path>
    </svg>
  );

  const EditIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
    </svg>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#28696A] border-solid mx-auto"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">
            جاري تحميل البيانات...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="text-red-500 text-xl font-bold mb-4">❌</div>
          <p className="text-red-500 font-medium">{error}</p>
          <button
            className="mt-4 bg-[#213058] text-white px-6 py-2 rounded-lg hover:bg-[#28696A] transition-all"
            onClick={() => (window.location.href = "/login")}
          >
            تسجيل الدخول
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gray-50 flex justify-center items-center py-12 px-4"
      dir="rtl"
    >
      <div className="max-w-md w-full">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[#28696A] via-[#213058] to-[#213058] rounded-t-2xl px-8 py-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">الملف الشخصي</h1>
            <div className="bg-white/20 p-3 rounded-full">
              <UserIcon />
            </div>
          </div>
        </div>

        {/* User details card */}
        <div className="bg-white rounded-b-2xl shadow-lg p-8">
          <div className="space-y-6">
            {/* User info items */}
            <div className="flex items-center border-b border-gray-100 pb-4">
              <div className="bg-[#F0E6D7] p-3 rounded-full text-[#213058] ml-4">
                <UserIcon />
              </div>
              <div>
                <p className="text-gray-500 text-sm">الاسم</p>
                <p className="font-semibold text-gray-800 text-lg">
                  {user.name}
                </p>
              </div>
            </div>

            <div className="flex items-center border-b border-gray-100 pb-4">
              <div className="bg-[#F0E6D7] p-3 rounded-full text-[#213058] ml-4">
                <EmailIcon />
              </div>
              <div>
                <p className="text-gray-500 text-sm">البريد الإلكتروني</p>
                <p className="font-semibold text-gray-800">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center border-b border-gray-100 pb-4">
              <div className="bg-[#F0E6D7] p-3 rounded-full text-[#213058] ml-4">
                <RoleIcon />
              </div>
              <div>
                <p className="text-gray-500 text-sm">الدور</p>
                <p className="font-semibold text-gray-800">
                  <span className="bg-[#28696A]/10 text-[#28696A] px-3 py-1 rounded-full text-sm">
                    {user.role}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center pb-4">
              <div className="bg-[#F0E6D7] p-3 rounded-full text-[#213058] ml-4">
                <CalendarIcon />
              </div>
              <div>
                <p className="text-gray-500 text-sm">تاريخ التسجيل</p>
                <p className="font-semibold text-gray-800">
                  {new Date(user.createdAt).toLocaleDateString("ar-SA")}
                </p>
              </div>
            </div>

            <div className="mb-4">
                المشاهدة لاحقا
              <Bookmark></Bookmark>
            </div>

            {/* Action buttons */}
            <div className="flex justify-center mt-8">
              <button
                className="flex items-center bg-gradient-to-r from-[#28696A] to-[#213058] text-white px-6 py-3 rounded-lg hover:from-[#F4AE3F] hover:to-[#F4AE3F] transition-all shadow-md"
                onClick={navigateToEditProfile}
              >
                <span className="ml-2">
                  <EditIcon />
                </span>
                تعديل الملف الشخصي
              </button>
            </div>
          </div>
        </div>

        {/* Additional options */}
      </div>
    </div>
  );
};

export default UserProfile;
{
  /* رابط المشاهدة لاحقًا */
}

{
  /* <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        onClick={() => navigate("/edit-profile")}
      >
        تعديل الملف
      </button> */
}
