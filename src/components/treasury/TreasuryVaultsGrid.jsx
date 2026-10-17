import React from 'react';
import TreasurySummaryCard from '../treasury/TreasurySummaryCard';
import MultiChainCard from '../treasury/MultiChainCard';
import AssetClassBreakdownCard from '../overView/AssetClassBreakdownCard';
import { ShieldCheck, Coins, Flame, Clock } from 'lucide-react';
import MultisigGovernanceCard from '../treasury/MultisigGovernanceCard';

export default function Treasury() {
  return (
    <div className="p-6 md:p-10 bg-slate-50 dark:bg-slate-950 min-h-screen space-y-8 max-w-7xl mx-auto transition-colors">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight">Treasury Balances & Multisig</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200/50 dark:border-violet-800/50">
              Woohoo Vault
            </span>
          </div>
          <p className="text-xs text-zinc-400 dark:text-slate-400 mt-1">Real-time balance breakdown across protocol safes and networks</p>
        </div>
        
        {/* Safe Address Badge */}
        <div className="flex items-center space-x-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-1.5 shadow-xs">
          <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">0x71C4...4f9b</span>
        </div>
      </div>

      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <TreasurySummaryCard 
          title="TOTAL TREASURY NET WORTH"
          amount="$1,674,435"
          changeText="+12.4% vs last cycle"
          isPositive={true}
          badge=""
        />
        <TreasurySummaryCard 
          title="LIQUID STABLECOIN RESERVE"
          amount="$447,503"
          changeText="Instant liquidity for operations"
          isPositive={true}
          badge=""
        />
        <TreasurySummaryCard 
          title="MONTHLY NET BURN"
          amount="$38,500"
          changeText="Contributors & infrastructure"
          isPositive={true}
          badge=""
        />
        <TreasurySummaryCard 
          title="TREASURY RUNWAY"
          amount="43.5 Months"
          changeText="Healthy 3.6-year operating horizon"
          isPositive={true}
          badge=""
        />
      </div>

      {/* Mid Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MultiChainCard />
        <AssetClassBreakdownCard 
          title="Asset Class Allocation"
          classCount="Balanced"
          onButtonClick={() => alert("Managing Assets...")}
        />
      </div>

      {/* Multisig Governance Section */}
      <MultisigGovernanceCard />

    </div>
  );
}