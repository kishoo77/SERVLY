import React from 'react';
import { X, Play } from 'lucide-react';

interface DemoVideoProps {
  onClose: () => void;
}

const DemoVideo: React.FC<DemoVideoProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-3xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">عرض توضيحي - منصة Servly</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-8">
          <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Play className="w-10 h-10 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">مرحباً بك في Servly!</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                منصة شاملة لإدارة الأعمال والموارد البشرية
              </p>

              <div className="max-w-md mx-auto text-right space-y-4">
                <div className="bg-white/60 dark:bg-gray-700/60 rounded-xl p-4">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-2">إدارة الموارد البشرية</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    تتبع الموظفين والرواتب والحضور بسهولة
                  </p>
                </div>

                <div className="bg-white/60 dark:bg-gray-700/60 rounded-xl p-4">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-2">نظام الولاء</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    بناء علاقات قوية مع عملائك من خلال نقاط الولاء
                  </p>
                </div>

                <div className="bg-white/60 dark:bg-gray-700/60 rounded-xl p-4">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-2">منشئ المواقع</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    إنشاء موقع احترافي في دقائق بدون أي خبرة برمجية
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-colors font-medium"
            >
              ابدأ الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoVideo;
