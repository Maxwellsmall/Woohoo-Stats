import React from "react"
import { Route, Routes } from "react-router-dom"
import Staticlayout from "../layout/StaticLayout"
import Home from"../pages/Home"
import Treasury from "../pages/Treasury"
import ManagePosition from "../pages/managePosition"
import Reports from "../pages/Reports"

export default function AllScreen() {
    return (
        <Routes>
            <Route path="/" element={<Staticlayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/treasury" element={<Treasury/>}/>
                <Route path="/managePosition" element={<ManagePosition/>}/>
                <Route path="/reports" element={<Reports/>}/>
            </Route>
        </Routes>
    )
}