import React from 'react';
import { Activity, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate()

  const handleJump = () => {
    navigate("/treasury#gnosis-section")
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-slate-800 font-semibold text-base">{title}</h3>
          </div>
          <span className="text-xs font-medium text-slate-400">{badge}</span>
        </div>

        <div className="space-y-4">
          {activities.map((act, index) => (
            <div key={index} className="flex justify-between items-start pb-3 border-b border-slate-50 last:border-0 last:pb-0">
              <div>
                <p className="text-sm font-semibold text-slate-800">{act.title}</p>
                <p className="text-xs text-slate-400 mt-0.5">{act.subtitle}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-bold ${act.isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {act.amount}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{act.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <button
        onClick={handleJump}
          className="w-full py-3 px-4 rounded-xl bg-violet-50/70 hover:bg-violet-600 hover:text-white text-violet-600 font-medium text-sm flex items-center justify-center gap-1 transition-colors"
        >
          {buttonText}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}