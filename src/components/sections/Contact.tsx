'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAppStore } from '@/lib/store';
import { translations } from '@/lib/translations';

export default function Contact() {
  const { language } = useAppStore();
  const t = translations[language];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.contact.title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">{language === 'en' ? 'Email' : 'البريد الإلكتروني'}</h3>
                <p className="text-slate-600 dark:text-slate-400">support@infinityalgoacademy.net</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">{language === 'en' ? 'Live Chat' : 'الدردشة المباشرة'}</h3>
                <p className="text-slate-600 dark:text-slate-400">{language === 'en' ? 'Available 24/7' : 'متاح 24/7'}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">{language === 'en' ? 'Response Time' : 'وقت الاستجابة'}</h3>
                <p className="text-slate-600 dark:text-slate-400">{language === 'en' ? 'Within 24 hours' : 'خلال 24 ساعة'}</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 space-y-4">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-900 dark:text-white font-bold">{t.contact.send}</p>
                </div>
              ) : (
                <>
                  <div>
                    <Input placeholder={t.contact.name} className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700" required />
                  </div>
                  <div>
                    <Input type="email" placeholder={t.contact.email} className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700" required />
                  </div>
                  <div>
                    <Textarea placeholder={t.contact.message} className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 min-h-[120px]" required />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white" disabled={isSubmitting}>
                    {isSubmitting ? (language === 'en' ? 'Sending...' : 'جاري الإرسال...') : t.contact.send}
                  </Button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
