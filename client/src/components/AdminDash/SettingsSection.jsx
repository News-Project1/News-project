import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Bell, 
  Globe, 
  Shield, 
  History, 
  Camera, 
  Mail, 
  Clock, 
  Check, 
  X, 
  Save, 
  AlertTriangle, 
  Palette, 
  Monitor, 
  Moon, 
  Smartphone, 
  FileText, 
  Key,
  Eye,
  EyeOff,
  Download,
  BarChart2,
  Award
} from 'lucide-react';

const SettingsSection = ({ userProfile }) => {
  const [activeSettingsTab, setActiveSettingsTab] = useState('profile');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [theme, setTheme] = useState('light');
  const [formData, setFormData] = useState({
    name: userProfile.name,
    email: userProfile.email,
    bio: 'مدير لوحة التحكم مسؤول عن إدارة النظام والمستخدمين والمحتوى.',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    language: userProfile.language,
    timezone: userProfile.timezone,
    twoFactorEnabled: userProfile.twoFactorEnabled,
    notificationsEnabled: userProfile.notificationsEnabled,
    emailNotifications: true,
    systemAlerts: true, // تغيير من commentNotifications إلى تنبيهات النظام
    userManagementNotifications: true, // إضافة لإدارة المستخدمين
    securityNotifications: true, // إضافة لأمان النظام
    maintenanceAlerts: true, // تنبيهات الصيانة
    dailyReport: true, // تقرير يومي بدلاً من dailyDigest
    autoBackup: true, // إعداد خاص بالمدير
    fontsize: 'medium',
    highContrast: false,
    compactLayout: false,
    autosave: true,
    displayName: 'fullname', // options: username, fullname, custom
    phone: '+20 987 654 3210',
    alternateEmail: 'admin.secondary@example.com',
    recoveryCodes: true,
    loginHistory: [],
    systemEvents: [] // تغيير من contentHistory إلى أحداث النظام
  });

  // Sample login history data for admin
  const loginHistory = [
    { date: '14 مارس 2025، 09:00', device: 'كمبيوتر مكتبي - القاهرة، مصر', ip: '192.168.XX.XX', status: 'ناجح' },
    { date: '13 مارس 2025، 16:30', device: 'جهاز لوحي - القاهرة، مصر', ip: '10.0.XX.XX', status: 'ناجح' },
    { date: '12 مارس 2025، 22:15', device: 'كمبيوتر محمول - الجيزة، مصر', ip: '172.16.XX.XX', status: 'ناجح' },
    { date: '10 مارس 2025، 08:45', device: 'مجهول - دبي، الإمارات', ip: '85.23.XX.XX', status: 'مرفوض' }
  ];

  // Sample system events data (instead of content history)
  const systemEvents = [
    { id: 1, type: 'إدارة مستخدم', action: 'حظر مستخدم "user123"', date: '13 مارس 2025', status: 'مكتمل' },
    { id: 2, type: 'تحديث نظام', action: 'تثبيت التحديث v3.1.2', date: '12 مارس 2025', status: 'مكتمل' },
    { id: 3, type: 'إعدادات', action: 'تغيير سياسة كلمات المرور', date: '11 مارس 2025', status: 'مكتمل' },
    { id: 4, type: 'نسخ احتياطي', action: 'إنشاء نسخة احتياطية يدوية', date: '10 مارس 2025', status: 'مكتمل' }
  ];

  // Admin-specific achievements
  const achievements = [
    { id: 1, title: 'مدير متميز', description: 'إدارة النظام بنجاح لمدة عام بدون انقطاع', date: 'ديسمبر 2024', icon: Award },
    { id: 2, title: 'حماية النظام', description: 'صد 50 محاولة اختراق', date: 'نوفمبر 2024', icon: Shield },
    { id: 3, title: 'دعم فعال', description: 'حل 200 استفسار من المستخدمين', date: 'أكتوبر 2024', icon: User }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRadioChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('تم حفظ البيانات:', formData);
    alert('تم حفظ التغييرات بنجاح');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const generateRecoveryCodes = () => {
    alert('تم إنشاء رموز الاسترداد الجديدة. يرجى الاحتفاظ بها في مكان آمن.');
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    // Logic to apply theme can be added here
  };

  const settingsTabs = [
    { id: 'profile', label: 'الملف الشخصي', icon: <User size={20} /> },
    { id: 'security', label: 'الأمان وكلمة المرور', icon: <Lock size={20} /> },
    { id: 'notifications', label: 'الإشعارات', icon: <Bell size={20} /> },
    { id: 'preferences', label: 'التفضيلات', icon: <Palette size={20} /> },
    { id: 'activity', label: 'سجل النشاط', icon: <History size={20} /> },
    { id: 'achievements', label: 'الإنجازات', icon: <Award size={20} /> },
  ];

  const renderTabContent = () => {
    switch (activeSettingsTab) {
      case 'profile':
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-3/4">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      البريد الإلكتروني الرئيسي
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="alternateEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      البريد الإلكتروني البديل
                    </label>
                    <input
                      type="email"
                      id="alternateEmail"
                      name="alternateEmail"
                      value={formData.alternateEmail}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                    <p className="text-sm text-gray-500 mt-1">للاستخدام في الاسترداد وإشعارات النظام</p>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                      الدور
                    </label>
                    <input
                      type="text"
                      id="role"
                      value={userProfile.role}
                      className="w-full px-3 py-2 border rounded-md bg-gray-50"
                      disabled
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-2">
                      طريقة عرض الاسم
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="displayNameRadio"
                          checked={formData.displayName === 'username'}
                          onChange={() => handleRadioChange('displayName', 'username')}
                          className="ml-2"
                        />
                        <span>اسم المستخدم</span>
                      </label>
                      <label className="flex items-center cursor-pointer mr-4">
                        <input
                          type="radio"
                          name="displayNameRadio"
                          checked={formData.displayName === 'fullname'}
                          onChange={() => handleRadioChange('displayName', 'fullname')}
                          className="ml-2"
                        />
                        <span>الاسم الكامل</span>
                      </label>
                      <label className="flex items-center cursor-pointer mr-4">
                        <input
                          type="radio"
                          name="displayNameRadio"
                          checked={formData.displayName === 'custom'}
                          onChange={() => handleRadioChange('displayName', 'custom')}
                          className="ml-2"
                        />
                        <span>مخصص</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                      السيرة الذاتية
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      rows={4}
                      value={formData.bio}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="اكتب نبذة مختصرة عن دورك الإداري..."
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                        <img src={userProfile.avatar} alt="صورة الملف الشخصي" className="w-full h-full object-cover" />
                      </div>
                      <button className="absolute bottom-4 right-0 bg-blue-600 text-white p-2 rounded-full">
                        <Camera size={18} />
                      </button>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md mb-2 w-full">
                      تغيير الصورة
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-md mb-4 w-full">
                      إزالة الصورة
                    </button>
                    
                    <div className="w-full mt-4 pt-4 border-t">
                      <p className="text-sm font-medium text-gray-700 mb-1">معلومات الحساب</p>
                      <div className="text-xs text-gray-500 space-y-2">
                        <p className="flex items-center">
                          <Clock size={14} className="ml-1" />
                          تاريخ الانضمام: {userProfile.joinDate}
                        </p>
                        <p className="flex items-center">
                          <History size={14} className="ml-1" />
                          آخر تسجيل دخول: {userProfile.lastLogin}
                        </p>
                        <p className="flex items-center">
                          <Shield size={14} className="ml-1" />
                          إجراءات إدارية: 156
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button type="button" className="px-4 py-2 border border-gray-300 rounded-md">
                إلغاء
              </button>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center">
                <Save size={18} className="ml-2" />
                حفظ التغييرات
              </button>
            </div>
          </form>
        );

      case 'security':
        return (
          <div className="space-y-8">
            {/* Password Change Section */}
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Lock size={20} className="ml-2" />
                تغيير كلمة المرور
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    كلمة المرور الحالية
                  </label>
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="currentPassword"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                    >
                      {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    كلمة المرور الجديدة
                  </label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="newPassword"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    تأكيد كلمة المرور الجديدة
                  </label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center"
                  >
                    <Save size={18} className="ml-2" />
                    حفظ كلمة المرور
                  </button>
                </div>
              </form>
            </div>

            {/* Two-Factor Authentication Section */}
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Shield size={20} className="ml-2" />
                المصادقة الثنائية
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    تفعيل المصادقة الثنائية
                  </p>
                  <p className="text-sm text-gray-500">
                    حماية إضافية للوصول إلى لوحة التحكم الإدارية.
                  </p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="twoFactorEnabled"
                    checked={formData.twoFactorEnabled}
                    onChange={handleChange}
                    className="ml-2"
                  />
                  <span>{formData.twoFactorEnabled ? "مفعل" : "غير مفعل"}</span>
                </label>
              </div>
            </div>

            {/* Recovery Codes Section */}
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Key size={20} className="ml-2" />
                رموز الاسترداد
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                رموز لاستعادة الوصول إلى لوحة التحكم في حالة فقدان المصادقة.
              </p>
              <button
                onClick={generateRecoveryCodes}
                className="px-4 py-2 bg-green-600 text-white rounded-md flex items-center"
              >
                <Download size={18} className="ml-2" />
                إنشاء رموز استرداد جديدة
              </button>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Bell size={20} className="ml-2" />
              إعدادات الإشعارات
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">تفعيل الإشعارات</span>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="notificationsEnabled"
                    checked={formData.notificationsEnabled}
                    onChange={handleChange}
                    className="ml-2"
                  />
                  <span>{formData.notificationsEnabled ? "مفعل" : "غير مفعل"}</span>
                </label>
              </div>
              
              {formData.notificationsEnabled && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">إشعارات البريد الإلكتروني</span>
                    <input
                      type="checkbox"
                      name="emailNotifications"
                      checked={formData.emailNotifications}
                      onChange={handleChange}
                      className="ml-2"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">تنبيهات النظام</span>
                    <input
                      type="checkbox"
                      name="systemAlerts"
                      checked={formData.systemAlerts}
                      onChange={handleChange}
                      className="ml-2"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">إشعارات إدارة المستخدمين</span>
                    <input
                      type="checkbox"
                      name="userManagementNotifications"
                      checked={formData.userManagementNotifications}
                      onChange={handleChange}
                      className="ml-2"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">إشعارات الأمان</span>
                    <input
                      type="checkbox"
                      name="securityNotifications"
                      checked={formData.securityNotifications}
                      onChange={handleChange}
                      className="ml-2"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">تنبيهات الصيانة</span>
                    <input
                      type="checkbox"
                      name="maintenanceAlerts"
                      checked={formData.maintenanceAlerts}
                      onChange={handleChange}
                      className="ml-2"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">التقرير اليومي</span>
                    <input
                      type="checkbox"
                      name="dailyReport"
                      checked={formData.dailyReport}
                      onChange={handleChange}
                      className="ml-2"
                    />
                  </div>
                </div>
              )}
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center"
                >
                  <Save size={18} className="ml-2" />
                  حفظ التغييرات
                </button>
              </div>
            </form>
          </div>
        );

      case 'preferences':
        return (
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Palette size={20} className="ml-2" />
              التفضيلات
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                  اللغة
                </label>
                <select
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="العربية">العربية</option>
                  <option value="English">English</option>
                  <option value="Français">Français</option>
                </select>
              </div>

              <div>
                <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                  المنطقة الزمنية
                </label>
                <select
                  id="timezone"
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="GMT+2 (القاهرة)">GMT+2 (القاهرة)</option>
                  <option value="GMT">GMT</option>
                  <option value="GMT-5 (نيويورك)">GMT-5 (نيويورك)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  المظهر
                </label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => handleThemeChange('light')}
                    className={`px-4 py-2 rounded-md flex items-center ${theme === 'light' ? 'bg-blue-600 text-white' : 'border border-gray-300'}`}
                  >
                    <Monitor size={18} className="ml-2" />
                    فاتح
                  </button>
                  <button
                    type="button"
                    onClick={() => handleThemeChange('dark')}
                    className={`px-4 py-2 rounded-md flex items-center ${theme === 'dark' ? 'bg-blue-600 text-white' : 'border border-gray-300'}`}
                  >
                    <Moon size={18} className="ml-2" />
                    داكن
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">النسخ الاحتياطي التلقائي</span>
                <input
                  type="checkbox"
                  name="autoBackup"
                  checked={formData.autoBackup}
                  onChange={handleChange}
                  className="ml-2"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">التخطيط المضغوط</span>
                <input
                  type="checkbox"
                  name="compactLayout"
                  checked={formData.compactLayout}
                  onChange={handleChange}
                  className="ml-2"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">الحفظ التلقائي</span>
                <input
                  type="checkbox"
                  name="autosave"
                  checked={formData.autosave}
                  onChange={handleChange}
                  className="ml-2"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center"
                >
                  <Save size={18} className="ml-2" />
                  حفظ التغييرات
                </button>
              </div>
            </form>
          </div>
        );

      case 'activity':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <History size={20} className="ml-2" />
                سجل تسجيل الدخول
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-right">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-2">التاريخ</th>
                      <th className="p-2">الجهاز</th>
                      <th className="p-2">عنوان IP</th>
                      <th className="p-2">الحالة</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loginHistory.map((entry, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-2">{entry.date}</td>
                        <td className="p-2">{entry.device}</td>
                        <td className="p-2">{entry.ip}</td>
                        <td className="p-2">
                          <span className={`px-2 py-1 rounded ${entry.status === 'ناجح' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {entry.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <FileText size={20} className="ml-2" />
                سجل أحداث النظام
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-right">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-2">النوع</th>
                      <th className="p-2">الإجراء</th>
                      <th className="p-2">التاريخ</th>
                      <th className="p-2">الحالة</th>
                    </tr>
                  </thead>
                  <tbody>
                    {systemEvents.map((entry) => (
                      <tr key={entry.id} className="border-t">
                        <td className="p-2">{entry.type}</td>
                        <td className="p-2">{entry.action}</td>
                        <td className="p-2">{entry.date}</td>
                        <td className="p-2">
                          <span className={`px-2 py-1 rounded ${entry.status === 'مكتمل' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {entry.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Award size={20} className="ml-2" />
              الإنجازات
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="p-4 border rounded-lg flex items-start">
                  <achievement.icon size={24} className="ml-3 text-blue-600" />
                  <div>
                    <h4 className="text-md font-semibold">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6" dir="rtl">
      {/* Sidebar for Settings Tabs */}
      <div className="w-full md:w-1/4">
        <div className="bg-white p-4 rounded-lg border">
          <ul className="space-y-2">
            {settingsTabs.map((tab) => (
              <li
                key={tab.id}
                className={`p-2 rounded cursor-pointer flex items-center ${activeSettingsTab === tab.id ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveSettingsTab(tab.id)}
              >
                {tab.icon}
                <span className="mr-2">{tab.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default SettingsSection;