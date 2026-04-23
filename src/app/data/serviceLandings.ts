export type Locale = "en" | "ar";

export interface ServiceLandingContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  features: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface ServiceLanding {
  slug: string;
  category: "software" | "digital_marketing";
  accent: "orange" | "blue" | "purple";
  icon: string;
  image: string;
  en: ServiceLandingContent;
  ar: ServiceLandingContent;
}

const SOFTWARE_FEATURES_DEFAULT = {
  en: [
    "Discovery workshop & custom roadmap",
    "Dedicated product & engineering team",
    "Modern stack (React, Node.js, Next.js, Cloud)",
    "QA, security review, ongoing support",
  ],
  ar: [
    "ورشة اكتشاف وخريطة طريق مخصصة",
    "فريق منتج وهندسة مخصص",
    "تقنيات حديثة (React و Node.js و Next.js و Cloud)",
    "اختبار وجودة ومراجعة أمنية ودعم مستمر",
  ],
};

const MARKETING_FEATURES_DEFAULT = {
  en: [
    "Market & competitor research",
    "Channel strategy tailored to your audience",
    "Content production & creative assets",
    "Monthly analytics & performance reporting",
  ],
  ar: [
    "أبحاث السوق والمنافسين",
    "استراتيجية قنوات مخصصة لجمهورك",
    "إنتاج محتوى وأصول إبداعية",
    "تقارير تحليلات وأداء شهرية",
  ],
};

