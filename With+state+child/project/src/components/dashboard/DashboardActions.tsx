import React, { useState } from 'react';
import { Clock, Filter, Eye } from 'lucide-react';

const DashboardActions: React.FC = () => {
  const [timeRange, setTimeRange] = useState('Last 24 hours');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleTimeRangeClick = () => {
    const newTimeRange = timeRange === 'Last 24 hours' 
      ? 'Last 7 days' 
      : timeRange === 'Last 7 days' 
        ? 'Last 30 days' 
        : 'Last 24 hours';
    setTimeRange(newTimeRange);
    // Problem: No way to update charts and metrics!
  };

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
    // Problem: Cannot filter data in other components!
  };

  return (
    <div className="flex justify-between items-center px-6 py-4">
      <div className="text-xl font-medium text-gray-800">Overview</div>
      
      <div className="flex items-center gap-3">
        <button 
          onClick={handleTimeRangeClick}
          className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          <Clock size={16} />
          <span>{timeRange}</span>
        </button>
        
        <button 
          onClick={handleFilterClick}
          className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium ${
            isFilterOpen 
              ? 'text-blue-600 border-blue-600 bg-blue-50' 
              : 'text-gray-700 border-gray-300 hover:bg-gray-50'
          } border rounded-md`}
        >
          <Filter size={16} />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
};

export const LogsHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4">
      <div className="text-lg font-medium text-gray-800">Logs summary</div>
      
      <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800">
        <Eye size={16} />
        <span>View all logs</span>
      </button>
    </div>
  );
};

export default DashboardActions;