import React, { useState } from 'react';
import { Shield, Building2, CheckCircle2, Lock, Key, Bell, Sliders, Save, Check } from 'lucide-react';
import logo from "../../../public/logo/logo.png";

export default function SettingsView() {
  const [daoName, setDaoName] = useState("Woohoo Stats DAO Labs");
  const [safeAddress, setSafeAddress] = useState("0x71C4028B459aC498F5bdf25595cce29031d24f9b");
  const [webhookUrl, setWebhookUrl] = useState("https://discord.com/api/webhooks/woohoo-stats-treasury");
  
  const [notifications, setNotifications] = useState({
    yieldAlerts: true,
    quorumReminders: true,
    depegWarnings: true
  });

  const [denomination, setDenomination] = useState("USD ($) – United States Dollar");
  const [numberFormat, setNumberFormat] = useState("Compact Notation (e.g. $1.5M, +$237.4k)");
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="p-6 md:p-10 bg-slate-50 dark:bg-slate-950 min-h-screen space-y-8 max-w-7xl mx-auto pb-20 transition-colors">
      
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight">Treasury & Account Settings</h1>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200/50 dark:border-violet-800/50">
            Preferences
          </span>
        </div>
        <p className="text-xs text-zinc-400 dark:text-slate-400 mt-1">Configure multisig governance, notification alerts, and portfolio display parameters</p>
      </div>

      {/* Organization & Multisig Profile Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 space-y-8">
        
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
          <Shield className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">Organization & Multisig Profile</h2>
        </div>

        {/* Mascot Branding Banner */}
        <div className="bg-slate-50/80 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-15 w-15 rounded-[14px] overflow-hidden flex items-center justify-center shrink-0 bg-violet-50 dark:bg-slate-800">
              <img src={logo} alt="Card Icon" className="h-full w-full object-cover" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">Official Woohoo Mascot Logo</h3>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50">
                  Active Branding
                </span>
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-400 mt-0.5">Smiling orange heart mascot, green base, turquoise background, and circular “W” medal badge.</p>
            </div>
          </div>
        </div>

        {/* DAO Name & Contract Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              Organization / DAO Name
            </label>
            <input 
              type="text" 
              value={daoName}
              onChange={(e) => setDaoName(e.target.value)}
              className="w-full text-xs font-semibold bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-violet-500 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              Gnosis Safe Contract Address
            </label>
            <input 
              type="text" 
              value={safeAddress}
              onChange={(e) => setSafeAddress(e.target.value)}
              className="w-full text-xs font-mono font-medium bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-violet-500 transition-all"
            />
          </div>

        </div>

        {/* Quorum Threshold Card */}
        <div className="bg-slate-50/80 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Multi-Signature Policy: 3 of 5 confirmed threshold</p>
              <p className="text-[11px] text-slate-400 dark:text-slate-400 mt-0.5">Strict quorum required for executing treasury transfers and yield rebalancing</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Active & Validated
          </span>
        </div>

      </div>

      {/* Risk & Notification Triggers Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 space-y-8">
        
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
          <Bell className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">Risk & Notification Triggers</h2>
        </div>

        <div className="space-y-4">
          
          <div className="bg-slate-50/80 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Automatic Yield Harvest Alerts</p>
              <p className="text-[11px] text-slate-400 dark:text-slate-400 mt-0.5">Notify when claimable yield crosses $10,000 threshold across active positions</p>
            </div>
            <input 
              type="checkbox" 
              checked={notifications.yieldAlerts}
              onChange={() => setNotifications({...notifications, yieldAlerts: !notifications.yieldAlerts})}
              className="w-5 h-5 accent-violet-600 rounded cursor-pointer" 
            />
          </div>

          <div className="bg-slate-50/80 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Multisig Signature Quorum Reminders</p>
              <p className="text-[11px] text-slate-400 dark:text-slate-400 mt-0.5">Ping signers when 1 signature is needed to execute pending treasury batch</p>
            </div>
            <input 
              type="checkbox" 
              checked={notifications.quorumReminders}
              onChange={() => setNotifications({...notifications, quorumReminders: !notifications.quorumReminders})}
              className="w-5 h-5 accent-violet-600 rounded cursor-pointer" 
            />
          </div>

          <div className="bg-slate-50/80 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Protocol Depeg & Impermanent Loss Warning</p>
              <p className="text-[11px] text-slate-400 dark:text-slate-400 mt-0.5">Immediate alert if any LP pair asset drifts &gt; 0.5% from pegged oracle</p>
            </div>
            <input 
              type="checkbox" 
              checked={notifications.depegWarnings}
              onChange={() => setNotifications({...notifications, depegWarnings: !notifications.depegWarnings})}
              className="w-5 h-5 accent-violet-600 rounded cursor-pointer" 
            />
          </div>

        </div>

        <div className="space-y-2 pt-2">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Discord / Telegram Alert Webhook</label>
          <input 
            type="text" 
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            className="w-full text-xs font-mono bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-violet-500 transition-all"
          />
        </div>

      </div>

      {/* Display & Units Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 space-y-8">
        
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
          <Sliders className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">Display & Units</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Primary Reference Denomination</label>
            <select 
              value={denomination}
              onChange={(e) => setDenomination(e.target.value)}
              className="w-full text-xs font-semibold bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-violet-500 transition-all cursor-pointer"
            >
              <option className="bg-white dark:bg-slate-900">USD ($) – United States Dollar</option>
              <option className="bg-white dark:bg-slate-900">EUR (€) – Euro</option>
              <option className="bg-white dark:bg-slate-900">ETH (Ξ) – Ethereum</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Number Representation</label>
            <select 
              value={numberFormat}
              onChange={(e) => setNumberFormat(e.target.value)}
              className="w-full text-xs font-semibold bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-violet-500 transition-all cursor-pointer"
            >
              <option className="bg-white dark:bg-slate-900">Compact Notation (e.g. $1.5M, +$237.4k)</option>
              <option className="bg-white dark:bg-slate-900">Full Precision (e.g. $1,674,435.00)</option>
            </select>
          </div>

        </div>

      </div>

      <div className="flex justify-end pt-2">
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-extrabold text-white shadow-md transition-all cursor-pointer ${
            isSaved ? "bg-emerald-600" : "bg-violet-600 hover:bg-violet-700"
          }`}
        >
          {isSaved ? (
            <>
              <Check className="w-4 h-4" />
              Preferences Saved!
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              Save Treasury Preferences
            </>
          )}
        </button>
      </div>

    </div>
  );
}