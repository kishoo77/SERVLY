import React, { useState } from 'react';
import { Check, Star, Zap, Crown, ArrowRight, ArrowLeft, CreditCard, Smartphone, Building, Truck, HelpCircle, ChevronDown, ChevronUp, Calendar, Shield, Award, Phone, Mail, MapPin, MessageCircle, Globe, Facebook, Twitter, Instagram, Linkedin, Youtube, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Plan {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  yearlyPrice: number;
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
  popular?: boolean;
  color: string;
  icon: React.ReactNode;
}

interface PaymentMethod {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  icon: React.ReactNode;
  type: 'card' | 'wallet' | 'bank' | 'cash';
  countries: string[];
}

interface FAQ {
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
}

interface SubscriptionPlansProps {
  onBack?: () => void;
}

const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({ onBack }) => {
  const { isDarkMode } = useTheme();
  const [isYearly, setIsYearly] = useState(false);
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [currency, setCurrency] = useState<'SAR' | 'EGP' | 'USD'>('SAR');
  const [showAllPlans, setShowAllPlans] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [pendingAction, setPendingAction] = useState<{type: 'renew' | 'upgrade', planId?: string} | null>(null);
  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error' | 'info';
    title: string;
    message: string;
  }>({
    show: false,
    type: 'success',
    title: '',
    message: ''
  });
  const [currentSubscription, setCurrentSubscription] = useState({
    planId: 'professional',
    planName: language === 'ar' ? 'المحترف' : 'Professional',
    expiryDate: '2024-03-15',
    status: 'active',
    autoRenewal: true
  });


  const plans: Plan[] = [
    {
      id: 'starter',
      name: 'المبتدئ',
      nameEn: 'Starter',
      price: 99,
      yearlyPrice: 990,
      description: 'مثالي للشركات الصغيرة',
      descriptionEn: 'Perfect for small businesses',
      features: [
        'إدارة حتى 10 موظفين',
        'نظام نقاط الولاء الأساسي',
        'موقع إلكتروني واحد',
        'دعم فني أساسي',
        'تقارير شهرية'
      ],
      featuresEn: [
        'Manage up to 10 employees',
        'Basic loyalty points system',
        'One website',
        'Basic technical support',
        'Monthly reports'
      ],
      color: 'from-blue-500 to-purple-600',
      icon: <Star className="w-6 h-6" />
    },
    {
      id: 'professional',
      name: 'المحترف',
      nameEn: 'Professional',
      price: 199,
      yearlyPrice: 1990,
      description: 'للشركات المتوسطة',
      descriptionEn: 'For medium businesses',
      features: [
        'إدارة حتى 50 موظف',
        'نظام نقاط ولاء متقدم',
        '3 مواقع إلكترونية',
        'بطاقات Apple Wallet',
        'تقارير أسبوعية',
        'دعم فني متقدم',
        'تكامل API'
      ],
      featuresEn: [
        'Manage up to 50 employees',
        'Advanced loyalty system',
        '3 websites',
        'Apple Wallet cards',
        'Weekly reports',
        'Advanced technical support',
        'API integration'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-600',
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 'enterprise',
      name: 'المؤسسي',
      nameEn: 'Enterprise',
      price: 399,
      yearlyPrice: 3990,
      description: 'للمؤسسات الكبيرة',
      descriptionEn: 'For large enterprises',
      features: [
        'موظفين غير محدود',
        'نظام ولاء مخصص بالكامل',
        'مواقع غير محدودة',
        'بطاقات مخصصة',
        'تقارير يومية',
        'دعم فني 24/7',
        'مدير حساب مخصص',
        'تدريب فريق العمل'
      ],
      featuresEn: [
        'Unlimited employees',
        'Fully customized loyalty system',
        'Unlimited websites',
        'Custom cards',
        'Daily reports',
        '24/7 technical support',
        'Dedicated account manager',
        'Team training'
      ],
      color: 'from-orange-500 to-red-600',
      icon: <Crown className="w-6 h-6" />
    }
  ];

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'visa',
      name: 'فيزا',
      nameEn: 'Visa',
      description: 'بطاقة ائتمانية دولية - آمنة وسريعة',
      descriptionEn: 'International credit card - Safe and fast',
      icon: (
        <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md">
          <span className="text-white text-xs font-bold tracking-wider">VISA</span>
        </div>
      ),
      type: 'card',
      countries: ['SA', 'EG', 'Global']
    },
    {
      id: 'mastercard',
      name: 'ماستركارد',
      nameEn: 'Mastercard',
      description: 'بطاقة ائتمانية دولية موثوقة',
      descriptionEn: 'Trusted international credit card',
      icon: (
        <div className="w-12 h-8 bg-gradient-to-r from-red-500 to-orange-400 rounded-lg flex items-center justify-center shadow-md">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
            <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
          </div>
        </div>
      ),
      type: 'card',
      countries: ['SA', 'EG', 'Global']
    },
    {
      id: 'mada',
      name: 'مدى',
      nameEn: 'Mada',
      description: 'بطاقة الدفع السعودية الوطنية',
      descriptionEn: 'Saudi national payment card',
      icon: (
        <div className="w-12 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center shadow-md">
          <span className="text-white text-xs font-bold">مدى</span>
        </div>
      ),
      type: 'card',
      countries: ['SA']
    },
    {
      id: 'applepay',
      name: 'أبل باي',
      nameEn: 'Apple Pay',
      description: 'دفع آمن وسريع من أبل',
      descriptionEn: 'Secure and fast payment from Apple',
      icon: (
        <div className="w-12 h-8 bg-gradient-to-r from-gray-800 to-black rounded-lg flex items-center justify-center shadow-md">
          <span className="text-white text-xs font-bold">🍎</span>
        </div>
      ),
      type: 'wallet',
      countries: ['SA', 'EG', 'Global']
    },
    {
      id: 'stcpay',
      name: 'STC Pay',
      nameEn: 'STC Pay',
      description: 'محفظة رقمية سعودية من STC',
      descriptionEn: 'Saudi digital wallet by STC',
      icon: (
        <div className="w-12 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center shadow-md">
          <span className="text-white text-xs font-bold">STC</span>
        </div>
      ),
      type: 'wallet',
      countries: ['SA']
    },
    {
      id: 'vodafonecash',
      name: 'فودافون كاش',
      nameEn: 'Vodafone Cash',
      description: 'محفظة رقمية مصرية من فودافون',
      descriptionEn: 'Egyptian digital wallet by Vodafone',
      icon: (
        <div className="w-12 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-md">
          <span className="text-white text-xs font-bold">VF</span>
        </div>
      ),
      type: 'wallet',
      countries: ['EG']
    },
    {
      id: 'orangemoney',
      name: 'أورانج موني',
      nameEn: 'Orange Money',
      description: 'محفظة رقمية مصرية من أورانج',
      descriptionEn: 'Egyptian digital wallet by Orange',
      icon: (
        <div className="w-12 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
          <span className="text-white text-xs font-bold">🍊</span>
        </div>
      ),
      type: 'wallet',
      countries: ['EG']
    },
    {
      id: 'etisalatcash',
      name: 'اتصالات كاش',
      nameEn: 'Etisalat Cash',
      description: 'محفظة رقمية مصرية من اتصالات',
      descriptionEn: 'Egyptian digital wallet by Etisalat',
      icon: (
        <div className="w-12 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md">
          <span className="text-white text-xs font-bold">E</span>
        </div>
      ),
      type: 'wallet',
      countries: ['EG']
    },
    {
      id: 'banktransfer',
      name: 'تحويل بنكي',
      nameEn: 'Bank Transfer',
      description: 'تحويل مباشر من البنك - آمن ومضمون',
      descriptionEn: 'Direct bank transfer - Safe and guaranteed',
      icon: <Building className="w-6 h-6 text-blue-600" />,
      type: 'bank',
      countries: ['SA', 'EG']
    },
    {
      id: 'cashondelivery',
      name: 'تحصيل مندوب',
      nameEn: 'Cash on Delivery',
      description: 'ادفع عند وصول المندوب - مريح وآمن',
      descriptionEn: 'Pay when representative arrives - Convenient and safe',
      icon: <Truck className="w-6 h-6 text-green-600" />,
      type: 'cash',
      countries: ['SA', 'EG']
    }
  ];

  const faqs: FAQ[] = [
    {
      question: 'كيف يمكنني تغيير خطة الاشتراك؟',
      questionEn: 'How can I change my subscription plan?',
      answer: 'يمكنك تغيير خطة الاشتراك في أي وقت من خلال الضغط على "ترقية الخطة" أو التواصل مع فريق الدعم.',
      answerEn: 'You can change your subscription plan anytime by clicking "Upgrade Plan" or contacting our support team.'
    },
    {
      question: 'هل يمكنني إلغاء الاشتراك في أي وقت؟',
      questionEn: 'Can I cancel my subscription anytime?',
      answer: 'نعم، يمكنك إلغاء الاشتراك في أي وقت. سيستمر الاشتراك حتى نهاية الفترة المدفوعة.',
      answerEn: 'Yes, you can cancel your subscription anytime. Your subscription will continue until the end of the paid period.'
    },
    {
      question: 'ما هي وسائل الدفع المتاحة؟',
      questionEn: 'What payment methods are available?',
      answer: 'نقبل جميع البطاقات الائتمانية، المحافظ الرقمية، التحويل البنكي، وتحصيل المندوب.',
      answerEn: 'We accept all credit cards, digital wallets, bank transfers, and cash on delivery.'
    },
    {
      question: 'هل هناك خصم على الاشتراك السنوي؟',
      questionEn: 'Is there a discount for annual subscription?',
      answer: 'نعم، نوفر خصم يصل إلى 20% عند الاشتراك السنوي مقارنة بالاشتراك الشهري.',
      answerEn: 'Yes, we offer up to 20% discount on annual subscriptions compared to monthly billing.'
    },
    {
      question: 'كيف يمكنني الحصول على فاتورة ضريبية؟',
      questionEn: 'How can I get a tax invoice?',
      answer: 'يتم إرسال الفاتورة الضريبية تلقائياً إلى بريدك الإلكتروني بعد كل عملية دفع.',
      answerEn: 'Tax invoices are automatically sent to your email after each payment.'
    }
  ];

  // Currency formatting
  const formatCurrency = (amount: number) => {
    const symbols = {
      SAR: 'ر.س',
      EGP: 'ج.م',
      USD: '$'
    };
    
    const rates = {
      SAR: 1,
      EGP: 15.5,
      USD: 0.27
    };
    
    const convertedAmount = Math.round(amount * rates[currency]);
    return `${symbols[currency]} ${convertedAmount.toLocaleString()}`;
  };

  // Show notification function
  const showNotification = (type: 'success' | 'error' | 'info', title: string, message: string) => {
    setNotification({
      show: true,
      type,
      title,
      message
    });
    
    // Auto hide after 5 seconds
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 5000);
  };

  const currentPlan = plans.find(plan => plan.id === currentSubscription.planId);

  // Handle plan upgrade
  const handlePlanUpgrade = (planId: string) => {
    const selectedPlan = plans.find(plan => plan.id === planId);
    if (selectedPlan) {
      if (selectedPaymentMethod) {
        // Simulate upgrade process
        setCurrentSubscription(prev => ({
          ...prev,
          planId: planId,
          planName: language === 'ar' ? selectedPlan.name : selectedPlan.nameEn,
          expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
          status: 'active'
        }));
        
        const paymentMethodName = paymentMethods.find(m => m.id === selectedPaymentMethod);
        showNotification(
          'success',
          language === 'ar' ? 'تم ترقية الاشتراك بنجاح!' : 'Subscription Upgraded Successfully!',
          language === 'ar' 
            ? `تم ترقية اشتراكك إلى خطة ${selectedPlan.name}\nوسيلة الدفع: ${paymentMethodName?.name}\nالمبلغ: ${formatCurrency(isYearly ? selectedPlan.yearlyPrice : selectedPlan.price)}`
            : `Upgraded to ${selectedPlan.nameEn} plan\nPayment method: ${paymentMethodName?.nameEn}\nAmount: ${formatCurrency(isYearly ? selectedPlan.yearlyPrice : selectedPlan.price)}`
        );
        setShowAllPlans(false);
      } else {
        setPendingAction({type: 'upgrade', planId});
        setShowPaymentModal(true);
      }
    }
  };

  // Handle subscription renewal
  const handleSubscriptionRenewal = () => {
    if (selectedPaymentMethod) {
      const paymentMethodName = paymentMethods.find(m => m.id === selectedPaymentMethod);
      const currentPlanDetails = plans.find(plan => plan.id === currentSubscription.planId);
      
      if (currentPlanDetails) {
        // Simulate renewal process
        const newExpiryDate = new Date(new Date(currentSubscription.expiryDate).getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        
        setCurrentSubscription(prev => ({
          ...prev,
          expiryDate: newExpiryDate,
          status: 'active'
        }));
        
        showNotification(
          'success',
          language === 'ar' ? 'تم تجديد الاشتراك بنجاح!' : 'Subscription Renewed Successfully!',
          language === 'ar' 
            ? `تم تجديد اشتراكك للخطة ${currentPlanDetails.name}\nوسيلة الدفع: ${paymentMethodName?.name}\nالمبلغ: ${formatCurrency(isYearly ? currentPlanDetails.yearlyPrice : currentPlanDetails.price)}\nتاريخ الانتهاء الجديد: ${new Date(newExpiryDate).toLocaleDateString('ar-EG')}`
            : `Renewed ${currentPlanDetails.nameEn} plan\nPayment method: ${paymentMethodName?.nameEn}\nAmount: ${formatCurrency(isYearly ? currentPlanDetails.yearlyPrice : currentPlanDetails.price)}\nNew expiry: ${new Date(newExpiryDate).toLocaleDateString('en-US')}`
        );
      }
    } else {
      setPendingAction({type: 'renew'});
      setShowPaymentModal(true);
    }
  };

  // Handle auto-renewal toggle
  const handleAutoRenewalToggle = (enabled: boolean) => {
    setCurrentSubscription(prev => ({
      ...prev,
      autoRenewal: enabled
    }));
    
    showNotification(
      'info',
      language === 'ar' ? 'تم تحديث الإعدادات' : 'Settings Updated',
      language === 'ar' 
        ? `تم ${enabled ? 'تفعيل' : 'إيقاف'} التجديد التلقائي`
        : `Auto-renewal ${enabled ? 'enabled' : 'disabled'}`
    );
  };

  // Handle payment confirmation
  const handlePaymentConfirmation = () => {
    if (!selectedPaymentMethod) {
      showNotification(
        'error',
        language === 'ar' ? 'خطأ!' : 'Error!',
        language === 'ar' ? 'يرجى اختيار وسيلة دفع' : 'Please select a payment method'
      );
      return;
    }

    if (pendingAction?.type === 'renew') {
      handleSubscriptionRenewal();
    } else if (pendingAction?.type === 'upgrade' && pendingAction.planId) {
      handlePlanUpgrade(pendingAction.planId);
    }

    setShowPaymentModal(false);
    setPendingAction(null);
  };

  // Payment Modal Component
  const PaymentModal = () => (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="backdrop-blur-xl bg-white/95 dark:bg-gray-800/95 rounded-3xl border border-white/20 dark:border-gray-700 shadow-xl dark:shadow-none p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto text-gray-900 dark:text-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          {language === 'ar' ? 'اختر وسيلة الدفع' : 'Choose Payment Method'}
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {paymentMethods.map((method) => (
            <div key={method.id} className="relative group">
              <button
                onClick={() => setSelectedPaymentMethod(method.id)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedPaymentMethod === method.id
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 scale-105'
                    : 'border-gray-200 bg-white hover:border-purple-300 hover:scale-102'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  {method.icon}
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {language === 'ar' ? method.name : method.nameEn}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>

        {selectedPaymentMethod && (
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
            <p className="text-green-800 dark:text-green-200 font-medium text-center">
              {language === 'ar' 
                ? `تم اختيار ${paymentMethods.find(m => m.id === selectedPaymentMethod)?.name}`
                : `${paymentMethods.find(m => m.id === selectedPaymentMethod)?.nameEn} selected`
              }
            </p>
          </div>
        )}
        
        <div className="flex gap-4">
          <button
            onClick={() => {
              setShowPaymentModal(false);
              setPendingAction(null);
            }}
            className="flex-1 py-3 px-6 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
          >
            {language === 'ar' ? 'إلغاء' : 'Cancel'}
          </button>
          <button
            onClick={handlePaymentConfirmation}
            className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-colors font-medium"
          >
            {language === 'ar' ? 'تأكيد الدفع' : 'Confirm Payment'}
          </button>
        </div>
      </div>
    </div>
  );

  // Contact Modal Component
  const ContactModal = () => (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="backdrop-blur-xl bg-white/95 dark:bg-gray-800/95 rounded-3xl border border-white/20 dark:border-gray-700 shadow-xl dark:shadow-none p-8 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto text-gray-900 dark:text-gray-100">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-800 rounded-3xl mx-auto mb-4 flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Servly - {language === 'ar' ? 'شركة تصميم المواقع المصرية' : 'Egyptian Web Design Company'}
          </p>
        </div>
        
        <div className="space-y-4 mb-6">
          {/* Phone */}
          <div className="flex items-center space-x-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors cursor-pointer">
            <Phone className="w-6 h-6 text-purple-600" />
            <div className="flex-1">
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {language === 'ar' ? 'الهاتف' : 'Phone'}
              </p>
              <p className="text-purple-600 font-bold">+20 100 123 4567</p>
            </div>
          </div>
          
          {/* WhatsApp */}
          <div className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors cursor-pointer">
            <MessageCircle className="w-6 h-6 text-green-600" />
            <div className="flex-1">
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {language === 'ar' ? 'واتساب' : 'WhatsApp'}
              </p>
              <p className="text-green-600 font-bold">+20 100 123 4567</p>
            </div>
          </div>
          
          {/* Email */}
          <div className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-pointer">
            <Mail className="w-6 h-6 text-blue-600" />
            <div className="flex-1">
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
              </p>
              <p className="text-blue-600 font-bold">info@servly.com</p>
            </div>
          </div>
          
          {/* Website */}
          <div className="flex items-center space-x-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors cursor-pointer">
            <Globe className="w-6 h-6 text-indigo-600" />
            <div className="flex-1">
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {language === 'ar' ? 'الموقع الإلكتروني' : 'Website'}
              </p>
              <p className="text-indigo-600 font-bold">www.servly.com</p>
            </div>
          </div>
          
          {/* Address */}
          <div className="flex items-center space-x-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors cursor-pointer">
            <MapPin className="w-6 h-6 text-orange-600" />
            <div className="flex-1">
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {language === 'ar' ? 'العنوان' : 'Address'}
              </p>
              <p className="text-orange-600 font-bold">
                {language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mb-6">
          <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
            {language === 'ar' ? 'تابعنا على' : 'Follow Us'}
          </h4>
          <div className="flex justify-center space-x-4">
            <button className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
              <Facebook className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center text-white hover:bg-sky-600 transition-colors">
              <Twitter className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-white hover:bg-pink-600 transition-colors">
              <Instagram className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
              <Linkedin className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white hover:bg-red-700 transition-colors">
              <Youtube className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <button
          onClick={() => setShowContactModal(false)}
          className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-colors font-medium"
        >
          {language === 'ar' ? 'إغلاق' : 'Close'}
        </button>
      </div>
    </div>
  );

  // Custom Notification Component
  const CustomNotification = () => {
    if (!notification.show) return null;

    const getNotificationIcon = () => {
      switch (notification.type) {
        case 'success':
          return '✅';
        case 'error':
          return '❌';
        case 'info':
          return 'ℹ️';
        default:
          return 'ℹ️';
      }
    };

    const getNotificationColors = () => {
      switch (notification.type) {
        case 'success':
          return 'from-green-500 to-green-600 border-green-200';
        case 'error':
          return 'from-red-500 to-red-600 border-red-200';
        case 'info':
          return 'from-purple-500 to-purple-600 border-purple-200';
        default:
          return 'from-purple-500 to-purple-600 border-purple-200';
      }
    };

    return (
      <div className="fixed top-4 right-4 z-50 max-w-sm">
        <div className={`backdrop-blur-xl bg-gradient-to-r ${getNotificationColors()} text-white rounded-2xl border shadow-xl p-4 notification-slide-in`}>
          <div className="flex items-start justify-between text-white">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">{getNotificationIcon()}</span>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-1">{notification.title}</h4>
                <p className="text-sm opacity-90 whitespace-pre-line">{notification.message}</p>
              </div>
            </div>
            <button
              onClick={() => setNotification(prev => ({ ...prev, show: false }))}
              className="ml-2 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-3 w-full bg-white/20 rounded-full h-1">
            <div className="bg-white h-1 rounded-full notification-progress"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-6 text-gray-900 dark:text-gray-100 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {onBack && (
          <div className="mb-6">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{language === 'ar' ? 'العودة' : 'Back'}</span>
            </button>
          </div>
        )}

        {/* Language and Currency Selectors */}
        <div className="flex items-center justify-end gap-4 mb-6">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as 'ar' | 'en')}
            className="px-3 py-2 bg-white/60 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-900 dark:text-gray-100"
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as 'SAR' | 'EGP' | 'USD')}
            className="px-3 py-2 bg-white/60 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-900 dark:text-gray-100"
          >
            <option value="SAR">ر.س SAR</option>
            <option value="EGP">ج.م EGP</option>
            <option value="USD">$ USD</option>
          </select>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'ar' ? 'إدارة الاشتراك' : 'Manage Subscription'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {language === 'ar' ? 'اشتراكك الحالي ووسائل التجديد' : 'Your current subscription and renewal options'}
          </p>
        </div>

        {/* Current Subscription */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl dark:shadow-none border border-white/20 dark:border-gray-700 mb-8">
          <div className="flex items-center justify-between mb-6 text-gray-900 dark:text-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'ar' ? 'اشتراكك الحالي' : 'Your Current Subscription'}
            </h2>
            <div className={`px-4 py-2 rounded-full text-sm font-medium ${
              currentSubscription.status === 'active' 
                ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200' 
                : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200'
            }`}>
              {currentSubscription.status === 'active' 
                ? (language === 'ar' ? 'نشط' : 'Active')
                : (language === 'ar' ? 'منتهي' : 'Expired')
              }
            </div>
          </div>

          {currentPlan && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${currentPlan.color} text-white mb-4`}>
                  {currentPlan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {language === 'ar' ? currentPlan.name : currentPlan.nameEn}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {language === 'ar' ? currentPlan.description : currentPlan.descriptionEn}
                </p>
                <div className="flex items-baseline gap-2 mb-4 text-gray-900 dark:text-gray-100">
                  <span className="text-3xl font-bold">
                    {formatCurrency(currentPlan.price)}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">/{language === 'ar' ? 'شهر' : 'month'}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {language === 'ar' ? 'تاريخ انتهاء الاشتراك' : 'Subscription Expires'}
                  </span>
                  <span className="text-purple-600 font-bold">
                    {new Date(currentSubscription.expiryDate).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US')}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {language === 'ar' ? 'التجديد التلقائي' : 'Auto Renewal'}
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={currentSubscription.autoRenewal}
                      onChange={(e) => handleAutoRenewalToggle(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Payment Methods */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl dark:shadow-none border border-white/20 dark:border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'ar' ? 'وسائل الدفع' : 'Payment Methods'}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="relative group"
              >
                <button
                  onClick={() => setSelectedPaymentMethod(method.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedPaymentMethod === method.id
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-purple-300'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    {method.icon}
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {language === 'ar' ? method.name : method.nameEn}
                    </span>
                  </div>
                </button>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  {language === 'ar' ? method.description : method.descriptionEn}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            ))}
          </div>

          {selectedPaymentMethod && (
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <p className="text-green-800 dark:text-green-200 font-medium">
                {language === 'ar' 
                  ? `تم اختيار ${paymentMethods.find(m => m.id === selectedPaymentMethod)?.name} كوسيلة دفع`
                  : `${paymentMethods.find(m => m.id === selectedPaymentMethod)?.nameEn} selected as payment method`
                }
              </p>
            </div>
          )}

          <div className="mt-6 flex gap-4">
            <button 
              onClick={() => {
                if (selectedPaymentMethod) {
                  handleSubscriptionRenewal();
                } else {
                  setPendingAction({type: 'renew'});
                  setShowPaymentModal(true);
                }
              }}
              className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-colors font-medium"
            >
              {language === 'ar' ? 'تجديد الاشتراك' : 'Renew Subscription'}
            </button>
            <button 
              onClick={() => setShowAllPlans(!showAllPlans)}
              className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
            >
              {showAllPlans 
                ? (language === 'ar' ? 'إخفاء الخطط الأخرى' : 'Hide Other Plans')
                : (language === 'ar' ? 'عرض الخطط الأخرى' : 'View Other Plans')
              }
            </button>
          </div>
        </div>

        {/* Other Plans (Collapsible) */}
        {showAllPlans && (
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl dark:shadow-none border border-white/20 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'ar' ? 'الخطط الأخرى المتاحة' : 'Other Available Plans'}
            </h2>
            
            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg font-medium ${!isYearly ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'}`}>
                {language === 'ar' ? 'شهري' : 'Monthly'}
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  isYearly ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                    isYearly ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg font-medium ${isYearly ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'}`}>
                {language === 'ar' ? 'سنوي' : 'Annual'}
              </span>
              {isYearly && (
                <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                  {language === 'ar' ? 'وفر حتى 20%' : 'Save up to 20%'}
                </span>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {plans.filter(plan => plan.id !== currentSubscription.planId).map((plan) => {
                const currentPrice = isYearly ? plan.yearlyPrice : plan.price;
                
                return (
                  <div
                    key={plan.id}
                    className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 border border-white/20 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-none transition-all duration-300"
                  >
                    <div className="text-center mb-6">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${plan.color} text-white mb-4`}>
                        {plan.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {language === 'ar' ? plan.name : plan.nameEn}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {language === 'ar' ? plan.description : plan.descriptionEn}
                      </p>
                      <div className="flex items-baseline justify-center gap-2 text-gray-900 dark:text-gray-100">
                        <span className="text-2xl font-bold">
                          {formatCurrency(currentPrice)}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                          /{isYearly ? (language === 'ar' ? 'سنة' : 'year') : (language === 'ar' ? 'شهر' : 'month')}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {(language === 'ar' ? plan.features : plan.featuresEn).slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => {
                        if (selectedPaymentMethod) {
                          handlePlanUpgrade(plan.id);
                        } else {
                          setPendingAction({type: 'upgrade', planId: plan.id});
                          setShowPaymentModal(true);
                        }
                      }}
                      className="w-full py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
                    >
                      {language === 'ar' ? 'ترقية للخطة' : 'Upgrade to Plan'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl dark:shadow-none border border-white/20 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full p-4 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex items-center justify-between"
                >
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {language === 'ar' ? faq.question : faq.questionEn}
                  </span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="p-4 bg-white dark:bg-gray-800">
                    <p className="text-gray-700 dark:text-gray-300">
                      {language === 'ar' ? faq.answer : faq.answerEn}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {language === 'ar' ? 'لديك أسئلة أخرى؟' : 'Have more questions?'}
            </p>
            <button 
              onClick={() => setShowContactModal(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && <ContactModal />}

      {/* Payment Modal */}
      {showPaymentModal && <PaymentModal />}

      {/* Custom Notification */}
      <CustomNotification />

      {/* Bottom spacing to avoid navigation overlap */}
      <div className="h-24"></div>
    </div>
  );
};

export default SubscriptionPlans;