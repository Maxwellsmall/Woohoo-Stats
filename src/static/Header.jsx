import React, { useState } from 'react';
import Logo from "../../public/logo/logo.png";
import { Bell, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const location = useLocation();
    const currentBasePath = location.pathname.split('#')[0]; 
    
    const tabs = [
      { name: "Overview", href: "/" },
      { name: "Treasury", href: "/treasury" },
      { name: "Manage Positions", href: "/managePosition" },
      { name: "Reports", href: "/reports" },
      { name: "Analysis", href: "/analysis" },
      { name: "Assets", href: "/assets" },
      { name: "Settings", href: "/settings" },
    ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 md:px-6 py-3 border-b border-zinc-200 w-full">
      
      {/* Left: Brand Logo & Title */}
      <div className="flex items-center space-x-3">
        <div className="h-9 w-9 md:h-10 md:w-10 rounded-full overflow-hidden flex items-center justify-center shrink-0">
          <img src={Logo} alt="Logo" className="h-full w-full object-cover" />
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 font-extrabold text-base md:text-[17px] tracking-tight">
              <span className="text-violet-600">Woohoo</span>
              <span className="text-zinc-900">Stats</span>
            </div>
            <span className="bg-violet-100 text-violet-700 text-[10px] md:text-[11px] font-semibold px-1.5 py-0.5 rounded-md">
              DeFi
            </span>
          </div>
          <span className="hidden sm:inline-block text-xs text-zinc-400 font-medium">
            Treasury & Portfolio Hub
          </span>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex items-center bg-violet-50/60 border border-violet-100/80 rounded-full p-1.5 space-x-1 shadow-sm">
        {tabs.map((tab) => {
          // Pure route-based active check (no conflicting state)
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
                  : "text-zinc-600 hover:text-zinc-900" 
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </nav>

      {/* Right Actions: Notifications, Profile, & Mobile Menu Trigger */}
      <div className="flex items-center space-x-2 md:space-x-3">
        <button className="relative p-2 md:p-2.5 rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-50 transition-colors">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 bg-amber-400 text-zinc-900 font-bold text-[10px] h-4 w-4 rounded-full flex items-center justify-center shadow-xs">
            2
          </span>
        </button>

        <div className="hidden sm:flex items-center space-x-2 bg-violet-50/60 border border-violet-100/80 rounded-full py-1.5 px-3">
          <div className="h-6 w-6 rounded-full overflow-hidden flex items-center justify-center shrink-0">
            <img src={Logo} alt="Profile" className="h-full w-full object-cover" />
          </div>
          <span className="text-xs font-semibold text-zinc-800 tracking-wide">
            Safe 3
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-50 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-zinc-200 shadow-lg py-4 px-6 flex flex-col space-y-2 lg:hidden animate-in fade-in slide-in-from-top-2 duration-150">
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
                    : "text-zinc-600 hover:bg-violet-50 hover:text-violet-900" 
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