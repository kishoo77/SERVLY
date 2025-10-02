import React from 'react';
import { useState } from 'react';
import { Building2, Users, Gift, Globe, Star, CheckCircle, TrendingUp, Shield, Zap, Award, Phone, Mail, MapPin, ArrowRight, Play, Smartphone, Monitor, BarChart3, Sparkles, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import DemoVideo from './DemoVideo';

interface LandingPageProps {
  onGetStarted: () => void;
  onAdminLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, onAdminLogin }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showDemoVideo, setShowDemoVideo] = useState(false);

  // About Modal Component
  const AboutModal = () => (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="backdrop-blur-xl bg-white/95 dark:bg-gray-800/95 rounded-3xl border border-white/20 dark:border-gray-700 shadow-xl dark:shadow-none p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto text-gray-900 dark:text-gray-100">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl mx-auto mb-6 flex items-center justify-center">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">من نحن</h3>
          <p className="text-xl text-gray-600 dark:text-gray-300">Servly - شركة تصميم المواقع المصرية الرائدة</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">قصتنا</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                تأسست Servly في عام 2020 في القاهرة، مصر، بهدف تقديم حلول تقنية متكاملة للشركات العربية. 
                بدأنا كفريق صغير من المطورين المتحمسين، واليوم نخدم أكثر من 2500 شركة في المنطقة العربية.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">مهمتنا</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                نسعى لتمكين الشركات العربية من خلال توفير منصة متكاملة تجمع بين إدارة الموارد البشرية، 
                نظام نقاط الولاء، وبناء المواقع الإلكترونية في حل واحد سهل الاستخدام.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">قيمنا الأساسية</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-600 dark:text-gray-300">الأمان والموثوقية</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-600 dark:text-gray-300">الابتكار والتطوير المستمر</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-600 dark:text-gray-300">التميز في الخدمة</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">فريق العمل</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">أ</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-white">أحمد محمد</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">المؤسس والرئيس التنفيذي</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">س</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-white">سارة أحمد</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">مديرة التطوير</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">م</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-white">محمد علي</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">مدير التسويق</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">تواصل معنا</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-600 dark:text-gray-300">+20 100 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-600 dark:text-gray-300">info@servly.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-600 dark:text-gray-300">القاهرة، مصر</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button
            onClick={() => setShowAboutModal(false)}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-colors font-medium"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );

  // Login Modal Component
  const LoginModal = () => (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="backdrop-blur-xl bg-white/95 dark:bg-gray-800/95 rounded-3xl border border-white/20 dark:border-gray-700 shadow-xl dark:shadow-none p-8 max-w-md w-full mx-4 text-gray-900 dark:text-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl mx-auto mb-4 flex items-center justify-center">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">تسجيل الدخول</h3>
          <p className="text-gray-600 dark:text-gray-300">اختر نوع حسابك</p>
        </div>
        
        <div className="space-y-4 mb-8">
          <button
            onClick={() => {
              setShowLoginModal(false);
              onGetStarted();
            }}
            className="w-full flex items-center justify-center space-x-3 p-4 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-xl transition-colors group"
          >
            <Users className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <h4 className="font-bold text-gray-900 dark:text-white">دخول كعميل</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">الوصول لحسابك الشخصي</p>
            </div>
          </button>
          
          <button
            onClick={() => {
              setShowLoginModal(false);
              onAdminLogin();
            }}
            className="w-full flex items-center justify-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-colors group"
          >
            <Shield className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <h4 className="font-bold text-gray-900 dark:text-white">دخول كمدير</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">الوصول للوحة الإدارة</p>
            </div>
          </button>
        </div>
        
        <div className="text-center">
          <button
            onClick={() => setShowLoginModal(false)}
            className="px-6 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border-b border-purple-100 dark:border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Servly
              </h1>
            </div>
            
            {/* Navigation Menu - Hidden on mobile */}
            <nav className="hidden lg:flex items-center space-x-8">
            </nav>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                title={isDarkMode ? 'الوضع الفاتح' : 'الوضع الداكن'}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setShowLoginModal(true)}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
              >
                تسجيل الدخول
              </button>
              <button
                onClick={onGetStarted}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-colors font-medium"
              >
                ابدأ الآن
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-green-200 dark:bg-green-800 rounded-full opacity-25 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-yellow-200 dark:bg-yellow-800 rounded-full opacity-20 animate-bounce"></div>
          </div>
          
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-purple-600 animate-spin mr-3" />
              <span className="text-purple-600 dark:text-purple-400 font-medium">منصة الأعمال الذكية</span>
              <Sparkles className="w-8 h-8 text-purple-600 animate-spin ml-3" />
            </div>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              منصة الأعمال المتكاملة
              <span className="block text-purple-600">لإدارة شركتك بذكاء</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
              اجمع بين إدارة الموارد البشرية ونظام نقاط الولاء وبناء المواقع الإلكترونية في منصة واحدة متطورة
            </p>
            <div className="flex items-center justify-center space-x-4 animate-fade-in-delay-2">
              <button
                onClick={onGetStarted}
                className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>ابدأ تجربتك المجانية</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowDemoVideo(true)}
                className="flex items-center space-x-2 px-8 py-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/20 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 font-medium text-lg transform hover:scale-105"
              >
                <Play className="w-5 h-5" />
                <span>شاهد العرض التوضيحي</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 animate-fade-in-delay-3">
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">0+</div>
              <div className="text-gray-600 dark:text-gray-400">شركة تثق بنا</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-600 dark:text-gray-400">وقت التشغيل</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">0+</div>
              <div className="text-gray-600 dark:text-gray-400">موظف يستخدم المنصة</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">0/5</div>
              <div className="text-gray-600 dark:text-gray-400">تقييم العملاء</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">كل ما تحتاجه لإدارة أعمالك</h3>
            <p className="text-xl text-gray-600 dark:text-gray-400">حلول متكاملة تجمع بين القوة والبساطة</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* HR Management */}
            <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-8 group hover:shadow-xl dark:hover:shadow-none transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">إدارة الموارد البشرية</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">نظام شامل لإدارة الموظفين والحضور والانصراف والرواتب مع تقارير تفصيلية</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">تتبع الحضور والانصراف</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">إدارة الرواتب والمكافآت</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">جدولة المواعيد والمهام</span>
                </li>
              </ul>
            </div>

            {/* Loyalty System */}
            <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-8 group hover:shadow-xl dark:hover:shadow-none transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">نظام نقاط الولاء</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">نظام متطور للمكافآت ونقاط الولاء مع دعم Apple Wallet للعروض الذكية</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">نقاط ولاء قابلة للتخصيص</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">تكامل مع Apple Wallet</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">عروض وخصومات ذكية</span>
                </li>
              </ul>
            </div>

            {/* Website Builder */}
            <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-8 group hover:shadow-xl dark:hover:shadow-none transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">منشئ المواقع</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">أنشئ موقعك الإلكتروني بسهولة مع قوالب احترافية وربط الدومين المخصص</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">قوالب احترافية متنوعة</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">ربط الدومين المخصص</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">محرر مرئي سهل الاستخدام</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">خطط تناسب جميع الأعمال</h3>
            <p className="text-xl text-gray-600 dark:text-gray-400">اختر الخطة المناسبة لحجم شركتك</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">الخطة الأساسية</h4>
                <div className="flex items-baseline justify-center mb-4 text-gray-900 dark:text-white">
                  <span className="text-4xl font-bold">99</span>
                  <span className="text-lg text-gray-600 dark:text-gray-400 mr-2">ريال</span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">/ شهر</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-400">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-400">حتى 10 موظفين</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-400">نظام HR أساسي</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-400">موقع واحد</span>
                </li>
              </ul>
              <button
                onClick={onGetStarted}
                className="w-full py-3 px-6 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
              >
                ابدأ الآن
              </button>
            </div>

            {/* Professional Plan */}
            <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl border-2 border-purple-200 dark:border-purple-700 shadow-xl dark:shadow-none p-8 transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                  الأكثر شعبية
                </span>
              </div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">الخطة الاحترافية</h4>
                <div className="flex items-baseline justify-center mb-4 text-gray-900 dark:text-white">
                  <span className="text-4xl font-bold">299</span>
                  <span className="text-lg text-gray-600 dark:text-gray-400 mr-2">ريال</span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">/ شهر</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-400">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-400">حتى 50 موظف</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-400">نظام HR متكامل</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-400">5 مواقع</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-400">دعم Apple Wallet</span>
                </li>
              </ul>
              <button
                onClick={onGetStarted}
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-colors font-medium"
              >
                ابدأ الآن
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-3xl mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">الخطة المؤسسية</h4>
                <div className="flex items-baseline justify-center mb-4 text-gray-900 dark:text-white">
                  <span className="text-4xl font-bold">799</span>
                  <span className="text-lg text-gray-600 dark:text-gray-400 mr-2">ريال</span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">/ شهر</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-400">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-400">موظفين غير محدود</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-400">جميع الميزات</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-400">مواقع غير محدودة</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-400">دعم 24/7</span>
                </li>
              </ul>
              <button
                onClick={() => alert('تواصل معنا: support@servly.com')}
                className="w-full py-3 px-6 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
              >
                تواصل معنا
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">ماذا يقول عملاؤنا</h3>
            <p className="text-xl text-gray-600 dark:text-gray-400">آراء حقيقية من شركات تستخدم Servly</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">"منصة رائعة وفرت علينا الكثير من الوقت والجهد في إدارة الموظفين ونقاط الولاء"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-800 font-medium">أ</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">أحمد محمد</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">مدير عام، شركة التقنية المتقدمة</div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">"نظام نقاط الولاء مع Apple Wallet زاد من تفاعل عملائنا بشكل كبير"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-800 font-medium">س</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">سارة أحمد</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">مديرة التسويق، متجر الأناقة</div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">"منشئ المواقع سهل جداً وساعدنا في إنشاء موقع احترافي بدون خبرة تقنية"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-800 font-medium">م</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">محمد علي</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">صاحب مطعم، مطعم الأصالة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl border border-white/20 dark:border-gray-700 shadow-lg dark:shadow-none p-12">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">جاهز لتطوير أعمالك؟</h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">ابدأ تجربتك المجانية لمدة 14 يوم واكتشف قوة Servly</p>
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={onGetStarted}
                className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
              >
                <span>ابدأ تجربتك المجانية</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">لا حاجة لبطاقة ائتمانية • إلغاء في أي وقت</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">Servly</h4>
              </div>
              <p className="text-gray-400 dark:text-gray-500 mb-4">منصة الأعمال المتكاملة لإدارة شركتك بذكاء وفعالية</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-white mb-4">المنتج</h5>
              <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                <li><button onClick={onGetStarted} className="hover:text-white transition-colors text-left">إدارة الموارد البشرية</button></li>
                <li><button onClick={onGetStarted} className="hover:text-white transition-colors text-left">نظام نقاط الولاء</button></li>
                <li><button onClick={onGetStarted} className="hover:text-white transition-colors text-left">منشئ المواقع</button></li>
                <li><button onClick={onGetStarted} className="hover:text-white transition-colors text-left">التحليلات</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white mb-4">الشركة</h5>
              <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                <li><button onClick={() => setShowAboutModal(true)} className="hover:text-white transition-colors text-left">من نحن</button></li>
                <li><button onClick={() => alert('المدونة - قريباً!')} className="hover:text-white transition-colors text-left">المدونة</button></li>
                <li><button onClick={() => alert('الوظائف - قريباً!')} className="hover:text-white transition-colors text-left">الوظائف</button></li>
                <li><button onClick={() => alert('اتصل بنا: info@servly.com')} className="hover:text-white transition-colors text-left">اتصل بنا</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white mb-4">الدعم</h5>
              <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                <li><button onClick={() => alert('مركز المساعدة - قريباً!')} className="hover:text-white transition-colors text-left">مركز المساعدة</button></li>
                <li><button onClick={() => alert('الأسئلة الشائعة - قريباً!')} className="hover:text-white transition-colors text-left">الأسئلة الشائعة</button></li>
                <li><button onClick={() => alert('الدعم الفني: support@servly.com')} className="hover:text-white transition-colors text-left">الدعم الفني</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 dark:border-gray-700 pt-8 flex items-center justify-between">
            <p className="text-gray-400 dark:text-gray-500">&copy; 2024 Servly. جميع الحقوق محفوظة.</p>
            <button
              onClick={onAdminLogin}
              className="py-3 px-6 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
            >
              لوحة تحكم الإدارة
            </button>
          </div>
        </div>
      </footer>
      
      {/* Modals */}
      {showAboutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">من نحن</h2>
                <button
                  onClick={() => setShowAboutModal(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <span className="text-2xl text-gray-500 dark:text-gray-400">×</span>
                </button>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">قصة Servly</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    تأسست Servly في عام 2020 بهدف تبسيط إدارة الأعمال للشركات الناشئة والمتوسطة في المنطقة العربية. 
                    بدأنا برؤية واضحة: دمج جميع احتياجات الأعمال في منصة واحدة قوية وسهلة الاستخدام.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">مهمتنا</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    نسعى لتمكين الشركات من التركيز على نموها الأساسي من خلال توفير حلول تقنية متطورة تدير 
                    الموارد البشرية، وأنظمة الولاء، وبناء المواقع الإلكترونية بكفاءة عالية.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">قيمنا الأساسية</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">الأمان</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">حماية بياناتك أولويتنا القصوى</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">الابتكار</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">نطور حلول تقنية متقدمة باستمرار</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">التميز</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">نسعى للتميز في كل ما نقدمه</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">فريق العمل</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl text-purple-800 font-bold">أ</span>
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white">أحمد محمد</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">المؤسس والرئيس التنفيذي</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl text-blue-800 font-bold">س</span>
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white">سارة أحمد</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">مديرة التطوير</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl text-green-800 font-bold">م</span>
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white">محمد علي</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">مدير التسويق</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">تواصل معنا</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-6 h-6 text-purple-600" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">الهاتف</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">+966 11 123 4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-6 h-6 text-purple-600" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">البريد الإلكتروني</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">info@servly.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-purple-600" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">العنوان</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">الرياض، المملكة العربية السعودية</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-md w-full">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">تسجيل الدخول</h2>
                <button
                  onClick={() => setShowLoginModal(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <span className="text-2xl text-gray-500 dark:text-gray-400">×</span>
                </button>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={() => {
                    setShowLoginModal(false);
                    onGetStarted();
                  }}
                  className="w-full p-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-colors font-medium text-center"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <Users className="w-6 h-6" />
                    <span>دخول كعميل</span>
                  </div>
                  <p className="text-sm text-purple-100 mt-2">الوصول إلى لوحة تحكم العميل</p>
                </button>
                
                <button
                  onClick={() => {
                    setShowLoginModal(false);
                    onAdminLogin();
                  }}
                  className="w-full p-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium text-center"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <Shield className="w-6 h-6" />
                    <span>دخول كمدير</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">الوصول إلى لوحة تحكم الإدارة</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Demo Video Modal */}
      {showDemoVideo && <DemoVideo onClose={() => setShowDemoVideo(false)} />}
    </div>
  );
};

export default LandingPage;