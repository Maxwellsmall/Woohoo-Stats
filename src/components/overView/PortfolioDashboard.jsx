import React, { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import MetricCard from './MetricCard';
import { Link } from 'react-router-dom';

export default function PortfolioDashboard() {
  const [activeTab, setActiveTab] = useState("7D")
  
  const handleHarvest = () => {
    alert('Harvesting rewards to multisig...');
  };

  const handleClaim = () => {
    alert('Claiming rewards...');
  };

  const tabs = [
    { name: "7D" },
    { name: "30D" },
    { name: "90D" },
    { name: "1Y" }
  ];

  const MetricCardData = [
    {
      id: 1,
      title: "PROFIT & LOSS",
      badgeText: "+12%",
      badgeType: "positive",
      mainValue: "+ $237.4k",
      description: "Company's profit has increased by 12% since last month, showing steady growth.",
      bottomLeftValue: "19.2%",
      bottomLeftLabel: "APR",
      bottomRightValue: "$1,500,936",
      bottomRightLabel: "Total Invested",
    },
    {
      id: 2,
      title: "TOTAL WITHDRAWN",
      badgeText: "76% Used",
      badgeType: "info",
      mainValue: "$747.5k",
      description: "The company has withdrawn 76% of its available funds, with $200k remaining for future operations.",
      bottomLeftValue: "$64,837",
      bottomLeftLabel: "Rewards to be Claimed",
      bottomRightValue: "$450,000",
      bottomRightLabel: "Active Treasury Value",
      rightButtonText: "Claim",
      onRightButtonClick: handleClaim,
    },
  ];

  return (
    <div className="p-6 md:p-10 min-h-screen space-y-6 max-w-7xl mx-auto  text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* Top Header & Time Period Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight">Portfolio Summary</h1>
          <p className="text-xs text-zinc-500 dark:text-slate-400 mt-1">Consolidated multi-chain treasury assets and DeFi yield performance</p>
        </div>
        
        {/* Time Period Selector */}
        <div className="flex items-center bg-violet-50/60 dark:bg-slate-900 border border-violet-100/80 dark:border-slate-800 rounded-full p-1 space-x-1 shadow-sm">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.name
            
            return (
              <Link 
                key={tab.name}
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.name);
                }}
                className={`font-medium text-xs px-4 py-2 rounded-full transition-all ${
                  isActive 
                  ? "bg-violet-600 text-white shadow-sm"
                  : "text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white hover:bg-violet-100/50 dark:hover:bg-slate-800"
                }`}
              >
                {tab.name}
              </Link>
            )
          })}
        </div>
      </div>

      {/* Main Treasury Banner Card */}
      <PortfolioCard 
        icon="/logo/logo.png" 
        title="Woohoo! Treasury Yield Up +12%"
        badgeText="Peak Health"
        description="All 5 protocol vaults are compounding at 19.2% APR with $64,837 ready to harvest into your Safe multisig."
        buttonText="Harvest $64.8k"
        onButtonClick={handleHarvest}
      />

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MetricCardData.map((card) => (
          <MetricCard
            key={card.id}
            title={card.title}
            badgeText={card.badgeText}
            badgeType={card.badgeType}
            mainValue={card.mainValue}
            description={card.description}
            bottomLeftValue={card.bottomLeftValue}
            bottomLeftLabel={card.bottomLeftLabel}
            bottomRightValue={card.bottomRightValue}
            bottomRightLabel={card.bottomRightLabel}
            rightButtonText={card.rightButtonText}
            onRightButtonClick={card.onRightButtonClick}
          />
        ))}
      </div>

    </div>
  );
}