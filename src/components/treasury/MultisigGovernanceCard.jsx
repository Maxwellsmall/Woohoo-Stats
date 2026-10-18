import React from 'react';
import { Shield, CheckCircle2, Clock } from 'lucide-react';

export default function MultisigGovernanceCard() {
  const signers = [
    { name: "Treasury Core 1", address: "0x71C4...4f9b", role: "Treasury Lead", status: "Confirmed" },
    { name: "DeFi Risk Committee", address: "0x889a...2e10", role: "Risk Analyst", status: "Confirmed" },
    { name: "DAO Operations", address: "0x334b...110a", role: "Operations", status: "Confirmed" },
    { name: "Governance Guardian", address: "0xfe12...99ca", role: "Council", status: "Pending" },
    { name: "Security Multi-sig", address: "0x992c...aa55", role: "Security", status: "Pending" },
  ];

  return (
    <div id='gnosis-section' className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Gnosis Safe Multisig Governance</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Requires 3 of 5 signature threshold for execution of any treasury rebalancing or transfer</p>
          </div>
        </div>
        
        {/* Quorum Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold border border-emerald-200/60 dark:border-emerald-800/60">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Threshold Quorum: 3 / 5
        </div>
      </div>

      {/* Table Container */}
      <div className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/80 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              <th className="py-3 px-6">Signer Name</th>
              <th className="py-3 px-6">Address</th>
              <th className="py-3 px-6">Role</th>
              <th className="py-3 px-6 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-xs">
            {signers.map((signer, idx) => {
              const isConfirmed = signer.status === "Confirmed";
              return (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate-900 dark:text-slate-100">{signer.name}</td>
                  <td className="py-4 px-6 font-mono text-slate-500 dark:text-slate-400">{signer.address}</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-300 font-medium">{signer.role}</td>
                  <td className="py-4 px-6 text-right">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                      isConfirmed 
                        ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50" 
                        : "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/50 dark:border-amber-800/50"
                    }`}>
                      {isConfirmed ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                      {signer.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}