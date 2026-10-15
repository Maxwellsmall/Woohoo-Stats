import React from 'react';
import { Layers, ExternalLink } from 'lucide-react';

export default function VaultAllocationCard({
  protocolName = "Convex & f(x) Vault",
  chain = "Ethereum Mainnet",
  stakedAmount = "$418,219",
  apr = "11.5% APR",
  sharePercentage = 25.0,
  barColor = "bg-purple-600",
  onActionClick
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs">
            {protocolName.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">{protocolName}</h4>
            <p className="text-xs text-slate-400 mt-0.5">{chain}</p>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-600">
          {apr}
        </span>
      </div>

      <div className="flex justify-between items-end pt-2">
        <div>
          <p className="text-[11px] font-semibold text-slate-400 uppercase">Staked Value</p>
          <p className="text-lg font-extrabold text-slate-900 mt-0.5">{stakedAmount}</p>
        </div>
        <div className="text-right">
          <p className="text-[11px] font-semibold text-slate-400 uppercase">Pool Share</p>
          <p className="text-sm font-bold text-slate-700 mt-0.5">{sharePercentage}%</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${barColor}`} style={{ width: `${sharePercentage}%` }} />
      </div>

      <button
        onClick={onActionClick}
        className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors mt-2"
      >
        <span>Manage Position</span>
        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
      </button>
    </div>
  );
}