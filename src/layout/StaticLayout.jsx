import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from "../static/Header"
import Footer from "../static/Footer"

const Staticlayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  );
}

export default Staticlayout