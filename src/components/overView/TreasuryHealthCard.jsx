import React from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TreasuryHealthCard({
  title = "Treasury Reserve Health",
  status = "Healthy",
  totalValue = "$1,674,435",
  liquidBuffer = "$447,503",
  operationalRunway = "43.5 months",
  multisigThreshold = "3 / 5 Signers",
  buttonText = "Explore Treasury Breakdown",
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
            <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-slate-800 dark:text-white font-semibold text-base">{title}</h3>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
            {status}
          </span>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 dark:text-slate-400">Total Portfolio Value</span>
            <span className="font-bold text-slate-900 dark:text-white text-base">{totalValue}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 dark:text-slate-400">Liquid Stablecoin Buffer</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">{liquidBuffer}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 dark:text-slate-400">Est. Operational Runway</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">{operationalRunway}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 dark:text-slate-400">Multisig Safe Threshold</span>
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">{multisigThreshold}</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handleJump}
          className="w-full py-3 px-4 rounded-xl bg-indigo-50/70 dark:bg-slate-800 hover:bg-violet-600 hover:text-white text-indigo-600 dark:text-indigo-300 font-medium text-sm flex items-center justify-center gap-1 transition-colors cursor-pointer"
        >
          {buttonText}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}