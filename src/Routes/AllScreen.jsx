import React from "react"
import { Route, Routes } from "react-router-dom"
import Staticlayout from "../layout/StaticLayout"
import Home from"../pages/Home"
import Treasury from "../pages/Treasury"
import ManagePosition from "../pages/managePosition"


export default function AllScreen() {
    return (
        <Routes>
            <Route path="/" element={<Staticlayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/treasury" element={<Treasury/>}/>
            </Route>
        </Routes>
    )
}