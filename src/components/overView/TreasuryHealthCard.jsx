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
const navigate = useNavigate()

const handleJump = () => {
  navigate("/treasury#gnosis-section")
}


  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-slate-800 font-semibold text-base">{title}</h3>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
            {status}
          </span>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500">Total Portfolio Value</span>
            <span className="font-bold text-slate-900 text-base">{totalValue}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500">Liquid Stablecoin Buffer</span>
            <span className="font-semibold text-slate-800">{liquidBuffer}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500">Est. Operational Runway</span>
            <span className="font-semibold text-emerald-600">{operationalRunway}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500">Multisig Safe Threshold</span>
            <span className="font-semibold text-indigo-600">{multisigThreshold}</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button
        onClick={handleJump}
          className="w-full py-3 px-4 rounded-xl bg-indigo-50/70 hover:bg-violet-600 hover:text-white text-indigo-600 font-medium text-sm flex items-center justify-center gap-1 transition-colors"
        >
          {buttonText}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}