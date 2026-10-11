export type Language = 'ru' | 'uz' | 'en';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  bullets: string[];
  badge: string;
  icon: string;
}

export interface Translations {
  companyName: string;
  companyFullName: string;
  tagline: string;
  nav: {
    services: string;
    advantages: string;
    calculator: string;
    about: string;
    consultation: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleAccent: string;
    titlePart2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      stat1Val: string;
      stat1Label: string;
      stat1Sub: string;
      stat2Val: string;
      stat2Label: string;
      stat2Sub: string;
      stat3Val: string;
      stat3Label: string;
      stat3Sub: string;
      stat4Val: string;
      stat4Label: string;
      stat4Sub: string;
    };
  };
  servicesSection: {
    badge: string;
    title: string;
    subtitle: string;
    orderConsultation: string;
  };
  services: ServiceItem[];
  guarantees: {
    badge: string;
    title: string;
    quote: string;
    author: string;
    authorRole: string;
    items: {
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    feature1: string;
    feature2: string;
    labelEmployees: string;
    labelDocs: string;
    resultSavings: string;
    resultAudit: string;
    resultPeace: string;
    buttonEstimate: string;
  };
  ctaBanner: {
    badge: string;
    title: string;
    subtitle: string;
    button: string;
    viewServices: string;
  };
  modal: {
    badge: string;
    title: string;
    subtitle: string;
    fieldName: string;
    fieldPhone: string;
    fieldEmail: string;
    fieldService: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
  };
  footer: {
    description: string;
    servicesTitle: string;
    legalTitle: string;
    contactsTitle: string;
    allRightsReserved: string;
    privacy: string;
    terms: string;
  };
}

