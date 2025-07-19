import { Binary, LineChart, TrendingUp, BarChart2 } from 'lucide-react';

export const strategies = [
  {
    id: 1,
    icon: Binary,
    name: "StratX StockSe",
    description: "Advanced mean reversion strategy using statistical arbitrage",
    metrics: {
      profit: 75412.50,
      winRate: 97.33,
      trades: 418,
      drawdown: 3.98,
      profitFactor: 1.157
    },
    indicators: ["RSI", "Bollinger Bands", "MACD"],
    timeframes: ["1H", "4H", "1D"],
    type: "Mean Reversion",
    tradingViewLink: "https://in.tradingview.com/script/9EbluQrG-StratX-StockSe/",
    isActive: true
  },
  {
    id: 2,
    icon: LineChart,
    name: "Vague [Credennz]",
    description: "Advanced algorithmic trading strategy with dynamic position sizing",
    metrics: {
      profit: 42500.75,
      winRate: 92.5,
      trades: 385,
      drawdown: 4.2,
      profitFactor: 1.245
    },
    indicators: ["Custom Algo", "Volume Analysis", "Price Action"],
    timeframes: ["5M", "15M", "1H"],
    type: "Algorithmic",
    tradingViewLink: "https://in.tradingview.com/script/PTY7JxuZ-Vague-Credennz/",
    isActive: true
  },
  {
    id: 3,
    icon: TrendingUp,
    name: "Credennz SLT",
    description: "Smart stop-loss and take-profit management system",
    metrics: {
      profit: 38750.25,
      winRate: 89.7,
      trades: 342,
      drawdown: 4.8,
      profitFactor: 1.182
    },
    indicators: ["Smart SL/TP", "Risk Management", "Position Sizing"],
    timeframes: ["15M", "1H", "4H"],
    type: "Risk Management",
    tradingViewLink: "https://in.tradingview.com/script/iDTmw8ts-credennz-SLT/",
    isActive: true
  },
  {
    id: 4,
    icon: BarChart2,
    name: "Smart Grid AI",
    description: "AI-powered grid trading system with dynamic position sizing",
    metrics: {
      profit: 31.8,
      winRate: 82,
      trades: 1580,
      drawdown: 9.6,
      profitFactor: 1.12
    },
    indicators: ["ML Model", "Grid Levels", "Volatility Index"],
    timeframes: ["5M", "15M", "1H"],
    type: "Grid Trading",
    isActive: true
  }
];