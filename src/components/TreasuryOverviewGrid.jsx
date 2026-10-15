
import TreasuryHealthCard from '../components/TreasuryHealthCard';
import AssetClassBreakdownCard from '../components/AssetClassBreakdownCard';
import RecentActivityCard from '../components/RecentActivityCard';


export default function TreasuryOverviewGrid() {
    return (
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
        <TreasuryHealthCard 
          title="Treasury Reserve Health"
          status="Healthy"
          totalValue="$1,674,435"
          liquidBuffer="$447,503"
          operationalRunway="43.5 months"
          multisigThreshold="3 / 5 Signers"
          buttonText="Explore Treasury Breakdown"
          onButtonClick={() => alert("Exploring Treasury...")}
        />
        <AssetClassBreakdownCard 
    onButtonClick={() => alert("Managing Assets...")}
  />
  <RecentActivityCard 
    onButtonClick={() => alert("Viewing Full History...")}
  />
      </div>
    )
}