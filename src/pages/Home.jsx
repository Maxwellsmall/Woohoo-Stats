import React from "react"
import ProfileCard from "../components/overView/PortfolioDashboard"
import OpenPositionsChart from "../components/overView/OpenPositionCharts"
import TreasuryOverviewGrid from "../components/overView/TreasuryOverviewGrid"

export default function Home() {
    return (
        <div className="max-w-7xl bg-slate-50 sm:px-6 lg:px-8">
            <ProfileCard/>
            <OpenPositionsChart/>
            <TreasuryOverviewGrid/>
        </div>
    )
}