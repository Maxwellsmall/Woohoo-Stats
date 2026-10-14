import React from 'react';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function PortfolioCard({
  icon,
  title,
  badgeText,
  description,
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="w-full bg-white rounded-[24px] border border-violet-100/80 p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      
      <div className="flex items-start md:items-center space-x-4">
        <div className="h-12 w-12 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-violet-50">
          <img src={icon} alt="Card Icon" className="h-full w-full object-cover" />
        </div>
        
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-3 flex-wrap gap-y-1">
            <h3 className="font-bold text-zinc-900 text-lg tracking-tight">
              {title}
            </h3>
            {badgeText && (
              <span className="bg-emerald-50 text-emerald-600 border border-emerald-200/60 text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                {badgeText}
              </span>
            )}
          </div>
          <p className="text-xs md:text-sm text-zinc-500 font-medium">
            {description}
          </p>
        </div>
      </div>

      {/* Right side: Action Button */}
      <button 
        onClick={onButtonClick}
        className="bg-violet-600 hover:bg-violet-700 text-white font-medium text-xs md:text-sm px-5 py-2.5 rounded-xl shadow-md shadow-violet-500/20 flex items-center gap-2 shrink-0 w-full md:w-auto justify-center"
      >
        <Sparkles className="h-4 w-4 text-violet-200" />
        {buttonText}
      </button>

    </div>
  );
}