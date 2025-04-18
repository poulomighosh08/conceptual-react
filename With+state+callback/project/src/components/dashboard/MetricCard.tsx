import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: React.ReactNode;
  width?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  subtitle = null,
  width = 'w-1/3'
}) => {
  return (
    <div className={`${width} p-2`}>
      <div className="bg-white border border-gray-200 rounded-md p-4 h-full">
        <h3 className="text-sm font-medium text-gray-700 mb-2">{title}</h3>
        <div className="flex flex-col">
          <span className="text-3xl font-semibold text-gray-900 mb-1">{value}</span>
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;