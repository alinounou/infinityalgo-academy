'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity, Zap, MessageCircle, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useAppStore } from '@/lib/store';
import { translations } from '@/lib/translations';

const timeframes = ['1', '5', '15', '60', '240', 'D'];

export default function Dashboard() {
  const { language, activeTimeframe, setActiveTimeframe, goldPrice, priceChange } = useAppStore();
  const t = translations[language];
  
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    const userMessage = chatInput.trim();
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsChatLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      if (data.success) {
        setChatMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
      }
    } catch {
      setChatMessages(prev => [...prev, { role: 'assistant', content: language === 'en' ? 'Sorry, I encountered an error.' : 'عذراً، واجهت خطأ.' }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  return (
    <section id="dashboard" className="py-20 bg-slate-900 dark:bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white animate-pulse">
            <Zap className="w-3 h-3 mr-1" /> LIVE
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.dashboard.title}</h2>
          <p className="text-lg text-slate-400">{t.dashboard.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chart Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-4 border border-slate-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">Au</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">XAUUSD</div>
                    <div className="text-slate-400 text-xs">Gold Spot</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold text-2xl">${goldPrice.toFixed(2)}</div>
                  <div className={`text-sm flex items-center justify-end gap-1 ${priceChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {priceChange >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {timeframes.map((tf) => (
                <Button key={tf} variant={activeTimeframe === tf ? 'default' : 'outline'} size="sm" onClick={() => setActiveTimeframe(tf)} className={activeTimeframe === tf ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' : 'bg-slate-800/50 text-slate-300 border-slate-700'}>
                  {tf === '1' ? '1m' : tf === '5' ? '5m' : tf === '15' ? '15m' : tf === '60' ? '1H' : tf === '240' ? '4H' : tf}
                </Button>
              ))}
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden">
              <div className="h-[400px] flex items-center justify-center text-slate-500">
                <iframe
                  src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_widget&symbol=OANDA:XAUUSD&interval=15&theme=dark&style=1&locale=en"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Signal Panel */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden">
              <div className="p-4 border-b border-slate-700/50">
                <h3 className="text-white font-bold flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  {t.dashboard.signal}
                </h3>
              </div>
              <div className="p-4">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xl font-bold text-green-400">BUY</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold">98%</div>
                      <div className="text-xs text-slate-400">{t.dashboard.confidence}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400">{t.dashboard.entry}</div>
                      <div className="text-white font-bold">$2,650.00</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400">{t.dashboard.stopLoss}</div>
                      <div className="text-red-400 font-bold">$2,640.00</div>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3 mt-3">
                    <div className="text-xs text-slate-400 mb-1">{t.dashboard.takeProfit}</div>
                    <div className="flex justify-between text-sm">
                      <span className="text-green-400">TP1: $2,660</span>
                      <span className="text-green-400">TP2: $2,670</span>
                      <span className="text-green-400">TP3: $2,680</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Chat */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden">
              <div className="p-4 border-b border-slate-700/50">
                <h3 className="text-white font-bold flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-purple-400" />
                  {t.dashboard.chat.title}
                </h3>
              </div>
              <div className="h-[150px] overflow-y-auto p-4 space-y-3">
                {chatMessages.length === 0 ? (
                  <div className="text-center py-8">
                    <MessageCircle className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                    <p className="text-xs text-slate-500">{t.dashboard.chat.placeholder}</p>
                  </div>
                ) : (
                  chatMessages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-lg p-2 text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200'}`}>
                        {msg.content}
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="p-4 border-t border-slate-700/50">
                <div className="flex gap-2">
                  <Input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder={t.dashboard.chat.placeholder} className="bg-slate-900/50 border-slate-700 text-white" onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} />
                  <Button size="icon" onClick={handleSendMessage} disabled={isChatLoading} className="bg-gradient-to-r from-purple-600 to-indigo-600">
                    {isChatLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
