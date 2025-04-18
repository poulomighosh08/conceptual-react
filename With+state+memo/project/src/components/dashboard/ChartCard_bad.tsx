import React from 'react';
import { ChevronDown } from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { TimeSeriesData } from '../../types';

interface ChartCardProps {
  data: TimeSeriesData;
  dropdown?: string;
  width?: string;
  timeRange: string; // <-- passed down
}

const ChartCard: React.FC<ChartCardProps> = ({ 
  data, 
  dropdown,
  width = 'w-1/2'
}) => {
  return (
    <div className={`${width} p-2`}>
      <div className="bg-white border border-gray-200 rounded-md p-4 h-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-sm font-medium text-gray-700">{data.title}</h3>
          {dropdown && (
            <button className="flex items-center gap-1 text-xs font-medium text-gray-600 border border-gray-300 rounded px-2 py-1">
              <span>{dropdown}</span>
              <ChevronDown size={14} />
            </button>
          )}
        </div>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="time" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3B82F6"
                strokeWidth={2}
                dot={{ stroke: '#3B82F6', strokeWidth: 2, r: 4, fill: 'white' }}
                activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2, fill: '#3B82F6' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;