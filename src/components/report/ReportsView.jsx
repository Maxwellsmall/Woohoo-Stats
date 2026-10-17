import React, { useState } from 'react';
import { Download, Search, CheckCircle2 } from 'lucide-react';

export default function ReportsView() {
  const [selectedTab, setSelectedTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Yield Harvest", "Position Boost", "Multisig Withdrawal", "Deposit", "Token Swap"];

  const transactions = [
    {
      hash: "0x8f2a...c391",
      date: "Oct 12, 2026, 09:24 UTC",
      type: "Yield Harvest",
      protocol: "f(x) Convex Gauge",
      asset: "fxUSD / GHO",
      amount: "+$14,280.00",
      gas: "$1.42",
      status: "Completed",
      typeBg: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50"
    },
    {
      hash: "0x4e12...b990",
      date: "Oct 11, 2026, 17:40 UTC",
      type: "Position Boost",
      protocol: "Maverick Protocol",
      asset: "USDC-GHO LP",
      amount: "$120,000.00",
      gas: "$2.15",
      status: "Completed",
      typeBg: "bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 border border-violet-200/50 dark:border-violet-800/50"
    },
    {
      hash: "0x7c49...11ad",
      date: "Oct 10, 2026, 12:15 UTC",
      type: "Multisig Withdrawal",
      protocol: "Gnosis Safe 0x71C4",
      asset: "USDC",
      amount: "-$75,000.00",
      gas: "$3.80",
      status: "Completed",
      typeBg: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700"
    },
    {
      hash: "0x2d88...ee04",
      date: "Oct 09, 2026, 08:02 UTC",
      type: "Deposit",
      protocol: "Spectra Finance",
      asset: "sdeUSD",
      amount: "+$50,000.00",
      gas: "$2.90",
      status: "Completed",
      typeBg: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50"
    },
    {
      hash: "0x99a3...3b44",
      date: "Oct 08, 2026, 14:10 UTC",
      type: "Token Swap",
      protocol: "Curve Finance",
      asset: "USDT / USDC",
      amount: "$100,000.00",
      gas: "$1.85",
      status: "Completed",
      typeBg: "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/50 dark:border-amber-800/50"
    },
  ];

  const filteredTransactions = transactions.filter(tx => {
    const matchesTab = selectedTab === "All" || tx.type === selectedTab;
    const matchesSearch = tx.hash.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tx.protocol.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tx.asset.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="p-6 md:p-10 bg-slate-50 dark:bg-slate-950 min-h-screen space-y-8 max-w-7xl mx-auto transition-colors">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight">Reports & Transactions</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200/50 dark:border-violet-800/50">
              Ledger
            </span>
          </div>
          <p className="text-xs text-zinc-400 dark:text-slate-400 mt-1">Audit-grade on-chain ledger of all deposits, harvests, and multi-sig executions</p>
        </div>
        
        <button 
          onClick={() => alert("Exporting CSV Ledger...")}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-xs shadow-sm transition-all cursor-pointer"
        >
          <Download className="w-4 h-4" />
          Export CSV Ledger
        </button>
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
            placeholder="Search hash, asset, or pool..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-violet-500"
          />
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/80 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              <th className="py-4 px-6">Date & Hash</th>
              <th className="py-4 px-6">Type</th>
              <th className="py-4 px-6">Protocol / Target</th>
              <th className="py-4 px-6">Asset</th>
              <th className="py-4 px-6 text-right">Amount</th>
              <th className="py-4 px-6 text-right">Gas Fee</th>
              <th className="py-4 px-6 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
            {filteredTransactions.map((tx, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="py-4 px-6">
                  <p className="font-mono font-bold text-slate-900 dark:text-white">{tx.hash}</p>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500">{tx.date}</p>
                </td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tx.typeBg}`}>
                    {tx.type}
                  </span>
                </td>
                <td className="py-4 px-6 font-semibold text-slate-800 dark:text-slate-200">{tx.protocol}</td>
                <td className="py-4 px-6 font-mono text-slate-500 dark:text-slate-400">{tx.asset}</td>
                <td className={`py-4 px-6 text-right font-bold ${
                  tx.amount.startsWith('-') 
                    ? 'text-rose-600 dark:text-rose-400' 
                    : 'text-slate-900 dark:text-white'
                }`}>
                  {tx.amount}
                </td>
                <td className="py-4 px-6 text-right font-mono text-slate-400 dark:text-slate-500">{tx.gas}</td>
                <td className="py-4 px-6 text-right">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}