'use client';

import { motion } from 'framer-motion';
import { Book, Video, FileText, HelpCircle } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { translations } from '@/lib/translations';

const docs = [
  { icon: Book, titleEn: 'Getting Started', titleAr: 'البدء', descEn: 'Learn how to set up and configure HonoAlgo', descAr: 'تعلم كيفية إعداد وتكوين HonoAlgo' },
  { icon: Video, titleEn: 'Video Tutorials', titleAr: 'دروس فيديو', descEn: 'Watch step-by-step tutorials', descAr: 'شاهد دروس خطوة بخطوة' },
  { icon: FileText, titleEn: 'API Documentation', titleAr: 'توثيق API', descEn: 'Integrate with our API', descAr: 'التكامل مع API الخاص بنا' },
  { icon: HelpCircle, titleEn: 'FAQ', titleAr: 'الأسئلة الشائعة', descEn: 'Answers to common questions', descAr: 'إجابات على الأسئلة الشائعة' },
];

export default function Docs() {
  const { language } = useAppStore();
  const t = translations[language];

  return (
    <section id="docs" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.docs.title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">{t.docs.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {docs.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{language === 'en' ? doc.titleEn : doc.titleAr}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{language === 'en' ? doc.descEn : doc.descAr}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
