import React from 'react';
import { Clock, Filter, Eye } from 'lucide-react';

interface DashboardActionsProps {
  timeRange: string;
  isFilterOpen: boolean;
  onTimeRangeChange: (timeRange: string) => void;
  onFilterToggle: (isOpen: boolean) => void;
}

const DashboardActions: React.FC<DashboardActionsProps> = ({
  timeRange,
  isFilterOpen,
  onTimeRangeChange,
  onFilterToggle
}) => {
  const handleTimeRangeClick = () => {
    const newTimeRange = timeRange === 'Last 24 hours' 
      ? 'Last 7 days' 
      : timeRange === 'Last 7 days' 
        ? 'Last 30 days' 
        : 'Last 24 hours';
    onTimeRangeChange(newTimeRange);
  };

  const handleFilterClick = () => {
    onFilterToggle(!isFilterOpen);
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