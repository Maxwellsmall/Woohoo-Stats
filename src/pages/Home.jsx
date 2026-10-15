import React from "react"
import ProfileCard from "../components/PortfolioDashboard"
import OpenPositionsChart from "../components/OpenPositionCharts"
import TreasuryOverviewGrid from "../components/TreasuryOverviewGrid"

export default function Home() {
    return (
        <div className="max-w-7xl bg-slate-50 sm:px-6 lg:px-8">
            <ProfileCard/>
            <OpenPositionsChart/>
            <TreasuryOverviewGrid/>
        </div>
    )
}