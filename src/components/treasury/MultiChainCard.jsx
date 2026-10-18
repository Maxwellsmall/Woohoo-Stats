import React from 'react';

export default function MultiChainCard() {
  const chains = [
    { name: "Ethereum Mainnet", amount: "$1,142,800", percent: 68.2, color: "bg-blue-600" },
    { name: "Arbitrum One", amount: "$326,400", percent: 19.5, color: "bg-blue-500" },
    { name: "Base", amount: "$145,235", percent: 8.7, color: "bg-blue-400" },
    { name: "Optimism", amount: "$60,000", percent: 3.6, color: "bg-rose-500" },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between transition-colors">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Multi-Chain Deployment</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Balances settled on verified networks</p>
          </div>
          <span className="text-xs font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/60 px-3 py-1 rounded-full border border-violet-100 dark:border-violet-900/50">
            4 Chains
          </span>
        </div>

        {/* Chain List & Progress Bars */}
        <div className="space-y-5">
          {chains.map((chain, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{chain.name}</span>
                <div className="text-right">
                  <span className="font-extrabold text-slate-900 dark:text-white mr-2">{chain.amount}</span>
                  <span className="text-xs text-slate-400 dark:text-slate-500">({chain.percent}%)</span>
                </div>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${chain.color}`} 
                  style={{ width: `${chain.percent}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}