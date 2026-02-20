// Analysis Engine for Institutional Trading Signals
// Simulates real-time market analysis with confluence-based signal generation

export interface MarketCondition {
  structure: "bullish" | "bearish" | "neutral";
  trendStrength: "strong" | "moderate" | "weak";
  volatility: "low" | "normal" | "high";
  liquidity: "above" | "below" | "normal";
  divergence: "detected" | "none";
  marketType: "trend" | "range" | "accumulation";
}

export interface InstitutionalZone {
  type: "supply" | "demand" | "ob" | "fvg";
  price: number;
  strength: number;
}

export interface Signal {
  id: string;
  direction: "buy" | "sell";
  entry: number;
  stopLoss: number;
  takeProfits: number[];
  confidence: number;
  risk: number;
  positionSize?: number;
  reasons: string[];
  institutionalZones: InstitutionalZone[];
  timestamp: Date;
  confluence: number;
}

export interface AnalysisResult {
  condition: MarketCondition;
  signal: Signal | null;
  zones: InstitutionalZone[];
  lastUpdate: Date;
}

// Current gold price simulation (in real implementation, this would come from TradingView)
let currentPrice = 2340.50;

// Generate realistic price movement
export function updatePrice(): number {
  const change = (Math.random() - 0.5) * 2;
  currentPrice = Math.max(2300, Math.min(2400, currentPrice + change));
  return currentPrice;
}

// Analyze market conditions
export function analyzeMarketConditions(): MarketCondition {
  const random = Math.random();
  
  // Determine market structure based on price action
  const structure: "bullish" | "bearish" | "neutral" = 
    random > 0.6 ? "bullish" : random > 0.3 ? "bearish" : "neutral";
  
  // Trend strength
  const trendStrength: "strong" | "moderate" | "weak" =
    random > 0.7 ? "strong" : random > 0.4 ? "moderate" : "weak";
  
  // Volatility level
  const volatility: "low" | "normal" | "high" =
    random > 0.8 ? "high" : random > 0.3 ? "normal" : "low";
  
  // Liquidity status
  const liquidity: "above" | "below" | "normal" =
    random > 0.7 ? "above" : random > 0.4 ? "below" : "normal";
  
  // RSI Divergence
  const divergence: "detected" | "none" =
    random > 0.75 ? "detected" : "none";
  
  // Market type
  const marketType: "trend" | "range" | "accumulation" =
    random > 0.6 ? "trend" : random > 0.3 ? "range" : "accumulation";
  
  return {
    structure,
    trendStrength,
    volatility,
    liquidity,
    divergence,
    marketType,
  };
}

// Generate institutional zones
export function generateInstitutionalZones(price: number): InstitutionalZone[] {
  const zones: InstitutionalZone[] = [];
  
  // Supply zone (above current price)
  zones.push({
    type: "supply",
    price: price + 15 + Math.random() * 10,
    strength: Math.floor(Math.random() * 30) + 70,
  });
  
  // Demand zone (below current price)
  zones.push({
    type: "demand",
    price: price - 15 - Math.random() * 10,
    strength: Math.floor(Math.random() * 30) + 70,
  });
  
  // Order block
  if (Math.random() > 0.4) {
    zones.push({
      type: "ob",
      price: price + (Math.random() > 0.5 ? 8 : -8),
      strength: Math.floor(Math.random() * 20) + 80,
    });
  }
  
  // Fair value gap
  if (Math.random() > 0.5) {
    zones.push({
      type: "fvg",
      price: price + (Math.random() > 0.5 ? 5 : -5),
      strength: Math.floor(Math.random() * 25) + 75,
    });
  }
  
  return zones;
}

// Count confluence factors
function countConfluence(condition: MarketCondition, zones: InstitutionalZone[]): number {
  let count = 0;
  
  // Strong trend alignment
  if (condition.trendStrength === "strong") count++;
  
  // Divergence detected
  if (condition.divergence === "detected") count++;
  
  // Near institutional zone
  if (zones.some(z => z.strength > 80)) count++;
  
  // Normal volatility (not too high)
  if (condition.volatility !== "high") count++;
  
  // Liquidity present
  if (condition.liquidity !== "normal") count++;
  
  // Clear market structure
  if (condition.structure !== "neutral") count++;
  
  return count;
}

// Generate trade reasons
function generateReasons(
  condition: MarketCondition,
  zones: InstitutionalZone[],
  direction: "buy" | "sell"
): string[] {
  const reasons: string[] = [];
  
  if (condition.structure === "bullish" && direction === "buy") {
    reasons.push("Bullish market structure confirmed");
  } else if (condition.structure === "bearish" && direction === "sell") {
    reasons.push("Bearish market structure confirmed");
  }
  
  if (condition.divergence === "detected") {
    reasons.push("RSI divergence detected at key level");
  }
  
  const nearbyZone = zones.find(z => z.strength > 80);
  if (nearbyZone) {
    reasons.push(`Price at ${nearbyZone.type.toUpperCase()} zone (${nearbyZone.strength}% strength)`);
  }
  
  if (condition.liquidity === "above" && direction === "buy") {
    reasons.push("Liquidity sweep above - buy at discount");
  } else if (condition.liquidity === "below" && direction === "sell") {
    reasons.push("Liquidity grab below - sell at premium");
  }
  
  if (condition.trendStrength === "strong") {
    reasons.push(`Strong ${direction === "buy" ? "uptrend" : "downtrend"} momentum`);
  }
  
  reasons.push("Break of structure confirmed on lower timeframe");
  
  return reasons.slice(0, 5);
}

