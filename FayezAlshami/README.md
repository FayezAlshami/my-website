# 👾 موقع فايز الشامي | Fayez Alshami Portfolio

موقع شخصي احترافي لعرض الخدمات، المشاريع، والـ Portfolio بتصميم عصري بألوان حمراء نارية متدرجة.

## 📁 بنية المشروع

```
project/
│
├── index.html          # الصفحة الرئيسية
├── css/
│   └── style.css       # ملف التنسيقات
├── js/
│   └── main.js         # ملف JavaScript
├── images/
│   └── myphoto.jpg     # صورتك الشخصية (قم بإضافتها)
└── README.md           # هذا الملف
```

## 🚀 خطوات التشغيل المحلي

1. **قم بتحميل المشروع**
   ```bash
   # إنشاء المجلدات المطلوبة
   mkdir -p css js images

   # نقل الملفات إلى المجلدات الصحيحة
   mv style.css css/
   mv main.js js/
   mv myphoto.jpg images/  # تأكد من وضع صورتك هنا
   ```

2. **افتح الموقع**
   - افتح ملف `index.html` مباشرة في المتصفح
   - أو استخدم Live Server في VS Code

## 🌐 الاستضافة على GitHub Pages

### الطريقة الأولى: عبر واجهة GitHub

1. **إنشاء Repository جديد**
   - اذهب إلى GitHub وقم بإنشاء repository جديد
   - اسم الـ repository يفضل أن يكون: `fayezalshami.github.io`

2. **رفع الملفات**
   - اضغط على "Add file" → "Upload files"
   - ارفع جميع الملفات (index.html, css/, js/, images/)
   - اضغط "Commit changes"

3. **تفعيل GitHub Pages**
   - اذهب إلى Settings → Pages
   - في "Source" اختر "main" branch
   - احفظ واستنى دقيقتين
   - رابط موقعك سيكون: `https://fayezalshami.github.io`

### الطريقة الثانية: عبر Git Commands

```bash
# 1. تهيئة Git
git init

# 2. إضافة الملفات
git add .

# 3. Commit
git commit -m "Initial commit: Portfolio website"

# 4. ربط الـ Repository
git remote add origin https://github.com/FayezAlshami/fayezalshami.github.io.git

# 5. رفع الملفات
git branch -M main
git push -u origin main

# 6. تفعيل GitHub Pages من Settings
```

## 🎨 تخصيص الموقع

### تغيير الألوان
في ملف `css/style.css`، عدّل المتغيرات في `:root`:
```css
:root {
    --primary-red: #ff0000;      /* اللون الأحمر الأساسي */
    --fire-red: #ff4500;         /* أحمر ناري */
    --orange-red: #ff6347;       /* أحمر برتقالي */
}
```

### إضافة مشاريع جديدة
في ملف `index.html`، أضف في قسم المشاريع:
```html
<div class="project-card" data-aos="fade-up">
    <div class="project-icon">
        <i class="fas fa-robot"></i>
    </div>
    <h3>@YourNewBot</h3>
    <p>وصف البوت الجديد</p>
    <a href="https://t.me/YourNewBot" target="_blank" class="project-link">
        زيارة البوت <i class="fas fa-external-link-alt"></i>
    </a>
</div>
```

### تحديث معلومات الاتصال
في قسم Contact، عدّل الروابط:
```html
<a href="https://t.me/YourUsername" target="_blank">
<a href="https://wa.me/YourNumber" target="_blank">
<a href="mailto:YourEmail@gmail.com">
```

## 📱 الميزات

✅ تصميم متجاوب (Responsive) - يعمل على جميع الشاشات
✅ دعم لغتين (عربي/إنجليزي) مع إمكانية التبديل
✅ تأثيرات حركية سلسة (Smooth Animations)
✅ ألوان حمراء نارية متدرجة مع تأثيرات Glow
✅ أقسام شاملة: الخدمات، الباقات، المشاريع، Portfolio
✅ أيقونات Font Awesome لطرق الدفع ووسائل التواصل
✅ زر Scroll to Top
✅ SEO Optimized

## 🛠️ التقنيات المستخدمة

- HTML5
- CSS3 (Gradients, Animations, Flexbox, Grid)
- JavaScript (ES6+)
- Font Awesome 6.5.2
- Google Fonts (Cairo)
- AOS (Animate On Scroll) Library

## 📝 ملاحظات مهمة

1. **الصورة الشخصية**: تأكد من وضع صورتك بالاسم `myphoto.jpg` في مجلد `images/`

2. **تحديث الروابط**: راجع جميع روابط التواصل والبوتات في ملف HTML

3. **الـ Domain المخصص**: لاستخدام `fayezalshami.com`:
   - أضف ملف `CNAME` في الـ root يحتوي على: `fayezalshami.com`
   - في إعدادات الدومين، أضف DNS records:
     - Type: A, Value: 185.199.108.153
     - Type: A, Value: 185.199.109.153
     - Type: A, Value: 185.199.110.153
     - Type: A, Value: 185.199.111.153

4. **Favicon**: أضف أيقونة للموقع بإضافة في `<head>`:
   ```html
   <link rel="icon" type="image/png" href="images/favicon.png">
   ```

## 🎯 التحسينات المستقبلية (اختياري)

- [ ] إضافة نموذج تواصل (Contact Form)
- [ ] دمج Google Analytics
- [ ] إضافة Blog Section
- [ ] تفعيل PWA (Progressive Web App)
- [ ] إضافة Dark/Light Mode Toggle
- [ ] Screenshots للمشاريع في قسم Portfolio

## 📞 التواصل

- **Telegram**: [@Fayez_Alshami](https://t.me/Fayez_Alshami)
- **WhatsApp**: [رسالة مباشرة](https://wa.me/message/U4CH4MFWMZF2J1)
- **Email**: fayezalshami.dev@gmail.com
- **GitHub**: [@FayezAlshami](https://github.com/FayezAlshami)
- **Website**: [magnustech.pro](http://magnustech.pro/)

---

**صُنع بـ ❤️ في سوريا**
© 2025 فايز الشامي. جميع الحقوق محفوظة.
