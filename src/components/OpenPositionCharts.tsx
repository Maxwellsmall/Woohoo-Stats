import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Pink Sector', value: 10.9, color: '#f472b6' },
  { name: 'Blue Sector', value: 15.8, color: '#38bdf8' },
  { name: 'Purple Sector', value: 25.9, color: '#a78bfa' },
  { name: 'Green Sector', value: 23.7, color: '#a3e635' },
  { name: 'Gearbox (Active)', value: 23.7, color: '#fbbf24' },
];

export default function OpenPositionsChart() {
  return (
    <div className="max-w-7xl bg-white rounded-[24px] border border-violet-100/80 p-6 shadow-sm flex flex-col justify-between">
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-zinc-900 text-lg tracking-tight">Open Positions</h3>
          <p className="text-xs md:text-sm text-zinc-500 font-medium">
            Active liquidity deployments, yield strategies, and gauge allocations
          </p>
        </div>
        <button className="bg-violet-50 hover:bg-violet-100 text-violet-700 text-xs font-semibold px-4 py-2 rounded-xl transition-colors border border-violet-100">
          View All (8) &gt;
        </button>
      </div>

      <div className="relative h-64 w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-[11px] font-bold text-zinc-400 tracking-wider uppercase">GEARBOX</span>
          <span className="text-2xl font-extrabold text-zinc-900 font-mono tracking-tight">$381,944</span>
          <span className="text-xs font-semibold text-amber-500 mt-0.5">23.7% of total</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-violet-100/60">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-1.5 bg-violet-50/50 px-3 py-1.5 rounded-full border border-violet-100/60">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
            <span className="text-xs font-semibold text-zinc-600 font-mono">{item.value}%</span>
          </div>
        ))}
      </div>

    </div>
  );
}