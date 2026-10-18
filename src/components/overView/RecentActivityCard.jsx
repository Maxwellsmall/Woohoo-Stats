import React from 'react';
import { Activity, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function RecentActivityCard({
  title = "Recent Treasury Activity",
  badge = "On-Chain",
  activities = [
    {
      title: "Yield Harvest",
      subtitle: "f(x) Convex Gauge · 2 hours ago",
      amount: "+$14,280.00",
      subtext: "0x8f2a...c391",
      isPositive: true,
    },
    {
      title: "Position Boost",
      subtitle: "Maverick Protocol · 18 hours ago",
      amount: "$120,000.00",
      subtext: "0x4e12...b990",
      isPositive: true,
    },
    {
      title: "Multisig Withdrawal",
      subtitle: "Gnosis Safe 0x71C4 · 2 days ago",
      amount: "-$75,000.00",
      subtext: "0x7c49...11ad",
      isPositive: false,
    },
  ],
  buttonText = "Full Transaction History",
}) {
  const navigate = useNavigate();

  const handleJump = () => {
    navigate("/treasury#gnosis-section");
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between h-full transition-colors">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-slate-800 dark:text-white font-semibold text-base">{title}</h3>
          </div>
          <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{badge}</span>
        </div>

        <div className="space-y-4">
          {activities.map((act, index) => (
            <div 
              key={index} 
              className="flex justify-between items-start pb-3 border-b border-slate-50 dark:border-slate-800/80 last:border-0 last:pb-0"
            >
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{act.title}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{act.subtitle}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-bold ${
                  act.isPositive 
                    ? 'text-emerald-600 dark:text-emerald-400' 
                    : 'text-rose-600 dark:text-rose-400'
                }`}>
                  {act.amount}
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{act.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handleJump}
          className="w-full py-3 px-4 rounded-xl bg-violet-50/70 dark:bg-slate-800 hover:bg-violet-600 hover:text-white text-violet-600 dark:text-violet-300 font-medium text-sm flex items-center justify-center gap-1 transition-colors cursor-pointer"
        >
          {buttonText}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}