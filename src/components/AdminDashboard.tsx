import React, { useState } from 'react';
import { X, Users, Settings, Palette, Database, Shield, BarChart3, Globe, Zap, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const AdminDashboard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const { isDarkMode, toggleDarkMode } = useTheme();

  const sections = [
    { id: 'overview', name: 'نظرة عامة', icon: BarChart3 },
    { id: 'users', name: 'المستخدمين', icon: Users },
    { id: 'platform', name: 'إعدادات المنصة', icon: Settings },
    { id: 'branding', name: 'الهوية البصرية', icon: Palette },
    { id: 'database', name: 'قاعدة البيانات', icon: Database },
    { id: 'security', name: 'الأمان', icon: Shield },
    { id: 'performance', name: 'الأداء', icon: Zap }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-full max-w-7xl h-[90vh] bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 rounded-3xl shadow-2xl dark:shadow-none overflow-hidden flex text-gray-900 dark:text-gray-100">
        {/* Sidebar */}
        <div className="w-80 backdrop-blur-xl bg-white/90 dark:bg-gray-800/90 border-r border-gray-200 dark:border-gray-700">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">لوحة تحكم الإدارة</h2>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Dark Mode Toggle in Admin Dashboard */}
            <div className="mb-6 p-2 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-between">
              <span className="font-medium text-gray-700 dark:text-gray-300">{isDarkMode ? 'الوضع الفاتح' : 'الوضع الداكن'}</span>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-xl text-right transition-colors ${
                    activeSection === section.id ? 'bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <section.icon className="w-5 h-5" />
                  <span className="font-medium">{section.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8">
            {activeSection === 'overview' && (
              <div className="text-gray-900 dark:text-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">نظرة عامة على المنصة</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">إحصائيات المستخدمين</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">إجمالي المستخدمين</span>
                        <span className="font-bold text-gray-900">0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">نشط هذا الشهر</span>
                        <span className="font-bold text-green-600">0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">مستخدمين جدد</span>
                        <span className="font-bold text-blue-600">0</span>
                      </div>
                    </div>
                  </div>

                  <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">الاشتراكات</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">أساسية</span>
                        <span className="font-bold text-gray-900">0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">احترافية</span>
                        <span className="font-bold text-purple-600">0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">مؤسسية</span>
                        <span className="font-bold text-gold-600">0</span>
                      </div>
                    </div>
                  </div>

                  <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">الإيرادات</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">هذا الشهر</span>
                        <span className="font-bold text-green-600">$0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">الشهر الماضي</span>
                        <span className="font-bold text-gray-900">$0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">النمو</span>
                        <span className="font-bold text-gray-500">0%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">النشاط الأخير</h4>
                  <div className="space-y-4">
                    <div className="text-center py-8">
                      <p className="text-gray-500">لا توجد أنشطة حديثة</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'branding' && (
              <div className="text-gray-900 dark:text-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">الهوية البصرية للمنصة</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">الألوان الأساسية</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">اللون الأساسي</label>
                        <div className="flex items-center space-x-3">
                          <input
                            type="color"
                            value="#8B5CF6"
                            onChange={(e) => {
                              document.documentElement.style.setProperty('--primary-color', e.target.value);
                              alert('تم تحديث اللون الأساسي!');
                            }}
                            className="w-12 h-12 rounded-xl border border-gray-200"
                          />
                          <input
                            type="text"
                            value="#8B5CF6"
                            onChange={(e) => {
                              document.documentElement.style.setProperty('--primary-color', e.target.value);
                            }}
                            className="flex-1 px-4 py-3 bg-white/60 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600 rounded-xl"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">اللون الثانوي</label>
                        <div className="flex items-center space-x-3">
                          <input
                            type="color"
                            value="#FFFFFF"
                            onChange={(e) => {
                              document.documentElement.style.setProperty('--secondary-color', e.target.value);
                              alert('تم تحديث اللون الثانوي!');
                            }}
                            className="w-12 h-12 rounded-xl border border-gray-200"
                          />
                          <input
                            type="text"
                            value="#FFFFFF"
                            onChange={(e) => {
                              document.documentElement.style.setProperty('--secondary-color', e.target.value);
                            }}
                            className="flex-1 px-4 py-3 bg-white/60 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600 rounded-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">الخطوط</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">خط العناوين</label>
                        <select 
                          onChange={(e) => {
                            document.documentElement.style.setProperty('--heading-font', e.target.value);
                            alert('تم تحديث خط العناوين!');
                          }}
                          className="w-full px-4 py-3 bg-white/60 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-gray-100"
                        >
                          <option>Cairo</option>
                          <option>Tajawal</option>
                          <option>IBM Plex Sans Arabic</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">خط المحتوى</label>
                        <select 
                          onChange={(e) => {
                            document.documentElement.style.setProperty('--body-font', e.target.value);
                            alert('تم تحديث خط المحتوى!');
                          }}
                          className="w-full px-4 py-3 bg-white/60 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-gray-100"
                        >
                          <option>Cairo</option>
                          <option>Tajawal</option>
                          <option>IBM Plex Sans Arabic</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Settings */}
                <div className="mt-8 backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">إعدادات الفوتر</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">نص حقوق الطبع</label>
                      <input
                        type="text"
                        defaultValue="© 2024 Servly. جميع الحقوق محفوظة."
                        className="w-full px-4 py-3 bg-white/60 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">رابط الشركة</label>
                      <input
                        type="url"
                        defaultValue="https://servly.com"
                        className="w-full px-4 py-3 bg-white/60 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">بريد الدعم</label>
                      <input
                        type="email"
                        defaultValue="support@servly.com"
                        className="w-full px-4 py-3 bg-white/60 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                      <input
                        type="tel"
                        defaultValue="+966501234567"
                        className="w-full px-4 py-3 bg-white/60 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600 rounded-xl"
                      />
                    </div>
                  </div>
                </div> {/* End of Footer Settings */}
                <div className="mt-8 backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">شعار المنصة</h4>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl mx-auto mb-4 flex items-center justify-center">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">اسحب وأفلت الشعار هنا أو</p>
                    <button className="px-6 py-3 bg-purple-100 text-purple-800 rounded-xl hover:bg-purple-200 transition-colors">
                      اختر ملف
                    </button>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-colors">
                    حفظ التغييرات
                  </button>
                </div>
              </div>
            )}

            {activeSection === 'users' && (
              <div className="text-gray-900 dark:text-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">إدارة المستخدمين</h3>
                
                <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">جميع المستخدمين</h4>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-purple-100 text-purple-800 rounded-xl hover:bg-purple-200 transition-colors">
                        تصدير البيانات
                      </button>
                      <button className="px-4 py-2 bg-red-100 text-red-800 rounded-xl hover:bg-red-200 transition-colors">
                        حذف متعدد
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-gray-900 dark:text-gray-100">
                      <thead className="bg-gray-50/60 dark:bg-gray-700/60">
                        <tr>
                          <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">المستخدم</th>
                          <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">الاشتراك</th>
                          <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">تاريخ التسجيل</th>
                          <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">الحالة</th>
                          <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">الإجراءات</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                          <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                            لا توجد مستخدمين مسجلين حتى الآن
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'platform' && (
              <div className="text-gray-900 dark:text-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">إعدادات المنصة العامة</h3>
                
                <div className="space-y-8">
                  <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">الإعدادات الأساسية</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">اسم المنصة</label>
                        <input
                          type="text"
                          value="منصة الأعمال المتكاملة"
                          className="w-full px-4 py-3 bg-white/60 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني للدعم</label>
                        <input
                          type="email"
                          value="support@platform.com"
                          className="w-full px-4 py-3 bg-white/60 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600 rounded-xl"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">ميزات المنصة</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                        <div>
                          <h5 className="font-medium text-gray-900">نظام HR</h5>
                          <p className="text-sm text-gray-600">إدارة الموارد البشرية</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked /> {/* Added dark:bg-gray-600 */}
                          <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div> {/* Added dark:bg-gray-600 */}
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                        <div>
                          <h5 className="font-medium text-gray-900">نظام الولاء</h5>
                          <p className="text-sm text-gray-600">نقاط الولاء والمكافآت</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked /> {/* Added dark:bg-gray-600 */}
                          <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div> {/* Added dark:bg-gray-600 */}
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                        <div>
                          <h5 className="font-medium text-gray-900">منشئ المواقع</h5>
                          <p className="text-sm text-gray-600">بناء المواقع الإلكترونية</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked /> {/* Added dark:bg-gray-600 */}
                          <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div> {/* Added dark:bg-gray-600 */}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-colors">
                    حفظ جميع الإعدادات
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;