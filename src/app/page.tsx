'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Dashboard from '@/components/sections/Dashboard';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import Docs from '@/components/sections/Docs';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Features />
        <Dashboard />
        <Pricing />
        <Testimonials />
        <Docs />
        <Contact />
        <Footer />
      </motion.div>

      {/* Floating CTA */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href="https://infinityalgoacademy.net/checkout/?fct_cart_hash=9b96cc6397bc86b43dce91f64ff5f74a"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-2xl shadow-blue-500/30 transition-all hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="font-medium">Get Free HonoAlgo</span>
        </a>
      </motion.div>
    </main>
  );
}
