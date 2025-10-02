# Servly Platform 🚀

منصة شاملة لإدارة الأعمال تشمل:
- نظام إدارة الموظفين والحضور والانصراف
- نظام الرواتب والمحاسبة
- بناء المواقع الإلكترونية
- نظام الولاء للعملاء مع Apple Wallet

## المميزات ✨

### 🏢 إدارة الموظفين
- تسجيل بيانات الموظفين
- تتبع الحضور والانصراف
- إدارة الرواتب والمكافآت

### 🌐 بناء المواقع
- قوالب جاهزة ومتجاوبة
- محرر سهل الاستخدام
- SEO محسن

### 🎯 نظام الولاء
- نقاط الولاء للعملاء
- تكامل مع Apple Wallet
- تقارير مفصلة

## التقنيات المستخدمة 🛠️

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Build Tool**: Vite
- **Deployment**: Netlify/Vercel

## التثبيت والتشغيل 🔧

### 1. استنساخ المشروع:
```bash
git clone https://github.com/[username]/servly-platform.git
cd servly-platform
```

### 2. تثبيت المكتبات:
```bash
npm install
```

### 3. إعداد متغيرات البيئة:
```bash
cp .env.example .env
```

أضف بيانات Supabase في ملف `.env`:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. إعداد قاعدة البيانات:
- اذهب لـ Supabase SQL Editor
- شغل محتوى ملف `supabase/migrations/20250928153433_super_salad.sql`

### 5. تشغيل المشروع:
```bash
npm run dev
```

## النشر 🌐

### Netlify:
```bash
npm run build
# ارفع مجلد dist إلى Netlify
```

### Vercel:
```bash
npm run build
vercel --prod
```

## المساهمة 🤝

نرحب بالمساهمات! يرجى:
1. عمل Fork للمشروع
2. إنشاء branch جديد للميزة
3. عمل commit للتغييرات
4. إرسال Pull Request

## الترخيص 📄

هذا المشروع مرخص تحت رخصة MIT.

## التواصل 📧

للاستفسارات والدعم، يرجى التواصل عبر:
- GitHub Issues
- البريد الإلكتروني: [your-email@example.com]

---

صنع بـ ❤️ في مصر 🇪🇬