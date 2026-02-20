'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/lib/store';
import { translations } from '@/lib/translations';

export default function Pricing() {
  const { language } = useAppStore();
  const t = translations[language];
  const plans = [t.pricing.free, t.pricing.pro, t.pricing.enterprise];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.pricing.title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">{t.pricing.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border-2 ${plan.popular ? 'border-blue-500 scale-105' : 'border-slate-200 dark:border-slate-700'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                    {language === 'en' ? 'Most Popular' : 'الأكثر شعبية'}
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                  <span className="text-slate-500">{plan.period}</span>
                </div>
                <p className="text-slate-500 mt-2">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <Check className="w-5 h-5 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white' : ''}`} variant={plan.popular ? 'default' : 'outline'} onClick={() => window.open(index === 1 ? 'https://infinityalgoacademy.net/checkout/?fct_cart_hash=08fbcfde8f713bcad6034350ec5dd865' : 'https://infinityalgoacademy.net/checkout/?fct_cart_hash=9b96cc6397bc86b43dce91f64ff5f74a', '_blank')}>
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
