import React from 'react';
import { ArrowUpRight, ArrowDownRight, ShieldAlert } from 'lucide-react';

export default function TreasurySummaryCard({
  title = "Total Treasury Balance",
  amount = "$1,674,435",
  changeText = "+12.4% this month",
  isPositive = true,
  icon: Icon = ShieldAlert,
  badge = "Multi-Chain"
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-violet-50 text-violet-600">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{title}</span>
        </div>
        <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600">
          {badge}
        </span>
      </div>

      <div>
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">{amount}</h3>
        <div className="flex items-center gap-1.5 mt-2">
          <span className={`flex items-center text-xs font-bold ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
            {isPositive ? <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> : <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />}
            {changeText}
          </span>
        </div>
      </div>
    </div>
  );
}