export const translations: Record<Language, Translations> = {
  ru: {
    companyName: "PACIFIC ACCOUNTING",
    companyFullName: "СП «PACIFIC ACCOUNTING & CONSULTING GROUP»",
    tagline: "Ведение и восстановление бухгалтерского учета",
    nav: {
      services: "Услуги",
      advantages: "Преимущества",
      calculator: "Калькулятор",
      about: "О компании",
      consultation: "Заказать консультацию",
    },
    hero: {
      badge: "Профессиональные бухгалтерские услуги",
      titlePart1: "Ведение и восстановление",
      titleAccent: "бухгалтерского учета",
      titlePart2: "с гарантией абсолютной надежности",
      subtitle:
        "Опыт специалистов СП «PACIFIC ACCOUNTING & CONSULTING GROUP» гармонично дополняет ресурсы вашей компании. Мы берем на себя взаимодействие с государственными органами, защищаем от штрафов и создаем фундамент для уверенного роста бизнеса.",
      ctaPrimary: "Получить консультацию",
      ctaSecondary: "Ознакомиться с услугами",
      stats: {
        stat1Val: "8+",
        stat1Label: "Ключевых направлений",
        stat1Sub: "Полный спектр учета и аудита",
        stat2Val: "100%",
        stat2Label: "Конфиденциальность",
        stat2Sub: "Защита коммерческой тайны",
        stat3Val: "0",
        stat3Label: "Штрафов и пени",
        stat3Sub: "Строгое соблюдение законов",
        stat4Val: "100%",
        stat4Label: "Налоговая защита",
        stat4Sub: "Перед внешними проверками",
      },
    },
    servicesSection: {
      badge: "Виды оказываемых услуг",
      title: "Комплексные бухгалтерские решения",
      subtitle:
        "От ежедневного ведения учета до защиты интересов постоянных учреждений иностранных организаций и проведения сложных инвентаризаций.",
      orderConsultation: "Заказать услугу",
    },
    services: [
      {
        id: "setup-and-maintenance",
        number: "01",
        title: "Постановка и ведение бухучета",
        description:
          "Построение прозрачной и эффективной учетной политики с нуля, а также качественное непрерывное сопровождение всех хозяйственных операций.",
        bullets: [
          "Разработка индивидуального плана счетов и регистров",
          "Отражение первичной документации в учетных системах",
          "Контроль дебиторской и кредиторской задолженности",
        ],
        badge: "Базовый учет",
        icon: "edit_note",
      },
      {
        id: "restoration",
        number: "02",
        title: "Восстановление бухучета",
        description:
          "Полная ревизия, восстановление утраченных баз данных, исправление ошибок прошлых периодов и подготовка корректной отчетности.",
        bullets: [
          "Аудит запущенных и проблемных периодов",
          "Восстановление первичных документов и кассовых книг",
          "Подача уточненных расчетов и минимизация рисков санкций",
        ],
        badge: "Экспертная помощь",
        icon: "history",
      },
      {
        id: "outsourcing",
        number: "03",
        title: "Комплексный аутсорсинг",
        description:
          "Полная замена или усиление штатной бухгалтерии силами сертифицированных специалистов с экономией на налогах с ФОТ и содержании штата.",
        bullets: [
          "Весь функционал главного бухгалтера и операторов",
          "Оптимизация затрат без расходов на рабочие места",
          "Обучение и методическая помощь внутренним сотрудникам",
        ],
        badge: "Максимальная выгода",
        icon: "hub",
      },
      {
        id: "inventory",
        number: "04",
        title: "Проведение инвентаризации",
        description:
          "Независимая проверка фактического наличия и состояния активов, обязательств и ценностей предприятия.",
        bullets: [
          "Инвентаризация основных средств и ТМЦ",
          "Сверка кассы, банковских и валютных счетов",
          "Аудит расчетов с поставщиками и покупателями",
        ],
        badge: "Контроль активов",
        icon: "inventory",
      },
      {
        id: "tax-and-declarations",
        number: "05",
        title: "Налоговые расчеты и декларации",
        description:
          "Расчет всех видов налогов, отчислений во внебюджетные фонды и подготовка отчетности для постоянных учреждений иностранных лиц.",
        bullets: [
          "Расчет налогов и отчислений во внебюджетные фонды",
          "Декларации для постоянных учреждений иностранных компаний",
          "Законная оптимизация налоговой нагрузки",
        ],
        badge: "Налоговая безопасность",
        icon: "account_balance",
      },
      {
        id: "business-plans",
        number: "06",
        title: "Разработка бизнес-планов",
        description:
          "Профессиональное финансово-экономическое обоснование для банков, инвесторов, получения кредитов и стратегического масштабирования.",
        bullets: [
          "Расчет показателей окупаемости (NPV, IRR, PBP)",
          "Финансовые и инвестиционные модели денежных потоков",
          "Анализ отраслевых рисков и точка безубыточности",
        ],
        badge: "Стратегия и инвестиции",
        icon: "trending_up",
      },
      {
        id: "hr-and-records",
        number: "07",
        title: "Делопроизводство и отдел кадров",
        description:
          "Формирование кадрового учета в строгом соответствии с трудовым и гражданским законодательством Республики Узбекистан.",
        bullets: [
          "Трудовые договоры, должностные инструкции и приказы",
          "Ведение электронных и бумажных трудовых книжек",
          "Организация воинского учета и охрана труда",
        ],
        badge: "Трудовое право",
        icon: "badge",
      },
      {
        id: "financial-analysis",
        number: "08",
        title: "Анализ финансовой деятельности",
        description:
          "Глубокая аналитика платежеспособности, рентабельности и структуры капитала для принятия взвешенных управленческих решений.",
        bullets: [
          "Оценка ликвидности, рентабельности и финансовой устойчивости",
          "Выявление скрытых резервов снижения издержек",
          "Подготовка понятных отчетов для собственников и директоров",
        ],
        badge: "Управленческий анализ",
        icon: "insights",
      },
    ],
    guarantees: {
      badge: "Гарантии и преимущества",
      title: "Почему нам доверяют управление финансами",
      quote:
        "«Заключив с нами договор на оказание бухгалтерских услуг, вы перестанете волноваться по поводу неполной или несвоевременной отчетности. Мы гарантируем конфиденциальность, качество и правовую защиту каждого документа.»",
      author: "СП «PACIFIC ACCOUNTING & CONSULTING GROUP»",
      authorRole: "Надежный партнер для лидеров бизнеса",
      items: [
        {
          title: "Защита от штрафов и пени",
          desc: "Исключаем риски доначислений благодаря строгому соответствию налоговому и гражданскому праву.",
          icon: "verified_user",
        },
        {
          title: "Коммерческая тайна",
          desc: "Полная конфиденциальность данных и внутренняя система защиты корпоративной информации.",
          icon: "lock",
        },
        {
          title: "Оперативность для директоров",
          desc: "Своевременная финансовая картина в любой момент для принятия точных стратегических решений.",
          icon: "speed",
        },
        {
          title: "Обучение ваших сотрудников",
          desc: "Наши специалисты помогают вашим штатным сотрудникам освоить сложные нюансы учета без лишних затрат.",
          icon: "school",
        },
      ],
    },
    calculator: {
      badge: "Оценка объема обслуживания",
      title: "Экспресс-расчет бухгалтерской нагрузки",
      subtitle:
        "Укажите ключевые параметры вашей компании, чтобы предварительно оценить объем задач и выгоду от сотрудничества с нами.",
      feature1: "Безошибочная сдача отчетности в ГНК и фонды",
      feature2: "Снижение издержек на 30–50% по сравнению со штатом",
      labelEmployees: "Количество сотрудников в штате",
      labelDocs: "Примерное число операций/документов в месяц",
      resultSavings: "Экономия на штате",
      resultAudit: "Точность учета",
      resultPeace: "Душевное спокойствие",
      buttonEstimate: "Обсудить индивидуальный тариф",
    },
    ctaBanner: {
      badge: "Долгосрочное сотрудничество",
      title: "Готовы навести идеальный порядок в бухгалтерии?",
      subtitle:
        "Свяжитесь со специалистами СП «PACIFIC ACCOUNTING & CONSULTING GROUP» прямо сейчас. Мы проведем бесплатный предварительный аудит текущего состояния учета вашей компании.",
      button: "Записаться на консультацию",
      viewServices: "Посмотреть все 8 услуг",
    },
    modal: {
      badge: "Прямая заявка",
      title: "Заявка на бухгалтерские услуги",
      subtitle: "Оставьте контактные данные, и наш ведущий специалист свяжется с вами для обсуждения задач.",
      fieldName: "Ваше имя и должность",
      fieldPhone: "Номер телефона",
      fieldEmail: "Рабочий email",
      fieldService: "Интересующая услуга",
      submitButton: "Отправить заявку",
      submitting: "Отправка...",
      successMessage: "Благодарим за обращение! Специалист PACIFIC ACCOUNTING свяжется с вами в течение 2 часов.",
    },
    footer: {
      description:
        "СП «PACIFIC ACCOUNTING & CONSULTING GROUP» — профессиональное ведение, восстановление бухгалтерского учета, аутсорсинг, инвентаризация и налоговый консалтинг.",
      servicesTitle: "Наши услуги",
      legalTitle: "Правовая информация",
      contactsTitle: "Контакты и сотрудничество",
      allRightsReserved: "Все права защищены.",
      privacy: "Политика конфиденциальности",
      terms: "Условия сотрудничества",
    },
  },

  uz: {
    companyName: "PACIFIC ACCOUNTING",
    companyFullName: "«PACIFIC ACCOUNTING & CONSULTING GROUP» QK",
    tagline: "Buxgalteriya hisobini yuritish va tiklash xizmatlari",
    nav: {
      services: "Xizmatlar",
      advantages: "Afzalliklar",
      calculator: "Kalkulyator",
      about: "Biz haqimizda",
      consultation: "Konsultatsiya olish",
    },
    hero: {
      badge: "Professional buxgalteriya xizmatlari",
      titlePart1: "Buxgalteriya hisobini",
      titleAccent: "yuritish va tiklash",
      titlePart2: "mutlaq ishonchlilik va qonuniy kafolat bilan",
      subtitle:
        "«PACIFIC ACCOUNTING & CONSULTING GROUP» QK mutaxassislarining tajribasi kompaniyangiz imkoniyatlarini uyg'un tarzda to'ldiradi. Biz hisobotlarni o'z vaqtida topshiramiz, jarimalardan asraymiz va biznesingiz rivoji uchun mustahkam zamin yaratamiz.",
      ctaPrimary: "Konsultatsiyaga yozilish",
      ctaSecondary: "Xizmatlar bilan tanishish",
      stats: {
        stat1Val: "8+",
        stat1Label: "Asosiy yo'nalishlar",
        stat1Sub: "Hisob va auditning to'liq spektri",
        stat2Val: "100%",
        stat2Label: "Maxfiylik kafolati",
        stat2Sub: "Tijorat sirlari to'liq himoyada",
        stat3Val: "0",
        stat3Label: "Jarima va penyalar",
        stat3Sub: "Qonunchilikka qat'iy rioya etish",
        stat4Val: "100%",
        stat4Label: "Soliq himoyasi",
        stat4Sub: "Har qanday tekshiruv oldida",
      },
    },
    servicesSection: {
      badge: "Ko'rsatiladigan xizmatlar",
      title: "Kompleks buxgalteriya yechimlari",
      subtitle:
        "Kundalik hisob yuritishdan tortib xorijiy kompaniyalarning doimiy muassasalari hisobotlari va murakkab inventarizatsiyagacha.",
      orderConsultation: "Xizmatga buyurtma berish",
    },
    services: [
      {
        id: "setup-and-maintenance",
        number: "01",
        title: "Buxgalteriya hisobini tashkil etish va yuritish",
        description:
          "Kompaniyangiz uchun noldan boshlab shaffof hisob siyosatini tuzish hamda barcha xo'jalik operatsiyalarini uzluksiz yuritish.",
        bullets: [
          "Individual hisoblar rejasi va registrlarni ishlab chiqish",
          "Birlamchi hujjatlarni hisob dasturlarida to'liq aks ettirish",
          "Debitorlik va kreditorlik qarzlarini doimiy nazorat qilish",
        ],
        badge: "Asosiy hisob",
        icon: "edit_note",
      },
      {
        id: "restoration",
        number: "02",
        title: "Buxgalteriya hisobini tiklash",
        description:
          "Buzilgan yoki yo'qolgan ma'lumotlar bazalarini to'liq tekshirish, o'tgan davrlar xatolarini tuzatish va to'g'ri hisobotlarni tiklash.",
        bullets: [
          "Qarovsiz qolgan va muammoli davrlar auditi",
          "Birlamchi hujjatlar va kassa daftarlarini tiklash",
          "Aniq hisob-kitoblarni topshirish orqali jarimalarni bartaraf etish",
        ],
        badge: "Ekspert ko'magi",
        icon: "history",
      },
      {
        id: "outsourcing",
        number: "03",
        title: "Kompleks buxgalteriya autsorsingi",
        description:
          "Sertifikatlangan mutaxassislar yordamida shtatdagi buxgalteriya xarajatlarini (ish haqi soliqlari, jihozlar) 40% gacha tejash.",
        bullets: [
          "Bosh buxgalter va operatorlarning barcha vazifalari",
          "Ish o'rinlari va dasturiy ta'minot xarajatlarisiz xizmat",
          "Ichki xodimlarni o'rgatish va metodik qo'llab-quvvatlash",
        ],
        badge: "Maksimal tejamkorlik",
        icon: "hub",
      },
      {
        id: "inventory",
        number: "04",
        title: "Inventarizatsiya o'tkazish",
        description:
          "Korxonaning haqiqiy aktivlari, tovar-moddiy boyliklari va majburiyatlarining holatini mustaqil tekshirish.",
        bullets: [
          "Asosiy vositalar va TMB larni to'liq xatlovdan o'tkazish",
          "Kassa, bank va valyuta hisobvaraqlarini solishtirish",
          "Ta'minotchilar va xaridorlar bilan hisob-kitoblar auditi",
        ],
        badge: "Aktivlar nazorati",
        icon: "inventory",
      },
      {
        id: "tax-and-declarations",
        number: "05",
        title: "Soliq hisob-kitoblari va deklaratsiyalari",
        description:
          "Barcha turdagi soliqlarni hisoblash, byudjetdan tashqari jamg'armalarga ajratmalar hamda xorijiy shaxslar deklaratsiyalari.",
        bullets: [
          "Soliqlar va jamg'armalarga to'lovlar hisobi",
          "Xorijiy shaxslarning doimiy muassasalari uchun deklaratsiyalar",
          "Soliq yukini qonuniy optimallashtirish",
        ],
        badge: "Soliq xavfsizligi",
        icon: "account_balance",
      },
      {
        id: "business-plans",
        number: "06",
        title: "Biznes-rejalarni ishlab chiqish",
        description:
          "Banklar, investorlar va kreditlar olish uchun professional moliyaviy-iqtisodiy asoslash va daromadlilik modellari.",
        bullets: [
          "O'zini qoplash ko'rsatkichlari (NPV, IRR, PBP) hisobi",
          "Pul oqimlari (Cash Flow) va investitsion modellashtirish",
          "Soha risklari tahlili va zararsizlik nuqtasi",
        ],
        badge: "Strategiya va investitsiya",
        icon: "trending_up",
      },
      {
        id: "hr-and-records",
        number: "07",
        title: "Kadrlar bo'limi va ish yuritish",
        description:
          "Kadrlar hisobini O'zbekiston Respublikasi Mehnat va Fuqarolik qonunchiligiga to'liq muvofiq tashkil etish.",
        bullets: [
          "Mehnat shartnomalari, lavozim yo'riqnomalari va buyruqlar",
          "Yagona milliy mehnat tizimi (mehnat daftarchalari) yuritish",
          "Xodimlarning ichki intizom va mehnat muhofazasi hujjatlari",
        ],
        badge: "Mehnat huquqi",
        icon: "badge",
      },
      {
        id: "financial-analysis",
        number: "08",
        title: "Moliyaviy faoliyat tahlili",
        description:
          "To'lov qobiliyati, rentabellik va kapital tuzilmasini chuqur tahlil qilib, to'g'ri boshqaruv qarorlari uchun hisobotlar tayyorlash.",
        bullets: [
          "Likvidlik, rentabellik va moliyaviy barqarorlikni baholash",
          "Xarajatlarni kamaytirishning yashirin zaxiralarini aniqlash",
          "Rahbariyat va ta'sischilar uchun tushunarli hisobotlar",
        ],
        badge: "Boshqaruv tahlili",
        icon: "insights",
      },
    ],
    guarantees: {
      badge: "Kafolatlar va afzalliklar",
      title: "Nima uchun moliyangizni bizga ishonishadi",
      quote:
        "«Biz bilan shartnoma tuzgach, to'liq bo'lmagan yoki kechikkan hisobotlar haqida xavotirlanishdan butunlay xalos bo'lasiz. Biz har bir raqam va hujjatning qonuniy himoyalanganligini kafolatlaymiz.»",
      author: "«PACIFIC ACCOUNTING & CONSULTING GROUP» QK",
      authorRole: "Biznesingizning ishonchli hamkori",
      items: [
        {
          title: "Jarima va penyalardan himoya",
          desc: "Soliq va fuqarolik qonunchiligiga qat'iy rioya etish orqali kutilmagan jarimalar xavfini nolga tushiramiz.",
          icon: "verified_user",
        },
        {
          title: "Tijorat sirlari maxfiyligi",
          desc: "Barcha moliyaviy ma'lumotlarning 100% maxfiyligi va himoyalanishi shartnoma bilan kafolatlanadi.",
          icon: "lock",
        },
        {
          title: "Rahbariyat uchun tezkorlik",
          desc: "Boshqaruv qarorlarini qabul qilish uchun kerakli moliyaviy ma'lumotlarni doimo o'z vaqtida taqdim etamiz.",
          icon: "speed",
        },
        {
          title: "Xodimlaringizni o'rgatish",
          desc: "Bizning mutaxassislar sizning xodimlaringizga murakkab nuanslarni eng samarali usulda yechishni o'rgatadi.",
          icon: "school",
        },
      ],
    },
    calculator: {
      badge: "Xizmat hajmini baholash",
      title: "Buxgalteriya yuklamasi ekspress hisob-kitobi",
      subtitle:
        "Kompaniyangiz ko'rsatkichlarini tanlab, oylik operatsiyalar hajmini va biz bilan ishlash orqali erishiladigan foydani ko'ring.",
      feature1: "Davlat soliq inspeksiyasiga 100% xatosiz hisobotlar",
      feature2: "Shtatdagi xodimlarga nisbatan 30–50% xarajatlarni tejash",
      labelEmployees: "Shtatdagi xodimlar soni",
      labelDocs: "Oyiga taxminiy operatsiyalar / hujjatlar soni",
      resultSavings: "Xarajatlarni tejash",
      resultAudit: "Hisob aniqligi",
      resultPeace: "Xotirjamlik",
      buttonEstimate: "Individual tarifni muhokama qilish",
    },
    ctaBanner: {
      badge: "Uzoq muddatli hamkorlik",
      title: "Buxgalteriyangizda mukammal tartib o'rnatishga tayyormisiz?",
      subtitle:
        "«PACIFIC ACCOUNTING & CONSULTING GROUP» QK mutaxassislari bilan hoziroq bog'laning. Biz korxonangizning hozirgi hisob holatini bepul dastlabki auditdan o'tkazamiz.",
      button: "Konsultatsiyaga yozilish",
      viewServices: "Barcha 8 ta xizmatni ko'rish",
    },
    modal: {
      badge: "To'g'ridan-to'g'ri so'rov",
      title: "Buxgalteriya xizmatlariga ariza",
      subtitle: "Aloqa ma'lumotlaringizni qoldiring, yetakchi mutaxassisimiz siz bilan bog'lanadi.",
      fieldName: "Ismingiz va lavozimingiz",
      fieldPhone: "Telefon raqamingiz",
      fieldEmail: "Ishchi elektron pochta",
      fieldService: "Qiziqtirgan xizmat turi",
      submitButton: "Arizani yuborish",
      submitting: "Yuborilmoqda...",
      successMessage: "Murojaatingiz uchun tashakkur! PACIFIC ACCOUNTING mutaxassisi 2 soat ichida siz bilan bog'lanadi.",
    },
    footer: {
      description:
        "«PACIFIC ACCOUNTING & CONSULTING GROUP» QK — buxgalteriya hisobini yuritish, tiklash, autsorsing, inventarizatsiya va soliq maslahati bo'yicha professional xizmatlar.",
      servicesTitle: "Xizmatlarimiz",
      legalTitle: "Huquqiy ma'lumotlar",
      contactsTitle: "Aloqa va hamkorlik",
      allRightsReserved: "Barcha huquqlar himoyalangan.",
      privacy: "Maxfiylik siyosati",
      terms: "Hamkorlik shartlari",
    },
  },

  en: {
    companyName: "PACIFIC ACCOUNTING",
    companyFullName: "JV «PACIFIC ACCOUNTING & CONSULTING GROUP»",
    tagline: "Accounting Management & Reconstruction Advisory",
    nav: {
      services: "Services",
      advantages: "Advantages",
      calculator: "Calculator",
      about: "About Us",
      consultation: "Request Consultation",
    },
    hero: {
      badge: "Professional Accounting & Advisory",
      titlePart1: "Accounting Management &",
      titleAccent: "Restoration Services",
      titlePart2: "with Guaranteed Statutory Precision",
      subtitle:
        "The expertise of JV «PACIFIC ACCOUNTING & CONSULTING GROUP» specialists harmoniously complements your organization. We ensure flawless regulatory compliance, eliminate penalty risks, and protect confidential balance sheet integrity.",
      ctaPrimary: "Schedule Private Consultation",
      ctaSecondary: "Explore All Services",
      stats: {
        stat1Val: "8+",
        stat1Label: "Practice Areas",
        stat1Sub: "Full accounting & audit spectrum",
        stat2Val: "100%",
        stat2Label: "Confidentiality",
        stat2Sub: "Protected commercial information",
        stat3Val: "0",
        stat3Label: "Fines & Penalties",
        stat3Sub: "Strict regulatory defensibility",
        stat4Val: "100%",
        stat4Label: "Statutory Defense",
        stat4Sub: "Complete audit defense readiness",
      },
    },
    servicesSection: {
      badge: "Service Portfolio",
      title: "Comprehensive Accounting Practices",
      subtitle:
        "From day-to-day bookkeeping to complex asset inventory audits and statutory tax declarations for foreign permanent establishments.",
      orderConsultation: "Inquire About Service",
    },
    services: [
      {
        id: "setup-and-maintenance",
        number: "01",
        title: "Accounting Setup & Maintenance",
        description:
          "Formulating transparent accounting policies from scratch and providing continuous execution of all operational balance sheet movements.",
        bullets: [
          "Custom charts of accounts and journal configuration",
          "Primary documentation processing in corporate systems",
          "Accounts receivable and payable reconciliation",
        ],
        badge: "Core Bookkeeping",
        icon: "edit_note",
      },
      {
        id: "restoration",
        number: "02",
        title: "Accounting Restoration",
        description:
          "Full forensic auditing of disrupted reporting periods, recovering lost databases, rectifying historical errors, and rebuilding filings.",
        bullets: [
          "Audit of neglected and high-risk historical periods",
          "Restoration of primary vouchers and cash ledgers",
          "Submitting revised returns to eliminate penalty exposure",
        ],
        badge: "Forensic Recovery",
        icon: "history",
      },
      {
        id: "outsourcing",
        number: "03",
        title: "Full-Cycle Accounting Outsourcing",
        description:
          "Replacing or fortifying in-house accounting departments with certified professionals while saving up to 40% on payroll overhead.",
        bullets: [
          "Complete Chief Accountant & controller responsibilities",
          "Cost optimization without software or workplace overhead",
          "Methodological guidance for your internal teams",
        ],
        badge: "Max Efficiency",
        icon: "hub",
      },
      {
        id: "inventory",
        number: "04",
        title: "Inventory Audits & Asset Reconciliation",
        description:
          "Independent physical verification and validation of enterprise assets, inventory, bank accounts, and obligations.",
        bullets: [
          "Fixed assets and materials physical inventory checks",
          "Cash desk, commercial bank, and foreign currency audits",
          "Vendor and customer trade balance verifications",
        ],
        badge: "Asset Verification",
        icon: "inventory",
      },
      {
        id: "tax-and-declarations",
        number: "05",
        title: "Tax Filings & Statutory Declarations",
        description:
          "Calculation of corporate taxes, extra-budgetary fund contributions, and international declarations for foreign permanent establishments.",
        bullets: [
          "Comprehensive tax modeling and extra-budgetary dues",
          "Returns for permanent establishments of foreign entities",
          "Statutory tax burden optimization",
        ],
        badge: "Tax Protection",
        icon: "account_balance",
      },
      {
        id: "business-plans",
        number: "06",
        title: "Business Plan Formulation",
        description:
          "Professional financial and economic justifications for commercial banks, private investors, and credit lines.",
        bullets: [
          "Key investment returns (NPV, IRR, Payback Period)",
          "Dynamic Cash Flow and capital requirement forecasting",
          "Break-even analysis and risk sensitivity modeling",
        ],
        badge: "Growth & Strategy",
        icon: "trending_up",
      },
      {
        id: "hr-and-records",
        number: "07",
        title: "HR Records & Workflow Setup",
        description:
          "Structuring human resources compliance in strict alignment with regional Labor and Civil Code statutory frameworks.",
        bullets: [
          "Employment contracts, job descriptions, and executive orders",
          "Electronic and physical personnel recordkeeping",
          "Workplace safety documentation and organizational charts",
        ],
        badge: "Labor Compliance",
        icon: "badge",
      },
      {
        id: "financial-analysis",
        number: "08",
        title: "Financial Performance Analysis",
        description:
          "Deep diagnostic evaluation of liquidity, profitability margins, and capital architecture to guide decisive leadership strategy.",
        bullets: [
          "Liquidity, solvency, and working capital assessment",
          "Uncovering hidden operational cost-reduction levers",
          "Executive dashboards for business owners and board members",
        ],
        badge: "Executive Insights",
        icon: "insights",
      },
    ],
    guarantees: {
      badge: "Guarantees & Standards",
      title: "Why Enterprises Entrust Us With Their Balance Sheet",
      quote:
        "“By partnering with us, you eliminate all apprehension regarding incomplete, delayed, or non-compliant financial reporting. We guarantee confidentiality, accuracy, and rigorous statutory defensibility.”",
      author: "JV «PACIFIC ACCOUNTING & CONSULTING GROUP»",
      authorRole: "Fiduciary Partner for Business Leaders",
      items: [
        {
          title: "Elimination of Penalty Risks",
          desc: "We eliminate risks of audit fines and penalties through unyielding adherence to tax and civil codes.",
          icon: "verified_user",
        },
        {
          title: "Commercial Confidentiality",
          desc: "Full non-disclosure protocols and encrypted record handling to safeguard enterprise intelligence.",
          icon: "lock",
        },
        {
          title: "Executive Agility",
          desc: "Instant financial transparency delivered on schedule so leadership can make decisive moves.",
          icon: "speed",
        },
        {
          title: "Staff Knowledge Transfer",
          desc: "Our senior practitioners educate and upskill your internal teams on the most cost-effective workflows.",
          icon: "school",
        },
      ],
    },
    calculator: {
      badge: "Diagnostic Tool",
      title: "Interactive Accounting Workload Estimator",
      subtitle:
        "Select your enterprise parameters to preview estimated workload requirements and operational savings.",
      feature1: "Zero-exposure filing with regulatory bodies",
      feature2: "30–50% cost reduction vs. maintaining in-house department",
      labelEmployees: "Total Workforce / Employee Count",
      labelDocs: "Estimated Monthly Invoices / Transactions",
      resultSavings: "Overhead Reduction",
      resultAudit: "Filing Precision",
      resultPeace: "Peace of Mind",
      buttonEstimate: "Discuss Tailored Service Plan",
    },
    ctaBanner: {
      badge: "Partnership Invitation",
      title: "Ready to Establish Flawless Financial Order?",
      subtitle:
        "Connect with JV «PACIFIC ACCOUNTING & CONSULTING GROUP» today for a complimentary diagnostic review of your current accounting state.",
      button: "Request Private Consultation",
      viewServices: "View All 8 Services",
    },
    modal: {
      badge: "Confidential Inquiry",
      title: "Request Accounting Services",
      subtitle: "Submit your corporate details for private review by our senior partners.",
      fieldName: "Contact Name & Title",
      fieldPhone: "Direct Phone Number",
      fieldEmail: "Corporate Email",
      fieldService: "Service of Interest",
      submitButton: "Submit Engagement Inquiry",
      submitting: "Submitting...",
      successMessage: "Thank you for reaching out. A senior PACIFIC ACCOUNTING partner will contact you within 2 hours.",
    },
    footer: {
      description:
        "JV «PACIFIC ACCOUNTING & CONSULTING GROUP» — professional accounting setup, restoration, full outsourcing, physical inventory audits, and strategic tax advisory.",
      servicesTitle: "Practices",
      legalTitle: "Governance",
      contactsTitle: "Contact & Collaboration",
      allRightsReserved: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Engagement",
    },
  },
};
