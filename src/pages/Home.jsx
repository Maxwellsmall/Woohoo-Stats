import React from "react"
import ProfileCard from "../components/PortfolioDashboard"
import OpenPositionsChart from "../components/OpenPositionCharts"

export default function Home() {
    return (
        <>
            <ProfileCard/>
            <OpenPositionsChart/>
        </>
    )
}