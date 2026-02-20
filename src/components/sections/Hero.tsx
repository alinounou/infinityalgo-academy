'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCountdown } from '@/hooks/useCountdown';
import { useAppStore } from '@/lib/store';
import { translations } from '@/lib/translations';

export default function Hero() {
  const { language } = useAppStore();
  const t = translations[language];
  const countdown = useCountdown(4);

  const formatTime = (num: number) => String(num).padStart(2, '0');

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200 dark:border-green-800 mb-6">
              <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">{t.hero.guarantee}</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {language === 'en' ? 'Institutional-Grade' : 'على المستوى المؤسسي'}
              </span>
              <br />
              {language === 'en' ? 'Gold Trading Signals' : 'إشارات تداول الذهب'}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
              {t.hero.subtitle}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">98.5%</div>
                  <div className="text-xs text-slate-500">{t.hero.accuracy}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">150K+</div>
                  <div className="text-xs text-slate-500">{t.hero.signals}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">10K+</div>
                  <div className="text-xs text-slate-500">{t.hero.users}</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl shadow-blue-500/25 group" onClick={() => window.open('https://infinityalgoacademy.net/checkout/?fct_cart_hash=9b96cc6397bc86b43dce91f64ff5f74a', '_blank')}>
                {t.hero.ctaFree}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500" onClick={() => window.open('https://infinityalgoacademy.net/checkout/?fct_cart_hash=08fbcfde8f713bcad6034350ec5dd865', '_blank')}>
                {t.hero.ctaPro}
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Stripe Secure</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">SSL Encrypted</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-4">
                <Clock className="w-5 h-5" />
                <span className="font-medium">{language === 'en' ? 'Limited Offer:' : 'عرض محدود:'}</span>
                <div className="flex gap-1 font-mono font-bold">
                  <span className="bg-white/20 px-2 py-1 rounded">{formatTime(countdown.hours)}</span>:
                  <span className="bg-white/20 px-2 py-1 rounded">{formatTime(countdown.minutes)}</span>:
                  <span className="bg-white/20 px-2 py-1 rounded">{formatTime(countdown.seconds)}</span>
                </div>
              </div>
            </div>

            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden pt-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold">XAUUSD</div>
                      <div className="text-white/70 text-sm">Gold Spot</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-xl">$2,650.50</div>
                    <div className="text-green-300 text-sm">+0.85%</div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="h-48 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,150 Q50,130 100,140 T200,100 T300,120 T400,80" fill="none" stroke="#3B82F6" strokeWidth="2" />
                    <path d="M0,150 Q50,130 100,140 T200,100 T300,120 T400,80 L400,200 L0,200 Z" fill="url(#chartGradient)" />
                  </svg>
                </div>
              </div>

              <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-green-700 dark:text-green-300">BUY Signal</span>
                    </div>
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">98%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-slate-500">Entry</div>
                      <div className="font-bold text-slate-900 dark:text-white">$2,650.00</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Stop Loss</div>
                      <div className="font-bold text-red-500">$2,640.00</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Take Profit</div>
                      <div className="font-bold text-green-500">$2,680.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
