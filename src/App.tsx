import React, { useState, useEffect } from "react";
import { SignalRevealText } from "@/components/ui/signal-reveal-text";
import { translations, type Language } from "@/i18n/translations";

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("pac_lang");
    if (saved === "ru" || saved === "uz" || saved === "en") return saved;
    return "ru";
  });

  useEffect(() => {
    localStorage.setItem("pac_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  
  // Interactive Calculator State
  const [employees, setEmployees] = useState(12);
  const [monthlyDocs, setMonthlyDocs] = useState(180);
  
  // Form submission state
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  // Estimator Calculations
  // In-house average costs in USD equivalent
  const inHouseCost = Math.round(750 + employees * 45 + (monthlyDocs * 1.8));
  const pacificCost = Math.round(320 + employees * 18 + (monthlyDocs * 0.75));
  const estimatedSavings = Math.max(0, inHouseCost - pacificCost);
  const savingsPercent = Math.round((estimatedSavings / inHouseCost) * 100);

  const openServiceModal = (serviceTitle?: string) => {
    if (serviceTitle) {
      setFormData((prev) => ({ ...prev, service: serviceTitle }));
    } else {
      setFormData((prev) => ({ ...prev, service: t.services[0].title }));
    }
    handleCloseModal(true);
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSuccess(true);
      setFormData({ name: "", phone: "", service: "" });
    }, 800);
  };

  const handleCloseModal = (isOpen: boolean) => {
    setConsultationModalOpen(isOpen);
    if (!isOpen) {
      setSuccess(false);
      setFormData({ name: "", phone: "", service: "" });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf9f3] text-[#1b1c18] font-sans selection:bg-[#07241a] selection:text-[#fbf9f3]">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#fbf9f3]/95 backdrop-blur-md border-b border-[#c1c8c3]/40 transition-colors">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt={t.companyFullName} 
              className="h-11 sm:h-13 md:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]" 
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#424844]">
            <a href="#services" className="hover:text-[#07241a] transition-colors py-1">
              {t.nav.services}
            </a>
            <a href="#advantages" className="hover:text-[#07241a] transition-colors py-1">
              {t.nav.advantages}
            </a>
            <a href="#calculator" className="hover:text-[#07241a] transition-colors py-1">
              {t.nav.calculator}
            </a>
            <a href="#about" className="hover:text-[#07241a] transition-colors py-1">
              {t.nav.about}
            </a>
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#eae8e2] p-1 rounded border border-[#c1c8c3]/60 shadow-inner">
              <button
                onClick={() => setLang("ru")}
                className={`px-2 sm:px-2.5 py-1 rounded text-[11px] font-bold tracking-wider transition-all ${
                  lang === "ru"
                    ? "bg-[#07241a] text-white shadow-sm"
                    : "text-[#424844] hover:text-[#07241a]"
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLang("uz")}
                className={`px-2 sm:px-2.5 py-1 rounded text-[11px] font-bold tracking-wider transition-all ${
                  lang === "uz"
                    ? "bg-[#07241a] text-white shadow-sm"
                    : "text-[#424844] hover:text-[#07241a]"
                }`}
              >
                UZ
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2 sm:px-2.5 py-1 rounded text-[11px] font-bold tracking-wider transition-all ${
                  lang === "en"
                    ? "bg-[#07241a] text-white shadow-sm"
                    : "text-[#424844] hover:text-[#07241a]"
                }`}
              >
                EN
              </button>
            </div>

            {/* Desktop CTA Button - hidden below lg to prevent collision with hamburger menu */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => openServiceModal()}
                className="inline-flex items-center gap-2 bg-[#07241a] text-white text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded hover:bg-[#1e3a2f] transition-all shadow-md shrink-0"
              >
                <span>{t.nav.consultation}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 text-[#07241a] hover:bg-[#eae8e2] rounded transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#fbf9f3] border-b border-[#c1c8c3]/50 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#775a19] pb-1 border-b border-[#c1c8c3]/30">
              {t.companyFullName}
            </div>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold uppercase tracking-wider text-[#07241a] py-1"
            >
              {t.nav.services}
            </a>
            <a
              href="#advantages"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold uppercase tracking-wider text-[#07241a] py-1"
            >
              {t.nav.advantages}
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold uppercase tracking-wider text-[#07241a] py-1"
            >
              {t.nav.calculator}
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold uppercase tracking-wider text-[#07241a] py-1"
            >
              {t.nav.about}
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openServiceModal();
                }}
                className="w-full py-3.5 rounded bg-[#07241a] text-white text-xs font-semibold uppercase tracking-widest text-center shadow flex items-center justify-center gap-2"
              >
                <span>{t.nav.consultation}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative w-full pt-12 sm:pt-16 pb-20 md:pb-28 overflow-hidden">
          {/* Ambient Blurred Accents */}
          <div className="absolute -top-32 right-[-10%] w-[680px] h-[680px] rounded-full bg-[#fed488]/20 blur-3xl pointer-events-none -z-10"></div>
          <div className="absolute top-1/2 left-[-15%] w-[520px] h-[520px] rounded-full bg-[#aecebe]/25 blur-3xl pointer-events-none -z-10"></div>

          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 text-center">
            {/* Overline Text - clean text without dot or capsule */}
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#775a19] mb-4 sm:mb-6">
              {t.hero.badge}
            </div>

            {/* Main Title */}
            <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#07241a] tracking-tight leading-[1.12]">
                {t.hero.titlePart1}{" "}
                <SignalRevealText
                  text={t.hero.titleAccent}
                  accent="#775a19"
                  speed={900}
                  className="inline-block text-[#775a19]"
                />{" "}
                {t.hero.titlePart2}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#424844] max-w-3xl mx-auto leading-relaxed">
                {t.hero.subtitle}
              </p>

              {/* Dual CTA Buttons */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-md sm:max-w-none mx-auto">
                <button
                  onClick={() => openServiceModal()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#07241a] text-white text-xs font-semibold uppercase tracking-wider sm:tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 rounded hover:bg-[#1e3a2f] transition-all shadow-md group whitespace-nowrap"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
                <a
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent text-[#775a19] hover:text-[#07241a] text-xs font-semibold uppercase tracking-wider sm:tracking-widest px-6 sm:px-7 py-3.5 sm:py-4 rounded hover:bg-[#fed488]/15 transition-all border border-[#775a19]/50 hover:border-[#775a19] whitespace-nowrap"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Trust Metrics Ribbon */}
            <div className="mt-16 sm:mt-20 pt-10 border-t border-[#c1c8c3]/40">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                <div className="space-y-1 text-center p-3 rounded hover:bg-[#eae8e2]/40 transition-colors">
                  <span className="text-[11px] font-semibold text-[#775a19] uppercase tracking-wider block">
                    {t.hero.stats.stat1Label}
                  </span>
                  <div className="font-serif text-3xl md:text-4xl text-[#07241a] font-bold tracking-tight">
                    {t.hero.stats.stat1Val}
                  </div>
                  <p className="text-xs text-[#424844]">{t.hero.stats.stat1Sub}</p>
                </div>

                <div className="space-y-1 text-center p-3 rounded hover:bg-[#eae8e2]/40 transition-colors">
                  <span className="text-[11px] font-semibold text-[#775a19] uppercase tracking-wider block">
                    {t.hero.stats.stat2Label}
                  </span>
                  <div className="font-serif text-3xl md:text-4xl text-[#07241a] font-bold tracking-tight">
                    {t.hero.stats.stat2Val}
                  </div>
                  <p className="text-xs text-[#424844]">{t.hero.stats.stat2Sub}</p>
                </div>

                <div className="space-y-1 text-center p-3 rounded hover:bg-[#eae8e2]/40 transition-colors">
                  <span className="text-[11px] font-semibold text-[#775a19] uppercase tracking-wider block">
                    {t.hero.stats.stat3Label}
                  </span>
                  <div className="font-serif text-3xl md:text-4xl text-[#07241a] font-bold tracking-tight">
                    {t.hero.stats.stat3Val}
                  </div>
                  <p className="text-xs text-[#424844]">{t.hero.stats.stat3Sub}</p>
                </div>

                <div className="space-y-1 text-center p-3 rounded hover:bg-[#eae8e2]/40 transition-colors">
                  <span className="text-[11px] font-semibold text-[#775a19] uppercase tracking-wider block">
                    {t.hero.stats.stat4Label}
                  </span>
                  <div className="font-serif text-3xl md:text-4xl text-[#07241a] font-bold tracking-tight">
                    {t.hero.stats.stat4Val}
                  </div>
                  <p className="text-xs text-[#424844]">{t.hero.stats.stat4Sub}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8 Official Services Section */}
        <section id="services" className="w-full py-20 bg-[#f5f3ed]/80 border-t border-[#c1c8c3]/30">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#775a19] block mb-2">
                  {t.servicesSection.badge}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#07241a] tracking-tight">
                  {t.servicesSection.title}
                </h2>
              </div>
              <p className="text-sm md:text-base text-[#424844] max-w-xl">
                {t.servicesSection.subtitle}
              </p>
            </div>

            {/* 8 Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.services.map((service, index) => {
                const isFeatured = index === 0 || index === 2;
                return (
                  <div
                    key={service.id}
                    className={`rounded p-7 sm:p-8 flex flex-col justify-between group transition-all duration-200 border ${
                      isFeatured
                        ? "bg-[#07241a] text-white border-[#07241a] shadow-lg hover:bg-[#113326]"
                        : "bg-white text-[#1b1c18] border-[#c1c8c3]/40 shadow-sm hover:shadow-md hover:bg-[#faf9f5]"
                    }`}
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-bold tracking-widest uppercase ${
                            isFeatured ? "text-[#fed488]" : "text-[#775a19]"
                          }`}
                        >
                          № {service.number}
                        </span>
                        <div
                          className={`w-9 h-9 rounded flex items-center justify-center ${
                            isFeatured ? "bg-[#1e3a2f] text-[#fed488]" : "bg-[#f0eee8] text-[#07241a]"
                          }`}
                        >
                          <span className="material-symbols-outlined text-[20px]">{service.icon}</span>
                        </div>
                      </div>

                      <div>
                        <span
                          className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded mb-2 ${
                            isFeatured
                              ? "bg-[#1e3a2f] text-[#eae8e2]"
                              : "bg-[#eae8e2] text-[#424844]"
                          }`}
                        >
                          {service.badge}
                        </span>
                        <h3
                          className={`font-serif text-lg sm:text-xl mb-2.5 leading-snug font-bold ${
                            isFeatured ? "text-white" : "text-[#07241a]"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p
                          className={`text-xs leading-relaxed ${
                            isFeatured ? "text-[#aecebe]" : "text-[#424844]"
                          }`}
                        >
                          {service.description}
                        </p>
                      </div>

                      <div className="pt-2 space-y-2 border-t border-current/10">
                        {service.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2 text-xs">
                            <span
                              className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                                isFeatured ? "bg-[#fed488]" : "bg-[#775a19]"
                              }`}
                            ></span>
                            <span className={isFeatured ? "text-[#eae8e2]" : "text-[#1b1c18]"}>
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      className={`pt-6 mt-6 border-t flex items-center justify-between ${
                        isFeatured ? "border-[#1e3a2f]" : "border-[#c1c8c3]/30"
                      }`}
                    >
                      <button
                        onClick={() => openServiceModal(service.title)}
                        className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1 group-hover:underline ${
                          isFeatured ? "text-[#fed488]" : "text-[#07241a]"
                        }`}
                      >
                        <span>{t.servicesSection.orderConsultation}</span>
                        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Guarantees & Why Us Section */}
        <section id="advantages" className="w-full py-20 bg-white border-y border-[#c1c8c3]/30">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#775a19]">
                {t.guarantees.badge}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#07241a] tracking-tight">
                {t.guarantees.title}
              </h2>
              <blockquote className="font-serif text-xl sm:text-2xl text-[#07241a] italic leading-relaxed bg-[#fbf9f3] p-6 sm:p-8 rounded border border-[#c1c8c3]/40 shadow-sm">
                {t.guarantees.quote}
              </blockquote>
              <div className="pt-1">
                <p className="font-serif text-base text-[#07241a] font-bold">{t.guarantees.author}</p>
                <p className="text-xs text-[#775a19] font-semibold">{t.guarantees.authorRole}</p>
              </div>
            </div>

            {/* 4 Guarantee Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.guarantees.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#f5f3ed] p-6 sm:p-7 rounded border border-[#c1c8c3]/40 space-y-4 hover:border-[#775a19]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded bg-[#07241a] text-[#fed488] flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#07241a]">{item.title}</h4>
                  <p className="text-xs text-[#424844] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Accounting Workload & Estimator */}
        <section id="calculator" className="w-full py-20 bg-[#fbf9f3]">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
            <div className="bg-[#f0eee8] p-6 sm:p-10 md:p-12 rounded shadow-sm border border-[#c1c8c3]/40">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Description */}
                <div className="lg:col-span-5 space-y-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#775a19]">
                    {t.calculator.badge}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#07241a] tracking-tight">
                    {t.calculator.title}
                  </h3>
                  <p className="text-sm text-[#424844] leading-relaxed">
                    {t.calculator.subtitle}
                  </p>
                  <div className="space-y-3 text-xs text-[#1b1c18]">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#775a19]">verified</span>
                      <span>{t.calculator.feature1}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#775a19]">savings</span>
                      <span>{t.calculator.feature2}</span>
                    </div>
                  </div>
                </div>

                {/* Right Interactive Sliders */}
                <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded shadow-sm border border-[#c1c8c3]/40">
                  <div className="space-y-6">
                    {/* Slider 1: Employees */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#424844]">
                          {t.calculator.labelEmployees}
                        </label>
                        <span className="font-serif text-lg text-[#07241a] tabular-nums font-bold">
                          {employees}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="80"
                        value={employees}
                        onChange={(e) => setEmployees(Number(e.target.value))}
                        className="w-full accent-[#07241a] h-2 bg-[#eae8e2] rounded cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] text-[#727974] mt-1">
                        <span>1</span>
                        <span>40</span>
                        <span>80+</span>
                      </div>
                    </div>

                    {/* Slider 2: Monthly Documents */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#424844]">
                          {t.calculator.labelDocs}
                        </label>
                        <span className="font-serif text-lg text-[#07241a] tabular-nums font-bold">
                          {monthlyDocs}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="800"
                        step="10"
                        value={monthlyDocs}
                        onChange={(e) => setMonthlyDocs(Number(e.target.value))}
                        className="w-full accent-[#775a19] h-2 bg-[#eae8e2] rounded cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] text-[#727974] mt-1">
                        <span>20</span>
                        <span>400</span>
                        <span>800+</span>
                      </div>
                    </div>

                    {/* Results Box */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#c1c8c3]/40">
                      <div className="bg-[#f5f3ed] p-3.5 rounded border border-[#c1c8c3]/30">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#775a19] block">
                          {t.calculator.resultSavings}
                        </span>
                        <div className="font-serif text-xl text-[#07241a] mt-1 font-bold">
                          ~{savingsPercent}%
                        </div>
                        <span className="text-[10px] text-[#424844]">vs. штатная бухгалтерия</span>
                      </div>

                      <div className="bg-[#f5f3ed] p-3.5 rounded border border-[#c1c8c3]/30">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#775a19] block">
                          {t.calculator.resultAudit}
                        </span>
                        <div className="font-serif text-xl text-[#07241a] mt-1 font-bold">
                          100%
                        </div>
                        <span className="text-[10px] text-[#424844]">соответствие закону</span>
                      </div>

                      <div className="bg-[#07241a] text-white p-3.5 rounded shadow-inner">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#fed488] block">
                          {t.calculator.resultPeace}
                        </span>
                        <div className="font-serif text-xl text-[#fed488] mt-1 font-bold">
                          0 рисков
                        </div>
                        <span className="text-[10px] text-[#aecebe]">защита от штрафов</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => openServiceModal("Комплексный аутсорсинг")}
                        className="w-full py-3 rounded bg-[#07241a] hover:bg-[#1e3a2f] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2"
                      >
                        <span>{t.calculator.buttonEstimate}</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Invitation Banner */}
        <section id="about" className="w-full py-20 bg-[#eae8e2]/60">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
            <div className="bg-[#07241a] text-white rounded p-8 sm:p-12 md:p-16 shadow-xl relative overflow-hidden">
              <div className="max-w-3xl space-y-6 relative z-10">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#fed488]">
                  {t.ctaBanner.badge}
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                  {t.ctaBanner.title}
                </h2>
                <p className="text-sm sm:text-base text-[#aecebe] leading-relaxed max-w-2xl">
                  {t.ctaBanner.subtitle}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                  <button
                    onClick={() => openServiceModal()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#fed488] text-[#261900] text-xs font-semibold uppercase tracking-wider sm:tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 rounded hover:bg-[#e9c176] transition-all shadow-md whitespace-nowrap"
                  >
                    <span>{t.ctaBanner.button}</span>
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  </button>
                  <a
                    href="#services"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#1e3a2f] text-white text-xs font-semibold uppercase tracking-wider sm:tracking-widest px-6 sm:px-7 py-3.5 sm:py-4 rounded hover:bg-[#304c41] transition-all border border-[#86a496]/30 whitespace-nowrap"
                  >
                    <span>{t.ctaBanner.viewServices}</span>
                    <span className="material-symbols-outlined text-[18px]">format_list_bulleted</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#f0eee8] border-t border-[#c1c8c3]/40">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#c1c8c3]/40">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/logo.png" 
                  alt={t.companyFullName} 
                  className="h-12 w-auto object-contain" 
                />
              </div>
              <p className="text-xs text-[#424844] max-w-sm leading-relaxed">
                {t.footer.description}
              </p>
              <p className="text-[11px] font-semibold text-[#775a19]">
                {t.companyFullName}
              </p>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-semibold text-[#775a19] uppercase tracking-widest block">
                {t.footer.servicesTitle}
              </span>
              <ul className="space-y-2 text-xs text-[#424844]">
                {t.services.slice(0, 5).map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => openServiceModal(s.title)}
                      className="hover:text-[#07241a] transition-colors text-left"
                    >
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-4">
              <span className="text-xs font-semibold text-[#775a19] uppercase tracking-widest block">
                {t.footer.contactsTitle}
              </span>
              <p className="text-xs text-[#424844] leading-relaxed">
                {t.tagline}
              </p>
              <div className="space-y-1.5 text-xs text-[#1b1c18] font-medium pt-1">
                <p>Phone: <a href="tel:+998977181945" className="text-[#07241a] font-bold hover:underline">+998 97 718 19 45</a></p>
                <p>Telegram: <a href="https://t.me/Ozod_82" target="_blank" rel="noopener noreferrer" className="text-[#07241a] font-bold hover:underline">@Ozod_82</a></p>
              </div>
              <button
                onClick={() => openServiceModal()}
                className="text-xs font-semibold uppercase tracking-wider text-[#07241a] underline hover:text-[#775a19] transition-colors block pt-1"
              >
                {t.nav.consultation} →
              </button>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#727974] gap-4">
            <div>© {new Date().getFullYear()} {t.companyFullName}. {t.footer.allRightsReserved}</div>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-[#07241a] transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#about" className="hover:text-[#07241a] transition-colors">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      {consultationModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#07241a]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#fbf9f3] rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#c1c8c3]/40 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => handleCloseModal(false)}
              className="absolute top-5 right-5 p-2 text-[#727974] hover:text-[#07241a] rounded-full hover:bg-[#eae8e2] transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            {success ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#07241a] text-[#fed488] flex items-center justify-center mx-auto shadow-md">
                  <span className="material-symbols-outlined text-3xl">done</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-[#07241a]">{t.modal.successTitle}</h3>
                  <p className="text-xs text-[#424844] leading-relaxed max-w-sm mx-auto">
                    {t.modal.successMessage}
                  </p>
                </div>
                <button
                  onClick={() => handleCloseModal(false)}
                  className="w-full py-4 rounded bg-[#07241a] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#1e3a2f] transition-all shadow"
                >
                  {t.modal.closeButton}
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#775a19] block mb-1">
                    {t.modal.badge}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#07241a] mb-2">
                    {t.modal.title}
                  </h3>
                  <p className="text-xs text-[#424844]">
                    {t.modal.subtitle}
                  </p>
                </div>

                {formData.service && (
                  <div className="mb-4 p-3 rounded bg-[#eae8e2]/70 border border-[#c1c8c3]/40 text-xs text-[#07241a] font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-[#775a19]">bookmark</span>
                    <span>{formData.service}</span>
                  </div>
                )}

                <form onSubmit={handleConsultationSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#424844] uppercase tracking-wider mb-1.5">
                      {t.modal.fieldName}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-white border border-[#c1c8c3]/60 focus:ring-1 focus:ring-[#07241a] focus:border-[#07241a] text-xs outline-none transition-all"
                      placeholder="Иван Иванов / Компания"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#424844] uppercase tracking-wider mb-1.5">
                      {t.modal.fieldPhone}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-white border border-[#c1c8c3]/60 focus:ring-1 focus:ring-[#07241a] focus:border-[#07241a] text-xs outline-none transition-all"
                      placeholder="+998 90 123 45 67"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full py-4 mt-2 rounded bg-[#07241a] hover:bg-[#1e3a2f] text-white text-xs font-semibold uppercase tracking-widest shadow transition-all disabled:opacity-50"
                  >
                    {submitted ? t.modal.submitting : t.modal.submitButton}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
