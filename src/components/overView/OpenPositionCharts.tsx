import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Search, ChevronRight, ArrowUpDown } from 'lucide-react';

const data = [
  { name: 'Pink Sector', value: 10.9, color: '#f472b6' },
  { name: 'Blue Sector', value: 15.8, color: '#38bdf8' },
  { name: 'Purple Sector', value: 25.9, color: '#a78bfa' },
  { name: 'Green Sector', value: 23.7, color: '#a3e635' },
  { name: 'Gearbox (Active)', value: 23.7, color: '#fbbf24' },
];

const pools = [
  { pool: "f(x) Convex Gauge for GHO-fxUSD Curve LP", protocol: "Convex & f(x) · Ethereum", invested: "$418,219", pnl: "+$42,667", apr: "11.5%", color: "bg-purple-600" },
  { pool: "Maverick Boosted Position 37", protocol: "Maverick · Arbitrum", invested: "$381,944", pnl: "+$15,019", apr: "27.8%", color: "bg-emerald-500" },
  { pool: "Gearbox Boosted Position 25", protocol: "Gearbox · Ethereum", invested: "$381,944", pnl: "+$15,019", apr: "27.8%", color: "bg-amber-400" },
  { pool: "Pendle suGDe 2025-05-29", protocol: "Pendle · Ethereum", invested: "$254,435", pnl: "+$5,596", apr: "20.7%", color: "bg-sky-400" },
  { pool: "Spectra sdeUSD-1120468904", protocol: "Spectra · Ethereum", invested: "$175,213", pnl: "+$24,454", apr: "185.4%", color: "bg-rose-500" },
];

export default function OpenPositionsSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPools = pools.filter(p => 
    p.pool.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.protocol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Open Positions</h2>
          <p className="text-xs text-slate-400 mt-0.5">Active liquidity deployments, yield strategies, and gauge allocations</p>
        </div>
        <button className="text-xs font-semibold text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/60 hover:bg-violet-100 dark:hover:bg-violet-900/60 px-4 py-2 rounded-xl transition-colors cursor-pointer">
          View All (8) &gt;
        </button>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Donut Chart Card (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
          <div className="h-64 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={75}
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    border: '1px solid #334155', 
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            
            {/* Center Label inside Donut */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Total Holdings</span>
              <span className="text-2xl font-black text-slate-900 dark:text-white mt-0.5">$1,026,932</span>
            </div>
          </div>

          {/* Color Legend Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            {data.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                <span>{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Active Positions Table (7 Columns) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Table Header Controls */}
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">5 active positions</span>
            <div className="relative w-48">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input 
                type="text" 
                placeholder="Search pool..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-8 pr-3 py-2 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-violet-500"
              />
            </div>
          </div>

          {/* Table Container */}
          <div className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4">Pool</th>
                  <th className="py-3 px-4 text-right">Invested <ArrowUpDown className="w-3 h-3 inline ml-0.5" /></th>
                  <th className="py-3 px-4 text-right">PNL <ArrowUpDown className="w-3 h-3 inline ml-0.5" /></th>
                  <th className="py-3 px-4 text-right">APR <ArrowUpDown className="w-3 h-3 inline ml-0.5" /></th>
                  <th className="py-3 px-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                {filteredPools.map((pool, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/60 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${pool.color}`} />
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white truncate max-w-[180px] md:max-w-[220px]">{pool.pool}</p>
                          <p className="text-[11px] text-slate-400">{pool.protocol}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-right font-medium text-slate-800 dark:text-slate-200">{pool.invested}</td>
                    <td className="py-3.5 px-4 text-right font-bold text-emerald-600 dark:text-emerald-400">{pool.pnl}</td>
                    <td className="py-3.5 px-4 text-right font-bold text-indigo-600 dark:text-indigo-400">{pool.apr}</td>
                    <td className="py-3.5 px-2 text-right">
                      <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-700 inline" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
  );
}