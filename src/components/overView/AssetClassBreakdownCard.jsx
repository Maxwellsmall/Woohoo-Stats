import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AssetClassBreakdownCard({
  title = "Asset Class Breakdown",
  classCount = "4 Classes",
  items = [
    { name: "Yield Bearer & Fixed Income", percentage: 40.8, color: "bg-red-500", textColor: "text-red-500" },
    { name: "Stablecoin Reserves (Liquid)", percentage: 26.7, color: "bg-emerald-500", textColor: "text-emerald-600" },
    { name: "Boosted LP & DEX Liquidity", percentage: 25.0, color: "bg-violet-600", textColor: "text-violet-600" },
    { name: "Strategic DAO Tokens & Staking", percentage: 7.5, color: "bg-amber-500", textColor: "text-amber-600" },
  ],
  buttonText = "Manage Supported Assets",
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
            <div className="p-1.5 rounded-lg bg-violet-50 text-violet-600">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-slate-800 font-semibold text-base">{title}</h3>
          </div>
          <span className="text-xs font-medium text-slate-400">{classCount}</span>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600 font-medium">{item.name}</span>
                <span className={`font-semibold ${item.textColor}`}>{item.percentage}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${item.color}`} 
                  style={{ width: `${item.percentage}%` }}
                />
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