import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

export default function AnalysisView() {
  const [timeRange, setTimeRange] = useState("7D");

  const chartData = {
    "7D": { 
      value: "$1,674,435", 
      change: "+12% in period", 
      points: "M 0 170 Q 75 190 150 150 T 300 130 T 450 145 T 600 100 T 750 80 T 900 50 V 220 H 0 Z", 
      line: "M 0 170 Q 75 190 150 150 T 300 130 T 450 145 T 600 100 T 750 80 T 900 50",
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Today"]
    },
    "30D": { 
      value: "$1,892,400", 
      change: "+28.4% in period", 
      points: "M 0 180 Q 150 130 300 160 T 600 80 T 900 30 V 220 H 0 Z", 
      line: "M 0 180 Q 150 130 300 160 T 600 80 T 900 30",
      labels: ["Week 1", "Week 2", "Week 3", "Today"]
    },
    "90D": { 
      value: "$2,150,000", 
      change: "+54.2% in period", 
      points: "M 0 190 Q 200 110 400 140 T 700 50 T 900 20 V 220 H 0 Z", 
      line: "M 0 190 Q 200 110 400 140 T 700 50 T 900 20",
      labels: ["Month 1", "Month 2", "Month 3", "Today"]
    },
    "1Y": { 
      value: "$2,450,000", 
      change: "+95.2% in period", 
      points: "M 0 200 Q 220 90 450 120 T 750 30 T 900 10 V 220 H 0 Z", 
      line: "M 0 200 Q 220 90 450 120 T 750 30 T 900 10",
      labels: ["Q1", "Q2", "Q3", "Q4", "Today"]
    }
  };

  const currentData = chartData[timeRange];

  return (
    <div className="p-6 md:p-10 bg-slate-50 dark:bg-slate-950 min-h-screen space-y-8 max-w-7xl mx-auto transition-colors">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight">Treasury Analytics & Yield Performance</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200/50 dark:border-violet-800/50">
              Quant Feed
            </span>
          </div>
          <p className="text-xs text-zinc-400 dark:text-slate-400 mt-1">Quantitative metrics, historical portfolio trajectories, and yield analysis</p>
        </div>

        {/* Time-Range Selector Buttons */}
        <div className="flex items-center bg-white dark:bg-slate-900 p-1.5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 gap-1">
          {["7D", "30D", "90D", "1Y"].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                timeRange === range
                  ? "bg-violet-600 text-white shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Main Chart Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">TREASURY VALUE OVER TIME</span>
            <div className="flex items-center gap-3 mt-1.5">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">{currentData.value}</h2>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50">
                <TrendingUp className="w-3.5 h-3.5" />
                {currentData.change}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span className="w-2.5 h-2.5 rounded-full bg-violet-600 dark:bg-violet-500"></span>
            <span>Treasury Value (USD)</span>
          </div>
        </div>

        {/* SVG Area Chart */}
        <div className="relative w-full h-72 pt-4">
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            <div className="w-full border-b border-dashed border-slate-100 dark:border-slate-800"></div>
            <div className="w-full border-b border-dashed border-slate-100 dark:border-slate-800"></div>
            <div className="w-full border-b border-dashed border-slate-100 dark:border-slate-800"></div>
          </div>

          <svg viewBox="0 0 900 220" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            <path
              d={currentData.points}
              fill="url(#purpleGradient)"
              className="transition-all duration-500"
            />

            <path
              d={currentData.line}
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
        </div>

        <div className="flex justify-between items-center text-[11px] font-bold text-slate-400 dark:text-slate-500 pt-3 border-t border-slate-50 dark:border-slate-800">
          {currentData.labels.map((label, idx) => (
            <span key={idx}>{label}</span>
          ))}
        </div>

      </div>

      {/* Grid: Harvest History & Risk Indicators */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Monthly Yield Harvest History Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">Monthly Yield Harvest History</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Total yield realized across all vaults</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50">
              +171.2k total (6 mo)
            </span>
          </div>

          <div className="space-y-5 pt-2">
            {[
              { month: "May", amount: "$18,400", apr: "16.4% APR", width: "w-[45%]" },
              { month: "Jun", amount: "$22,100", apr: "17.8% APR", width: "w-[58%]" },
              { month: "Jul", amount: "$26,800", apr: "18.2% APR", width: "w-[70%]" },
              { month: "Aug", amount: "$31,200", apr: "18.9% APR", width: "w-[82%]" },
              { month: "Sep", amount: "$34,500", apr: "19% APR", width: "w-[90%]" },
              { month: "Oct (est)", amount: "$38,200", apr: "19.2% APR", width: "w-[98%]" },
            ].map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-700 dark:text-slate-300">{item.month}</span>
                  <div className="space-x-2">
                    <span className="font-bold text-slate-900 dark:text-white">{item.amount}</span>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500">({item.apr})</span>
                  </div>
                </div>
                <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r from-violet-600 via-indigo-500 to-amber-400 rounded-full ${item.width}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk & Performance Indicators Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 space-y-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">Risk & Performance Indicators</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Volatility, drawdown & audit exposure</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50">
              Low Risk Score
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-100/80 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Sharpe Ratio</span>
              <h4 className="text-xl font-black text-slate-900 dark:text-white mt-1">3.42</h4>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">Top 5% Web3 benchmark</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-100/80 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Max Historical Drawdown</span>
              <h4 className="text-xl font-black text-rose-600 dark:text-rose-400 mt-1">-1.84%</h4>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">Protected by stable LP</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-100/80 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Audited TVL Coverage</span>
              <h4 className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-1">100%</h4>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">CertiK / OpenZeppelin</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-100/80 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Impermanent Loss Risk</span>
              <h4 className="text-xl font-black text-slate-900 dark:text-white mt-1">0.12%</h4>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">Pegged asset pairs</p>
            </div>

          </div>

          <div className="bg-violet-50/70 dark:bg-violet-950/40 border border-violet-100 dark:border-violet-900/50 rounded-2xl p-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <span className="font-bold text-violet-700 dark:text-violet-300">Yield Engine Note:</span> The treasury portfolio operates with a 72% allocation to stablecoin or delta-neutral fixed income, ensuring that the 19.2% APR generates real capital growth without exposure to broader market volatility.
          </div>

        </div>

      </div>

    </div>
  );
}