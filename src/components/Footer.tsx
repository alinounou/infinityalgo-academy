'use client';

import { useAppStore } from '@/lib/store';
import { translations } from '@/lib/translations';

export default function Footer() {
  const { language } = useAppStore();
  const t = translations[language];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                  <path d="M50 50 C50 30, 30 20, 20 35 C10 50, 30 70, 50 50 C70 30, 90 50, 80 65 C70 80, 50 70, 50 50" fill="none" stroke="url(#footerGradient)" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">InfinityAlgo</span>
            </div>
            <p className="text-slate-400 max-w-md">{t.footer.description}</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">{language === 'en' ? 'Quick Links' : 'روابط سريعة'}</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-slate-400 hover:text-white transition-colors">{t.nav.features}</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-white transition-colors">{t.nav.pricing}</a></li>
              <li><a href="#dashboard" className="text-slate-400 hover:text-white transition-colors">{t.nav.dashboard}</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">{language === 'en' ? 'Legal' : 'قانوني'}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">{language === 'en' ? 'Terms of Service' : 'شروط الخدمة'}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">{language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">{language === 'en' ? 'Refund Policy' : 'سياسة الاسترداد'}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
