/* Catalog data, translations and pricing helpers (shared by every page). */
(() => {
  'use strict';
  /* ---------- translations ---------- */
  const I18N = {
    ar: {
      topbar: 'خدمة التوصيل والحجز المسبق متوفرة · ادفع عبر كي نت وApple Pay',
      nav_categories: 'الأقسام', nav_shop: 'الخدمات والمنتجات', nav_how: 'كيف نعمل', nav_contact: 'تواصل معنا',
      search: 'بحث', cart: 'السلة', search_ph: 'ابحث عن خدمة أو منتج...',
      hero_eyebrow: 'مركز العناية والتعديل بالسيارات · الكويت',
      hero_title: 'سيارتك تستحق <em>الأفضل</em>',
      hero_lead: 'غسيل، بوليش، حماية الطلاء، عزل حراري، وقطع وتعديلات. اختر الخدمة، حدّد الخيارات، واحجز موعدك في دقيقة.',
      hero_cta1: 'احجز موعد', hero_cta2: 'تسوّق القطع',
      stat1: 'سيارة تمت خدمتها', stat2: 'تقييم العملاء', stat3: 'شهر ضمان',
      strip1: 'توصيل واستلام السيارة', strip2: 'حجز موعد أونلاين', strip3: 'ضمان على الخدمات', strip4: 'كي نت · Apple Pay · نقداً',
      cat_title: 'تصفح الأقسام', cat_sub: 'اختر القسم لعرض الخدمات والمنتجات المتوفرة.',
      shop_title: 'الخدمات والمنتجات', shop_sub: 'كل خدمة لها خيارات تؤثر على السعر: حجم السيارة، مستوى الباقة، وإضافات.',
      all: 'الكل', services: 'خدمات', parts: 'قطع وتعديلات', all_cats: 'كل الأقسام',
      empty: 'لا توجد نتائج مطابقة.',
      how_title: 'كيف يعمل الحجز',
      how1_t: 'اختر الخدمة', how1_p: 'تصفح الأقسام واختر ما تحتاجه سيارتك.',
      how2_t: 'حدّد الخيارات', how2_p: 'حجم السيارة والباقة والإضافات، والسعر يتحدث فوراً.',
      how3_t: 'اختر الموعد', how3_p: 'التاريخ والوقت المناسب لك، مع خيار التوصيل.',
      how4_t: 'أكّد وادفع', how4_p: 'ادفع أونلاين أو عند الحضور، وسنؤكد عبر واتساب.',
      contact_title: 'تواصل معنا', contact_p: 'لأي استفسار عن الباقات أو التعديلات الخاصة، راسلنا مباشرة.',
      c_hours_l: 'ساعات العمل', c_hours: 'يومياً 9 ص – 9 م (الجمعة 4 م – 9 م)',
      c_loc_l: 'الموقع', c_loc: 'الكويت (أضف العنوان هنا)', c_phone_l: 'الهاتف', map_ph: 'مكان الخريطة',
      footer: '© 2026 شركة هيرو ووركس. جميع الحقوق محفوظة.',
      kd: 'د.ك', from: 'يبدأ من', configure: 'اختر الخيارات', book: 'احجز', add_to_cart: 'أضف للسلة',
      service: 'خدمة', part: 'منتج', required: 'مطلوب', optional: 'اختياري',
      choose_date: 'اختر التاريخ', choose_time: 'اختر الوقت', booking: 'موعد الحجز',
      err_booking: 'يرجى اختيار التاريخ والوقت.', err_required: 'يرجى إكمال الخيارات المطلوبة.',
      total: 'الإجمالي', subtotal: 'المجموع', qty: 'الكمية',
      cart_empty: 'السلة فارغة.', browse: 'تصفح الخدمات', remove: 'حذف', checkout: 'إتمام الطلب',
      added: 'تمت الإضافة إلى السلة', back: 'رجوع',
      f_name: 'الاسم', f_phone: 'رقم الهاتف', f_car: 'نوع السيارة / رقم اللوحة', f_notes: 'ملاحظات (اختياري)',
      payment: 'طريقة الدفع', pay_knet: 'كي نت', pay_apple: 'Apple Pay', pay_cash: 'عند الحضور',
      confirm: 'تأكيد الطلب', fill_all: 'يرجى تعبئة الاسم ورقم الهاتف.',
      done_t: 'تم استلام طلبك', done_p: 'سنتواصل معك عبر واتساب لتأكيد الموعد.', ref: 'رقم الطلب', close: 'إغلاق',
      at: 'الساعة'
    },
    en: {
      topbar: 'Pickup & delivery and advance booking available · Pay with K-Net & Apple Pay',
      nav_categories: 'Categories', nav_shop: 'Services & Products', nav_how: 'How it works', nav_contact: 'Contact',
      search: 'Search', cart: 'Cart', search_ph: 'Search a service or product...',
      hero_eyebrow: 'Car care & modification center · Kuwait',
      hero_title: 'Your car deserves <em>the best</em>',
      hero_lead: 'Washing, polishing, paint protection, thermal insulation, parts and modifications. Pick a service, choose your options, and book in a minute.',
      hero_cta1: 'Book an appointment', hero_cta2: 'Shop parts',
      stat1: 'Cars serviced', stat2: 'Customer rating', stat3: 'Months warranty',
      strip1: 'Car pickup & return', strip2: 'Online booking', strip3: 'Service warranty', strip4: 'K-Net · Apple Pay · Cash',
      cat_title: 'Browse categories', cat_sub: 'Pick a category to see available services and products.',
      shop_title: 'Services & Products', shop_sub: 'Every service has options that change the price: vehicle size, package level and add-ons.',
      all: 'All', services: 'Services', parts: 'Parts & mods', all_cats: 'All categories',
      empty: 'No matching results.',
      how_title: 'How booking works',
      how1_t: 'Pick a service', how1_p: 'Browse categories and choose what your car needs.',
      how2_t: 'Choose options', how2_p: 'Vehicle size, package and add-ons. The price updates instantly.',
      how3_t: 'Select a slot', how3_p: 'Pick a date and time, with optional pickup.',
      how4_t: 'Confirm & pay', how4_p: 'Pay online or on arrival. We confirm on WhatsApp.',
      contact_title: 'Contact us', contact_p: 'For package questions or custom modifications, message us directly.',
      c_hours_l: 'Working hours', c_hours: 'Daily 9 AM – 9 PM (Fri 4 PM – 9 PM)',
      c_loc_l: 'Location', c_loc: 'Kuwait (add address here)', c_phone_l: 'Phone', map_ph: 'Map placeholder',
      footer: '© 2026 HeroWorks Company. All rights reserved.',
      kd: 'KD', from: 'From', configure: 'Choose options', book: 'Book', add_to_cart: 'Add to cart',
      service: 'Service', part: 'Product', required: 'Required', optional: 'Optional',
      choose_date: 'Choose a date', choose_time: 'Choose a time', booking: 'Appointment',
      err_booking: 'Please choose a date and time.', err_required: 'Please complete the required options.',
      total: 'Total', subtotal: 'Subtotal', qty: 'Quantity',
      cart_empty: 'Your cart is empty.', browse: 'Browse services', remove: 'Remove', checkout: 'Checkout',
      added: 'Added to cart', back: 'Back',
      f_name: 'Name', f_phone: 'Phone number', f_car: 'Car model / plate number', f_notes: 'Notes (optional)',
      payment: 'Payment method', pay_knet: 'K-Net', pay_apple: 'Apple Pay', pay_cash: 'Pay on arrival',
      confirm: 'Confirm order', fill_all: 'Please enter your name and phone number.',
      done_t: 'Order received', done_p: 'We will contact you on WhatsApp to confirm the appointment.', ref: 'Order reference', close: 'Close',
      at: 'at'
    }
  };

  /* ---------- catalog data ---------- */
  /* ---------- catalog data ----------
     Source: the live HeroWorks store (prices in KWD). `base` is the current price, `was` the crossed-out
     old price. Images are placeholders: set `img: 'assets/xyz.jpg'` on any product/category to replace.
     Items marked `incomplete: true` had their descriptions cut off ("...") on the source page. */
  const opt = (id, ar, en, delta = 0, extra = {}) => ({ id, label: { ar, en }, delta, ...extra });

  const CATS = [
    { id: 'polish',  type: 'service', img: 'assets/categories/polish.jpg', name: { ar: 'باقات البوليش', en: 'Polish Packages' } },
    { id: 'wash',    type: 'service', img: 'assets/categories/wash.jpg', name: { ar: 'غسيل السيارات', en: 'Car Wash' } },
    { id: 'thermal', type: 'service', img: 'assets/categories/thermal.jpg', name: { ar: 'العازل الحراري', en: 'Thermal Insulation' } },
    { id: 'ppf',     type: 'service', img: 'assets/categories/ppf.jpg', name: { ar: 'باقات حماية السيارات', en: 'Car Protection Packages' } },
    { id: 'wheels',  type: 'service', img: 'assets/categories/wheels.jpg', name: { ar: 'حماية الرنقات', en: 'Wheel Protection' } },
    { id: 'glass',   type: 'service', img: 'assets/categories/glass.jpg', name: { ar: 'حماية الزجاج الأمامي', en: 'Windshield Protection' } },
    { id: 'paint',   type: 'service', img: 'assets/categories/paint.jpg', name: { ar: 'الصبغ والحدادة', en: 'Paint & Bodywork' } },
    { id: 'dashcam', type: 'part', img: 'assets/categories/dashcam.jpg',    name: { ar: 'داش كام', en: 'Dash Cams' } },
    { id: 'elec',    type: 'service', img: 'assets/categories/elec.jpg', name: { ar: 'كهرباء وبرمجة السيارات', en: 'Car Electrical & Programming' } },
    { id: 'maint',   type: 'service', img: 'assets/categories/maint.jpg', name: { ar: 'صيانة السيارات', en: 'Car Maintenance' } }
  ];
  const CAT_TYPE = Object.fromEntries(CATS.map((c) => [c.id, c.type]));

  const BADGE = {
    home:   { ar: 'خدمة أمام المنزل', en: 'Home service included' },
    center: { ar: 'العرض فقط بالمركز', en: 'At the center only' },
    w10:    { ar: 'كفالة 10 سنوات', en: '10-year warranty' },
    w5:     { ar: 'كفالة 5 سنوات', en: '5-year warranty' },
    usa:    { ar: 'منتج أمريكي', en: 'American product' },
    de:     { ar: 'صبغ ألماني', en: 'German paint' }
  };
  const S = (ak, ek, av, ev) => ({ k: { ar: ak, en: ek }, v: { ar: av, en: ev } });

  /* mk(id, category, price, oldPrice, arText, enText, extras)
     text = { n: name, d: summary, i: [what's included], x: [notes] } */
  const mk = (id, cat, base, was, ar, en, extra = {}) => ({
    id, cat, type: CAT_TYPE[cat], base, was: was || null,
    name: { ar: ar.n, en: en.n },
    desc: { ar: ar.d, en: en.d },
    includes: { ar: ar.i || [], en: en.i || [] },
    notes: { ar: ar.x || [], en: en.x || [] },
    specs: extra.specs || [],
    badges: (extra.badges || []).map((b) => BADGE[b]),
    incomplete: !!extra.incomplete,
    groups: extra.groups || []
  });

  const PRODUCTS = [
    /* ===== Car Wash (4) ===== */
    mk('wash-basic', 'wash', 10, null,
      { n: 'غسيل', d: 'غسيل خارجي بالشامبو والواكس مع تنظيف داخلي أساسي وتعطير.',
        i: ['غسيل خارجي مع شامبو وواكس', 'مسح الداخلية من الغبار والأتربة', 'مكنسة', 'تغليف الأرضيات', 'كيس قمامة', 'محارم ورقية', 'تعطير'] },
      { n: 'Wash', d: 'Exterior shampoo-and-wax wash with a basic interior clean and air freshener.',
        i: ['Exterior wash with shampoo and wax', 'Interior wiped down from dust and dirt', 'Vacuuming', 'Floor mat covering', 'Trash bag', 'Paper tissues', 'Air freshener'] }),
    mk('wash-polish', 'wash', 15, null,
      { n: 'غسيل تلميع', d: 'غسيل خارجي مع تلميع الإطارات وتنظيف الرنجات والمقصورة الأمامية.',
        i: ['غسيل خارجي مع شامبو وواكس', 'تنظيف فتحات التكييف', 'تلميع الإطارات', 'تنظيف الرنجات بمواد خاصة', 'تلميع المقصورة الأمامية', 'مسح الداخلية من الغبار والأتربة'] },
      { n: 'Polish Wash', d: 'Exterior wash plus tire dressing, special wheel cleaning and front cabin polish.',
        i: ['Exterior wash with shampoo and wax', 'A/C vent cleaning', 'Tire polishing', 'Wheel cleaning with special products', 'Front cabin polishing', 'Interior wiped down from dust and dirt'] },
      { incomplete: true }),
    mk('wash-nano', 'wash', 25, null,
      { n: 'تلميع النانو', d: 'غسيل بطبقة نانو سيراميك تمنح بريقاً ولمعاناً للطلاء.',
        i: ['طبقة نانو سيراميك للبريق واللمعان', 'غسيل خارجي مع شامبو وواكس', 'تنظيف فتحات التكييف', 'تلميع الإطارات', 'تنظيف الرنجات بمواد خاصة', 'تلميع المقصورة الأمامية'] },
      { n: 'Nano Polish', d: 'Wash with a nano-ceramic layer that adds shine and gloss to the paint.',
        i: ['Nano-ceramic layer for shine and gloss', 'Exterior wash with shampoo and wax', 'A/C vent cleaning', 'Tire polishing', 'Wheel cleaning with special products', 'Front cabin polishing'] },
      { incomplete: true }),
    mk('wash-detail', 'wash', 30, null,
      { n: 'غسيل تفصيلي', d: 'غسيل شامل للخارج والداخل بمواد خاصة مع إزالة البقع الصعبة.',
        i: ['غسيل خارجي مع شامبو وواكس', 'غسيل الكنبات والأرضيات بمواد خاصة', 'تلميع داخلية السيارة بمواد خاصة', 'إزالة البقع الصعبة بمواد خاصة', 'واكس', 'تنظيف فتحات التكييف'] },
      { n: 'Detailed Wash', d: 'Full exterior and interior wash with special products and tough-stain removal.',
        i: ['Exterior wash with shampoo and wax', 'Seat and floor washing with special products', 'Interior polishing with special products', 'Tough-stain removal with special products', 'Wax', 'A/C vent cleaning'] },
      { incomplete: true }),

    /* ===== Polish Packages (1) ===== */
    mk('polish-hero', 'polish', 90, 180,
      { n: 'هيرو ووركس باكج', d: 'باقة هيرو ووركس: غسيل تفصيلي كامل مع بوليش على ثلاث مراحل بسعر العرض.',
        i: ['غسيل تفصيلي كامل', 'بوليش ثلاث مراحل'], x: ['العرض فقط بالمركز.'] },
      { n: 'HeroWorks Package', d: 'The HeroWorks package: a full detailed wash plus a three-stage polish at the offer price.',
        i: ['Full detailed wash', 'Three-stage polish'], x: ['Offer available at the center only.'] },
      { badges: ['center'] }),

    /* ===== Thermal Insulation (2) ===== */
    mk('thermal-a', 'thermal', 99, 120,
      { n: 'العازل الحراري قلوبال A', d: 'عازل حراري أمريكي بنسبة عزل 95% وكفالة 10 سنوات على التركيب والعزل.',
        i: ['تركيب العازل الحراري', 'خدمة المنزل (التركيب أمام المنزل)', 'إزالة التظليل القديم إن وجد'],
        x: ['المنتج أمريكي الصنع.', 'الكفالة 10 سنوات على التركيب وعلى العازل.'] },
      { n: 'Global Thermal Insulation A', d: 'American thermal film with 95% heat rejection and a 10-year warranty on installation and film.',
        i: ['Thermal film installation', 'Home service (installation at your door)', 'Removal of old tint, if any'],
        x: ['American-made product.', '10-year warranty on both installation and film.'] },
      { badges: ['home', 'w10', 'usa'], specs: [S('نسبة العزل', 'Heat rejection', '95%', '95%'), S('الكفالة', 'Warranty', '10 سنوات', '10 years'), S('بلد المنشأ', 'Origin', 'أمريكا', 'USA')] }),
    mk('thermal-b', 'thermal', 65, 75,
      { n: 'العازل الحراري قلوبال B', d: 'عازل حراري أمريكي بنسبة عزل 85% وكفالة 10 سنوات على التركيب والعزل.',
        i: ['تركيب العازل الحراري', 'خدمة المنزل (التركيب أمام المنزل)'],
        x: ['المنتج أمريكي الصنع.', 'الكفالة 10 سنوات على التركيب وعلى العازل.'] },
      { n: 'Global Thermal Insulation B', d: 'American thermal film with 85% heat rejection and a 10-year warranty on installation and film.',
        i: ['Thermal film installation', 'Home service (installation at your door)'],
        x: ['American-made product.', '10-year warranty on both installation and film.'] },
      { badges: ['home', 'w10', 'usa'], specs: [S('نسبة العزل', 'Heat rejection', '85%', '85%'), S('الكفالة', 'Warranty', '10 سنوات', '10 years'), S('بلد المنشأ', 'Origin', 'أمريكا', 'USA')] }),

    /* ===== Car Protection Packages (4) ===== */
    mk('ppf-half', 'ppf', 200, 350,
      { n: 'عرض حماية نصف الواجهة الأمامية', d: 'حماية نصف الواجهة الأمامية مع عازل حراري وحماية للزجاج الأمامي. يشمل جميع السيارات الصالون والجيب.',
        i: ['حماية نصف الواجهة الأمامية', 'عازل حراري', 'حماية الزجاج الأمامي'],
        x: ['العرض يشمل جميع السيارات الصالون والجيب.', 'تتوفر أحدث تقنية وأحدث جهاز لقص أفلام الحماية عن طريق الكمبيوتر.'] },
      { n: 'Half Front-End Protection Offer', d: 'Half front-end paint protection with thermal insulation and windshield protection. Covers all sedans and SUVs.',
        i: ['Half front-end protection film', 'Thermal insulation', 'Windshield protection'],
        x: ['The offer covers all sedans and SUVs.', 'Latest technology and a state-of-the-art computer plotter for cutting protection films.'] },
      { incomplete: true }),
    mk('ppf-front', 'ppf', 300, 450,
      { n: 'عرض حماية الواجهة الأمامية', d: 'حماية الواجهة الأمامية كاملة مع عازل حراري وحماية للزجاج الأمامي. يشمل جميع السيارات الصالون والجيب.',
        i: ['حماية الواجهة الأمامية', 'عازل حراري', 'حماية الزجاج الأمامي'],
        x: ['العرض يشمل جميع السيارات الصالون والجيب.', 'تتوفر أحدث تقنية وأحدث جهاز لقص أفلام الحماية عن طريق الكمبيوتر.'] },
      { n: 'Front-End Protection Offer', d: 'Full front-end paint protection with thermal insulation and windshield protection. Covers all sedans and SUVs.',
        i: ['Full front-end protection film', 'Thermal insulation', 'Windshield protection'],
        x: ['The offer covers all sedans and SUVs.', 'Latest technology and a state-of-the-art computer plotter for cutting protection films.'] },
      { incomplete: true }),
    mk('ppf-full', 'ppf', 500, 850,
      { n: 'عرض الحماية الكاملة', d: 'حماية كاملة للسيارة مع عازل حراري وحماية للزجاج الأمامي. يشمل جميع السيارات الصالون والجيب.',
        i: ['حماية كاملة للسيارة', 'عازل حراري', 'حماية الزجاج الأمامي'],
        x: ['العرض يشمل جميع السيارات الصالون والجيب.', 'تتوفر أحدث تقنية وأحدث جهاز لقص أفلام الحماية عن طريق الكمبيوتر.'] },
      { n: 'Full Protection Offer', d: 'Full-body paint protection with thermal insulation and windshield protection. Covers all sedans and SUVs.',
        i: ['Full-body protection film', 'Thermal insulation', 'Windshield protection'],
        x: ['The offer covers all sedans and SUVs.', 'Latest technology and a state-of-the-art computer plotter for cutting protection films.'] },
      { incomplete: true }),
    mk('ppf-color', 'ppf', 500, 850,
      { n: 'حماية تغيير اللون', d: 'استمتع بمظهر جديد كلياً لسيارتك مع حماية متكاملة للطلاء الأصلي بأفلام الحماية الملونة (Color PPF).',
        i: ['أفلام الحماية الملونة (Color PPF)', 'حماية متكاملة للطلاء الأصلي', 'حماية من الخدوش والعوامل الخارجية'],
        x: ['العرض يشمل الصالون والجيب.'] },
      { n: 'Color-Change Protection', d: 'Give your car a completely new look while fully protecting the original paint with colored protection films (Color PPF).',
        i: ['Colored protection films (Color PPF)', 'Complete protection for the original paint', 'Protection from scratches and environmental damage'],
        x: ['The offer covers sedans and SUVs.'] },
      { incomplete: true }),

    /* ===== Wheel Protection (1) ===== */
    mk('wheels-protect', 'wheels', 65, 75,
      { n: 'حماية الرنقات من الويغتير', d: 'أفضل حماية للرنقات على مستوى العالم، صناعة بريطانية. التركيب أمام المنزل.',
        i: ['حماية الرنقات', 'خدمة التركيب أمام المنزل'], x: ['صناعة بريطانية.'] },
      { n: 'Wheel Protection – Weighter', d: 'The world’s best wheel protection, British-made. Installed at your door.',
        i: ['Wheel protection treatment', 'Installation at your door'], x: ['British-made.'] },
      { badges: ['home'], specs: [S('بلد المنشأ', 'Origin', 'بريطانيا', 'United Kingdom')] }),

    /* ===== Windshield Protection (1) ===== */
    mk('glass-global', 'glass', 40, 50,
      { n: 'حماية الزجاج الأمامي قلوبال', d: 'حماية الزجاج الأمامي من شركة قلوبال، المنتج أمريكي الصنع. السعر يشمل التركيب أمام المنزل.',
        i: ['حماية الزجاج الأمامي', 'خدمة التركيب أمام المنزل'],
        x: ['مقر الشركة وصناعة المنتج في الولايات المتحدة الأمريكية.', 'حماية الزجاج الأمامي من الكسر.'] },
      { n: 'Global Windshield Protection', d: 'Windshield protection from Global, an American-made product. Price includes installation at your door.',
        i: ['Windshield protection film', 'Installation at your door'],
        x: ['Company HQ and manufacturing are in the United States.', 'Protects the windshield from breakage.'] },
      { badges: ['home', 'usa'], incomplete: true }),

    /* ===== Paint & Bodywork (8) ===== */
    mk('paint-calipers', 'paint', 56.25, 75,
      { n: 'صبغ كليبرات', d: 'صبغ الكاليبرات بطلاء حراري يتحمل درجات الحرارة العالية الناتجة عن احتكاك المكابح.',
        i: ['صبغ الكاليبرات بطلاء حراري'], x: ['مقاوم لدرجات الحرارة العالية والحرارة الناتجة عن احتكاك المكابح.'] },
      { n: 'Caliper Painting', d: 'Caliper painting with a heat-resistant coating that withstands the high temperatures from brake friction.',
        i: ['Caliper painting with heat-resistant coating'], x: ['Resistant to high temperatures and heat from brake friction.'] },
      { incomplete: true }),
    mk('paint-wheels', 'paint', 112.5, 150,
      { n: 'صبغ الرنقات', d: 'صبغ الرنقات بماركة جلاسوريت المستوردة من ألمانيا، بجودة عالية ومتانة استثنائية.',
        i: ['صبغ الرنقات بماركة جلاسوريت (Glasurit)'], x: ['مستورد من ألمانيا.'] },
      { n: 'Wheel Painting', d: 'Wheel painting with Glasurit, imported from Germany, with high quality and exceptional durability.',
        i: ['Wheel painting with Glasurit paint'], x: ['Imported from Germany.'] },
      { badges: ['de'], specs: [S('الماركة', 'Brand', 'جلاسوريت', 'Glasurit'), S('بلد المنشأ', 'Origin', 'ألمانيا', 'Germany')] }),
    mk('blackout-no-wheels', 'paint', 112.5, 150,
      { n: 'بلاك اوت – بدون الرنقات', d: 'تحويل جميع أجزاء السيارة الكروم إلى اللون الأسود (دون الرنقات).',
        i: ['تحويل جميع أجزاء الكروم إلى الأسود'], x: ['لا يشمل الرنقات.'] },
      { n: 'Blackout – Without Wheels', d: 'Convert all chrome parts of the car to black (wheels not included).',
        i: ['All chrome parts converted to black'], x: ['Wheels not included.'] }),
    mk('blackout-wheels', 'paint', 225, 300,
      { n: 'بلاك اوت مع الرنقات', d: 'تحويل جميع أجزاء السيارة الكروم إلى اللون الأسود مع الرنقات.',
        i: ['تحويل جميع أجزاء الكروم إلى الأسود', 'الرنقات'] },
      { n: 'Blackout – With Wheels', d: 'Convert all chrome parts of the car, including the wheels, to black.',
        i: ['All chrome parts converted to black', 'Wheels included'] }),
    mk('accident-estimate', 'paint', 50, null,
      { n: 'مقايسة الحوادث – الطقات – التعديلات على هيكل السيارة', d: 'عرض المقايسة من هيرو ووركس: تقدير تكلفة الحوادث والطقات والتعديلات على هيكل السيارة والصبغ.',
        i: ['مقايسة الحوادث', 'مقايسة الطقات', 'مقايسة التعديلات على هيكل السيارة والصبغ'] },
      { n: 'Accident, Dent & Body Modification Estimate', d: 'HeroWorks estimate service: a cost assessment for accidents, dents, bodywork modifications and paint.',
        i: ['Accident damage estimate', 'Dent estimate', 'Estimate for body modifications and paint'] },
      { incomplete: true }),
    mk('repaint-glasurit', 'paint', 650, 900,
      { n: 'تجديد الصبغة أو تغيير اللون بالصبغ الدائم', d: 'تجديد الصبغة أو تغيير لون السيارة بالصبغ الدائم الألماني من جلاسوريت، شامل السنفرة والبوليش، مع كفالة 5 سنوات.',
        i: ['صبغ ألماني Glasurit DE', 'السنفرة', 'البوليش Sonax DE'], x: ['كفالة مميزة لمدة 5 سنوات.'] },
      { n: 'Repaint or Permanent Color Change', d: 'Repaint or change your car’s color with permanent German Glasurit paint, including sanding and polishing, with a 5-year warranty.',
        i: ['German Glasurit DE paint', 'Sanding', 'Sonax DE polish'], x: ['Premium 5-year warranty.'] },
      { badges: ['w5', 'de'], specs: [S('الصبغ', 'Paint', 'Glasurit DE', 'Glasurit DE'), S('البوليش', 'Polish', 'Sonax DE', 'Sonax DE'), S('الكفالة', 'Warranty', '5 سنوات', '5 years')], incomplete: true }),
    mk('wrap-removable', 'paint', 900, 1200,
      { n: 'تغيير اللون بالصبغ القابل للإزالة', d: 'تغيير لون السيارة بالصبغ القابل للإزالة لكامل السيارة، ويحمي طبقة اللون الأصلية.',
        i: ['الشكل الخارجي بالكامل', 'الدواخل بالكامل'], x: ['من مميزاته أنه يحمي طبقة اللون الأصلية.'] },
      { n: 'Removable Paint Color Change', d: 'Change the whole car’s color with removable paint that also protects the original paint layer.',
        i: ['Entire exterior', 'Entire interior/door jambs'], x: ['It protects the original paint layer.'] },
      { incomplete: true }),
    mk('chassis-renew', 'paint', 300, 600,
      { n: 'تنظيف وتجديد الشاصي', d: 'تنظيف وتجديد الشاصي ومعالجة الصدأ السطحي مع الصبغ، ويشمل نظام التعليق والبكسر.',
        i: ['تنظيف الشاصي', 'تجديد الشاصي', 'معالجة الصدأ السطحي', 'الصبغ', 'نظام التعليق والبكسر'], x: ['السعر غير شامل إصلاح الضربات إن وجدت.'] },
      { n: 'Chassis Cleaning & Renewal', d: 'Chassis cleaning and renewal with surface rust treatment and paint, including the suspension system and brackets.',
        i: ['Chassis cleaning', 'Chassis renewal', 'Surface rust treatment', 'Painting', 'Suspension system and brackets'], x: ['Price does not include repairing dents, if any.'] },
      { incomplete: true }),

    /* ===== Dash Cams (6) ===== */
    mk('dc-m550', 'dashcam', 67, 87,
      { n: 'داش كام AZDOME M550 MAX 4K', d: 'داش كام احترافية عالية الدقة مصممة لتوفير تسجيل واضح ومراقبة مستمرة أثناء القيادة، تدعم التصوير بدقة تصل إلى 4K مع إمكانية تسجيل متعدد القنوات لتغطية أكثر من زاوية.',
        i: ['تسجيل واضح ومراقبة مستمرة أثناء القيادة', 'دقة تصوير تصل إلى 4K', 'تسجيل متعدد القنوات'] },
      { n: 'AZDOME M550 MAX 4K Dash Cam', d: 'Professional high-definition dash cam designed for clear recording and continuous monitoring while driving, supporting up to 4K with multi-channel recording to cover more than one angle.',
        i: ['Clear recording and continuous monitoring while driving', 'Up to 4K resolution', 'Multi-channel recording'] },
      { incomplete: true, specs: [S('الماركة', 'Brand', 'AZDOME', 'AZDOME'), S('الدقة', 'Resolution', 'حتى 4K', 'Up to 4K')] }),
    mk('dc-m660', 'dashcam', 92, 112,
      { n: 'داش كام AZDOME M660 أربع قنوات 4K', d: 'داش كام احترافية بأربع قنوات تصوير لتغطية شاملة حول السيارة، مع إمكانية التسجيل حتى دقة 4K حسب وضع التشغيل.',
        i: ['أربع قنوات تصوير', 'تغطية شاملة حول السيارة', 'تسجيل حتى 4K حسب وضع التشغيل', 'تسجيل أكثر من زاوية في نفس الوقت'] },
      { n: 'AZDOME M660 4-Channel 4K Dash Cam', d: 'Professional four-channel dash cam for full coverage around the car, recording up to 4K depending on the operating mode.',
        i: ['Four recording channels', 'Full coverage around the vehicle', 'Up to 4K depending on operating mode', 'Records several angles at the same time'] },
      { incomplete: true, specs: [S('الماركة', 'Brand', 'AZDOME', 'AZDOME'), S('القنوات', 'Channels', '4', '4'), S('الدقة', 'Resolution', 'حتى 4K', 'Up to 4K')] }),
    mk('dc-m350', 'dashcam', 85, 105,
      { n: 'داش كام AZDOME M350 F1 ثلاثية القنوات مع Apple Find My', d: 'داش كام متطورة بثلاث قنوات تصوير لتغطية شاملة للسيارة من أكثر من زاوية، مع نظام GPS مدمج وWi-Fi ودعم Apple Find My.',
        i: ['ثلاث قنوات تصوير', 'دقة 3× 1080P / 2K', 'نظام GPS مدمج', 'Wi-Fi', 'دعم Apple Find My'] },
      { n: 'AZDOME M350 F1 3-Channel Dash Cam with Apple Find My', d: 'Advanced three-channel dash cam covering the car from several angles, with built-in GPS, Wi-Fi and Apple Find My support.',
        i: ['Three recording channels', '3× 1080P / 2K resolution', 'Built-in GPS', 'Wi-Fi', 'Apple Find My support'] },
      { incomplete: true, specs: [S('الماركة', 'Brand', 'AZDOME', 'AZDOME'), S('القنوات', 'Channels', '3', '3'), S('الدقة', 'Resolution', '3× 1080P / 2K', '3× 1080P / 2K'), S('GPS', 'GPS', 'مدمج', 'Built-in'), S('Wi-Fi', 'Wi-Fi', 'مدمج', 'Built-in')] }),
    mk('dc-pg17max', 'dashcam', 76, 96,
      { n: 'داش كام مرآة AZDOME PG17 Max 4K 2.5K', d: 'داش كام بتصميم مرآة خلفية ذكية مزودة بشاشة لمس IPS مقاس 12 إنش، مع تصوير أمامي وخلفي عالي الدقة.',
        i: ['تصميم مرآة خلفية ذكية', 'شاشة لمس IPS مقاس 12 إنش', 'تصوير أمامي وخلفي', 'دقة تصل إلى 2.5K + 4K'] },
      { n: 'AZDOME PG17 Max 4K 2.5K Mirror Dash Cam', d: 'Smart rear-view-mirror dash cam with a 12-inch IPS touchscreen and high-definition front and rear recording.',
        i: ['Smart rear-view mirror design', '12-inch IPS touchscreen', 'Front and rear recording', 'Up to 2.5K + 4K resolution'] },
      { incomplete: true, specs: [S('الماركة', 'Brand', 'AZDOME', 'AZDOME'), S('الشاشة', 'Screen', 'لمس IPS 12 إنش', '12" IPS touchscreen'), S('الدقة', 'Resolution', '2.5K + 4K', '2.5K + 4K')] }),
    mk('dc-pg17pro', 'dashcam', 95, 115,
      { n: 'داش كام مرآة AZDOME PG17 Pro 4K', d: 'داش كام بتصميم مرآة خلفية وشاشة لمس IPS مقاس 12 إنش، تصوير أمامي حتى 4K مع كاميرا خلفية بدقة 2.5K.',
        i: ['تصميم مرآة خلفية', 'شاشة لمس IPS مقاس 12 إنش', 'تصوير أمامي حتى 4K', 'كاميرا خلفية بدقة 2.5K', 'حساس Sony IMX678'] },
      { n: 'AZDOME PG17 Pro 4K Mirror Dash Cam', d: 'Rear-view-mirror dash cam with a 12-inch IPS touchscreen, front recording up to 4K and a 2.5K rear camera.',
        i: ['Rear-view mirror design', '12-inch IPS touchscreen', 'Front recording up to 4K', '2.5K rear camera', 'Sony IMX678 sensor'] },
      { incomplete: true, specs: [S('الماركة', 'Brand', 'AZDOME', 'AZDOME'), S('الشاشة', 'Screen', 'لمس IPS 12 إنش', '12" IPS touchscreen'), S('الأمامية', 'Front', 'حتى 4K', 'Up to 4K'), S('الخلفية', 'Rear', '2.5K', '2.5K'), S('الحساس', 'Sensor', 'Sony IMX678', 'Sony IMX678')] }),
    mk('dc-ar09', 'dashcam', 45, 65,
      { n: 'داش كام مرآة AZDOME AR09 بشاشة 9.66 إنش – 4K', d: 'داش كام مرآة بشاشة لمس 9.66 إنش، تسجيل أمامي بدقة 4K وخلفي 1080P، مع Wi-Fi ورؤية ليلية.',
        i: ['شاشة لمس 9.66 إنش', 'تسجيل أمامي 4K', 'تسجيل خلفي 1080P', 'Wi-Fi', 'رؤية ليلية', 'تسجيل مستمر', 'مستشعر صدمات G-Sensor'] },
      { n: 'AZDOME AR09 9.66" Mirror Dash Cam – 4K', d: '9.66-inch touchscreen mirror dash cam with 4K front and 1080P rear recording, Wi-Fi and night vision.',
        i: ['9.66-inch touchscreen', '4K front recording', '1080P rear recording', 'Wi-Fi', 'Night vision', 'Continuous recording', 'G-Sensor shock detection'] },
      { specs: [S('الماركة', 'Brand', 'AZDOME', 'AZDOME'), S('الشاشة', 'Screen', 'لمس 9.66 إنش', '9.66" touchscreen'), S('الأمامية', 'Front', '4K', '4K'), S('الخلفية', 'Rear', '1080P', '1080P')] }),

    /* ===== Car Electrical & Programming (5) ===== */
    mk('bm3-license', 'elec', 270, 320,
      { n: 'ليسن BM3 للسوبرا مع خدمة التفعيل والبرمجة', d: 'Bootmod3 – ليسن برمجة سوبرا A90: احصل على أقوى برمجة لمحرك B58 خلال دقائق من خلال منفذ OBD.',
        i: ['ليسن Bootmod3 (BM3)', 'خدمة التفعيل', 'البرمجة عبر منفذ OBD'], x: ['لمحرك B58 (سوبرا A90).'] },
      { n: 'BM3 License for Supra with Activation & Tuning', d: 'Bootmod3 – Supra A90 tuning license: get a powerful tune for the B58 engine in minutes through the OBD port.',
        i: ['Bootmod3 (BM3) license', 'Activation service', 'Tuning via the OBD port'], x: ['For the B58 engine (Supra A90).'] },
      { incomplete: true, specs: [S('المحرك', 'Engine', 'B58', 'B58'), S('الطريقة', 'Method', 'منفذ OBD', 'OBD port')] }),
    mk('carplay', 'elec', 65, 100,
      { n: 'برمجة Apple CarPlay', d: 'برمجة وتفعيل خاصية Apple CarPlay للسيارات الأوروبية المدعومة، للاستفادة من تطبيقات الهاتف والملاحة والموسيقى والمكالمات.',
        i: ['برمجة وتفعيل Apple CarPlay', 'تطبيقات الهاتف', 'الملاحة', 'الموسيقى', 'المكالمات'], x: ['للسيارات الأوروبية المدعومة.'] },
      { n: 'Apple CarPlay Programming', d: 'Programming and activation of Apple CarPlay for supported European cars, to use phone apps, navigation, music and calls.',
        i: ['Apple CarPlay programming and activation', 'Phone apps', 'Navigation', 'Music', 'Calls'], x: ['For supported European cars.'] },
      { incomplete: true }),
    mk('maps-ecu', 'elec', 120, 170,
      { n: 'برمجة الخرائط الكاملة ECU والشاشة والعدادات للسيارات', d: 'برمجة الخرائط الكاملة وتحديث نظام الملاحة في السيارة وربطه مع ECU والشاشة والعدادات للسيارات المدعومة.',
        i: ['برمجة الخرائط الكاملة', 'تحديث نظام الملاحة', 'الربط مع ECU', 'الربط مع الشاشة والعدادات'], x: ['للسيارات المدعومة.'] },
      { n: 'Full Maps, ECU, Screen & Cluster Programming', d: 'Full maps programming and navigation system update, linked with the ECU, screen and instrument cluster for supported cars.',
        i: ['Full maps programming', 'Navigation system update', 'Linking with the ECU', 'Linking with the screen and instrument cluster'], x: ['For supported cars.'] },
      { incomplete: true }),
    mk('bmw-remote', 'elec', 90, 140,
      { n: 'برمجة التشغيل عن بعد لسيارات BMW', d: 'برمجة وتفعيل خاصية تشغيل السيارة عن بعد لسيارات BMW المدعومة باستخدام مفتاح السيارة الأصلي بدون الحاجة إلى تركيب أجهزة إضافية.',
        i: ['برمجة وتفعيل التشغيل عن بعد', 'باستخدام مفتاح السيارة الأصلي'], x: ['لسيارات BMW المدعومة.'] },
      { n: 'BMW Remote Start Programming', d: 'Programming and activation of remote start for supported BMW cars using the original car key, without installing extra devices.',
        i: ['Remote start programming and activation', 'Uses the original car key'], x: ['For supported BMW cars.'] },
      { incomplete: true }),
    mk('elec-check', 'elec', 50, 75,
      { n: 'فحص كهرباء السيارة', d: 'فحص وتشخيص الأنظمة الكهربائية والإلكترونية في السيارة باستخدام أجهزة فحص متخصصة وفنيين مختصين لتحديد الأعطال ومصدرها.',
        i: ['فحص الأنظمة الكهربائية', 'فحص الأنظمة الإلكترونية', 'أجهزة فحص متخصصة', 'فنيون مختصون', 'تحديد الأعطال ومصدرها'] },
      { n: 'Car Electrical Inspection', d: 'Inspection and diagnosis of the car’s electrical and electronic systems using specialist equipment and technicians to locate faults and their source.',
        i: ['Electrical systems check', 'Electronic systems check', 'Specialist diagnostic equipment', 'Specialist technicians', 'Identification of faults and their source'] },
      { incomplete: true }),

    /* ===== Car Maintenance (10) ===== */
    mk('oil-us', 'maint', 35, null,
      { n: 'تبديل الزيت والفلتر للسيارات الأمريكية', d: 'خدمة تبديل الزيت والفلتر للسيارات الأمريكية. يتوفر عرض خاص على الفحص.',
        i: ['تبديل الزيت', 'تبديل الفلتر'], x: ['يتوفر عرض خاص على الفحص.'] },
      { n: 'Oil & Filter Change – American Cars', d: 'Oil and filter change service for American cars. A special offer on inspection is available.',
        i: ['Oil change', 'Filter change'], x: ['A special offer on inspection is available.'] },
      { incomplete: true }),
    mk('oil-eu', 'maint', 45, null,
      { n: 'تبديل الزيت والفلتر للسيارات الأوروبية', d: 'خدمة تبديل الزيت والفلتر للسيارات الأوروبية. يتوفر عرض خاص على الفحص.',
        i: ['تبديل الزيت', 'تبديل الفلتر'], x: ['يتوفر عرض خاص على الفحص.'] },
      { n: 'Oil & Filter Change – European Cars', d: 'Oil and filter change service for European cars. A special offer on inspection is available.',
        i: ['Oil change', 'Filter change'], x: ['A special offer on inspection is available.'] },
      { incomplete: true }),
    mk('oil-jp', 'maint', 35, null,
      { n: 'تبديل الزيت والفلتر للسيارات اليابانية', d: 'خدمة تبديل الزيت والفلتر للسيارات اليابانية. يتوفر عرض خاص على الفحص.',
        i: ['تبديل الزيت', 'تبديل الفلتر'], x: ['يتوفر عرض خاص على الفحص.'] },
      { n: 'Oil & Filter Change – Japanese Cars', d: 'Oil and filter change service for Japanese cars. A special offer on inspection is available.',
        i: ['Oil change', 'Filter change'], x: ['A special offer on inspection is available.'] },
      { incomplete: true }),
    mk('brakes-eu', 'maint', 150, 190,
      { n: 'تبديل سفايف أمامي وخلفي للسيارات الأوروبية', d: 'تبديل سفايف أمامي وخلفي ومخرطة الدسكات مع دواء تنظيف خاص للسيارات الأوروبية.',
        i: ['تبديل سفايف أمامي', 'تبديل سفايف خلفي', 'مخرطة الدسكات', 'دواء تنظيف خاص'] },
      { n: 'Front & Rear Brake Pads Replacement – European Cars', d: 'Front and rear brake pad replacement with disc machining and a special cleaning spray for European cars.',
        i: ['Front brake pads replacement', 'Rear brake pads replacement', 'Brake disc machining', 'Special cleaning spray'] },
      { incomplete: true }),
    mk('brakes-usjp', 'maint', 99, 150,
      { n: 'تبديل سفايف أمامي وخلفي للسيارات الأمريكية واليابانية', d: 'تبديل سفايف أمامي وخلفي مع مخرطة الدسكات واستخدام منظف خاص للسيارات الأمريكية واليابانية.',
        i: ['تبديل سفايف أمامي', 'تبديل سفايف خلفي', 'مخرطة الدسكات', 'منظف خاص'] },
      { n: 'Front & Rear Brake Pads Replacement – American & Japanese Cars', d: 'Front and rear brake pad replacement with disc machining and a special cleaner for American and Japanese cars.',
        i: ['Front brake pads replacement', 'Rear brake pads replacement', 'Brake disc machining', 'Special cleaner'] },
      { incomplete: true }),
    mk('mech-check', 'maint', 50, 75,
      { n: 'الفحص الميكانيكي الشامل وفحص كمبيوترات السيارة وبرمجتها', d: 'الفحص الميكانيكي الشامل الخاص بشركة هيرو ووركس مع فحص كمبيوتر السيارة وبرمجتها.',
        i: ['الفحص الميكانيكي الشامل', 'فحص كمبيوتر السيارة', 'البرمجة', 'الفحص يشمل: البلاتك، الواردات…'] },
      { n: 'Full Mechanical Inspection, Computer Scan & Programming', d: 'HeroWorks’ comprehensive mechanical inspection, with a computer scan and programming check.',
        i: ['Comprehensive mechanical inspection', 'Car computer scan', 'Programming', 'Inspection covers: plastics, imports…'] },
      { incomplete: true }),
    mk('service-us', 'maint', 120, 170,
      { n: 'أسعار التصفية العامة للسيارات الأمريكية', d: 'عرض التصفية العامة للسيارات الأمريكية.',
        i: ['تبديل البلاكات', 'زيت المكينة', 'فلتر الزيت', 'فلتر الهواء', 'فلتر المكيف', 'دواء تنظيف البخاخات', 'دواء تنظيف لاين'] },
      { n: 'General Service Package – American Cars', d: 'General service offer for American cars.',
        i: ['Spark plug replacement', 'Engine oil', 'Oil filter', 'Air filter', 'A/C filter', 'Injector cleaner', 'Line cleaner'] },
      { incomplete: true }),
    mk('service-eu', 'maint', 170, 210,
      { n: 'أسعار التصفية العامة للسيارات الأوروبية', d: 'عرض التصفية العامة للسيارات الأوروبية.',
        i: ['تبديل البلاكات', 'زيت المكينة', 'فلتر الزيت', 'فلتر الهواء', 'فلتر المكيف', 'دواء تنظيف البخاخات', 'دواء تنظيف لاين'] },
      { n: 'General Service Package – European Cars', d: 'General service offer for European cars.',
        i: ['Spark plug replacement', 'Engine oil', 'Oil filter', 'Air filter', 'A/C filter', 'Injector cleaner', 'Line cleaner'] },
      { incomplete: true }),
    mk('service-jp', 'maint', 120, 170,
      { n: 'أسعار التصفية العامة للسيارات اليابانية', d: 'عرض التصفية العامة للسيارات اليابانية.',
        i: ['تبديل البلاكات', 'زيت المكينة', 'فلتر الزيت', 'فلتر الهواء', 'فلتر المكيف', 'دواء تنظيف البخاخات', 'دواء تنظيف لاين'] },
      { n: 'General Service Package – Japanese Cars', d: 'General service offer for Japanese cars.',
        i: ['Spark plug replacement', 'Engine oil', 'Oil filter', 'Air filter', 'A/C filter', 'Injector cleaner', 'Line cleaner'] },
      { incomplete: true }),
    mk('gear-oil', 'maint', 50, 100,
      { n: 'تبديل زيت القير بالجهاز', d: 'تبديل زيت القير لسيارتك باستخدام ماكينة Motul EVO المتطورة، بتبديل كامل ودقيق وباحترافية عالية.',
        i: ['تبديل زيت القير بالجهاز', 'ماكينة Motul EVO', 'تبديل كامل ودقيق'] },
      { n: 'Gearbox Oil Change by Machine', d: 'Gearbox oil change for your car using the advanced Motul EVO machine, a complete and precise change done professionally.',
        i: ['Machine gearbox oil change', 'Motul EVO machine', 'Complete and precise change'] },
      { incomplete: true })
  ];


Object.assign(I18N.ar, {
  home: 'الرئيسية', shop: 'المتجر', featured: 'الأكثر طلباً', view_all: 'عرض الكل', view_details: 'التفاصيل',
  results: 'نتيجة', page_shop_sub: 'تصفح كل الخدمات والقطع، وفلتر حسب القسم.',
  cart_title: 'سلة المشتريات', continue_shopping: 'متابعة التسوق', proceed: 'متابعة للدفع', edit: 'تعديل',
  order_summary: 'ملخص الطلب', checkout_title: 'إتمام الطلب', your_details: 'بياناتك',
  not_found: 'العنصر غير موجود.', related: 'قد يعجبك أيضاً',
  cta_title: 'جاهز لتجديد سيارتك؟', cta_p: 'احجز موعدك الآن واختر الباقة المناسبة.',
  conf_title: 'تم استلام طلبك', conf_none: 'لم يتم العثور على الطلب.', status: 'الحالة', pending: 'بانتظار التأكيد',
  print: 'طباعة', back_home: 'العودة للرئيسية', customer: 'العميل', payment_l: 'الدفع',
  pay_knet_v: 'كي نت', pay_apple_v: 'Apple Pay', pay_cash_v: 'عند الحضور',
  contact_page_sub: 'نسعد بخدمتك. راسلنا أو زرنا في الكراج.', about_t: 'من نحن',
  about_p: 'هيرو ووركس مركز متخصص في العناية بالسيارات وتعديلها: من الغسيل والبوليش إلى حماية الطلاء والعزل الحراري وقطع الغيار. فريق محترف ومواد عالية الجودة.',
  msg_t: 'أرسل رسالة', f_msg: 'رسالتك', send_wa: 'إرسال عبر واتساب',
  summary: 'الملخص', items: 'العناصر', continue_booking: 'تابع الحجز', added_go: 'تمت الإضافة'
});

Object.assign(I18N.en, {
  home: 'Home', shop: 'Shop', featured: 'Most popular', view_all: 'View all', view_details: 'Details',
  results: 'results', page_shop_sub: 'Browse all services and parts, filtered by category.',
  cart_title: 'Shopping cart', continue_shopping: 'Continue shopping', proceed: 'Proceed to checkout', edit: 'Edit',
  order_summary: 'Order summary', checkout_title: 'Checkout', your_details: 'Your details',
  not_found: 'Item not found.', related: 'You may also like',
  cta_title: 'Ready to refresh your car?', cta_p: 'Book your slot now and pick the right package.',
  conf_title: 'Order received', conf_none: 'Order not found.', status: 'Status', pending: 'Awaiting confirmation',
  print: 'Print', back_home: 'Back to home', customer: 'Customer', payment_l: 'Payment',
  pay_knet_v: 'K-Net', pay_apple_v: 'Apple Pay', pay_cash_v: 'Pay on arrival',
  contact_page_sub: 'We are happy to help. Message us or visit the garage.', about_t: 'About us',
  about_p: 'HeroWorks is a specialist car care and modification center: from washing and polishing to paint protection, thermal insulation and parts. A professional team and quality materials.',
  msg_t: 'Send a message', f_msg: 'Your message', send_wa: 'Send via WhatsApp',
  summary: 'Summary', items: 'Items', continue_booking: 'Continue', added_go: 'Added'
});

Object.assign(I18N.ar, {
  stat1: 'خدمة ومنتج', stat2: 'قسم', stat3: 'سنوات كفالة على العازل الحراري',
  hero_lead: 'غسيل، بوليش، حماية الطلاء، عزل حراري، داش كام، صبغ وحدادة، برمجة وصيانة. اختر الخدمة واحجز موعدك في دقيقة.',
  shop_sub: 'تصفح جميع خدماتنا وعروضنا بأسعار واضحة.',
  how2_p: 'اطلع على ما تشمله كل باقة وسعرها بوضوح.',
  about_p: 'هيرو ووركس مركز متخصص في العناية بالسيارات وتعديلها: غسيل وبوليش، حماية الطلاء، عزل حراري، داش كام، صبغ وحدادة، كهرباء وبرمجة، وصيانة. فريق محترف ومواد عالية الجودة.',
  parts: 'منتجات',
  includes_t: 'ما تشمله الخدمة', specs_t: 'المواصفات', notes_t: 'ملاحظات', you_save: 'وفّر', off: 'خصم',
  sort_default: 'الترتيب الافتراضي', sort_low: 'السعر: الأقل أولاً', sort_high: 'السعر: الأعلى أولاً', sort_off: 'الأكبر خصماً',
  buy: 'اطلب الآن'
});
Object.assign(I18N.en, {
  stat1: 'Services & products', stat2: 'Categories', stat3: 'Years warranty on thermal insulation',
  hero_lead: 'Washing, polishing, paint protection, thermal insulation, dash cams, paint & bodywork, programming and maintenance. Pick a service and book in a minute.',
  shop_sub: 'Browse all our services and offers with clear prices.',
  how2_p: 'See exactly what each package includes, and its price.',
  about_p: 'HeroWorks is a specialist car care and modification center: washing and polishing, paint protection, thermal insulation, dash cams, paint & bodywork, electrical and programming, and maintenance. A professional team and quality materials.',
  parts: 'Products',
  includes_t: 'What is included', specs_t: 'Specifications', notes_t: 'Notes', you_save: 'You save', off: 'OFF',
  sort_default: 'Default order', sort_low: 'Price: low to high', sort_high: 'Price: high to low', sort_off: 'Biggest discount',
  buy: 'Order now'
});


Object.assign(I18N.ar, {
  theme: 'تبديل المظهر', open_maps: 'افتح الموقع في خرائط جوجل', call_us: 'اتصل بنا', wa_us: 'راسلنا على واتساب',
  c_loc: 'الكويت · الموقع على خرائط جوجل', map_ph: 'موقع المركز على الخريطة', map_t: 'زرنا في المركز',
  ask_wa: 'اسأل عن هذه الخدمة عبر واتساب', wa_hello: 'مرحباً، أرغب بالاستفسار عن:'
});
Object.assign(I18N.en, {
  theme: 'Toggle theme', open_maps: 'Open location in Google Maps', call_us: 'Call us', wa_us: 'Message us on WhatsApp',
  c_loc: 'Kuwait · see location on Google Maps', map_ph: 'Garage location on the map', map_t: 'Visit us at the garage',
  ask_wa: 'Ask about this service on WhatsApp', wa_hello: 'Hello, I would like to ask about:'
});

  /* ---------- pricing ---------- */
  function selectedOptions(p, sel) {
    const out = [];
    p.groups.forEach((g) => (sel[g.id] || []).forEach((oid) => {
      const o = g.options.find((x) => x.id === oid);
      if (o) out.push({ g, o });
    }));
    return out;
  }
  const unitPrice = (p, sel) => p.base + selectedOptions(p, sel).reduce((s, { o }) => s + o.delta, 0);
  const needsBooking = (p, sel) => p.type === 'service' || selectedOptions(p, sel).some(({ o }) => o.book);
  const fromPrice = (p) => p.base + p.groups.filter((g) => g.required).reduce((s, g) => s + Math.min(...g.options.map((o) => o.delta)), 0);
  const discountPct = (p) => (p.was && p.was > p.base ? Math.round((1 - p.base / p.was) * 100) : 0);


  window.HW = Object.assign(window.HW || {}, {
    CONTACT: { phone: '+965 9740 9444', tel: '+96597409444', wa: '96597409444', maps: 'https://share.google/Ku4thjJLSHbP2YOTP' }, I18N, CATS, PRODUCTS, selectedOptions, unitPrice, needsBooking, fromPrice, discountPct });
})();
