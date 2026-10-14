import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import MetricCard from '../components/MetricCard';

export default function PortfolioDashboard() {
  const handleHarvest = () => {
    alert('Harvesting rewards to multisig...');
  };

  const handleClaim = () => {
    alert('Claiming rewards...');
  };

  return (
    <div className="p-6 md:p-10 bg-slate-50 min-h-screen space-y-6 max-w-7xl mx-auto">
      
      <div>
        <h1 className="text-2xl font-extrabold text-zinc-900 tracking-tight">Portfolio Summary</h1>
        <p className="text-xs text-zinc-500 mt-1">Consolidated multi-chain treasury assets and DeFi yield performance</p>
      </div>

      <PortfolioCard 
        icon="/logo/logo.png" // Replace with your actual icon path
        title="Woohoo! Treasury Yield Up +12%"
        badgeText="Peak Health"
        description="All 5 protocol vaults are compounding at 19.2% APR with $64,837 ready to harvest into your Safe multisig."
        buttonText="Harvest $64.8k"
        onButtonClick={handleHarvest}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <MetricCard
          title="PROFIT & LOSS"
          badgeText="+12%"
          badgeType="positive"
          mainValue="+ $237.4k"
          description="Company's profit has increased by 12% since last month, showing steady growth."
          bottomLeftValue="19.2%"
          bottomLeftLabel="APR"
          bottomRightValue="$1,500,936"
          bottomRightLabel="Total Invested"
        />

        <MetricCard
          title="TOTAL WITHDRAWN"
          badgeText="76% Used"
          badgeType="info"
          mainValue="$747.5k"
          description="The company has withdrawn 76% of its available funds, with $200k remaining for future operations."
          bottomLeftValue="$64,837"
          bottomLeftLabel="Rewards to be Claimed"
          bottomRightValue="$450,000"
          bottomRightLabel="Active Treasury Value"
          rightButtonText="Claim"
          onRightButtonClick={handleClaim}
        />

      </div>

    </div>
  );
}