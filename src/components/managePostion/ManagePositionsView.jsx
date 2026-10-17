import React, { useState } from 'react';
import { Sparkles, Search, ArrowUpDown } from 'lucide-react';

export default function ManagePositionsView() {
  const [selectedTab, setSelectedTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Yield Token", "Fixed Yield", "Stable LP", "Concentrated LP", "Leveraged Credit", "Lending"];

  const positions = [
    {
      pool: "f(x) Convex Gauge for GHO-fxUSD Curve LP",
      protocol: "Convex & f(x) · Ethereum",
      category: "Stable LP",
      invested: "$418,219",
      pnl: "+$42,667",
      apr: "11.5%",
      unclaimed: "$21,550",
      color: "bg-purple-600"
    },
    {
      pool: "Maverick Boosted Position 37",
      protocol: "Maverick · Arbitrum",
      category: "Concentrated LP",
      invested: "$381,944",
      pnl: "+$15,019",
      apr: "27.8%",
      unclaimed: "$10,033",
      color: "bg-emerald-500"
    },
    {
      pool: "Gearbox Boosted Position 25",
      protocol: "Gearbox · Ethereum",
      category: "Leveraged Credit",
      invested: "$381,944",
      pnl: "+$15,019",
      apr: "27.8%",
      unclaimed: "$12,400",
      color: "bg-amber-400"
    },
    {
      pool: "Pendle suGDe 2025-05-29",
      protocol: "Pendle · Ethereum",
      category: "Yield Token",
      invested: "$254,435",
      pnl: "+$5,596",
      apr: "20.7%",
      unclaimed: "$8,210",
      color: "bg-sky-400"
    },
    {
      pool: "Spectra sdeUSD-1120468904",
      protocol: "Spectra · Ethereum",
      category: "Fixed Yield",
      invested: "$175,213",
      pnl: "+$24,454",
      apr: "185.4%",
      unclaimed: "$11,414",
      color: "bg-rose-500"
    },
  ];

  const filteredPositions = positions.filter(p => {
    const matchesTab = selectedTab === "All" || p.category === selectedTab;
    const matchesSearch = p.pool.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.protocol.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="p-6 md:p-10 bg-slate-50 dark:bg-slate-950 min-h-screen space-y-8 max-w-7xl mx-auto transition-colors">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight">Manage Investment Positions</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200/50 dark:border-violet-800/50">
              8 Strategies
            </span>
          </div>
          <p className="text-xs text-zinc-400 dark:text-slate-400 mt-1">Active yield deployments across fixed rate, boosted gauges, and liquidity venues</p>
        </div>
        
        <button 
          onClick={() => alert("Claiming all rewards...")}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-xs shadow-sm transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          Claim All Rewards ($73,607)
        </button>
      </div>

      {/* Summary Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
          <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">TOTAL DEPLOYED CAPITAL</span>
          <div className="mt-4">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">$2,191,755</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">8 active protocol vaults</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
          <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">NET REALIZED + UNREALIZED YIELD</span>
          <div className="mt-4">
            <h3 className="text-2xl font-black text-emerald-600 dark:text-emerald-400">+$133,105</h3>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">Profitable across all positions</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
          <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">VOLUME-WEIGHTED NET APR</span>
          <div className="mt-4">
            <h3 className="text-2xl font-black text-indigo-600 dark:text-indigo-400">37.7%</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Weighted across stable & boosted LP</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
          <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">UNCLAIMED YIELD ACCRUAL</span>
          <div className="mt-4">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">$73,607</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Ready to harvest to Safe</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedTab === cat
                  ? "bg-violet-600 text-white shadow-sm"
                  : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-3" />
          <input 
            type="text"
            placeholder="Search protocol or vault..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-violet-500"
          />
        </div>
      </div>

      {/* Positions Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/80 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              <th className="py-4 px-6">Pool & Protocol</th>
              <th className="py-4 px-6">Strategy Category</th>
              <th className="py-4 px-6 text-right">Invested Value <ArrowUpDown className="w-3 h-3 inline ml-0.5" /></th>
              <th className="py-4 px-6 text-right">Cumulative PNL <ArrowUpDown className="w-3 h-3 inline ml-0.5" /></th>
              <th className="py-4 px-6 text-right">Current APR <ArrowUpDown className="w-3 h-3 inline ml-0.5" /></th>
              <th className="py-4 px-6 text-right">Unclaimed Yield</th>
              <th className="py-4 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
            {filteredPositions.map((pos, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${pos.color}`} />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{pos.pool}</p>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500">{pos.protocol}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200/50 dark:border-violet-800/50">
                    {pos.category}
                  </span>
                </td>
                <td className="py-4 px-6 text-right font-semibold text-slate-800 dark:text-slate-200">{pos.invested}</td>
                <td className="py-4 px-6 text-right font-bold text-emerald-600 dark:text-emerald-400">{pos.pnl}</td>
                <td className="py-4 px-6 text-right font-bold text-indigo-600 dark:text-indigo-400">{pos.apr}</td>
                <td className="py-4 px-6 text-right font-semibold text-slate-900 dark:text-white">{pos.unclaimed}</td>
                <td className="py-4 px-6 text-center">
                  <button 
                    onClick={() => alert(`Managing position: ${pos.pool}`)}
                    className="px-4 py-1.5 rounded-xl bg-violet-50 dark:bg-slate-800 hover:bg-violet-100 dark:hover:bg-slate-700 text-violet-600 dark:text-violet-300 font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}