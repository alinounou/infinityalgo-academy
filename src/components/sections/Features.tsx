'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, Layers, Shield, Bell, BarChart3 } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { translations } from '@/lib/translations';

const features = [
  { icon: TrendingUp, titleEn: 'AI-Powered Signals', titleAr: 'إشارات مدعومة بالذكاء الاصطناعي', descEn: 'Advanced AI analyzes RSI divergence, market structure, and liquidity zones for high-probability signals.', descAr: 'يقوم الذكاء الاصطناعي بتحليل تباعد RSI وهيكل السوق ومناطق السيولة لإشارات عالية الاحتمال.' },
  { icon: Clock, titleEn: 'Multi-Timeframe Analysis', titleAr: 'تحليل متعدد الأطر الزمنية', descEn: 'Analyze gold across multiple timeframes simultaneously for maximum confluence.', descAr: 'تحليل الذهب عبر أطر زمنية متعددة في وقت واحد.' },
  { icon: Layers, titleEn: 'Institutional Zones', titleAr: 'مناطق مؤسسية', descEn: 'Automatically detect supply/demand zones and liquidity pools.', descAr: 'اكتشاف مناطق العرض والطلب وتجمعات السيولة تلقائياً.' },
  { icon: Shield, titleEn: 'Risk Management', titleAr: 'إدارة المخاطر', descEn: 'Built-in position size calculator with minimum 1:3 risk-reward ratio.', descAr: 'حاسبة حجم المركز المدمجة مع نسبة مخاطر/عائد 1:3.' },
  { icon: Bell, titleEn: 'Smart Alerts', titleAr: 'تنبيهات ذكية', descEn: 'Instant notifications via browser push, Telegram, or email.', descAr: 'إشعارات فورية عبر دفع المتصفح أو Telegram أو البريد الإلكتروني.' },
  { icon: BarChart3, titleEn: 'Backtest Preview', titleAr: 'معاينة الاختبار الخلفي', descEn: 'View historical performance with win rate analysis.', descAr: 'عرض الأداء التاريخي مع تحليل معدل الفوز.' },
];

export default function Features() {
  const { language } = useAppStore();
  const t = translations[language];

  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.features.title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">{t.features.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{language === 'en' ? feature.titleEn : feature.titleAr}</h3>
                <p className="text-slate-600 dark:text-slate-400">{language === 'en' ? feature.descEn : feature.descAr}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
