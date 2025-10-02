# إعداد مشروع Supabase جديد

## 🚀 خطوات إنشاء مشروع جديد

### 1. اذهب لـ Supabase
- افتح https://supabase.com
- اضغط **"Start your project"**
- سجل دخول بحسابك

### 2. إنشاء مشروع جديد
- اضغط **"New Project"**
- اختار **Organization** (أو اعمل واحدة جديدة)
- املأ البيانات:
  - **Name**: Servly Platform
  - **Database Password**: اختار كلمة مرور قوية
  - **Region**: اختار أقرب منطقة ليك
- اضغط **"Create new project"**

### 3. انتظار الإعداد
- المشروع هياخد 2-3 دقائق عشان يخلص إعداد
- هتشوف شاشة loading

### 4. نسخ البيانات
بعد ما المشروع يخلص:

#### أ) نسخ الـ URL:
- **Settings** → **API**
- انسخ **Project URL**

#### ب) نسخ الـ API Key:
- من نفس الصفحة
- انسخ **anon public** key

### 5. تحديث ملف .env
```env
VITE_SUPABASE_URL=https://[your-new-project-id].supabase.co
VITE_SUPABASE_ANON_KEY=eyJ[your-new-anon-key]
```

### 6. إنشاء الجداول
- **SQL Editor** → **New query**
- انسخ محتوى ملف `supabase/migrations/20250928153433_super_salad.sql`
- الصق في الـ SQL Editor
- اضغط **"Run"**

## ✅ اختبار الاتصال
- أعد تشغيل الخادم: `npm run dev`
- جرب التسجيل مرة أخرى