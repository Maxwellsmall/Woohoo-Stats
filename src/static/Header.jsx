import React from 'react';
import Logo from "../../public/logo/logo.png";
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [activeTab, setActiveTab] = React.useState("Overview")
    
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
    <header className="flex items-center justify-between bg-white px-6 py-3 border-b border-zinc-200 w-full">
      
      <div className="flex items-center space-x-3">
        <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center shrink-0">
          <img src={Logo} alt="Logo" className="h-full w-full object-cover" />
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 font-extrabold text-[17px] tracking-tight">
              <span className="text-violet-600">Woohoo</span>
              <span className="text-zinc-900">Stats</span>
            </div>
            <span className="bg-violet-100 text-violet-700 text-[11px] font-semibold px-2 py-0.5 rounded-md">
              DeFi
            </span>
          </div>
          <span className="text-xs text-zinc-400 font-medium">Treasury & Portfolio Hub</span>
        </div>
      </div>

     <nav className="flex items-center bg-violet-50/60 border border-violet-100/80 rounded-full p-1.5 space-x-1 shadow-sm">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;

          return (
            <Link
              key={tab.name}
              to={tab.href}
              onClick={() => setActiveTab(tab.name)}
              className={`font-medium text-xs px-4 py-2 rounded-full transition-all ${
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

      <div className="flex items-center space-x-3">
        <button className="relative p-2.5 rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-50 transition-colors">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 bg-amber-400 text-zinc-900 font-bold text-[10px] h-4 w-4 rounded-full flex items-center justify-center shadow-xs">
            2
          </span>
        </button>

        <div className="flex items-center space-x-2 bg-violet-50/60 border border-violet-100/80 rounded-full py-1.5 px-3">
          <div className="h-6 w-6 rounded-full overflow-hidden flex items-center justify-center shrink-0">
            <img src={Logo} alt="Profile" className="h-full w-full object-cover" />
          </div>
          <span className="text-xs font-semibold text-zinc-800 tracking-wide">
            Safe 3
          </span>
        </div>
      </div>

    </header>
  );
}