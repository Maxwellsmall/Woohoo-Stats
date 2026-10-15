import React from 'react';

export default function Footer({
  brandName = "Woohoo Stats",
  tagline = "Friendly Web3 Treasury & DeFi Analytics",
  network = "Ethereum Mainnet",
  safeAddress = "Safe 0x71C4...4f9b",
  quorum = "Quorum: 3 / 5 Signers"
}) {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-4 px-6 md:px-10 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
        
        <div className="flex items-center space-x-2.5">
          <div className="h-6 w-6 rounded-full overflow-hidden flex items-center justify-center shrink-0 border border-slate-100">
            <img src="/logo/logo.png" alt="Logo" className="h-full w-full object-cover" />
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="font-bold text-slate-900">{brandName}</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-400">{tagline}</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-slate-600">
          <span>{network}</span>
          <span className="text-slate-300">·</span>
          <span>{safeAddress}</span>
          <span className="text-slate-300">·</span>
          <span>{quorum}</span>
        </div>

      </div>
    </footer>
  );
}