import React, { useState } from 'react';
import { Search, TrendingUp } from 'lucide-react';

export default function AssetsView() {
  const [selectedTab, setSelectedTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Stablecoin", "Yield Asset", "Fixed Yield", "Liquid Staking", "Governance"];

  const assets = [
    {
      name: "USD Coin",
      symbol: "USDC",
      category: "Stablecoin",
      categoryBg: "bg-slate-100 text-slate-700",
      price: "$1.00",
      change: "+0.01%",
      balance: "447,503.20 USDC",
      value: "$447,503",
      share: "26.7%",
      iconBg: "bg-blue-600 text-white"
    },
    {
      name: "Aave GHO Stablecoin",
      symbol: "GHO",
      category: "Stablecoin",
      categoryBg: "bg-slate-100 text-slate-700",
      price: "$0.999",
      change: "+0.05%",
      balance: "315,000.00 GHO",
      value: "$314,685",
      share: "18.8%",
      iconBg: "bg-violet-600 text-white"
    },
    {
      name: "Pendle suGDe 2025",
      symbol: "suGDe",
      category: "Fixed Yield",
      categoryBg: "bg-violet-50 text-violet-700",
      price: "$1.022",
      change: "+0.03%",
      balance: "254,435.00 suGDe",
      value: "$260,032",
      share: "15.5%",
      iconBg: "bg-cyan-600 text-white"
    },
    {
      name: "Spectra Elixir USD",
      symbol: "sdeUSD",
      category: "Yield Asset",
      categoryBg: "bg-blue-50 text-blue-700",
      price: "$1.14",
      change: "+0.12%",
      balance: "175,213.00 sdeUSD",
      value: "$199,667",
      share: "11.9%",
      iconBg: "bg-rose-600 text-white"
    },
     {
      name: "Lido Staked Eth",
      symbol: "stETH",
      category: "Liquid Staking",
      categoryBg: "bg-blue-50 text-blue-700",
      price: "$2,640.50",
      change: "+2.8%",
      balance: "68.45 stETH",
      value: "$180,742",
      share: "10.8%",
      iconBg: "bg-cyan-600 text-white"
    },
     {
      name: "f(x) Protocol Stable",
      symbol: "fxUSD",
      category: "Stable LP",
      categoryBg: "bg-blue-50 text-blue-700",
      price: "$1.001",
      change: "-0.02%",
      balance: "103,219.00 fxUSD",
      value: "$103, 322",
      share: "6.2%",
      iconBg: "bg-violet-600 text-white"
    },
     {
      name: "Wrapped Ether",
      symbol: "WETH",
      category: "Native Reserve",
      categoryBg: "bg-blue-50 text-blue-700",
      price: "$2,638.10",
      change: "+2.78%",
      balance: "32.10 WETH",
      value: "$84,638",
      share: "5.1%",
      iconBg: "bg-cyan-600 text-white"
    },
     {
      name: "Pendle Token",
      symbol: "PENDLE",
      category: "Governance",
      categoryBg: "bg-blue-50 text-blue-700",
      price: "$4.82",
      change: "+5.40%",
      balance: "12,850.00 PENDLE",
      value: "$61,931",
      share: "3.7%",
      iconBg: "bg-cyan-700 text-white"
    },
     {
      name: "Curve DAO Token",
      symbol: "CRV",
      category: "Governance",
      categoryBg: "bg-blue-50 text-blue-700",
      price: "$0.77",
      change: "+1.15%",
      balance: "28,400.00 CRV",
      value: "$21,868",
      share: "1.3%",
      iconBg: "bg-rose-500 text-white"
    }
  ];

  const filteredAssets = assets.filter(asset => {
    const matchesTab = selectedTab === "All" || asset.category === selectedTab;
    const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          asset.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="p-6 md:p-10 bg-slate-50 min-h-screen space-y-8 max-w-7xl mx-auto">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-zinc-900 tracking-tight">Supported Tokens & Assets</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-100 text-violet-700">9 Tokens</span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">Real-time oracle pricing, treasury balances, and portfolio weights</p>
        </div>

        <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-end">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Asset Valuation</span>
          <span className="text-xl font-black text-slate-900 mt-0.5">$1,674,439</span>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedTab === cat
                  ? "bg-violet-600 text-white shadow-sm"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input 
            type="text"
            placeholder="Search symbol or name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-slate-800 focus:outline-none focus:border-violet-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <th className="py-4 px-6">Asset</th>
              <th className="py-4 px-6">Category</th>
              <th className="py-4 px-6">Oracle Price ↕</th>
              <th className="py-4 px-6">24h Change</th>
              <th className="py-4 px-6">Balance</th>
              <th className="py-4 px-6 text-right">Treasury Value ↕</th>
              <th className="py-4 px-6 text-right">Portfolio Share</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {filteredAssets.map((asset, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6 flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs shadow-sm ${asset.iconBg}`}>
                    {asset.symbol.slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-extrabold text-slate-900">{asset.name}</p>
                    <p className="text-[11px] text-slate-400 font-mono">{asset.symbol}</p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${asset.categoryBg}`}>
                    {asset.category}
                  </span>
                </td>
                <td className="py-4 px-6 font-mono font-bold text-slate-800">{asset.price}</td>
                <td className="py-4 px-6 font-semibold text-emerald-600 flex items-center gap-1 pt-5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {asset.change}
                </td>
                <td className="py-4 px-6 font-mono text-slate-600">{asset.balance}</td>
                <td className="py-4 px-6 text-right font-extrabold text-slate-900">{asset.value}</td>
                <td className="py-4 px-6 text-right font-bold text-violet-600">{asset.share}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}