// Generate trading signal based on confluence
export function generateSignal(
  price: number,
  condition: MarketCondition,
  zones: InstitutionalZone[]
): Signal | null {
  const confluence = countConfluence(condition, zones);
  
  // CONFLUENCE RULE: Generate signal only if 3+ confirmations exist
  if (confluence < 3) {
    return null;
  }
  
  // Determine direction
  const direction: "buy" | "sell" = condition.structure === "bullish" ? "buy" : 
                                   condition.structure === "bearish" ? "sell" :
                                   Math.random() > 0.5 ? "buy" : "sell";
  
  // Calculate levels
  const slDistance = 8 + Math.random() * 7; // 8-15 pips
  const tp1Distance = slDistance * 1.5;
  const tp2Distance = slDistance * 2.5;
  const tp3Distance = slDistance * 4;
  
  const entry = price;
  const stopLoss = direction === "buy" 
    ? price - slDistance 
    : price + slDistance;
  const takeProfits = direction === "buy"
    ? [price + tp1Distance, price + tp2Distance, price + tp3Distance]
    : [price - tp1Distance, price - tp2Distance, price - tp3Distance];
  
  // Calculate confidence based on confluence
  const confidence = Math.min(95, 60 + confluence * 5 + Math.random() * 10);
  
  // Risk percentage
  const risk = 1 + Math.random() * 1; // 1-2%
  
  // Position size (assuming $10,000 account)
  const accountSize = 10000;
  const riskAmount = accountSize * (risk / 100);
  const pipValue = 10; // Standard lot
  const positionSize = riskAmount / (slDistance * pipValue);
  
  const reasons = generateReasons(condition, zones, direction);
  
  return {
    id: `SIG-${Date.now()}`,
    direction,
    entry: parseFloat(entry.toFixed(2)),
    stopLoss: parseFloat(stopLoss.toFixed(2)),
    takeProfits: takeProfits.map(tp => parseFloat(tp.toFixed(2))),
    confidence: parseFloat(confidence.toFixed(1)),
    risk: parseFloat(risk.toFixed(1)),
    positionSize: parseFloat(positionSize.toFixed(2)),
    reasons,
    institutionalZones: zones,
    timestamp: new Date(),
    confluence,
  };
}

// Main analysis function
export function performAnalysis(): AnalysisResult {
  const price = updatePrice();
  const condition = analyzeMarketConditions();
  const zones = generateInstitutionalZones(price);
  const signal = generateSignal(price, condition, zones);
  
  return {
    condition,
    signal,
    zones,
    lastUpdate: new Date(),
  };
}

// Backtest data for performance display
export function getBacktestData(): Array<{
  time: string;
  direction: "buy" | "sell";
  entry: number;
  result: "win" | "loss";
  pnl: string;
}> {
  return [
    { time: "14:30", direction: "buy", entry: 2338.50, result: "win", pnl: "+$340" },
    { time: "12:15", direction: "sell", entry: 2345.20, result: "win", pnl: "+$520" },
    { time: "10:45", direction: "buy", entry: 2340.80, result: "loss", pnl: "-$180" },
    { time: "09:20", direction: "buy", entry: 2335.40, result: "win", pnl: "+$450" },
    { time: "08:00", direction: "sell", entry: 2348.60, result: "win", pnl: "+$280" },
    { time: "Yesterday", direction: "buy", entry: 2328.30, result: "win", pnl: "+$610" },
    { time: "Yesterday", direction: "sell", entry: 2352.10, result: "loss", pnl: "-$200" },
    { time: "Yesterday", direction: "buy", entry: 2332.70, result: "win", pnl: "+$390" },
  ];
}

// Calculate performance stats
export function getPerformanceStats(): {
  wins: number;
  losses: number;
  winRate: number;
  totalPnL: string;
} {
  const backtest = getBacktestData();
  const wins = backtest.filter(t => t.result === "win").length;
  const losses = backtest.filter(t => t.result === "loss").length;
  const winRate = (wins / backtest.length) * 100;
  
  return {
    wins,
    losses,
    winRate: parseFloat(winRate.toFixed(1)),
    totalPnL: "+$2,210",
  };
}

// AI Assistant responses
export function getAIResponse(question: string): string {
  const responses: Record<string, string> = {
    "why": "This signal was generated based on 4 confluence factors: bullish market structure, RSI divergence at a key demand zone, strong uptrend momentum, and a confirmed break of structure on the 5-minute timeframe. The setup has an 87% confidence rating.",
    "key": "Key levels to watch: Support at 2332.40 (demand zone), Resistance at 2358.60 (supply zone). The institutional order block sits at 2338.20. Stop loss is placed below the recent swing low.",
    "probability": "Yes, this is a high-probability setup. The confluence score is 4/6, and historical win rate for similar setups is 89%. The risk-to-reward ratio is 1:3.2, making it favorable for position sizing.",
    "confluence": "Confluence factors: 1) Bullish BOS on 15M, 2) Price at demand zone, 3) RSI divergence detected, 4) Lower timeframe entry trigger. All four factors align for a high-conviction trade.",
  };
  
  const key = Object.keys(responses).find(k => question.toLowerCase().includes(k));
  return key ? responses[key] : "Based on current analysis, the market shows institutional activity at key price levels. The confluence engine has identified multiple confirmations for potential entry. Always ensure proper risk management and never risk more than 2% per trade.";
}
