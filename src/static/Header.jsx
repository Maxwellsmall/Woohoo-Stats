import React, { useState } from 'react';
import Logo from "../../public/logo/logo.png";
import { Bell, Menu, X, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const location = useLocation();
    const currentBasePath = location.pathname.split('#')[0]; 
    
    const tabs = [
      { name: "Overview", href: "/" },
      // { name: "Treasury", href: "/treasury" },
      // { name: "Manage Positions", href: "/managePosition" },
      { name: "Reports", href: "/reports" },
      { name: "Analysis", href: "/analysis" },
      // { name: "Assets", href: "/assets" },
      // { name: "Settings", href: "/settings" },
    ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white dark:bg-slate-900 px-3 sm:px-4 md:px-6 py-3 border-b border-zinc-200 dark:border-slate-800 w-full transition-colors">
      
      {/* Logo & Title */}
      <div className="flex items-center space-x-2.5 sm:space-x-3">
        <div className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full overflow-hidden flex items-center justify-center shrink-0 border border-zinc-200 dark:border-slate-700">
          <img src={Logo} alt="Logo" className="h-full w-full object-cover" />
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <div className="flex items-center space-x-1 font-extrabold text-sm sm:text-base md:text-[17px] tracking-tight">
              <span className="text-violet-600 dark:text-violet-400">Woohoo</span>
              <span className="text-zinc-900 dark:text-white">Stats</span>
            </div>
            <span className="bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300 text-[9px] sm:text-[10px] md:text-[11px] font-semibold px-1.5 py-0.5 rounded-md border border-violet-200/50 dark:border-violet-800/50">
              DeFi
            </span>
          </div>
          <span className="hidden sm:inline-block text-xs text-zinc-400 dark:text-slate-400 font-medium">
            Treasury & Portfolio Hub
          </span>
        </div>
      </div>

      {/* Desktop Navigation Tabs */}
      <nav className="hidden lg:flex items-center bg-violet-50/60 dark:bg-slate-800/60 border border-violet-100/80 dark:border-slate-700/80 rounded-full p-1.5 space-x-1 shadow-sm">
        {tabs.map((tab) => {
          const isActive = tab.href === "/"
            ? currentBasePath === "/" || currentBasePath === ''
            : currentBasePath === tab.href;

          return (
            <Link
              key={tab.name}
              to={tab.href}
              className={`font-medium text-xs px-3 xl:px-4 py-2 rounded-full transition-all ${
                isActive
                  ? "bg-violet-600 text-white shadow-sm"
                  : "text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white hover:bg-violet-100/50 dark:hover:bg-slate-700/50" 
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </nav>

      {/* Right Controls */}
      <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3">
        
        {/* Theme Toggle Button (Visible on all screens) */}
        <button
          onClick={toggleTheme}
          className="p-2 sm:p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 border border-slate-200 dark:border-slate-700 hover:scale-105 transition-all cursor-pointer"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
          ) : (
            <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" />
          )}
        </button>

        {/* Notifications Bell */}
        <button className="relative p-2 sm:p-2.5 rounded-full border border-zinc-200 dark:border-slate-700 text-zinc-600 dark:text-slate-300 hover:bg-zinc-50 dark:hover:bg-slate-800 transition-colors">
          <Bell className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span className="absolute -top-1 -right-1 bg-amber-400 text-zinc-900 font-bold text-[9px] sm:text-[10px] h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full flex items-center justify-center shadow-xs">
            2
          </span>
        </button>

        {/* Safe 3 Profile Badge (Hidden on mobile screens to save space) */}
        <div className="hidden md:flex items-center space-x-2 bg-violet-50/60 dark:bg-slate-800/60 border border-violet-100/80 dark:border-slate-700/80 rounded-full py-1.5 px-3">
          <div className="h-6 w-6 rounded-full overflow-hidden flex items-center justify-center shrink-0">
            <img src={Logo} alt="Profile" className="h-full w-full object-cover" />
          </div>
          <span className="text-xs font-semibold text-zinc-800 dark:text-slate-200 tracking-wide">
            Safe 3
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg border border-zinc-200 dark:border-slate-700 text-zinc-700 dark:text-slate-200 hover:bg-zinc-50 dark:hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-zinc-200 dark:border-slate-800 shadow-lg py-4 px-6 flex flex-col space-y-2 lg:hidden animate-in fade-in slide-in-from-top-2 duration-150">
          {tabs.map((tab) => {
            const isActive = tab.href === "/"
              ? currentBasePath === "/" || currentBasePath === ''
              : currentBasePath === tab.href;

            return (
              <Link
                key={tab.name}
                to={tab.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium text-sm px-4 py-2.5 rounded-xl transition-all ${
                  isActive
                    ? "bg-violet-600 text-white shadow-sm"
                    : "text-zinc-600 dark:text-slate-300 hover:bg-violet-50 dark:hover:bg-slate-800 hover:text-violet-900 dark:hover:text-white" 
                }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      )}

    </header>
  );
}