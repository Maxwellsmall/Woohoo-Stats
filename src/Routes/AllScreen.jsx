import React from "react"
import { Route, Routes } from "react-router-dom"
import Staticlayout from "../layout/StaticLayout"
import Home from"../pages/Home"
import Treasury from "../pages/Treasury"
import ManagePosition from "../pages/managePosition"
import Reports from "../pages/Reports"
import Analysis from "../pages/Analysis"
import Assets from "../pages/Assets"
import Settings from "../pages/Settings"

export default function AllScreen() {
    return (
        <Routes>
            <Route path="/" element={<Staticlayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/treasury" element={<Treasury/>}/>
                <Route path="/managePosition" element={<ManagePosition/>}/>
                <Route path="/reports" element={<Reports/>}/>
                <Route path="/analysis" element={<Analysis/>}/>
                <Route path="/assets" element={<Assets/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Route>
        </Routes>
    )
}