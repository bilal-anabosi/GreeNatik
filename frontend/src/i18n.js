// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Function to get the language from localStorage or default to 'en'
const getDefaultLanguage = () => {
  const savedLanguage = localStorage.getItem('language');
  return savedLanguage || 'en';
};

// Initialize i18n
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "navbar": {
          "currency": "Currency",
          "usd": "USD",
          "ils": "ILS",
          "language": "Language",
          "english": "English",
          "arabic": "Arabic",
          "profile": "Profile",
          "cart": "Cart",
          "checkout": "Checkout",
          "wishlist": "Wishlist",
          "posts": "Posts",
          "store": "Store",
          "addProduct": "Add New Product",
          "addPost": "Add New Post",
          "addBlog": "Add New Blog",
          "seePosts": "See Posts",
          "seeProducts": "See Products",
          "seeBlogs": "See Blogs",
          "postDelivery": "Post Delivery",
          "productDelivery": "Product Delivery",
          "logout": "Log Out",
          "login": "Log In",
          "signup": "Sign Up",
          "developed": "From concept to launch, this website was proudly developed in Palestine.",
          "home": "Home",
          "mainStore": "Main Store",
          "recycling": "Recycling",
          "blogs": "Blogs",
          "dashboard": "Dashboard",
          "delivery": "Delivery",
          "leaderboard": "Leader Board",
          "account": "Account",
          "signUp": "Sign Up",
          "login": "Login",
          "myAccount": "My Account",
          "aboutUs": "About us"
        },
        "home":{
            "whyGreeNatik": "Why GreeNatik?",
            "careAboutPlanet": "We understand you care about the planet!",
            "shopGuiltFree": "That's why we offer a curated selection of eco-friendly and sustainable products, rigorously vetted for their environmental and social impact. Shop guilt-free with complete transparency – detailed descriptions reveal each item's origin, materials, and sustainable practices. Plus, we've eliminated wasteful packaging! All orders ship in eco-friendly, recyclable materials, minimizing your footprint and maximizing your impact.",
            "viewStore": "View store for a greener future",
            "difficultyAcquiringMaterials": "Difficulty In Acquiring Materials?",
            "recycleMaterials": "Looking to responsibly recycle leftover materials from your sustainable products? Our innovative smart recycling system connects you directly with us!",
            "easySteps": "Here's how it's easy:",
            "postMaterials": "1. Post what you have! Let us know the specific materials you need to recycle (e.g., Plastic, Metal etc...).",
            "waitContributors": "2. Wait for contributors to reach out! People will review your post and provide you directly.",
            "recycleEase": "3. Recycle with ease! We'll arrange convenient pick-up or drop-off options for your recyclable materials.",
            "signUp": "Sign up now to create your first post.",
            "wantFastCash": "Want Fast Cash?",
            "recycleRewards": "Recycle and earn rewards for your eco-efforts!",
            "findCompanies": "Find companies needing your plastics, cans, and more right in your area.",
            "showRecycle": "We'll show you exactly what to recycle and estimate your points. Short on time? Partner delivery services might even pick it up.",
            "earnRewards": "Earning rewards is easy - we explain everything clearly. Want even more cool stuff? Reach higher tiers and redeem points at your GreeNatik store!",
            "winWin": "Recycle right, get rewarded - it's a win-win for you and the planet!",
            "makeRecyclingAwesome": "Let's make recycling awesome together!",
            "allPosts": "All posts",
            "ecoEnthusiast": "Eco-Enthusiast?",
            "recyclingMystery": "Feeling like recycling is a mystery? Unsure how to prep your materials or where to find composting hacks? We get it!",
            "vibrantBlogosphere": "GreeNatik has a vibrant blogosphere dedicated to making you a recycling rockstar. No matter your level of recycling knowledge, there's a blog waiting to empower you. Stay tuned for our launch and join the conversation! Together, let's turn recycling into a rewarding adventure - one blog post at a time!",
            "goToBlogs": "Go To Blogs",
            "title": "Guilt Free Shopping Get Cash From Your Waste",
    "greenProductMarketplace": "Green Product Marketplace",
    "greenProductMarketplaceDesc": "We offer a curated selection of eco-friendly, sustainable, and ethical products. Every item is rigorously vetted for its environmental and social impact. With transparent descriptions, you'll know exactly what you're buying.",
    "sustainablePackagingSolutions": "Sustainable Packaging Solutions",
    "sustainablePackagingSolutionsDesc": "Ditch the guilt, embrace green! We now use eco-friendly, recyclable packaging for all orders. Shop with confidence, knowing your sustainable choices extend to how your products arrive - minimizing waste and maximizing feel-good vibes.",
    "recycleRewardProgram": "Recycle and Reward Program",
    "recycleRewardProgramDesc": "Encourage people to participate in an eco-friendly lifecycle by providing a platform for them to return used material. In exchange, they receive points for future purchases.",
    "inspiringBlogs": "Inspiring Blogs",
    "inspiringBlogsDesc": "Offering a wealth of knowledge and resources for anyone interested in embracing a more sustainable lifestyle. Regular updates include a diverse range of content from eco-friendly living tips.",
    "offer":"This Is What We offer",
    "1":"shopper",
    "2":"Recycling company",
    "3":"A Recycler",
    "4":"Blogs",
    "howRecyclingWorks": {
        "sectionTitle": "How does  Recycling work?",
        "steps": [
          {
            "badge": "Step 01",
            "title": "View all the posts",
            "description": "Let's turn those used materials into something fantastic! We can search through all the posts offering different resources. Think of it like filtering for the perfect match – something that complements what you already have. This way, you can bring to life products from your used materials!",
            "button": "Posts"
          },
          {
            "badge": "Step 02",
            "title": "Select a post and fill the form",
            "features": [
              "Easy simple form to fill showing what you have",
              "Fast response after submitting",
              "We offer drop off or pick up for your materials"
            ]
          },
          {
            "badge": "Step 03",
            "title": "Get your points and compete with others",
            "description": "Get rewarded at GreeNatik! Every used material earns you points. Rack them up and redeem for discounts in our store! Compete with fellow upcyclers on our leaderboards – you might become the GreeNatik champion! Join the creative revolution, save money, save the planet!",
            "button": "Leaderboard"
          }
        ]
      }
    
          },
          "aboutus":{
              "about": "About GreeNatik",
              "years": "1+ Years",
              "description1": "At GreeNatik, we are passionate about creating a sustainable future through innovative recycling solutions and promoting green practices.",
              "description2": "Our mission is to inspire and empower communities, businesses, and individuals to take an active role in preserving our planet for generations to come.",
              "feature1Title": "Recycling Solutions",
              "feature1Desc": "We offer comprehensive recycling programs for households, businesses, and municipalities. Our services include waste collection, sorting, and processing, ensuring that recyclable materials are transformed into valuable resources.",
              "feature2Title": "Educational Initiatives",
              "feature2Desc": "Education is key to driving change. We provide workshops, seminars, and resources to educate the public on the importance of recycling and how to incorporate green practices into their daily lives.",
              "feature3Title": "Green Products",
              "feature3Desc": "Our range of eco-friendly products helps reduce the environmental footprint. From reusable bags to sustainable packaging, we provide alternatives that are both practical and planet-friendly.",
              "whoWeAre": "Ok! So Who We Are?",
              "whoWeAreDesc": "GreeNatik is a dedicated team of environmental enthusiasts, engineers, and educators committed to making a positive impact on the environment.",
              "experienceDesc": "With years of experience in the recycling and sustainability sector, we bring expertise and innovation to every project we undertake. In addition to our commitment to environmental initiatives, we are proud to offer a range of eco-friendly products.",
              "clientTrust": "Ok! So why our client trust us?",
              "trustDesc": "From reusable bags to sustainable packaging solutions, our products are carefully curated to align with our mission of promoting sustainability and reducing environmental impact.",
              "supportDesc": "With GreeNatik, you not only support our efforts in recycling and sustainability but also contribute to creating a greener and more sustainable future through your everyday choices.",
              "commitment": "At GreeNatik , we are committed to transparency, integrity, and excellence in everything we do. We continuously strive to improve our processes and services, staying at the forefront of sustainable technology and practices.",
              "joinMission": "Join us in our mission to create a greener future. Whether you are looking to reduce your waste, learn more about sustainability, or collaborate on a project, GreeNatik is here to help. Together, we can make a difference.",
              "thankYou": "Thank you for visiting GreeNatik, Let’s recycle and go green, one step at a time.",
              "ourLeadership": "Our Leadership",
              "contactInfo": "For more information, please contact us at (contact information) or follow us on (social media links)."
          },
          "slide": {
            "caption1": "Free Shopping",
            "caption2": "Earth Day Every Day",
            "caption3": "Try Our GreeNatik Kit Risk-Free!",
            "text1": "eco friendly products",
            "text2": "Customers",
            "text3": "By embracing recycling practices and promoting green initiatives, we can work together to protect our planet Earth for future generations.",
            "text4": "The Perfect Kit To Kickstart Your Sustainable Journey",
            "searchPlaceholder": "What are you looking for?"
          },
          "Feature":{
            "T1": "Fast Shipping",
            "T2": "Recycling Points",
            "T3": "100% Secure Payment",
            "T4": "Shop with no guilt",
            "D1": "Fast shipping with discount.",
            "D2": "Get discounts from recycling.",
            "D3": "Instant access to Contact.",
            "D4": "All of our products are green and eco friendly.",
          },
          "Categories":{
            "Categories": "Categories",
            "Find": "Find what you are looking for",
            "Food Ware": "Food Ware",
            "Gardening": "Gardening",
            "Pets": "Pets",
            "Shopping Bags": "Shopping Bags",
            "Office": "Office",
            "Skin Care": "Skin Care",
            "Electronics": "Electronics",
            "Clothing": "Clothing",
            "Home": "Home",
            "New1": "New Products",
            "New2": "New products with updated stocks",
            "S1": "Special Offers of the View All Week!",
            "S2": "Get exclusive ongoing offers, deals, and discount codes of shopping",
            "View All": "View All",
            "B1": "Bestsellers Products",
            "B2": "Find the bestseller products with discount.",
            "Shop": "One Stop Natural Shop",
            "Shopping": "Shopping for your furry friend? Find Green, treats, and more in one easy spot.",
            "Get": "Get Points",
            "title": "For every purchase you make, you earn points that can be redeemed for discounts on future purchases!",
          }
      }
    },
    ar: {
      translation: {
        "navbar": {
          "currency": "العملة",
          "usd": "دولار",
          "ils": "شيكل",
          "language": "اللغة",
          "english": "الإنجليزية",
          "arabic": "العربية",
          "profile": "الملف الشخصي",
          "cart": "عربة التسوق",
          "checkout": "الدفع",
          "wishlist": "أريد الحصول",
          "posts": "المنشورات",
          "store": "المتجر",
          "addProduct": "إضافة منتج جديد",
          "addPost": "إضافة منشور جديد",
          "addBlog": "إضافة مدونة جديدة",
          "seePosts": "عرض المنشورات",
          "seeProducts": "عرض المنتجات",
          "seeBlogs": "عرض المدونات",
          "postDelivery": "تسليم اعادة التدوير",
          "productDelivery": "تسليم المنتجات",
          "logout": "تسجيل الخروج",
          "login": "تسجيل الدخول",
          "signup": "إنشاء حساب",
          "developed": "من الفكرة إلى الإطلاق، تم تطوير هذا الموقع بفخر في فلسطين.",
          "home": "الصفحة الرئيسية",
          "mainStore": "المتجر الرئيسي",
          "recycling": "إعادة التدوير",
          "blogs": "المدونات",
          "dashboard": "لوحة القيادة",
          "delivery": "التوصيل",
          "leaderboard": "قائمة الصدارة",
          "account": "حساب",
          "signUp": "تسجيل",
          "login": "تسجيل دخول",
          "myAccount": "حسابي",
          "aboutUs": "من نحن",
        },
        "home": {
            "whyGreeNatik": "لماذا جرينتك؟",
            "careAboutPlanet": "نحن نفهم أنك تهتم بالكوكب",
            "shopGuiltFree": "لهذا السبب نقدم مجموعة مختارة بعناية من المنتجات الصديقة للبيئة والمستدامة، التي تم التحقق منها بدقة للتأكد من تأثيرها البيئي والاجتماعي. تسوق بدون شعور بالذنب مع الشفافية الكاملة – تكشف الأوصاف التفصيلية عن أصل كل منتج، ومواده، والممارسات المستدامة. بالإضافة إلى ذلك، لقد ألغينا التغليف المهدر! جميع الطلبات تُشحن بمواد صديقة للبيئة وقابلة لإعادة التدوير، مما يقلل من بصمتك ويزيد من تأثيرك.",
            "viewStore": "عرض المتجر لمستقبل أكثر خضرة",
            "difficultyAcquiringMaterials": "صعوبة في الحصول على المواد؟",
            "recycleMaterials": "هل تبحث عن إعادة تدوير بقايا المواد من منتجاتك المستدامة بمسؤولية؟ نظامنا الذكي المبتكر لإعادة التدوير يربطك بنا مباشرة!",
            "easySteps": "إليك كيف تكون العملية سهلة:",
            "postMaterials": "1. انشر ما لديك! دعنا نعرف المواد المحددة التي تحتاج إلى إعادة تدويرها (مثل البلاستيك، المعادن، إلخ).",
            "waitContributors": "2. انتظر المتبرعين للتواصل معك! سيراجع الناس منشورك ويوفرون لك مباشرة.",
            "recycleEase": "3. أعد التدوير بسهولة! سنرتب خيارات استلام أو توصيل مريحة لموادك القابلة لإعادة التدوير.",
            "signUp": "سجل الآن لإنشاء منشورك الأول.",
            "wantFastCash": "هل تريد كسب المال بسرعة؟",
            "recycleRewards": "أعد التدوير واحصل على مكافآت لجهودك البيئية!",
            "findCompanies": "اعثر على الشركات التي تحتاج إلى البلاستيك، العلب، وأكثر في منطقتك.",
            "showRecycle": "سنوضح لك بالضبط ما تحتاج إلى إعادة تدويره ونقدر نقاطك. هل تملك وقتًا قصيرًا؟ قد تقوم خدمات التوصيل الشريكة بالتقاطها.",
            "earnRewards": "كسب المكافآت سهل - نشرح كل شيء بوضوح. هل تريد المزيد من الأشياء الرائعة؟ وصل إلى مستويات أعلى واستبدل النقاط في متجرك GreeNatik!",
            "winWin": "أعد التدوير بشكل صحيح، واحصل على مكافآت - إنها مكسب لك وللكوكب!",
            "makeRecyclingAwesome": "لنجعل إعادة التدوير رائعة معًا!",
            "allPosts": "جميع المنشورات",
            "ecoEnthusiast": "محب للبيئة؟",
            "recyclingMystery": "هل تشعر أن إعادة التدوير لغز؟ غير متأكد من كيفية تجهيز موادك أو أين تجد حيل التسميد؟ نحن نفهم ذلك!",
            "vibrantBlogosphere": "لدى جرينتك مدونة حيوية مخصصة لجعلك نجماً في إعادة التدوير. بغض النظر عن مستوى معرفتك بإعادة التدوير، هناك مدونة تنتظرك لتمكينك. تابعنا لإطلاق المدونة وانضم إلى المحادثة! معًا، دعنا نحول إعادة التدوير إلى مغامرة مجزية - مقال مدونة في كل مرة!",
            "goToBlogs": "اذهب إلى المدونات",
            "title": "التسوق بدون شعور بالذنب احصل على نقود من نفاياتك",
    "greenProductMarketplace": "سوق المنتجات الخضراء",
    "greenProductMarketplaceDesc": "نحن نقدم مجموعة مختارة بعناية من المنتجات الصديقة للبيئة والمستدامة والأخلاقية. كل عنصر يتم التحقق منه بدقة لأثره البيئي والاجتماعي. مع الأوصاف الشفافة، ستعرف بالضبط ما الذي تشتريه.",
    "sustainablePackagingSolutions": "حلول التعبئة المستدامة",
    "sustainablePackagingSolutionsDesc": "تخلص من الشعور بالذنب، واعتمد اللون الأخضر! نحن نستخدم الآن التغليف الصديق للبيئة والقابل لإعادة التدوير لجميع الطلبات. تسوق بثقة، مع العلم أن اختياراتك المستدامة تمتد إلى كيفية وصول منتجاتك - تقليل النفايات وزيادة الشعور الجيد.",
    "recycleRewardProgram": "برنامج إعادة التدوير والمكافآت",
    "recycleRewardProgramDesc": "شجع الناس على المشاركة في دورة حياة صديقة للبيئة من خلال توفير منصة لهم لإعادة المواد المستخدمة. في المقابل، يحصلون على نقاط لعمليات الشراء المستقبلية.",
    "inspiringBlogs": "مدونات ملهمة",
    "inspiringBlogsDesc": "تقديم ثروة من المعرفة والموارد لأي شخص مهتم بتبني نمط حياة أكثر استدامة. تشمل التحديثات المنتظمة مجموعة متنوعة من المحتوى من نصائح الحياة الصديقة للبيئة.",
    "offer":"هذا ما نقدمه لك",
    "1":"مشتري",
    "2":"شركة اعادة تصنيع",
    "3":"مدور نفايات",
    "4":"مدونات",
    "howRecyclingWorks": {
        "sectionTitle": "منهجية إعادة التدوير لدينا",
        "steps": [
          {
            "badge": "الخطوة 01",
            "title": "عرض جميع المنشورات",
            "description": "لنحوّل تلك المواد المستخدمة إلى شيء رائع! يمكننا البحث في جميع المنشورات التي تقدم موارد مختلفة. فكّر في الأمر كأنك تصفّي للعثور على المطابقة المثالية – شيء يكمل ما لديك بالفعل. بهذه الطريقة، يمكنك إحياء المنتجات من موادك المستخدمة!",
            "button": "المنشورات"
          },
          {
            "badge": "الخطوة 02",
            "title": "اختر منشورًا واملأ النموذج",
            "features": [
              "نموذج بسيط وسهل لملء ما لديك",
              "استجابة سريعة بعد التقديم",
              "نحن نقدم التوصيل أو الاستلام لموادك"
            ]
          },
          {
            "badge": "الخطوة 03",
            "title": "احصل على نقاطك وتنافس مع الآخرين",
            "description": "احصل على مكافآت في GreeNatik! كل مادة مستخدمة تمنحك نقاطًا. اجمعها واستبدلها بخصومات في متجرنا! تنافس مع محبي إعادة التدوير على لوحات الصدارة – قد تصبح بطل GreeNatik! انضم إلى الثورة الإبداعية، وفر المال، أنقذ الكوكب!",
            "button": "لوحة الصدارة"
          }
        ]
      }
          },
          "aboutus":{
      "about": "عن جريناتيك",
      "years": "سنة وأكثر",
      "description1": "في جريناتيك ، نحن شغوفون بخلق مستقبل مستدام من خلال حلول إعادة التدوير المبتكرة وتعزيز الممارسات الخضراء.",
      "description2": "مهمتنا هي إلهام وتمكين المجتمعات والشركات والأفراد للمشاركة في الحفاظ على كوكبنا للأجيال القادمة.",
      "feature1Title": "حلول إعادة التدوير",
      "feature1Desc": "نقدم برامج شاملة لإعادة التدوير للمنازل والشركات والبلديات. تشمل خدماتنا جمع النفايات وفرزها ومعالجتها، مما يضمن تحويل المواد القابلة لإعادة التدوير إلى موارد قيمة.",
      "feature2Title": "مبادرات تعليمية",
      "feature2Desc": "التعليم هو المفتاح لتحقيق التغيير. نحن نقدم ورش عمل وندوات وموارد لتثقيف الجمهور حول أهمية إعادة التدوير وكيفية دمج الممارسات الخضراء في حياتهم اليومية.",
      "feature3Title": "منتجات خضراء",
      "feature3Desc": "تساعد مجموعة منتجاتنا الصديقة للبيئة في تقليل البصمة البيئية. من الأكياس القابلة لإعادة الاستخدام إلى التغليف المستدام، نقدم بدائل عملية وصديقة للبيئة.",
        "whoWeAre": "حسناً! من نحن؟",
        "whoWeAreDesc": "جريناتيك هو فريق مخصص من المتحمسين البيئيين والمهندسين والمعلمين الذين يلتزمون بإحداث تأثير إيجابي على البيئة.",
        "experienceDesc": "مع سنوات من الخبرة في قطاع إعادة التدوير والاستدامة، نقدم الخبرة والابتكار في كل مشروع نقوم به. بالإضافة إلى التزامنا بالمبادرات البيئية، نحن فخورون بتقديم مجموعة من المنتجات الصديقة للبيئة.",
        "clientTrust": "حسناً! لماذا يثق عملاؤنا بنا؟",
        "trustDesc": "من الأكياس القابلة لإعادة الاستخدام إلى حلول التعبئة المستدامة، يتم اختيار منتجاتنا بعناية لتتوافق مع مهمتنا في تعزيز الاستدامة وتقليل التأثير البيئي.",
        "supportDesc": "مع جريناتيك، أنت لا تدعم فقط جهودنا في إعادة التدوير والاستدامة، بل تساهم أيضًا في خلق مستقبل أكثر خضرة واستدامة من خلال اختياراتك اليومية.",
        "commitment": "في جريناتيك ، نحن ملتزمون بالشفافية والنزاهة والتميز في كل ما نقوم به. نحن نسعى جاهدين باستمرار لتحسين عملياتنا وخدماتنا، والبقاء في طليعة التكنولوجيا والممارسات المستدامة.",
        "joinMission": "انضم إلينا في مهمتنا لخلق مستقبل أكثر خضرة. سواء كنت تبحث عن تقليل نفاياتك، أو تعلم المزيد عن الاستدامة، أو التعاون في مشروع، فإن جريناتيك هنا للمساعدة. معًا، يمكننا إحداث فرق.",
        "thankYou": "شكرًا لزيارتكم جريناتيك. دعونا نعيد التدوير ونذهب إلى الأخضر، خطوة بخطوة.",
        "ourLeadership": "قيادتنا",
        "contactInfo": "لمزيد من المعلومات، يرجى الاتصال بنا على (معلومات الاتصال) أو متابعتنا على (روابط وسائل التواصل الاجتماعي)."
      },
      "slide": {
        "caption1":"تسوق الآن",
        "caption2": "يوم الأرض كل يوم",
        "caption3": "جرب حقيبة جريناتيك بدون مخاطر!",
        "text1": " منتج صديق للبيئة",
        "text2": " عميل",
        "text3": "من خلال تبني ممارسات إعادة التدوير وتعزيز المبادرات الخضراء، يمكننا العمل معًا لحماية كوكب الأرض للأجيال القادمة.",
        "text4": "الحقيبة المثالية لبدء رحلتك المستدامة",
        "searchPlaceholder": "ما الذي تبحث عنه؟"
      },
      "Feature":{
        "T1": "الشحن السريع",
        "T2": "نقاط التدوير",
        "T3": "الدفع الآمن 100%",
        "T4": "تسوق بدون ضجر",
        "D1": "الشحن السريع بخصم.",
        "D2": "احصل على خصومات من إعادة التدوير.",
        "D3": "الوصول الفوري للاتصال.",
        "D4": "جميع منتجاتنا صديقة للبيئة وصديقة للبيئة.",
      },
      "Categories":{
        "Categories": "منتجات",
  "Find": "ابحث عن الذي تريده",
  "Food Ware": "أدوات المطبخ",
  "Gardening": "الزراعة",
  "Pets": "الحيوانات الأليفة",
  "Shopping Bags": "أكياس التسوق",
  "Office": "المكتب",
  "Skin Care": "العناية بالبشرة",
  "Electronics": "الإلكترونيات",
  "Clothing": "الملابس",
  "Home": "المنزل",
  "New1": "منتجات جديدة",
  "New2": "منتجات جديدة مع مخزون محدث",
  "S1": "عروض خاصة طوال الأسبوع!",
  "S2": "احصل على عروض حصرية مستمرة وصفقات ورموز تخفيض للتسوق",
  "View All": "عرض الكل",
  "B1": "منتجات الأكثر مبيعًا",
  "B2": "ابحث عن منتجات الأكثر مبيعًا بخصم.",
  "Shop": "متجر طبيعي واحد",
  "Shopping": "هل تتسوق لصديقك الفروي؟ اعثر على المنتجات الخضراء والحلويات والمزيد في مكان واحد بسهولة.",
  "Get": "احصل على نقاط",
  "title": "مع كل عملية شراء تقوم بها ، تكسب نقاطًا يمكنك استبدالها بخصومات على المشتريات المستقبلية!",
},
      }
    }
  },
  lng: getDefaultLanguage(), // Set the initial language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

// Listen for language change and store the new language in localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;