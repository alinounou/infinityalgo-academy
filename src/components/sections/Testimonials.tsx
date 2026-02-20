'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { translations } from '@/lib/translations';

const testimonials = [
  { name: 'Ahmed K.', country: 'UAE', textEn: 'The signals are incredibly accurate. Made 30% profit in my first month!', textAr: 'الإشارات دقيقة بشكل لا يصدق. حققت 30% ربح في الشهر الأول!' },
  { name: 'Sarah M.', country: 'Saudi Arabia', textEn: 'Best trading tool I have ever used. The AI assistant is amazing.', textAr: 'أفضل أداة تداول استخدمتها. مساعد الذكاء الاصطناعي مذهل.' },
  { name: 'John D.', country: 'USA', textEn: 'The risk management features saved me from major losses.', textAr: 'ميزات إدارة المخاطر أنقذتني من خسائر كبيرة.' },
];

export default function Testimonials() {
  const { language } = useAppStore();
  const t = translations[language];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.testimonials.title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{language === 'en' ? testimonial.textEn : testimonial.textAr}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.country}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