export const serviceLandings: ServiceLanding[] = [
  {
    slug: "healthcare-software-development",
    category: "software",
    accent: "orange",
    icon: "/svgs/heart.svg",
    image: "/assets/1.webp",
    en: {
      eyebrow: "Healthcare",
      title: "Healthcare Software Development",
      subtitle: "HIPAA-aware digital products for providers, payers, and patients.",
      description:
        "We build compliant healthcare platforms — EHR/EMR systems, telemedicine apps, e-prescription portals, and IoT integrations — that scale safely and put clinical workflows first.",
      benefits: [
        "Reduce admin overhead with streamlined clinical workflows",
        "Launch telemedicine & patient portals quickly",
        "Integrate with existing HIS, LIS and insurance systems",
        "Security, audit & compliance baked in from day one",
      ],
      features: SOFTWARE_FEATURES_DEFAULT.en,
      metaTitle: "Healthcare Software Development | Gonovo",
      metaDescription:
        "Gonovo builds HIPAA-aware EHR, telemedicine, e-prescription and healthcare IoT software. Book your free consultation.",
    },
    ar: {
      eyebrow: "الرعاية الصحية",
      title: "تطوير برمجيات الرعاية الصحية",
      subtitle: "منتجات رقمية متوافقة لمقدمي الخدمات والمرضى والجهات الممولة.",
      description:
        "نبني منصات صحية متوافقة — أنظمة EHR/EMR والطب عن بُعد وبوابات الوصفات الإلكترونية وتكاملات IoT — تتوسع بأمان وتضع سير العمل السريري في المقدمة.",
      benefits: [
        "قلل الأعباء الإدارية بتحسين سير العمل السريري",
        "أطلق خدمات طب عن بعد وبوابات مرضى بسرعة",
        "تكامل مع أنظمة HIS و LIS والتأمين القائمة",
        "الأمان والتدقيق والامتثال مضمّنة من اليوم الأول",
      ],
      features: SOFTWARE_FEATURES_DEFAULT.ar,
      metaTitle: "تطوير برمجيات الرعاية الصحية | جونوفو",
      metaDescription:
        "جونوفو تبني برمجيات EHR والطب عن بعد والوصفات الإلكترونية وIoT للرعاية الصحية. احجز استشارتك المجانية.",
    },
  },
  {
    slug: "banking-software-development",
    category: "software",
    accent: "blue",
    icon: "/svgs/homepurple.svg",
    image: "/assets/cards.webp",
    en: {
      eyebrow: "Fintech",
      title: "Banking & Fintech Software",
      subtitle: "Secure, scalable software for banks, fintechs and lenders.",
      description:
        "From card management to loan servicing and digital wallets — we deliver regulated-grade software with a modern UX that your customers actually enjoy using.",
      benefits: [
        "Faster onboarding & KYC flows that convert",
        "Card, lending and wallet modules ready to integrate",
        "Hardened security & audit trails",
        "Real-time reporting and BI dashboards",
      ],
      features: SOFTWARE_FEATURES_DEFAULT.en,
      metaTitle: "Banking & Fintech Software Development | Gonovo",
      metaDescription:
        "Secure card management, loan servicing and wallet software by Gonovo. Book a free fintech consultation.",
    },
    ar: {
      eyebrow: "التقنية المالية",
      title: "برمجيات البنوك والتقنية المالية",
      subtitle: "برمجيات آمنة وقابلة للتوسع للبنوك وشركات الفنتك.",
      description:
        "من إدارة البطاقات إلى خدمة القروض والمحافظ الرقمية — نقدم برمجيات بمستوى تنظيمي مع تجربة مستخدم حديثة يستمتع بها عملاؤك.",
      benefits: [
        "تدفقات تسجيل و KYC أسرع تحقق تحويلات أعلى",
        "وحدات بطاقات وإقراض ومحافظ جاهزة للتكامل",
        "أمان مشدد ومسارات تدقيق كاملة",
        "تقارير وتحليلات في الوقت الفعلي",
      ],
      features: SOFTWARE_FEATURES_DEFAULT.ar,
      metaTitle: "برمجيات البنوك والتقنية المالية | جونوفو",
      metaDescription:
        "برمجيات إدارة بطاقات وقروض ومحافظ آمنة من جونوفو. احجز استشارة فنتك مجانية.",
    },
  },
  {
    slug: "real-estate-app-development",
    category: "software",
    accent: "purple",
    icon: "/svgs/realstate.svg",
    image: "/assets/2.webp",
    en: {
      eyebrow: "Real Estate",
      title: "Real Estate App Development",
      subtitle: "CRM, ERP and listing platforms built to close more deals.",
      description:
        "We design and build real estate software — from agent CRMs and listing marketplaces to property management ERPs — that put speed and clarity in your sales team's hands.",
      benefits: [
        "Close deals faster with a CRM tailored to agents",
        "Beautiful listing marketplaces with smart search",
        "Automated workflows across teams",
        "Native mobile apps for agents and buyers",
      ],
      features: SOFTWARE_FEATURES_DEFAULT.en,
      metaTitle: "Real Estate App Development | Gonovo",
      metaDescription:
        "CRM, ERP and listing apps by Gonovo — tailor-built for real estate agencies. Book a free consultation.",
    },
    ar: {
      eyebrow: "العقارات",
      title: "تطوير تطبيقات العقارات",
      subtitle: "أنظمة CRM و ERP ومنصات عرض العقارات لإغلاق صفقات أسرع.",
      description:
        "نصمم ونطور برمجيات عقارية — من CRM للوسطاء إلى منصات عرض العقارات وأنظمة ERP لإدارة الممتلكات — نضع السرعة والوضوح بين يدي فريق المبيعات.",
      benefits: [
        "أغلق الصفقات بشكل أسرع مع CRM مخصص للوسطاء",
        "منصات عرض عقارات جميلة ببحث ذكي",
        "سير عمل آلي عبر الفرق",
        "تطبيقات جوال أصلية للوسطاء والمشترين",
      ],
      features: SOFTWARE_FEATURES_DEFAULT.ar,
      metaTitle: "تطوير تطبيقات العقارات | جونوفو",
      metaDescription:
        "تطبيقات CRM و ERP وعرض عقارات من جونوفو — مخصصة لوكالات العقارات. احجز استشارة مجانية.",
    },
  },
  {
    slug: "ecommerce-retail-development",
    category: "software",
    accent: "orange",
    icon: "/svgs/cart.svg",
    image: "/assets/about1.webp",
    en: {
      eyebrow: "E-commerce & Retail",
      title: "E-commerce & Retail Software",
      subtitle: "Convert more with a modern online retail experience.",
      description:
        "We design and build performant e-commerce platforms, marketplaces and in-store tools — with the integrations and analytics your retail business needs to grow.",
      benefits: [
        "Higher checkout conversion with a fast storefront",
        "Integrated POS, inventory & logistics",
        "Scalable marketplaces with multi-vendor support",
        "Analytics & personalization that drive repeat orders",
      ],
      features: SOFTWARE_FEATURES_DEFAULT.en,
      metaTitle: "E-commerce & Retail Software | Gonovo",
      metaDescription:
        "Gonovo builds high-converting e-commerce platforms, marketplaces and POS. Book a free consultation.",
    },
    ar: {
      eyebrow: "التجارة الإلكترونية والتجزئة",
      title: "برمجيات التجارة الإلكترونية والتجزئة",
      subtitle: "حقق تحويلات أعلى بتجربة تسوق إلكترونية حديثة.",
      description:
        "نصمم ونبني منصات تجارة إلكترونية ومنصات متعددة البائعين وأدوات للمتاجر مع التكاملات والتحليلات التي يحتاجها عملك لينمو.",
      benefits: [
        "تحويلات أعلى عند الدفع بمتجر سريع",
        "تكامل مع نقاط البيع والمخزون واللوجستيات",
        "منصات قابلة للتوسع بدعم بائعين متعددين",
        "تحليلات وتخصيص يزيد تكرار الطلبات",
      ],
      features: SOFTWARE_FEATURES_DEFAULT.ar,
      metaTitle: "برمجيات التجارة الإلكترونية والتجزئة | جونوفو",
      metaDescription:
        "جونوفو تبني منصات تجارة إلكترونية ومتاجر متعددة البائعين وأنظمة POS. احجز استشارة مجانية.",
    },
  },
  {
    slug: "on-demand-software-development",
    category: "software",
    accent: "blue",
    icon: "/svgs/ondemand.svg",
    image: "/assets/about2.webp",
    en: {
      eyebrow: "On-demand Apps",
      title: "On-demand Software Development",
      subtitle: "Taxi, delivery, e-wallet, live streaming — built to scale.",
      description:
        "Turn your on-demand idea into a production-ready platform. We handle product strategy, design, engineering, launch and iteration — so you can focus on growth.",
      benefits: [
        "Go to market in weeks, not quarters",
        "Battle-tested patterns for on-demand use cases",
        "Scalable architecture from day one",
        "Seamless payments, maps & notifications",
      ],
      features: SOFTWARE_FEATURES_DEFAULT.en,
      metaTitle: "On-demand Software Development | Gonovo",
      metaDescription:
        "Gonovo builds taxi, delivery, wallet & streaming platforms that scale. Book a free consultation.",
    },
    ar: {
      eyebrow: "تطبيقات عند الطلب",
      title: "تطوير برمجيات عند الطلب",
      subtitle: "تاكسي وتوصيل ومحافظ وبث مباشر — مبنية للتوسع.",
      description:
        "حوّل فكرتك للطلب الفوري إلى منصة جاهزة للإنتاج. نتعامل مع استراتيجية المنتج والتصميم والهندسة والإطلاق والتطوير — لتركز أنت على النمو.",
      benefits: [
        "اطرح منتجك في أسابيع وليس أشهر",
        "أنماط مجربة لحالات استخدام عند الطلب",
        "بنية قابلة للتوسع من اليوم الأول",
        "مدفوعات وخرائط وإشعارات سلسة",
      ],
      features: SOFTWARE_FEATURES_DEFAULT.ar,
      metaTitle: "تطوير برمجيات عند الطلب | جونوفو",
      metaDescription:
        "جونوفو تبني منصات تاكسي وتوصيل ومحافظ وبث قابلة للتوسع. احجز استشارة مجانية.",
    },
  },
  {
    slug: "travel-software-development",
    category: "software",
    accent: "purple",
    icon: "/svgs/travel.svg",
    image: "/assets/digitalMarketing.webp",
    en: {
      eyebrow: "Travel",
      title: "Travel Software Development",
      subtitle: "Modern booking & hospitality platforms.",
      description:
        "Transport, hotels, restaurants, ticketing — we build travel software that unifies booking, operations and guest experience with contactless digital flows.",
      benefits: [
        "Higher direct-booking conversion",
        "Unified ops dashboard for staff",
        "Contactless check-in & payments",
        "Deep integrations with PMS, GDS and payments",
      ],
      features: SOFTWARE_FEATURES_DEFAULT.en,
      metaTitle: "Travel & Hospitality Software | Gonovo",
      metaDescription:
        "Booking, hospitality and ticketing software by Gonovo. Book a free travel-software consultation.",
    },
    ar: {
      eyebrow: "السفر",
      title: "تطوير برمجيات السفر",
      subtitle: "منصات حجز وضيافة حديثة.",
      description:
        "النقل والفنادق والمطاعم والتذاكر — نبني برمجيات سفر توحد الحجز والعمليات وتجربة الضيف بتدفقات رقمية بدون تلامس.",
      benefits: [
        "معدلات حجز مباشر أعلى",
        "لوحة عمليات موحدة للموظفين",
        "تسجيل دخول ودفع بدون تلامس",
        "تكاملات عميقة مع PMS و GDS والمدفوعات",
      ],
      features: SOFTWARE_FEATURES_DEFAULT.ar,
      metaTitle: "برمجيات السفر والضيافة | جونوفو",
      metaDescription:
        "برمجيات حجز وضيافة وتذاكر من جونوفو. احجز استشارة مجانية في برمجيات السفر.",
    },
  },
  {
    slug: "brand-awareness",
    category: "digital_marketing",
    accent: "orange",
    icon: "/svgs/digitalMarketing/light.svg",
    image: "/assets/digitalMarketing.webp",
    en: {
      eyebrow: "Brand Awareness",
      title: "Brand Awareness Campaigns",
      subtitle: "Put your brand in front of the right audience.",
      description:
        "We plan and run brand campaigns across the channels that matter — from creative direction and media buying to measurement and iteration.",
      benefits: [
        "Reach qualified audiences at scale",
        "Creative that cuts through the noise",
        "Clear lift in branded search & direct traffic",
        "Transparent reporting on reach and frequency",
      ],
      features: MARKETING_FEATURES_DEFAULT.en,
      metaTitle: "Brand Awareness Services | Gonovo",
      metaDescription:
        "Grow brand recognition with Gonovo's creative campaigns. Book a free strategy call.",
    },
    ar: {
      eyebrow: "الوعي بالعلامة التجارية",
      title: "حملات الوعي بالعلامة التجارية",
      subtitle: "ضع علامتك التجارية أمام الجمهور المناسب.",
      description:
        "نخطط وندير حملات العلامة التجارية عبر القنوات المهمة — من التوجيه الإبداعي وشراء الوسائط إلى القياس والتكرار.",
      benefits: [
        "الوصول لجمهور نوعي على نطاق واسع",
        "إبداع يتخطى الضجيج",
        "زيادة واضحة في البحث المباشر للعلامة",
        "تقارير شفافة عن الوصول والتكرار",
      ],
      features: MARKETING_FEATURES_DEFAULT.ar,
      metaTitle: "خدمات الوعي بالعلامة التجارية | جونوفو",
      metaDescription:
        "ارفع التعرف على علامتك التجارية مع حملات جونوفو الإبداعية. احجز مكالمة استراتيجية مجانية.",
    },
  },
  {
    slug: "social-media-management",
    category: "digital_marketing",
    accent: "blue",
    icon: "/svgs/digitalMarketing/hash.svg",
    image: "/assets/about1.webp",
    en: {
      eyebrow: "Social Media",
      title: "Social Media Management",
      subtitle: "Content, community and growth — all handled.",
      description:
        "Our social team creates scroll-stopping content, manages your community, and builds consistent organic growth across the platforms that matter to your audience.",
      benefits: [
        "On-brand content calendar each month",
        "Active community management & replies",
        "Audience growth you can track",
        "Short-form video & static creative",
      ],
      features: MARKETING_FEATURES_DEFAULT.en,
      metaTitle: "Social Media Management | Gonovo",
      metaDescription:
        "Let Gonovo run your social — content, community and growth. Book a free consultation.",
    },
    ar: {
      eyebrow: "وسائل التواصل",
      title: "إدارة وسائل التواصل الاجتماعي",
      subtitle: "محتوى ومجتمع ونمو — ندير كل شيء.",
      description:
        "يصنع فريقنا محتوى يوقف التمرير، ويدير مجتمعك، ويبني نمواً عضوياً مستمراً عبر المنصات المهمة لجمهورك.",
      benefits: [
        "تقويم محتوى شهري متوافق مع علامتك",
        "إدارة نشطة للمجتمع والردود",
        "نمو جمهور يمكن قياسه",
        "فيديو قصير وتصاميم ساكنة",
      ],
      features: MARKETING_FEATURES_DEFAULT.ar,
      metaTitle: "إدارة وسائل التواصل الاجتماعي | جونوفو",
      metaDescription:
        "دع جونوفو تدير وسائل التواصل الخاصة بك — محتوى ومجتمع ونمو. احجز استشارة مجانية.",
    },
  },
  {
    slug: "email-marketing",
    category: "digital_marketing",
    accent: "purple",
    icon: "/svgs/digitalMarketing/email.svg",
    image: "/assets/about2.webp",
    en: {
      eyebrow: "Email Marketing",
      title: "Email Marketing Campaigns",
      subtitle: "Turn subscribers into loyal customers.",
      description:
        "We design lifecycle campaigns — welcome flows, promotions, retention — that drive measurable revenue from the list you already have.",
      benefits: [
        "Revenue from email, not just opens",
        "Segmentation that actually converts",
        "Automated lifecycle flows",
        "Beautiful on-brand templates",
      ],
      features: MARKETING_FEATURES_DEFAULT.en,
      metaTitle: "Email Marketing Services | Gonovo",
      metaDescription:
        "Email campaigns & lifecycle flows that drive revenue, by Gonovo. Book a free consultation.",
    },
    ar: {
      eyebrow: "التسويق بالبريد",
      title: "حملات التسويق بالبريد الإلكتروني",
      subtitle: "حوّل المشتركين إلى عملاء أوفياء.",
      description:
        "نصمم حملات دورة حياة — تدفقات ترحيب، عروض، احتفاظ — تحقق إيرادات قابلة للقياس من قائمتك الحالية.",
      benefits: [
        "إيرادات من البريد وليس فقط فتح",
        "تقسيم جمهور يحقق تحويلات",
        "تدفقات دورة حياة آلية",
        "قوالب جميلة متوافقة مع علامتك",
      ],
      features: MARKETING_FEATURES_DEFAULT.ar,
      metaTitle: "خدمات التسويق بالبريد | جونوفو",
      metaDescription:
        "حملات بريد إلكتروني وتدفقات دورة حياة تحقق الإيرادات، من جونوفو. احجز استشارة مجانية.",
    },
  },
  {
    slug: "seo-services",
    category: "digital_marketing",
    accent: "orange",
    icon: "/svgs/digitalMarketing/search.svg",
    image: "/assets/1.webp",
    en: {
      eyebrow: "SEO",
      title: "Search Engine Optimization",
      subtitle: "Rank higher and get found by buyers ready to act.",
      description:
        "We handle technical SEO, content strategy and on-page optimization — so your site earns the organic traffic it deserves.",
      benefits: [
        "Sustained organic growth",
        "Higher rankings for high-intent keywords",
        "Faster, cleaner, crawlable site",
        "Content that ranks and converts",
      ],
      features: MARKETING_FEATURES_DEFAULT.en,
      metaTitle: "SEO Services | Gonovo",
      metaDescription:
        "Technical SEO, content and on-page optimization by Gonovo. Book a free SEO audit call.",
    },
    ar: {
      eyebrow: "تحسين محركات البحث",
      title: "تحسين محركات البحث (SEO)",
      subtitle: "احصل على ترتيب أعلى وعملاء جاهزين للشراء.",
      description:
        "نتعامل مع SEO التقني واستراتيجية المحتوى وتحسين الصفحات — ليكسب موقعك الزيارات العضوية التي يستحقها.",
      benefits: [
        "نمو عضوي مستدام",
        "ترتيب أعلى للكلمات عالية النية",
        "موقع أسرع وأنظف وقابل للزحف",
        "محتوى يرتّب ويحوّل",
      ],
      features: MARKETING_FEATURES_DEFAULT.ar,
      metaTitle: "خدمات تحسين محركات البحث | جونوفو",
      metaDescription:
        "SEO تقني ومحتوى وتحسين صفحات من جونوفو. احجز مكالمة تدقيق SEO مجانية.",
    },
  },
  {
    slug: "content-creation",
    category: "digital_marketing",
    accent: "blue",
    icon: "/svgs/digitalMarketing/edit.svg",
    image: "/assets/cards.webp",
    en: {
      eyebrow: "Content",
      title: "Content Creation",
      subtitle: "Stories, articles, videos and creative that travel.",
      description:
        "Our writers, designers and video team produce the content your audience wants to share — aligned with your brand and your growth goals.",
      benefits: [
        "Consistent content that builds authority",
        "Short-form and long-form done right",
        "Original photography & video",
        "Performance-driven creative testing",
      ],
      features: MARKETING_FEATURES_DEFAULT.en,
      metaTitle: "Content Creation Services | Gonovo",
      metaDescription:
        "On-brand, performance-driven content by Gonovo. Book a free content strategy call.",
    },
    ar: {
      eyebrow: "المحتوى",
      title: "إنشاء المحتوى",
      subtitle: "قصص ومقالات وفيديو وإبداع ينتشر.",
      description:
        "يقوم فريق الكتّاب والمصممين والفيديو لدينا بإنتاج المحتوى الذي يريد جمهورك مشاركته — متوافق مع علامتك وأهداف نموك.",
      benefits: [
        "محتوى مستمر يبني السلطة",
        "محتوى قصير وطويل بإتقان",
        "تصوير فوتوغرافي وفيديو أصلي",
        "اختبار إبداعي مدفوع بالأداء",
      ],
      features: MARKETING_FEATURES_DEFAULT.ar,
      metaTitle: "خدمات إنشاء المحتوى | جونوفو",
      metaDescription:
        "محتوى على علامتك التجارية ومدفوع بالأداء من جونوفو. احجز مكالمة استراتيجية محتوى مجانية.",
    },
  },
  {
    slug: "pay-per-click-advertising",
    category: "digital_marketing",
    accent: "purple",
    icon: "/svgs/digitalMarketing/cursor.svg",
    image: "/assets/digitalMarketing.webp",
    en: {
      eyebrow: "Paid Media",
      title: "Pay-Per-Click Advertising",
      subtitle: "Profitable acquisition on Google, Meta and beyond.",
      description:
        "We plan, launch and optimize paid campaigns that acquire customers profitably — with tight conversion tracking and weekly reporting.",
      benefits: [
        "Lower CAC with better targeting & creative",
        "Full-funnel campaigns: prospecting to retargeting",
        "Conversion tracking done properly",
        "Weekly performance reports",
      ],
      features: MARKETING_FEATURES_DEFAULT.en,
      metaTitle: "PPC & Paid Media | Gonovo",
      metaDescription:
        "Profitable Google & Meta ads by Gonovo. Book a free paid-media strategy call.",
    },
    ar: {
      eyebrow: "الإعلانات المدفوعة",
      title: "إعلانات الدفع لكل نقرة",
      subtitle: "اكتساب مربح على جوجل وميتا وغيرها.",
      description:
        "نخطط ونطلق ونحسّن الحملات المدفوعة التي تكتسب العملاء بربحية — مع تتبع تحويلات دقيق وتقارير أسبوعية.",
      benefits: [
        "تكلفة اكتساب أقل باستهداف وإبداع أفضل",
        "حملات قمع كامل: استكشاف وإعادة استهداف",
        "تتبع تحويلات مضبوط",
        "تقارير أداء أسبوعية",
      ],
      features: MARKETING_FEATURES_DEFAULT.ar,
      metaTitle: "PPC والوسائط المدفوعة | جونوفو",
      metaDescription:
        "إعلانات جوجل وميتا مربحة من جونوفو. احجز مكالمة استراتيجية إعلانات مدفوعة مجانية.",
    },
  },
];

export const getServiceLanding = (slug: string) =>
  serviceLandings.find((s) => s.slug === slug);
