import React from 'react';
import { MoreHorizontal, Settings } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle: string;
  activeTab: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, activeTab }) => {
  return (
    <div className="border-b border-gray-200 pb-2">
      <div className="px-6 pt-6 pb-2">
        <div className="text-xs text-gray-500 mb-1">{title}</div>
        <h1 className="text-xl font-medium text-gray-800">{subtitle}</h1>
      </div>
      
      <div className="flex justify-between items-center px-6">
        <div className="flex border-b border-gray-200">
          <div className={`px-4 py-2 text-sm font-medium ${activeTab === 'Alerts' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>
            Alerts
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 text-sm text-gray-700 px-3 py-1.5 rounded-md hover:bg-gray-100">
            <Settings size={16} />
            <span>Configure evaluation</span>
          </button>
          <button className="p-1.5 text-gray-500 rounded-md hover:bg-gray-100">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;