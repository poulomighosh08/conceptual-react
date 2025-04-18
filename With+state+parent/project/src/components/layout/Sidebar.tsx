import React from 'react';
import { Home } from 'lucide-react';
import NavigationSection from './NavigationSection';
import { navigationSections, additionalNavItems } from '../../data/mockData';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
          <Home size={18} />
          <span className="font-medium">Home</span>
        </div>
      </div>
      
      <div className="flex-1 py-2">
        {navigationSections.map((section, index) => (
          <NavigationSection key={index} section={section} />
        ))}
      </div>

      <div className="mt-auto border-t border-gray-200">
        <div className="relative">
          <div className="absolute -top-3 left-4 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            2
          </div>
        </div>
        {additionalNavItems.map((section, index) => (
          <NavigationSection key={`additional-${index}`} section={section} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;