"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { translations, Language } from "@/lib/translations";
import { performAnalysis, getBacktestData, getPerformanceStats, getAIResponse, AnalysisResult, Signal } from "@/lib/analysis-engine";

// Icon Components
const Icons = {
  building: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  clock: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  target: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  bell: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  shield: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  map: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  check: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  star: () => (
    <svg className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  arrow: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  menu: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  close: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  twitter: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  telegram: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  ),
  discord: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  ),
  youtube: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  trendingUp: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  trendingDown: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
    </svg>
  ),
  send: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  globe: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  email: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [orderBump, setOrderBump] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState("15m");
  const [aiMessage, setAiMessage] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const chartContainerRef = useRef<HTMLDivElement>(null);

  const t = translations[lang];
  const isRTL = lang === "ar";

  // Update analysis every 5 seconds
  useEffect(() => {
    const updateAnalysis = () => {
      setAnalysis(performAnalysis());
    };
    updateAnalysis();
    const interval = setInterval(updateAnalysis, 5000);
    return () => clearInterval(interval);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // TradingView Widget
  useEffect(() => {
    if (!chartContainerRef.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.TradingView) {
        // @ts-ignore
        new window.TradingView.widget({
          autosize: true,
          symbol: "OANDA:XAUUSD",
          interval: selectedTimeframe.replace("m", "").replace("H", "60").replace("D", "D"),
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: lang === "ar" ? "ar_AE" : "en",
          toolbar_bg: "#f1f3f5",
          enable_publishing: false,
          allow_symbol_change: false,
          container_id: "tradingview-widget",
          hide_side_toolbar: false,
          studies: ["RSI@tv-basicstudies", "MASimple@tv-basicstudies"],
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [selectedTimeframe, lang]);

  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "docs", "pricing", "checkout", "testimonials", "contact", "dashboard"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  }, []);

  const handleAiSubmit = useCallback(() => {
    if (aiMessage.trim()) {
      setAiResponse(getAIResponse(aiMessage));
      setAiMessage("");
    }
  }, [aiMessage]);

  const backtestData = getBacktestData();
  const performance = getPerformanceStats();

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("home")}>
              <img src="/logo.png" alt="InfinityAlgo" className="h-10 w-10 rounded-lg object-cover" />
              <span className="font-bold text-xl text-navy">InfinityAlgo</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["home", "docs", "pricing", "testimonials", "contact", "dashboard"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-gold ${
                    activeSection === section ? "text-gold nav-link-active" : "text-gray-600"
                  }`}
                >
                  {t.nav[section as keyof typeof t.nav]}
                </button>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Language Toggle */}
              <button
                onClick={() => setLang(lang === "en" ? "ar" : "en")}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Icons.globe />
                <span className="text-sm font-medium">{lang === "en" ? "العربية" : "English"}</span>
              </button>

              {/* CTA Button */}
              <a
                href="https://infinityalgoacademy.net/checkout/?fct_cart_hash=9b96cc6397bc86b43dce91f64ff5f74a"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block btn-gold px-5 py-2 rounded-lg font-medium text-sm"
              >
                {t.nav.getStarted}
              </a>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <Icons.close /> : <Icons.menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-slide-down">
            <div className="px-4 py-3 space-y-2">
              {["home", "docs", "pricing", "testimonials", "contact", "dashboard"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gold"
                >
                  {t.nav[section as keyof typeof t.nav]}
                </button>
              ))}
              <a
                href="https://infinityalgoacademy.net/checkout/?fct_cart_hash=9b96cc6397bc86b43dce91f64ff5f74a"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center btn-gold px-5 py-2 rounded-lg font-medium mt-4"
              >
                {t.nav.getStarted}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-20 overflow-hidden hero-gradient">
        {/* Particles Background */}
        <div className="particles-bg">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 trust-badge mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {t.hero.badge}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-6 animate-fade-in-up delay-100">
              {t.hero.title}{" "}
              <span className="text-gold-gradient">{t.hero.titleHighlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up delay-300">
              <a
                href="https://infinityalgoacademy.net/item/honoalgo-tradingview-pinescript-free-download/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2"
              >
                {t.hero.cta.primary}
                <Icons.arrow />
              </a>
              <button
                onClick={() => scrollToSection("dashboard")}
                className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors flex items-center gap-2"
              >
                {t.hero.cta.secondary}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up delay-400">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gold-gradient">{t.hero.stats.accuracy}</div>
                <div className="text-sm text-gray-500">{t.hero.stats.accuracyLabel}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gold-gradient">{t.hero.stats.traders}</div>
                <div className="text-sm text-gray-500">{t.hero.stats.tradersLabel}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gold-gradient">{t.hero.stats.signals}</div>
                <div className="text-sm text-gray-500">{t.hero.stats.signalsLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {t.features.title}{" "}
              <span className="text-gold-gradient">{t.features.titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.features.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((feature, index) => (
              <div
                key={index}
                className="premium-card p-6 rounded-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gold-subtle flex items-center justify-center text-gold mb-4">
                  {feature.icon === "building" && <Icons.building />}
                  {feature.icon === "clock" && <Icons.clock />}
                  {feature.icon === "target" && <Icons.target />}
                  {feature.icon === "bell" && <Icons.bell />}
                  {feature.icon === "shield" && <Icons.shield />}
                  {feature.icon === "map" && <Icons.map />}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="docs" className="section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {t.docs.title}{" "}
              <span className="text-gold-gradient">{t.docs.titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-600">{t.docs.subtitle}</p>
          </div>

          <div className="space-y-12">
            {/* What is HonoAlgo */}
            <div className="premium-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-navy mb-4">{t.docs.intro.title}</h3>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                {t.docs.intro.content}
              </div>
            </div>

            {/* How it works */}
            <div className="premium-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-navy mb-4">{t.docs.howItWorks.title}</h3>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                {t.docs.howItWorks.content}
              </div>
            </div>

            {/* Signal Logic */}
            <div className="premium-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-navy mb-4">{t.docs.signalLogic.title}</h3>
              <ol className="space-y-3">
                {t.docs.signalLogic.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold text-white text-sm flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-gray-600 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Why Different */}
            <div className="premium-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-navy mb-6">{t.docs.difference.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.docs.difference.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-gold">
                      <Icons.check />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accuracy */}
            <div className="premium-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-navy mb-4">{t.docs.accuracy.title}</h3>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                {t.docs.accuracy.content}
              </div>
            </div>

            {/* False Signals */}
            <div className="premium-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-navy mb-4">{t.docs.falseSignals.title}</h3>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                {t.docs.falseSignals.content}
              </div>
            </div>

            {/* Risk Management */}
            <div className="premium-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-navy mb-4">{t.docs.riskManagement.title}</h3>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                {t.docs.riskManagement.content}
              </div>
            </div>

            {/* Strategies */}
            <div className="premium-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-navy mb-6">{t.docs.strategies.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.docs.strategies.strategies.map((strategy, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">{strategy.name}</h4>
                    <p className="text-gray-600 text-sm">{strategy.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="premium-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-navy mb-6">{t.docs.faq.title}</h3>
              <div className="space-y-4">
                {t.docs.faq.items.map((item, index) => (
                  <details key={index} className="faq-item group">
                    <summary className="faq-question list-none cursor-pointer hover:text-gold">
                      <span>{item.question}</span>
                      <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="faq-answer text-gray-600">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Upgrade Offer */}
            <div className="bg-gradient-to-r from-navy to-navy-light p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">{t.docs.upgrade.title}</h3>
              <p className="text-gray-300 mb-6">{t.docs.upgrade.subtitle}</p>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold">{t.docs.upgrade.offer.title}</h4>
                  <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                    {t.docs.upgrade.offer.discount}
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-gray-400 line-through text-xl">{t.docs.upgrade.offer.original}</span>
                  <span className="text-3xl font-bold text-gold">{t.docs.upgrade.offer.sale}</span>
                </div>
                <p className="text-gray-300 mb-4">{t.docs.upgrade.offer.description}</p>
                <ul className="space-y-2 mb-6">
                  {t.docs.upgrade.offer.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Icons.check />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://infinityalgoacademy.net/checkout/?fct_cart_hash=08fbcfde8f713bcad6034350ec5dd865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
                >
                  {lang === "en" ? "Add to Order" : "أضف للطلب"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {t.pricing.title}{" "}
              <span className="text-gold-gradient">{t.pricing.titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-600">{t.pricing.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.pricing.plans.map((plan, index) => (
              <div
                key={index}
                className={`premium-card rounded-xl overflow-hidden ${
                  plan.popular ? "ring-2 ring-gold relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="bg-gold text-white text-center py-2 text-sm font-medium">
                    {lang === "en" ? "Most Popular" : "الأكثر شعبية"}
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    {plan.originalPrice && (
                      <span className="text-gray-400 line-through mr-2">{plan.originalPrice}</span>
                    )}
                    <span className="price-tag">
                      <span className="currency">$</span>
                      {plan.price.replace("$", "")}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="feature-check">
                        <Icons.check />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? "btn-gold"
                        : "border-2 border-navy text-navy hover:bg-navy hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checkout Section */}
      <section id="checkout" className="section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {t.checkout.title}{" "}
              <span className="text-gold-gradient">{t.checkout.titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-600">{t.checkout.subtitle}</p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl mb-8 text-center">
            <h3 className="text-lg font-semibold text-red-600 mb-3">{t.checkout.timer.title}</h3>
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="urgency-timer bg-white px-4 py-2 rounded-lg shadow-sm">
                  {String(countdown.hours).padStart(2, "0")}
                </div>
                <span className="text-xs text-gray-500 mt-1 block">{t.checkout.timer.hours}</span>
              </div>
              <span className="text-2xl text-red-500">:</span>
              <div className="text-center">
                <div className="urgency-timer bg-white px-4 py-2 rounded-lg shadow-sm">
                  {String(countdown.minutes).padStart(2, "0")}
                </div>
                <span className="text-xs text-gray-500 mt-1 block">{t.checkout.timer.minutes}</span>
              </div>
              <span className="text-2xl text-red-500">:</span>
              <div className="text-center">
                <div className="urgency-timer bg-white px-4 py-2 rounded-lg shadow-sm">
                  {String(countdown.seconds).padStart(2, "0")}
                </div>
                <span className="text-xs text-gray-500 mt-1 block">{t.checkout.timer.seconds}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Features */}
            <div>
              <div className="premium-card p-6 rounded-xl mb-6">
                <h3 className="text-lg font-bold text-navy mb-4">{t.checkout.features.title}</h3>
                <ul className="space-y-3">
                  {t.checkout.features.items.map((item, index) => (
                    <li key={index} className="feature-check">
                      <Icons.check />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guarantee */}
              <div className="bg-green-50 p-6 rounded-xl flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Icons.shield />
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-1">{t.checkout.guarantee.title}</h4>
                  <p className="text-green-700 text-sm">{t.checkout.guarantee.description}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div>
              {/* Order Bump */}
              <div
                className={`order-bump-toggle mb-6 ${orderBump ? "active" : ""}`}
                onClick={() => setOrderBump(!orderBump)}
              >
                <div className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    checked={orderBump}
                    onChange={() => setOrderBump(!orderBump)}
                    className="mt-1 w-5 h-5 text-gold rounded border-gray-300 focus:ring-gold"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-navy">{t.checkout.orderBump.subtitle}</span>
                      <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {t.checkout.orderBump.discount}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gray-400 line-through">{t.checkout.orderBump.original}</span>
                      <span className="text-xl font-bold text-green-600">{t.checkout.orderBump.sale}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{t.checkout.orderBump.description}</p>
                  </div>
                </div>
              </div>

              {/* Testimonial Proof */}
              <div className="premium-card p-6 rounded-xl mb-6">
                <p className="text-gray-600 italic mb-4">"{t.checkout.testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-navy">{t.checkout.testimonial.author}</span>
                    <span className="text-gray-500 text-sm block">{t.checkout.testimonial.role}</span>
                  </div>
                  <span className="text-green-600 font-bold">{t.checkout.testimonial.result}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="text-center mb-6">
                <p className="text-gray-500 text-sm mb-2">{t.checkout.payment.description}</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="bg-gray-100 px-4 py-2 rounded-lg font-semibold text-gray-700">Stripe</div>
                  <div className="bg-gray-100 px-4 py-2 rounded-lg font-semibold text-gray-700">PayPal</div>
                </div>
              </div>

              {/* CTA */}
              <a
                href={
                  orderBump
                    ? "https://infinityalgoacademy.net/checkout/?fct_cart_hash=08fbcfde8f713bcad6034350ec5dd865"
                    : "https://infinityalgoacademy.net/checkout/?fct_cart_hash=9b96cc6397bc86b43dce91f64ff5f74a"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 animate-pulse-gold"
              >
                {t.checkout.cta}
                <Icons.arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {t.testimonials.title}{" "}
              <span className="text-gold-gradient">{t.testimonials.titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-600">{t.testimonials.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <span className="font-semibold text-navy block">{testimonial.name}</span>
                    <span className="text-gray-500 text-sm">{testimonial.role}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icons.star key={i} />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                
                <div className="pt-3 border-t border-gray-100">
                  <span className="text-green-600 font-semibold">{testimonial.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {t.contact.title}{" "}
              <span className="text-gold-gradient">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-600">{t.contact.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="premium-card p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.subject}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold w-full py-3 rounded-lg font-semibold">
                  {t.contact.form.submit}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="premium-card p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-subtle flex items-center justify-center text-gold">
                    <Icons.email />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">{lang === "en" ? "Email" : "البريد الإلكتروني"}</h4>
                    <a href="mailto:support@infinityalgoacademy.net" className="text-gold hover:underline">
                      {t.contact.info.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="premium-card p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-subtle flex items-center justify-center text-gold">
                    <Icons.clock />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">{lang === "en" ? "Support Hours" : "ساعات الدعم"}</h4>
                    <p className="text-gray-600">{t.contact.info.hours}</p>
                    <p className="text-gray-500 text-sm">{t.contact.info.response}</p>
                  </div>
                </div>
              </div>

              <div className="premium-card p-6 rounded-xl">
                <h4 className="font-semibold text-navy mb-4">{t.contact.social.title}</h4>
                <div className="flex items-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gold hover:text-white transition-colors">
                    <Icons.twitter />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gold hover:text-white transition-colors">
                    <Icons.telegram />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gold hover:text-white transition-colors">
                    <Icons.discord />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gold hover:text-white transition-colors">
                    <Icons.youtube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="section bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t.dashboard.title}{" "}
              <span className="text-gold-gradient">{t.dashboard.titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-400">{t.dashboard.subtitle}</p>
          </div>

          {/* Timeframe Selector */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-sm text-gray-400 mr-2">{t.dashboard.timeframes.title}:</span>
            {(lang === "en" ? ["1m", "5m", "15m", "1H", "4H", "Daily"] : ["1م", "5م", "15م", "1س", "4س", "يومي"]).map((tf) => (
              <button
                key={tf}
                onClick={() => setSelectedTimeframe(tf)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedTimeframe === tf
                    ? "bg-gold text-navy"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Chart Area */}
            <div className="xl:col-span-2">
              <div className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                  <h3 className="font-semibold">{t.dashboard.chart.title}</h3>
                  <span className="text-sm text-gray-400">
                    {t.dashboard.lastUpdate}: {new Date().toLocaleTimeString()}
                  </span>
                </div>
                <div
                  ref={chartContainerRef}
                  id="tradingview-widget"
                  className="w-full h-[500px]"
                />
              </div>

              {/* Backtest Results */}
              <div className="mt-6 bg-gray-800 rounded-xl p-6">
                <h3 className="font-semibold mb-4">{t.dashboard.backtest.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-gray-400 border-b border-gray-700">
                        {t.dashboard.backtest.headers.map((header, i) => (
                          <th key={i} className="text-left py-2 px-3">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {backtestData.map((trade, i) => (
                        <tr key={i} className="border-b border-gray-700/50">
                          <td className="py-2 px-3 text-gray-300">{trade.time}</td>
                          <td className="py-2 px-3">
                            <span className={`inline-flex items-center gap-1 ${trade.direction === "buy" ? "text-green-400" : "text-red-400"}`}>
                              {trade.direction === "buy" ? <Icons.trendingUp /> : <Icons.trendingDown />}
                              {trade.direction.toUpperCase()}
                            </span>
                          </td>
                          <td className="py-2 px-3 text-gray-300">${trade.entry}</td>
                          <td className="py-2 px-3">
                            <span className={`px-2 py-0.5 rounded text-xs ${trade.result === "win" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                              {trade.result.toUpperCase()}
                            </span>
                          </td>
                          <td className={`py-2 px-3 font-medium ${trade.pnl.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                            {trade.pnl}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-400">{performance.wins}</div>
                    <div className="text-xs text-gray-400">{t.dashboard.backtest.wins}</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-red-400">{performance.losses}</div>
                    <div className="text-xs text-gray-400">{t.dashboard.backtest.losses}</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-gold">{performance.winRate}%</div>
                    <div className="text-xs text-gray-400">{t.dashboard.backtest.winRate}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Signal Card */}
              <div className={`rounded-xl overflow-hidden ${
                analysis?.signal
                  ? analysis.signal.direction === "buy"
                    ? "signal-card-buy bg-gray-800"
                    : "signal-card-sell bg-gray-800"
                  : "bg-gray-800"
              }`}>
                <div className="p-4 border-b border-gray-700">
                  <h3 className="font-semibold">{t.dashboard.signal.title}</h3>
                </div>
                <div className="p-4">
                  {analysis?.signal ? (
                    <div className="space-y-4">
                      {/* Direction */}
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">{t.dashboard.signal.direction}</span>
                        <span className={`flex items-center gap-2 text-xl font-bold ${
                          analysis.signal.direction === "buy" ? "text-green-400" : "text-red-400"
                        }`}>
                          {analysis.signal.direction === "buy" ? <Icons.trendingUp /> : <Icons.trendingDown />}
                          {analysis.signal.direction === "buy" ? t.dashboard.signal.buy : t.dashboard.signal.sell}
                        </span>
                      </div>

                      {/* Entry */}
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">{t.dashboard.signal.entry}</span>
                        <span className="font-mono font-semibold">${analysis.signal.entry}</span>
                      </div>

                      {/* Stop Loss */}
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">{t.dashboard.signal.stopLoss}</span>
                        <span className="font-mono text-red-400">${analysis.signal.stopLoss}</span>
                      </div>

                      {/* Take Profits */}
                      <div className="space-y-2">
                        <span className="text-gray-400">{t.dashboard.signal.takeProfit}</span>
                        {analysis.signal.takeProfits.map((tp, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <span className="text-green-400 text-sm">TP{i + 1}</span>
                            <span className="font-mono text-green-400">${tp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Confidence Gauge */}
                      <div className="mt-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-400">{t.dashboard.signal.confidence}</span>
                          <span className="font-bold text-gold">{analysis.signal.confidence}%</span>
                        </div>
                        <div className="confidence-bar">
                          <div
                            className="confidence-fill"
                            style={{ width: `${analysis.signal.confidence}%` }}
                          />
                        </div>
                      </div>

                      {/* Risk */}
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">{t.dashboard.signal.risk}</span>
                        <span className="font-semibold">{analysis.signal.risk}%</span>
                      </div>

                      {/* Position Size */}
                      {analysis.signal.positionSize && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">{t.dashboard.signal.position}</span>
                          <span className="font-semibold">{analysis.signal.positionSize} lots</span>
                        </div>
                      )}

                      {/* Reasons */}
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <span className="text-gray-400 text-sm">{t.dashboard.signal.reason}</span>
                        <ul className="mt-2 space-y-1">
                          {analysis.signal.reasons.map((reason, i) => (
                            <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                              <span className="text-gold">•</span>
                              {reason}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="animate-pulse text-gold text-4xl mb-4">⏳</div>
                      <p className="text-gray-400">{t.dashboard.signal.noSignal}</p>
                      <p className="text-gray-500 text-sm mt-2">{t.dashboard.signal.analyzing}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Market Analysis */}
              <div className="bg-gray-800 rounded-xl p-4">
                <h3 className="font-semibold mb-4">{t.dashboard.analysis.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">{t.dashboard.analysis.structure}</span>
                    <span className={`font-medium ${
                      analysis?.condition.structure === "bullish" ? "text-green-400" :
                      analysis?.condition.structure === "bearish" ? "text-red-400" : "text-gray-400"
                    }`}>
                      {analysis && t.dashboard.analysis.conditions[analysis.condition.structure]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">{t.dashboard.analysis.trend}</span>
                    <span className={`font-medium ${
                      analysis?.condition.trendStrength === "strong" ? "text-green-400" :
                      analysis?.condition.trendStrength === "moderate" ? "text-yellow-400" : "text-gray-400"
                    }`}>
                      {analysis && t.dashboard.analysis.conditions[analysis.condition.trendStrength]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">{t.dashboard.analysis.volatility}</span>
                    <span className={`font-medium ${
                      analysis?.condition.volatility === "high" ? "text-red-400" :
                      analysis?.condition.volatility === "low" ? "text-green-400" : "text-yellow-400"
                    }`}>
                      {analysis && t.dashboard.analysis.conditions[analysis.condition.volatility]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">{t.dashboard.analysis.divergence}</span>
                    <span className={`font-medium ${
                      analysis?.condition.divergence === "detected" ? "text-gold" : "text-gray-400"
                    }`}>
                      {analysis && t.dashboard.analysis.conditions[analysis.condition.divergence]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">{t.dashboard.analysis.marketType.title}</span>
                    <span className="font-medium text-gold">
                      {analysis && t.dashboard.analysis.conditions.marketType[analysis.condition.marketType as keyof typeof t.dashboard.analysis.conditions.marketType]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Smart Alerts */}
              <div className="bg-gray-800 rounded-xl p-4">
                <h3 className="font-semibold mb-4">{t.dashboard.alerts.title}</h3>
                <div className="space-y-2">
                  {t.dashboard.alerts.items.map((alert, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className={`w-2 h-2 rounded-full ${
                        alert.type === "bos" ? "bg-green-400" :
                        alert.type === "divergence" ? "bg-yellow-400" :
                        alert.type === "liquidity" ? "bg-blue-400" : "bg-purple-400"
                      } animate-pulse`} />
                      <span className="text-gray-300">{alert.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risk Calculator */}
              <div className="bg-gray-800 rounded-xl p-4">
                <h3 className="font-semibold mb-4">{t.dashboard.calculator.title}</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-gray-400 text-sm">{t.dashboard.calculator.account}</label>
                    <input
                      type="number"
                      defaultValue="10000"
                      className="w-full mt-1 px-3 py-2 bg-gray-700 rounded-lg text-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">{t.dashboard.calculator.riskPercent}</label>
                    <input
                      type="number"
                      defaultValue="1"
                      className="w-full mt-1 px-3 py-2 bg-gray-700 rounded-lg text-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">{t.dashboard.calculator.stopLoss}</label>
                    <input
                      type="number"
                      defaultValue="10"
                      className="w-full mt-1 px-3 py-2 bg-gray-700 rounded-lg text-white text-sm"
                    />
                  </div>
                  <button className="btn-gold w-full py-2 rounded-lg text-sm font-medium">
                    {t.dashboard.calculator.calculate}
                  </button>
                </div>
              </div>

              {/* AI Assistant */}
              <div className="bg-gray-800 rounded-xl p-4">
                <h3 className="font-semibold mb-4">{t.dashboard.assistant.title}</h3>
                <div className="space-y-3">
                  {aiResponse && (
                    <div className="bg-gray-700 rounded-lg p-3 text-sm text-gray-300">
                      {aiResponse}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={aiMessage}
                      onChange={(e) => setAiMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleAiSubmit()}
                      placeholder={t.dashboard.assistant.placeholder}
                      className="flex-1 px-3 py-2 bg-gray-700 rounded-lg text-white text-sm placeholder-gray-500"
                    />
                    <button
                      onClick={handleAiSubmit}
                      className="bg-gold text-navy px-3 py-2 rounded-lg"
                    >
                      <Icons.send />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t.dashboard.assistant.suggestions.map((suggestion, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setAiMessage(suggestion);
                          setAiResponse(getAIResponse(suggestion));
                        }}
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded hover:bg-gray-600 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="InfinityAlgo" className="h-10 w-10 rounded-lg" />
                <span className="font-bold text-xl">InfinityAlgo Academy</span>
              </div>
              <p className="text-gray-400 mb-6">{t.footer.description}</p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-white transition-colors">
                  <Icons.twitter />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-white transition-colors">
                  <Icons.telegram />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-white transition-colors">
                  <Icons.discord />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-white transition-colors">
                  <Icons.youtube />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-4">{t.footer.navigation}</h4>
              <ul className="space-y-2">
                {["home", "docs", "pricing", "testimonials", "contact", "dashboard"].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className="text-gray-400 hover:text-gold transition-colors"
                    >
                      {t.nav[section as keyof typeof t.nav]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                    {t.footer.privacy}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                    {t.footer.terms}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                    {t.footer.refund}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm text-center mb-2">{t.footer.copyright}</p>
            <p className="text-gray-500 text-xs text-center">{t.footer.disclaimer}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
