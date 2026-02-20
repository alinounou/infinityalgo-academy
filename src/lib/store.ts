import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface Signal {
  id: string;
  direction: 'BUY' | 'SELL';
  entry: number;
  stopLoss: number;
  takeProfit1: number;
  takeProfit2: number;
  takeProfit3: number;
  confidence: number;
  rr: number;
  timestamp: Date;
  explanation: string;
  confluence: string[];
  timeframe: string;
  active: boolean;
}

export interface AnalysisMetrics {
  rsiDivergence: 'bullish' | 'bearish' | 'none';
  marketStructure: 'BOS' | 'CHoCH' | 'none';
  supplyDemandZone: 'supply' | 'demand' | 'neutral';
  liquiditySweep: boolean;
  trendStrength: number;
  volatility: number;
  confluenceScore: number;
  marketState: 'trending' | 'ranging' | 'accumulation';
}

export interface AppState {
  theme: 'light' | 'dark';
  language: 'en' | 'ar';
  activeTimeframe: string;
  goldPrice: number;
  priceChange: number;
  metrics: AnalysisMetrics;
  currentSignal: Signal | null;
  balance: number;
  riskPercent: number;
  
  toggleTheme: () => void;
  toggleLanguage: () => void;
  setActiveTimeframe: (tf: string) => void;
  setGoldPrice: (price: number, change: number) => void;
  setMetrics: (metrics: AnalysisMetrics) => void;
  setCurrentSignal: (signal: Signal | null) => void;
  setBalance: (balance: number) => void;
  setRiskPercent: (risk: number) => void;
}

const defaultMetrics: AnalysisMetrics = {
  rsiDivergence: 'none',
  marketStructure: 'none',
  supplyDemandZone: 'neutral',
  liquiditySweep: false,
  trendStrength: 50,
  volatility: 0.5,
  confluenceScore: 0,
  marketState: 'ranging',
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'light',
      language: 'en',
      activeTimeframe: '15',
      goldPrice: 2650.50,
      priceChange: 0.15,
      metrics: defaultMetrics,
      currentSignal: null,
      balance: 10000,
      riskPercent: 1,
      
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'ar' : 'en' })),
      setActiveTimeframe: (tf) => set({ activeTimeframe: tf }),
      setGoldPrice: (price, change) => set({ goldPrice: price, priceChange: change }),
      setMetrics: (metrics) => set({ metrics }),
      setCurrentSignal: (signal) => set({ currentSignal: signal }),
      setBalance: (balance) => set({ balance }),
      setRiskPercent: (risk) => set({ riskPercent: risk }),
    }),
    {
      name: 'infinityalgo-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
      }),
    }
  )
);
