import React from 'react';

export default function MetricCard({
  title,
  badgeText,
  badgeType = 'positive', 
  mainValue,
  description,
  bottomLeftLabel,
  bottomLeftValue,
  bottomRightLabel,
  bottomRightValue,
  onRightButtonClick,
  rightButtonText,
}) {
  return (
    <div className="w-full bg-white rounded-[24px] border border-violet-100/80 p-6 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold text-zinc-400 tracking-wider uppercase">
            {title}
          </span>
          {badgeText && (
            <span
              className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 border ${
                badgeType === 'positive'
                  ? 'bg-emerald-50 text-emerald-600 border-emerald-200/60'
                  : 'bg-violet-50 text-violet-600 border-violet-200/60'
              }`}
            >
              {badgeType === 'positive' && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>}
              {badgeText}
            </span>
          )}
        </div>

        <div className="text-3xl font-extrabold text-zinc-900 mb-2 font-mono tracking-tight">
          {mainValue}
        </div>

        <p className="text-xs md:text-sm text-zinc-500 font-medium leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="pt-4 border-t border-violet-100/60 grid grid-cols-2 gap-4">
        {bottomLeftValue && (
          <div className="bg-violet-50/50 rounded-2xl p-3.5 border border-violet-100/60">
            <div className="text-lg font-bold text-violet-700 font-mono">
              {bottomLeftValue}
            </div>
            <div className="text-[11px] font-medium text-zinc-400 uppercase tracking-wide mt-0.5">
              {bottomLeftLabel}
            </div>
          </div>
        )}

        {bottomRightValue && (
          <div className="bg-zinc-50/80 rounded-2xl p-3.5 border border-zinc-100 flex items-center justify-between">
            <div>
              <div className="text-base font-bold text-zinc-900 font-mono">
                {bottomRightValue}
              </div>
              <div className="text-[11px] font-medium text-zinc-400 uppercase tracking-wide mt-0.5">
                {bottomRightLabel}
              </div>
            </div>
            {rightButtonText && (
              <button
                onClick={onRightButtonClick}
                className="bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold px-3 py-1.5 rounded-xl transition-colors shadow-sm flex items-center gap-1"
              >
                ✨ {rightButtonText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}