export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      docs: "Documentation",
      pricing: "Pricing",
      checkout: "Checkout",
      testimonials: "Testimonials",
      contact: "Contact",
      dashboard: "Dashboard",
      getStarted: "Get Started",
    },
    
    // Hero Section
    hero: {
      badge: "Institutional-Grade Trading Intelligence",
      title: "Trade Gold Like",
      titleHighlight: "Institutions Do",
      subtitle: "AI-powered analysis with institutional-grade signals. Get the same tools professional traders use to dominate the gold market.",
      cta: {
        primary: "Get Free Indicator",
        secondary: "View Live Dashboard",
      },
      stats: {
        accuracy: "94.7%",
        accuracyLabel: "Signal Accuracy",
        traders: "12,847+",
        tradersLabel: "Active Traders",
        signals: "2,156",
        signalsLabel: "Signals This Month",
      },
    },
    
    // Features
    features: {
      title: "Why Traders Choose",
      titleHighlight: "InfinityAlgo",
      subtitle: "Built by traders, for traders. Every feature is designed to give you an institutional edge.",
      items: [
        {
          title: "Smart Money Concepts",
          description: "Detect institutional footprints including liquidity sweeps, order blocks, and fair value gaps.",
          icon: "building",
        },
        {
          title: "Multi-Timeframe Analysis",
          description: "Analyze 1m to Daily timeframes simultaneously for complete market context.",
          icon: "clock",
        },
        {
          title: "Confluence Engine",
          description: "Signals only trigger when 3+ confirmations align, filtering out low-quality setups.",
          icon: "target",
        },
        {
          title: "Real-Time Alerts",
          description: "Never miss a setup with instant push notifications to your device.",
          icon: "bell",
        },
        {
          title: "Risk Management",
          description: "Built-in position sizing and risk calculator for every signal.",
          icon: "shield",
        },
        {
          title: "Institutional Zones",
          description: "See exactly where banks and institutions are likely to enter the market.",
          icon: "map",
        },
      ],
    },
    
    // Docs Section
    docs: {
      title: "Complete",
      titleHighlight: "Documentation",
      subtitle: "Everything you need to master the HonoAlgo indicator and trade like an institution.",
      
      intro: {
        title: "What is HonoAlgo?",
        content: `HonoAlgo is an institutional-grade trading indicator designed specifically for gold (XAUUSD) trading. Unlike retail indicators that rely on lagging signals, HonoAlgo incorporates Smart Money Concepts (SMC), institutional order flow analysis, and advanced pattern recognition to identify high-probability trading opportunities.

The indicator was developed by a team of former institutional traders who spent years analyzing how banks and large financial institutions move the gold market. By reverse-engineering institutional trading patterns, HonoAlgo gives retail traders access to the same analytical tools used by professional trading desks.

The core philosophy behind HonoAlgo is simple: trade where institutions trade. Instead of chasing price action or reacting to market noise, HonoAlgo identifies the footprints left by institutional money and positions you to trade alongside the smart money, not against it.`,
      },
      
      howItWorks: {
        title: "How HonoAlgo Works",
        content: `The indicator operates through a sophisticated multi-layer analysis system that processes market data in real-time:

**Layer 1: Market Structure Analysis**
HonoAlgo continuously monitors price action to identify market structure shifts. This includes detecting Higher Highs (HH), Higher Lows (HL), Lower Highs (LH), and Lower Lows (LL). The indicator identifies Break of Structure (BOS) and Change of Character (ChoCH) points where the trend direction potentially changes.

**Layer 2: Institutional Zone Detection**
Using proprietary algorithms, HonoAlgo identifies key institutional zones including Order Blocks (OB), Fair Value Gaps (FVG), and Liquidity Pools. These are the areas where banks and institutions typically place their orders.

**Layer 3: Momentum & Divergence**
The indicator analyzes RSI and momentum indicators to detect regular and hidden divergences. These divergences often precede major price reversals and are a key component of the confluence system.

**Layer 4: Confluence Verification**
The final layer requires a minimum of 3 confirmations before generating a signal. This dramatically reduces false signals and ensures you only see the highest probability setups.`,
      },
      
      signalLogic: {
        title: "Signal Logic Step by Step",
        steps: [
          "Market Structure Scan: HonoAlgo identifies the current market structure across multiple timeframes",
          "Zone Identification: The indicator marks key support/resistance and institutional zones",
          "Momentum Analysis: RSI divergence and momentum shifts are detected",
          "Liquidity Check: The system identifies liquidity pools above/below current price",
          "Confluence Calculation: All factors are weighted and combined",
          "Signal Generation: Only when 3+ factors align, a signal is generated",
          "Risk Calculation: Stop loss and take profit levels are calculated based on structure",
          "Alert Delivery: Instant notification with all trade details",
        ],
      },
      
      difference: {
        title: "Why HonoAlgo is Different",
        items: [
          {
            title: "No Repainting",
            description: "Signals are generated only when confirmed and never repaint. What you see is what you get.",
          },
          {
            title: "Institutional Focus",
            description: "Built around how institutions actually trade, not retail indicators that lag behind price.",
          },
          {
            title: "Confluence-Based",
            description: "Multiple confirmations required before any signal, filtering out noise and false signals.",
          },
          {
            title: "Gold-Specific",
            description: "Optimized specifically for XAUUSD, accounting for gold's unique volatility and behavior.",
          },
          {
            title: "Real-Time",
            description: "Analysis happens in real-time, not on historical data like many backtested indicators.",
          },
          {
            title: "Professional Support",
            description: "Access to professional traders for guidance and strategy development.",
          },
        ],
      },
      
      accuracy: {
        title: "Understanding Accuracy",
        content: `Our documented accuracy rate of 94.7% is based on signals that meet our strict confluence requirements. This means:

• Only high-quality setups with 3+ confirmations are counted
• Risk-to-reward ratios of minimum 1:2 are targeted
• Signals are tracked from entry to target or stop loss
• Performance is audited and verified monthly

It's important to understand what accuracy means in trading context. A 94.7% win rate doesn't mean 94.7% of your trades will be profitable. It means 94.7% of signals that meet the confluence criteria reach their first target before hitting stop loss.

Trading involves risk, and past performance does not guarantee future results. However, by following our risk management framework and only taking high-confluence signals, traders can significantly improve their probability of success.`,
      },
      
      falseSignals: {
        title: "Handling False Signals",
        content: `Even with our advanced filtering system, false signals can occur. Here's how to handle them:

**1. Wait for Candle Close**
Never enter a trade before the signal candle closes. Many false signals disappear when the candle completes.

**2. Check Higher Timeframes**
Always confirm signals with the next higher timeframe. If the 15m shows a buy signal but 1H shows strong resistance, wait.

**3. Avoid News Events**
HonoAlgo automatically detects high-impact news and suppresses signals. However, always check the economic calendar.

**4. Trust Your Stop Loss**
If stopped out, don't immediately re-enter. Wait for the next valid signal. One loss is part of trading.

**5. Review Your Setup**
After a losing trade, analyze what went wrong. Did you follow all rules? Was the confluence truly present?`,
      },
      
      riskManagement: {
        title: "Risk Management Framework",
        content: `Professional trading is not about predicting the future—it's about managing risk. Here's our recommended framework:

**Position Sizing**
Never risk more than 1-2% of your account on a single trade. HonoAlgo calculates position size automatically based on your stop loss distance.

**Risk-to-Reward**
Only take trades with minimum 1:2 risk-to-reward. Our signals typically target 1:3 or better.

**Daily Loss Limit**
Stop trading after 3 consecutive losses. Take a break and review your analysis.

**Time-Based Stops**
Don't hold trades longer than your trading style dictates. Scalpers should close within hours, swing traders within days.

**Correlation Awareness**
Gold often moves inversely to USD. Be aware of major USD news that could impact your positions.`,
      },
      
      strategies: {
        title: "Advanced Strategy Examples",
        strategies: [
          {
            name: "London Session Breakout",
            description: "Enter on the first HonoAlgo signal after London open (8:00 GMT) when it aligns with the daily trend. Target 1:3 minimum. This catches institutional flows from European banks.",
          },
          {
            name: "New York Reversal",
            description: "Look for counter-trend signals during NY session (13:00-16:00 GMT) when price reaches key institutional zones. Perfect for catching reversals from daily extremes.",
          },
          {
            name: "Multi-Timeframe Confluence",
            description: "Only take signals that appear on both 15m and 1H timeframes simultaneously. This dramatically increases accuracy but reduces signal frequency.",
          },
          {
            name: "Weekend Gap Fade",
            description: "Enter opposite to weekend gap direction when HonoAlgo confirms on Monday open. Gold gaps tend to fill within 24-48 hours.",
          },
        ],
      },
      
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "What platforms does HonoAlgo work on?",
            answer: "HonoAlgo is designed for TradingView, the world's most popular charting platform. It works with any broker that provides XAUUSD data. Simply add the indicator to your chart and start receiving signals.",
          },
          {
            question: "How many signals will I receive per day?",
            answer: "Signal frequency depends on market conditions and your selected timeframes. On average, traders see 3-5 high-quality signals per day on the 15-minute timeframe during active sessions. Lower timeframes (5m) may generate more signals, while higher timeframes (1H, 4H) generate fewer but potentially more reliable signals.",
          },
          {
            question: "Do I need prior trading experience?",
            answer: "HonoAlgo is designed for traders of all experience levels. Beginners appreciate the clear entry/exit signals, while experienced traders value the institutional analysis. We recommend starting with our comprehensive documentation and paper trading before risking real capital.",
          },
          {
            question: "Can I use HonoAlgo for other instruments besides gold?",
            answer: "HonoAlgo is specifically optimized for XAUUSD (gold). While the underlying concepts work on any instrument, the parameters and sensitivity are tuned specifically for gold's unique characteristics. We recommend using it only for gold trading.",
          },
          {
            question: "What's included in the free version?",
            answer: "The free version includes basic signal generation on the 15-minute timeframe, market structure detection, and access to our community. The Pro version unlocks all timeframes, institutional zones, advanced confluence analysis, and real-time alerts.",
          },
          {
            question: "How do I upgrade to Pro?",
            answer: "You can upgrade to Pro at any time through our pricing page. During checkout, you'll have the option to add our Order Bump offer—InfinityRSI Divergence V6.2 at 75% off. This additional indicator works perfectly with HonoAlgo for enhanced divergence detection.",
          },
          {
            question: "Is there a money-back guarantee?",
            answer: "Yes, we offer a 30-day money-back guarantee on all purchases. If you're not satisfied with HonoAlgo for any reason, contact our support team for a full refund. No questions asked.",
          },
          {
            question: "How accurate are the signals really?",
            answer: "Our documented accuracy is 94.7% for signals that meet our confluence requirements. However, this doesn't mean every trade will be profitable. Trading involves risk, and proper risk management is essential. We encourage all traders to verify our claims through paper trading first.",
          },
          {
            question: "Do you offer customer support?",
            answer: "Yes, we provide email support for all users. Pro members receive priority support with faster response times. We also have an active community where traders share ideas and strategies.",
          },
          {
            question: "Will I get rich quickly using HonoAlgo?",
            answer: "Absolutely not, and any trading tool that promises quick riches should be avoided. HonoAlgo is a professional tool that helps you identify high-probability setups. Consistent profitability comes from proper risk management, discipline, and experience—not from any single indicator.",
          },
        ],
      },
      
      upgrade: {
        title: "Upgrade Benefits",
        subtitle: "Maximize your trading edge with the Order Bump offer",
        offer: {
          title: "InfinityRSI Divergence V6.2",
          original: "$50",
          sale: "$12.50",
          discount: "Save 75%",
          description: "Add advanced divergence detection to your trading arsenal. This premium indicator works seamlessly with HonoAlgo to identify hidden reversals before they happen.",
          features: [
            "Regular & Hidden Divergence Detection",
            "Multi-Timeframe Divergence Alerts",
            "Visual Divergence Lines on Chart",
            "Automatic TP/SL Suggestions",
            "Works on Any Timeframe",
            "Full Priority Support",
          ],
        },
      },
    },
    
    // Pricing Section
    pricing: {
      title: "Simple, Transparent",
      titleHighlight: "Pricing",
      subtitle: "Choose the plan that fits your trading journey. No hidden fees, no surprises.",
      plans: [
        {
          name: "Free",
          price: "$0",
          period: "forever",
          description: "Perfect for beginners exploring institutional trading",
          features: [
            "Basic Signal Generation",
            "15-Minute Timeframe Only",
            "Market Structure Detection",
            "Community Access",
            "Email Support",
          ],
          cta: "Get Started Free",
          popular: false,
          link: "https://infinityalgoacademy.net/item/honoalgo-tradingview-pinescript-free-download/",
        },
        {
          name: "Pro",
          price: "$97",
          period: "one-time",
          description: "For serious traders ready for institutional-grade analysis",
          features: [
            "All Timeframes (1m-Daily)",
            "Institutional Zone Detection",
            "Advanced Confluence Engine",
            "Real-Time Push Alerts",
            "Risk Calculator",
            "Priority Support",
            "Lifetime Updates",
          ],
          cta: "Get Pro Access",
          popular: true,
          link: "https://infinityalgoacademy.net/checkout/?fct_cart_hash=9b96cc6397bc86b43dce91f64ff5f74a",
        },
        {
          name: "Pro + RSI Bundle",
          price: "$109.50",
          originalPrice: "$147",
          period: "one-time",
          description: "Complete institutional trading toolkit",
          features: [
            "Everything in Pro",
            "InfinityRSI Divergence V6.2",
            "Divergence Detection",
            "Multi-TF Divergence Alerts",
            "Visual Divergence Lines",
            "Bonus Strategy Guide",
          ],
          cta: "Get Bundle Deal",
          popular: false,
          link: "https://infinityalgoacademy.net/checkout/?fct_cart_hash=08fbcfde8f713bcad6034350ec5dd865",
        },
      ],
    },
    
    // Checkout Section
    checkout: {
      title: "Complete Your",
      titleHighlight: "Purchase",
      subtitle: "Join thousands of traders using institutional-grade analysis",
      timer: {
        title: "Special Offer Expires In:",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
      },
      guarantee: {
        title: "30-Day Money-Back Guarantee",
        description: "Not satisfied? Get a full refund within 30 days. No questions asked.",
      },
      orderBump: {
        title: "Wait! Upgrade Your Order",
        subtitle: "Add InfinityRSI Divergence V6.2",
        original: "$50",
        sale: "$12.50",
        discount: "Save 75%",
        description: "Add this powerful divergence detector to catch reversals before they happen.",
        checkbox: "Yes! Add InfinityRSI for just $12.50 (75% off)",
      },
      payment: {
        title: "Secure Payment",
        description: "Your payment information is encrypted and secure",
        methods: ["Stripe", "PayPal"],
      },
      testimonial: {
        quote: "The combination of HonoAlgo and RSI Divergence has completely transformed my trading. I went from struggling to consistent profits in just 3 weeks.",
        author: "Marcus Chen",
        role: "Gold Trader, 5 years",
        result: "+$12,450 in 30 days",
      },
      features: {
        title: "What You're Getting Today",
        items: [
          "HonoAlgo Pro Indicator",
          "All 6 Timeframes Unlocked",
          "Institutional Zone Detection",
          "Real-Time Alert System",
          "Risk Management Calculator",
          "Lifetime Updates",
          "Priority Email Support",
          "Exclusive Community Access",
        ],
      },
      cta: "Complete Secure Checkout",
    },
    
    // Testimonials
    testimonials: {
      title: "Trusted by",
      titleHighlight: "Professional Traders",
      subtitle: "Real results from real traders using InfinityAlgo",
      items: [
        {
          name: "Sarah Mitchell",
          role: "Full-time Trader",
          location: "London, UK",
          avatar: "SM",
          rating: 5,
          quote: "After 3 years of struggling, HonoAlgo finally gave me the edge I needed. The institutional zones are incredibly accurate.",
          result: "+23% in 2 months",
        },
        {
          name: "Ahmed Hassan",
          role: "Part-time Trader",
          location: "Dubai, UAE",
          avatar: "AH",
          rating: 5,
          quote: "The confluence system filters out so much noise. I only take the best setups now and my win rate has doubled.",
          result: "84% win rate",
        },
        {
          name: "Michael Torres",
          role: "Fund Manager",
          location: "New York, USA",
          avatar: "MT",
          rating: 5,
          quote: "I was skeptical at first, but the signals are genuinely institutional-grade. Now using it across our entire fund.",
          result: "$1.2M AUM",
        },
        {
          name: "Jennifer Liu",
          role: "Swing Trader",
          location: "Singapore",
          avatar: "JL",
          rating: 5,
          quote: "The RSI Divergence add-on is a game changer. Caught multiple reversals that I would have missed otherwise.",
          result: "+45% in 4 months",
        },
        {
          name: "David Brown",
          role: "Day Trader",
          location: "Sydney, Australia",
          avatar: "DB",
          rating: 5,
          quote: "Best investment I've made in my trading career. The support team is incredibly responsive too.",
          result: "+$8,200/month avg",
        },
        {
          name: "Fatima Al-Rashid",
          role: "New Trader",
          location: "Riyadh, KSA",
          avatar: "FA",
          rating: 5,
          quote: "Started with zero experience 6 months ago. Now trading profitably thanks to the clear signals and documentation.",
          result: "Consistent profits",
        },
      ],
    },
    
    // Contact
    contact: {
      title: "Get in",
      titleHighlight: "Touch",
      subtitle: "Have questions? We're here to help.",
      form: {
        name: "Your Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message",
      },
      info: {
        email: "support@infinityalgoacademy.net",
        hours: "Monday - Friday: 9AM - 6PM GMT",
        response: "Average response time: 2-4 hours",
      },
      social: {
        title: "Connect With Us",
        twitter: "Twitter",
        telegram: "Telegram",
        discord: "Discord",
        youtube: "YouTube",
      },
    },
    
    // Dashboard
    dashboard: {
      title: "Live Gold",
      titleHighlight: "Analysis",
      subtitle: "Real-time institutional analysis for XAUUSD",
      chart: {
        title: "XAUUSD Live Chart",
      },
      signal: {
        title: "Active Signal",
        direction: "Direction",
        entry: "Entry Zone",
        stopLoss: "Stop Loss",
        takeProfit: "Take Profit",
        confidence: "Confidence",
        risk: "Risk",
        position: "Position Size",
        reason: "Signal Reason",
        buy: "BUY",
        sell: "SELL",
        noSignal: "Waiting for confluence...",
        analyzing: "Analyzing market conditions...",
      },
      analysis: {
        title: "Market Analysis",
        structure: "Market Structure",
        trend: "Trend Strength",
        volatility: "Volatility",
        liquidity: "Liquidity Status",
        divergence: "RSI Divergence",
        conditions: {
          bullish: "Bullish",
          bearish: "Bearish",
          neutral: "Neutral",
          strong: "Strong",
          moderate: "Moderate",
          weak: "Weak",
          low: "Low",
          normal: "Normal",
          high: "High",
          detected: "Detected",
          none: "None",
          above: "Above Price",
          below: "Below Price",
        },
        marketType: {
          title: "Market Condition",
          trend: "Trending",
          range: "Ranging",
          accumulation: "Accumulation",
        },
      },
      timeframes: {
        title: "Timeframe",
        options: ["1m", "5m", "15m", "1H", "4H", "Daily"],
      },
      zones: {
        title: "Institutional Zones",
        supply: "Supply Zone",
        demand: "Demand Zone",
        ob: "Order Block",
        fvg: "Fair Value Gap",
      },
      calculator: {
        title: "Risk Calculator",
        account: "Account Size",
        riskPercent: "Risk %",
        stopLoss: "Stop Loss (pips)",
        calculate: "Calculate",
        result: "Position Size",
        lots: "lots",
      },
      alerts: {
        title: "Smart Alerts",
        items: [
          { type: "bos", text: "Break of Structure detected" },
          { type: "divergence", text: "RSI Divergence forming" },
          { type: "liquidity", text: "Liquidity sweep imminent" },
          { type: "zone", text: "Price entering demand zone" },
        ],
      },
      assistant: {
        title: "AI Trade Assistant",
        placeholder: "Ask about the current setup...",
        send: "Send",
        suggestions: [
          "Why is this signal generated?",
          "What are the key levels?",
          "Is this a high-probability setup?",
          "Explain the confluence factors",
        ],
      },
      backtest: {
        title: "Recent Performance",
        headers: ["Time", "Direction", "Entry", "Result", "P/L"],
        wins: "Wins",
        losses: "Losses",
        winRate: "Win Rate",
      },
      lastUpdate: "Last updated",
    },
    
    // Footer
    footer: {
      description: "Institutional-grade trading intelligence for gold traders worldwide.",
      navigation: "Navigation",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      refund: "Refund Policy",
      copyright: "© 2024 InfinityAlgo Academy. All rights reserved.",
      disclaimer: "Trading involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results.",
    },
  },
  
  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      docs: "التوثيق",
      pricing: "الأسعار",
      checkout: "الدفع",
      testimonials: "آراء العملاء",
      contact: "اتصل بنا",
      dashboard: "لوحة التحكم",
      getStarted: "ابدأ الآن",
    },
    
    // Hero Section
    hero: {
      badge: "تحليل تداول مؤسسي احترافي",
      title: "تداول الذهب مثل",
      titleHighlight: "المؤسسات",
      subtitle: "تحليل مدعوم بالذكاء الاصطناعي مع إشارات مؤسسية. احصل على نفس الأدوات التي يستخدمها المتداولون المحترفون للسيطرة على سوق الذهب.",
      cta: {
        primary: "احصل على المؤشر مجاناً",
        secondary: "عرض لوحة التحكم",
      },
      stats: {
        accuracy: "94.7%",
        accuracyLabel: "دقة الإشارات",
        traders: "+12,847",
        tradersLabel: "متداول نشط",
        signals: "2,156",
        signalsLabel: "إشارة هذا الشهر",
      },
    },
    
    // Features
    features: {
      title: "لماذا يختار المتداولون",
      titleHighlight: "InfinityAlgo",
      subtitle: "بُني من قبل المتداولين، للمتداولين. كل ميزة مصممة لمنحك ميزة مؤسسية.",
      items: [
        {
          title: "مفاهيم الأموال الذكية",
          description: "اكتشاف آثار المؤسسات بما في ذلك اجتياحات السيولة والكتل الأمرية وفجوات القيمة العادلة.",
          icon: "building",
        },
        {
          title: "تحليل متعدد الأطر الزمنية",
          description: "تحليل الأطر الزمنية من دقيقة إلى يوم في وقت واحد للحصول على سياق كامل للسوق.",
          icon: "clock",
        },
        {
          title: "محرك التوافق",
          description: "الإشارات تعمل فقط عند توافق 3 تأكيدات أو أكثر، مما يفلتر الإعدادات منخفضة الجودة.",
          icon: "target",
        },
        {
          title: "تنبيهات فورية",
          description: "لا تفوت أي فرصة مع إشعارات فورية على جهازك.",
          icon: "bell",
        },
        {
          title: "إدارة المخاطر",
          description: "حاسبة مدمجة لحجم المركز والمخاطر لكل إشارة.",
          icon: "shield",
        },
        {
          title: "مناطق المؤسسات",
          description: "شاهد بالضبط أين من المرجح أن تدخل البنوك والمؤسسات السوق.",
          icon: "map",
        },
      ],
    },
    
    // Docs Section
    docs: {
      title: "التوثيق",
      titleHighlight: "الكامل",
      subtitle: "كل ما تحتاجه لإتقان مؤشر HonoAlgo والتداول كمؤسسة.",
      
      intro: {
        title: "ما هو HonoAlgo؟",
        content: `HonoAlgo هو مؤشر تداول مؤسسي مصمم خصيصاً لتداول الذهب (XAUUSD). على عكس المؤشرات التجارية التي تعتمد على الإشارات المتأخرة، يدمج HonoAlgo مفاهيم الأموال الذكية (SMC) وتحليل تدفق الطلبات المؤسسية والتعرف المتقدم على الأنماط لتحديد فرص التداول عالية الاحتمالية.

تم تطوير المؤشر من قبل فريق من المتداولين المؤسسيين السابقين الذين قضوا سنوات في تحليل كيفية تحريك البنوك والمؤسسات المالية الكبيرة لسوق الذهب. من خلال الهندسة العكسية لأنماط التداول المؤسسية، يمنح HonoAlgo المتداولين الأفراد إمكانية الوصول إلى نفس أدوات التحليل المستخدمة في مكاتب التداول الاحترافية.

الفلسفة الأساسية وراء HonoAlgo بسيطة: تداول حيث تتداول المؤسسات. بدلاً من مطاردة حركة السعر أو التفاعل مع ضوضاء السوق، يحدد HonoAlgo الآثار التي تركتها الأموال المؤسسية ويضعك للتداول جنبًا إلى جنب مع الأموال الذكية، وليس ضدها.`,
      },
      
      howItWorks: {
        title: "كيف يعمل HonoAlgo",
        content: `يعمل المؤشر من خلال نظام تحليل متعدد الطبقات متطور يعالج بيانات السوق في الوقت الفعلي:

**الطبقة 1: تحليل هيكل السوق**
يراقب HonoAlgo باستمرار حركة السعر لتحديد تحولات هيكل السوق. يشمل ذلك اكتشاف القمم الأعلى (HH) والقيعان الأعلى (HL) والقمم الأدنى (LH) والقيعان الأدنى (LL). يحدد المؤشر نقاط كسر الهيكل (BOS) وتغيير الشخصية (ChoCH) حيث يتغير اتجاه الاتجاه المحتمل.

**الطبقة 2: اكتشاف المناطق المؤسسية**
باستخدام خوارزميات خاصة، يحدد HonoAlgo المناطق المؤسسية الرئيسية بما في ذلك كتل الأوامر (OB) وفجوات القيمة العادلة (FVG) وتجمعات السيولة. هذه هي المناطق التي تضع فيها البنوك والمؤسسات عادةً أوامرها.

**الطبقة 3: الزخم والتباعد**
يحلل المؤشر RSI ومؤشرات الزخم للكشف عن التباعد المنتظم والمخفي. هذه التباعدات غالباً ما تسبق الانعكاسات السعرية الكبرى وهي مكون رئيسي في نظام التوافق.

**الطبقة 4: التحقق من التوافق**
تتطلب الطبقة النهائية حد أدنى 3 تأكيدات قبل إنشاء إشارة. هذا يقلل بشكل كبير من الإشارات الكاذبة ويضمن رؤية أفضل الإعدادات احتمالية فقط.`,
      },
      
      signalLogic: {
        title: "منطق الإشارة خطوة بخطوة",
        steps: [
          "مسح هيكل السوق: يحدد HonoAlgo هيكل السوق الحالي عبر أطر زمنية متعددة",
          "تحديد المناطق: يحدد المؤشر مناطق الدعم/المقاومة والمناطق المؤسسية الرئيسية",
          "تحليل الزخم: يتم اكتشاف تباعد RSI وتحولات الزخم",
          "فحص السيولة: يحدد النظام تجمعات السيولة فوق/تحت السعر الحالي",
          "حساب التوافق: يتم وزن جميع العوامل ودمجها",
          "إنشاء الإشارة: فقط عندما تتوافق 3 عوامل أو أكثر، يتم إنشاء إشارة",
          "حساب المخاطر: يتم حساب مستويات وقف الخسارة وجني الأرباح بناءً على الهيكل",
          "تسليم التنبيه: إشعار فوري مع جميع تفاصيل الصفقة",
        ],
      },
      
      difference: {
        title: "لماذا HonoAlgo مختلف",
        items: [
          {
            title: "لا إعادة رسم",
            description: "الإشارات يتم إنشاؤها فقط عند تأكيدها ولا تعاد رسمها أبداً. ما تراه هو ما تحصل عليه.",
          },
          {
            title: "تركيز مؤسسي",
            description: "بُني حول كيفية تداول المؤسسات فعلياً، وليس المؤشرات التجارية التي تتأخر عن السعر.",
          },
          {
            title: "قائم على التوافق",
            description: "تتطلب تأكيدات متعددة قبل أي إشارة، مما يفلتر الضوضاء والإشارات الكاذبة.",
          },
          {
            title: "مخصص للذهب",
            description: "محسن خصيصاً لـ XAUUSD، مع مراعاة تقلب الذهب وسلوكه الفريد.",
          },
          {
            title: "في الوقت الفعلي",
            description: "يحدث التحليل في الوقت الفعلي، وليس على البيانات التاريخية مثل العديد من المؤشرات المختبرة.",
          },
          {
            title: "دعم احترافي",
            description: "الوصول إلى متداولين محترفين للتوجيه وتطوير الاستراتيجية.",
          },
        ],
      },
      
      accuracy: {
        title: "فهم الدقة",
        content: `معدل الدقة الموثق لدينا البالغ 94.7% يعتمد على الإشارات التي تستوفي متطلبات التوافق الصارمة. هذا يعني:

• فقط الإعدادات عالية الجودة مع 3 تأكيدات أو أكثر يتم احتسابها
• استهداف نسب مخاطرة إلى عائد بحد أدنى 1:2
• يتم تتبع الإشارات من الدخول إلى الهدف أو وقف الخسارة
// يتم تدقيق الأداء والتحقق منه شهرياً

من المهم فهم ما تعنيه الدقة في سياق التداول. معدل فوز 94.7% لا يعني أن 94.7% من صفقاتك ستكون مربحة. يعني أن 94.7% من الإشارات التي تستوفي معايير التوافق تصل إلى هدفها الأول قبل الوصول إلى وقف الخسارة.

التداول ينطوي على مخاطر، والأداء السابق لا يضمن النتائج المستقبلية. ومع ذلك، من خلال اتباع إطار إدارة المخاطر لدينا وأخذ إشارات التوافق العالي فقط، يمكن للمتداولين تحسين احتمالية نجاحهم بشكل كبير.`,
      },
      
      falseSignals: {
        title: "التعامل مع الإشارات الكاذبة",
        content: `حتى مع نظام التصفية المتقدم لدينا، يمكن أن تحدث إشارات كاذبة. إليك كيفية التعامل معها:

**1. انتظر إغلاق الشمعة**
لا تدخل أبداً صفقة قبل إغلاق شمعة الإشارة. العديد من الإشارات الكاذبة تختفي عند اكتمال الشمعة.

**2. تحقق من الأطر الزمنية الأعلى**
قم دائماً بتأكيد الإشارات مع الإطار الزمني الأعلى التالي. إذا أظهر الـ 15 دقيقة إشارة شراء لكن الساعة تظهر مقاومة قوية، انتظر.

**3. تجنب أحداث الأخبار**
يكتشف HonoAlgo تلقائياً الأخبار عالية التأثير ويمنع الإشارات. ومع ذلك، تحقق دائماً من التقويم الاقتصادي.

**4. اثق في وقف الخسارة**
إذا تم الخروج عند وقف الخسارة، لا تعاود الدخول فوراً. انتظر الإشارة الصالحة التالية. الخسارة الواحدة جزء من التداول.

**5. راجع إعدادك**
بعد صفقة خاسرة، حلل ما الخطأ الذي حدث. هل اتبعت جميع القواعد؟ هل كان التوافق حاضراً حقاً؟`,
      },
      
      riskManagement: {
        title: "إطار إدارة المخاطر",
        content: `التداول الاحترافي لا يتعلق بالتنبؤ بالمستقبل—بل بإدارة المخاطر. إليك إطارنا الموصى به:

**حجم المركز**
لا تخاطر أبداً بأكثر من 1-2% من حسابك في صفقة واحدة. يحسب HonoAlgo حجم المركز تلقائياً بناءً على مسافة وقف الخسارة.

**نسبة المخاطرة إلى العائد**
خذ فقط الصفقات بنسبة مخاطرة إلى عائد بحد أدنى 1:2. إشاراتنا تستهدف عادة 1:3 أو أفضل.

**حد الخسارة اليومي**
توقف عن التداول بعد 3 خسائر متتالية. خذ استراحة وراجع تحليلك.

**وقف الخسارة الزمني**
لا تحتفظ بالصفقات أطول مما يملي أسلوب تداولك. يجب على المستبضين الإغلاق خلال ساعات، ومتداولي التأرجح خلال أيام.

**الوعي بالارتباط**
الذهب غالباً ما يتحرك عكسياً للدولار الأمريكي. كن واعياً بأخبار الدولار الأمريكي الكبرى التي قد تؤثر على مراكزك.`,
      },
      
      strategies: {
        title: "أمثلة الاستراتيجيات المتقدمة",
        strategies: [
          {
            name: "اختراق جلسة لندن",
            description: "الدخول عند أول إشارة HonoAlgo بعد افتتاح لندن (8:00 بتوقيت جرينتش) عندما تتوافق مع الاتجاه اليومي. الهدف 1:3 كحد أدنى. هذا يلتقط تدفقات المؤسسات من البنوك الأوروبية.",
          },
          {
            name: "انعكاس نيويورك",
            description: "ابحث عن إشارات عكس الاتجاه خلال جلسة نيويورك (13:00-16:00 بتوقيت جرينتش) عندما يصل السعر إلى مناطق مؤسسية رئيسية. مثالي لالتقاط الانعكاسات من الحدود اليومية.",
          },
          {
            name: "توافق الأطر الزمنية المتعددة",
            description: "خذ فقط الإشارات التي تظهر على كلا الإطارين الزمنيين 15 دقيقة وساعة في وقت واحد. هذا يزيد الدقة بشكل كبير لكن يقلل من تكرار الإشارات.",
          },
          {
            name: "تلاشي فجوة نهاية الأسبوع",
            description: "الدخول عكس اتجاه فجوة نهاية الأسبوع عندما يؤكد HonoAlgo عند افتتاح الاثنين. فجوات الذهب تميل للامتلاء خلال 24-48 ساعة.",
          },
        ],
      },
      
      faq: {
        title: "الأسئلة الشائعة",
        items: [
          {
            question: "على أي منصات يعمل HonoAlgo؟",
            answer: "HonoAlgo مصمم لـ TradingView، منصة الرسوم البيانية الأكثر شعبية في العالم. يعمل مع أي وسيط يوفر بيانات XAUUSD. ببساطة أضف المؤشر إلى الرسم البياني وابدأ في تلقي الإشارات.",
          },
          {
            question: "كم عدد الإشارات التي سأحصل عليها يومياً؟",
            answer: "يعتمد تكرار الإشارات على ظروف السوق والأطر الزمنية المحددة. في المتوسط، يرى المتداولون 3-5 إشارات عالية الجودة يومياً على الإطار الزمني 15 دقيقة خلال الجلسات النشطة. قد تولد الأطر الزمنية الأقل (5 دقائق) إشارات أكثر، بينما تولد الأطر الزمنية الأعلى (ساعة، 4 ساعات) إشارات أقل لكن قد تكون أكثر موثوقية.",
          },
          {
            question: "هل أحتاج خبرة تداول سابقة؟",
            answer: "HonoAlgo مصمم للمتداولين من جميع مستويات الخبرة. يقدر المبتدئون إشارات الدخول/الخروج الواضحة، بينما يقدر المتداولون ذوو الخبرة التحليل المؤسسي. نوصي بالبدء بتوثيقنا الشامل والتداول الورقي قبل المخاطرة برأس مال حقيقي.",
          },
          {
            question: "هل يمكنني استخدام HonoAlgo لأدوات أخرى غير الذهب؟",
            answer: "HonoAlgo محسن خصيصاً لـ XAUUSD (الذهب). بينما تعمل المفاهيم الأساسية على أي أداة، فإن المعاملات والحساسية مصممة خصيصاً لخصائص الذهب الفريدة. نوصي باستخدامه فقط لتداول الذهب.",
          },
          {
            question: "ما الذي يتضمنه الإصدار المجاني؟",
            answer: "يتضمن الإصدار المجاني إنشاء الإشارات الأساسية على الإطار الزمني 15 دقيقة، واكتشاف هيكل السوق، والوصول إلى مجتمعنا. يفتح الإصدار Pro جميع الأطر الزمنية والمناطق المؤسسية وتحليل التوافق المتقدم والتنبيهات الفورية.",
          },
          {
            question: "كيف أقوم بالترقية إلى Pro؟",
            answer: "يمكنك الترقية إلى Pro في أي وقت من خلال صفحة الأسعار. خلال الدفع، سيكون لديك خيار إضافة عرض Order Bump الخاص بنا—InfinityRSI Divergence V6.2 بخصم 75%. هذا المؤشر الإضافي يعمل بشكل مثالي مع HonoAlgo لتحسين اكتشاف التباعد.",
          },
          {
            question: "هل هناك ضمان استرداد الأموال؟",
            answer: "نعم، نقدم ضمان استرداد أموال لمدة 30 يوماً على جميع المشتريات. إذا لم تكن راضياً عن HonoAlgo لأي سبب، تواصل مع فريق الدعم لدينا للحصول على استرداد كامل. بدون أسئلة.",
          },
          {
            question: "ما مدى دقة الإشارات فعلاً؟",
            answer: "دقتنا الموثقة هي 94.7% للإشارات التي تستوفي متطلبات التوافق. ومع ذلك، هذا لا يعني أن كل صفقة ستكون مربحة. التداول ينطوي على مخاطر، وإدارة المخاطر السليمة ضرورية. نشجع جميع المتداولين على التحقق من ادعاءاتنا من خلال التداول الورقي أولاً.",
          },
          {
            question: "هل تقدمون دعم العملاء؟",
            answer: "نعم، نقدم دعم البريد الإلكتروني لجميع المستخدمين. يحصل أعضاء Pro على دعم أولوي مع أوقات استجابة أسرع. لدينا أيضاً مجتمع نشط حيث يشارك المتداولون الأفكار والاستراتيجيات.",
          },
          {
            question: "هل سأصبح غنياً بسرعة باستخدام HonoAlgo؟",
            answer: "بالتأكيد لا، وأي أداة تداول تعد بالثراء السريع يجب تجنبها. HonoAlgo أداة احترافية تساعدك على تحديد الإعدادات عالية الاحتمالية. الربحية المستمرة تأتي من إدارة المخاطر السليمة والانضباط والخبرة—وليس من أي مؤشر واحد.",
          },
        ],
      },
      
      upgrade: {
        title: "مزايا الترقية",
        subtitle: "عظّم ميزتك التداولية مع عرض Order Bump",
        offer: {
          title: "InfinityRSI Divergence V6.2",
          original: "$50",
          sale: "$12.50",
          discount: "وفر 75%",
          description: "أضف اكتشاف التباعد المتقدم إلى ترسانتك التداولية. هذا المؤشر المتميز يعمل بسلاسة مع HonoAlgo لتحديد الانعكاسات المخفية قبل حدوثها.",
          features: [
            "اكتشاف التباعد المنتظم والمخفي",
            "تنبيهات تبادل متعددة الأطر الزمنية",
            "خطوط التباعد المرئية على الرسم البياني",
            "اقتراحات TP/SL تلقائية",
            "يعمل على أي إطار زمني",
            "دعم أولوي كامل",
          ],
        },
      },
    },
    
    // Pricing Section
    pricing: {
      title: "أسعار بسيطة",
      titleHighlight: "وشفافة",
      subtitle: "اختر الخطة التي تناسب رحلتك التداولية. بدون رسوم مخفية، بدون مفاجآت.",
      plans: [
        {
          name: "مجاني",
          price: "$0",
          period: "للأبد",
          description: "مثالي للمبتدئين الذين يستكشفون التداول المؤسسي",
          features: [
            "إنشاء الإشارات الأساسية",
            "الإطار الزمني 15 دقيقة فقط",
            "اكتشاف هيكل السوق",
            "الوصول للمجتمع",
            "دعم البريد الإلكتروني",
          ],
          cta: "ابدأ مجاناً",
          popular: false,
          link: "https://infinityalgoacademy.net/item/honoalgo-tradingview-pinescript-free-download/",
        },
        {
          name: "Pro",
          price: "$97",
          period: "دفعة واحدة",
          description: "للمتداولين الجادين المستعدين للتحليل المؤسسي",
          features: [
            "جميع الأطر الزمنية (1م-يومي)",
            "اكتشاف المناطق المؤسسية",
            "محرك التوافق المتقدم",
            "تنبيهات فورية",
            "حاسبة المخاطر",
            "دعم أولوي",
            "تحديثات مدى الحياة",
          ],
          cta: "احصل على Pro",
          popular: true,
          link: "https://infinityalgoacademy.net/checkout/?fct_cart_hash=9b96cc6397bc86b43dce91f64ff5f74a",
        },
        {
          name: "Pro + حزمة RSI",
          price: "$109.50",
          originalPrice: "$147",
          period: "دفعة واحدة",
          description: "مجموعة أدوات تداول مؤسسية كاملة",
          features: [
            "كل شيء في Pro",
            "InfinityRSI Divergence V6.2",
            "اكتشاف التباعد",
            "تنبيهات تبادل متعددة الأطر الزمنية",
            "خطوط التباعد المرئية",
            "دليل استراتيجية إضافي",
          ],
          cta: "احصل على الحزمة",
          popular: false,
          link: "https://infinityalgoacademy.net/checkout/?fct_cart_hash=08fbcfde8f713bcad6034350ec5dd865",
        },
      ],
    },
    
    // Checkout Section
    checkout: {
      title: "أكمل",
      titleHighlight: "عملية الشراء",
      subtitle: "انضم لآلاف المتداولين الذين يستخدمون التحليل المؤسسي",
      timer: {
        title: "العرض الخاص ينتهي خلال:",
        hours: "ساعات",
        minutes: "دقائق",
        seconds: "ثواني",
      },
      guarantee: {
        title: "ضمان استرداد الأموال لمدة 30 يوماً",
        description: "غير راضٍ؟ احصل على استرداد كامل خلال 30 يوماً. بدون أسئلة.",
      },
      orderBump: {
        title: "انتظر! قم بترقية طلبك",
        subtitle: "أضف InfinityRSI Divergence V6.2",
        original: "$50",
        sale: "$12.50",
        discount: "وفر 75%",
        description: "أضف هذا الكاشف القوي للتباعد لالتقاط الانعكاسات قبل حدوثها.",
        checkbox: "نعم! أضف InfinityRSI مقابل $12.50 فقط (خصم 75%)",
      },
      payment: {
        title: "دفع آمن",
        description: "معلومات الدفع الخاصة بك مشفرة وآمنة",
        methods: ["Stripe", "PayPal"],
      },
      testimonial: {
        quote: "مزيج HonoAlgo و RSI Divergence حوّل تداولي تماماً. انتقلت من الصعوبة إلى الأرباح المستمرة في 3 أسابيع فقط.",
        author: "ماركوس تشن",
        role: "متداول ذهب، 5 سنوات",
        result: "+$12,450 في 30 يوم",
      },
      features: {
        title: "ما ستحصل عليه اليوم",
        items: [
          "مؤشر HonoAlgo Pro",
          "جميع الأطر الزمنية الـ 6 مفتوحة",
          "اكتشاف المناطق المؤسسية",
          "نظام التنبيهات الفورية",
          "حاسبة إدارة المخاطر",
          "تحديثات مدى الحياة",
          "دعم بريد إلكتروني أولوي",
          "الوصول للمجتمع الحصري",
        ],
      },
      cta: "أكمل الدفع الآمن",
    },
    
    // Testimonials
    testimonials: {
      title: "موثوق من قبل",
      titleHighlight: "المتداولين المحترفين",
      subtitle: "نتائج حقيقية من متداولين حقيقيين يستخدمون InfinityAlgo",
      items: [
        {
          name: "سارة ميتشل",
          role: "متداول بدوام كامل",
          location: "لندن، بريطانيا",
          avatar: "SM",
          rating: 5,
          quote: "بعد 3 سنوات من الصراع، أعطاني HonoAlgo أخيراً الميزة التي أحتاجها. المناطق المؤسسية دقيقة بشكل لا يصدق.",
          result: "+23% في شهرين",
        },
        {
          name: "أحمد حسن",
          role: "متداول بدوام جزئي",
          location: "دبي، الإمارات",
          avatar: "AH",
          rating: 5,
          quote: "نظام التوافق يفلتر الكثير من الضوضاء. آخذ فقط أفضل الإعدادات الآن ومعدل فوزي تضاعف.",
          result: "84% معدل فوز",
        },
        {
          name: "مايكل توريس",
          role: "مدير صندوق",
          location: "نيويورك، أمريكا",
          avatar: "MT",
          rating: 5,
          quote: "كنت متشككاً في البداية، لكن الإشارات مؤسسية حقاً. الآن نستخدمه في صندوقنا بالكامل.",
          result: "$1.2M أصول مُدارة",
        },
        {
          name: "جينيفر ليو",
          role: "متداول تأرجح",
          location: "سنغافورة",
          avatar: "JL",
          rating: 5,
          quote: "إضافة RSI Divergence تغيّر اللعبة. التقطت انعكاسات متعددة كنت سأفوتها.",
          result: "+45% في 4 أشهر",
        },
        {
          name: "ديفيد براون",
          role: "متداول يومي",
          location: "سيدني، أستراليا",
          avatar: "DB",
          rating: 5,
          quote: "أفضل استثمار قمت به في مسيرتي التداولية. فريق الدعم مستجيب بشكل لا يصدق أيضاً.",
          result: "+$8,200/شهر متوسط",
        },
        {
          name: "فاطمة الراشد",
          role: "متداول جديد",
          location: "الرياض، السعودية",
          avatar: "FA",
          rating: 5,
          quote: "بدأت بدون خبرة منذ 6 أشهر. الآن أتداول بشكل مربح بفضل الإشارات الواضحة والتوثيق.",
          result: "أرباح مستمرة",
        },
      ],
    },
    
    // Contact
    contact: {
      title: "تواصل",
      titleHighlight: "معنا",
      subtitle: "لديك أسئلة؟ نحن هنا للمساعدة.",
      form: {
        name: "اسمك",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "رسالتك",
        submit: "إرسال الرسالة",
      },
      info: {
        email: "support@infinityalgoacademy.net",
        hours: "الاثنين - الجمعة: 9ص - 6م بتوقيت جرينتش",
        response: "متوسط وقت الاستجابة: 2-4 ساعات",
      },
      social: {
        title: "تواصل معنا",
        twitter: "تويتر",
        telegram: "تيليجرام",
        discord: "ديسكورد",
        youtube: "يوتيوب",
      },
    },
    
    // Dashboard
    dashboard: {
      title: "تحليل الذهب",
      titleHighlight: "الحي",
      subtitle: "تحليل مؤسسي لحظي لـ XAUUSD",
      chart: {
        title: "رسم بياني XAUUSD الحي",
      },
      signal: {
        title: "الإشارة النشطة",
        direction: "الاتجاه",
        entry: "منطقة الدخول",
        stopLoss: "وقف الخسارة",
        takeProfit: "جني الأرباح",
        confidence: "الثقة",
        risk: "المخاطرة",
        position: "حجم المركز",
        reason: "سبب الإشارة",
        buy: "شراء",
        sell: "بيع",
        noSignal: "في انتظار التوافق...",
        analyzing: "جاري تحليل ظروف السوق...",
      },
      analysis: {
        title: "تحليل السوق",
        structure: "هيكل السوق",
        trend: "قوة الاتجاه",
        volatility: "التقلب",
        liquidity: "حالة السيولة",
        divergence: "تباعد RSI",
        conditions: {
          bullish: "صاعد",
          bearish: "هابط",
          neutral: "محايد",
          strong: "قوي",
          moderate: "معتدل",
          weak: "ضعيف",
          low: "منخفض",
          normal: "عادي",
          high: "مرتفع",
          detected: "تم اكتشافه",
          none: "لا يوجد",
          above: "فوق السعر",
          below: "تحت السعر",
        },
        marketType: {
          title: "حالة السوق",
          trend: "اتجاهي",
          range: "مدى",
          accumulation: "تراكم",
        },
      },
      timeframes: {
        title: "الإطار الزمني",
        options: ["1م", "5م", "15م", "1س", "4س", "يومي"],
      },
      zones: {
        title: "المناطق المؤسسية",
        supply: "منطقة العرض",
        demand: "منطقة الطلب",
        ob: "كتلة الأمر",
        fvg: "فجوة القيمة العادلة",
      },
      calculator: {
        title: "حاسبة المخاطر",
        account: "حجم الحساب",
        riskPercent: "نسبة المخاطرة",
        stopLoss: "وقف الخسارة (نقاط)",
        calculate: "احسب",
        result: "حجم المركز",
        lots: "لوت",
      },
      alerts: {
        title: "التنبيهات الذكية",
        items: [
          { type: "bos", text: "تم اكتشاف كسر هيكل" },
          { type: "divergence", text: "تباعد RSI يتشكل" },
          { type: "liquidity", text: "اجتياح سيولة وشيك" },
          { type: "zone", text: "السعر يدخل منطقة طلب" },
        ],
      },
      assistant: {
        title: "مساعد التداول AI",
        placeholder: "اسأل عن الإعداد الحالي...",
        send: "إرسال",
        suggestions: [
          "لماذا تم إنشاء هذه الإشارة؟",
          "ما هي المستويات الرئيسية؟",
          "هل هذا إعداد عالي الاحتمالية؟",
          "اشرح عوامل التوافق",
        ],
      },
      backtest: {
        title: "الأداء الأخير",
        headers: ["الوقت", "الاتجاه", "الدخول", "النتيجة", "الربح/الخسارة"],
        wins: "مكاسب",
        losses: "خسائر",
        winRate: "معدل الفوز",
      },
      lastUpdate: "آخر تحديث",
    },
    
    // Footer
    footer: {
      description: "تحليل تداول مؤسسي لمتداولي الذهب في جميع أنحاء العالم.",
      navigation: "التنقل",
      legal: "القانونية",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      refund: "سياسة الاسترداد",
      copyright: "© 2024 InfinityAlgo Academy. جميع الحقوق محفوظة.",
      disclaimer: "التداول ينطوي على مخاطر خسارة كبيرة وليس مناسباً لجميع المستثمرين. الأداء السابق ليس مؤشراً على النتائج المستقبلية.",
    },
  },
};

export type Language = "en" | "ar";
export type TranslationType = typeof translations.en;
