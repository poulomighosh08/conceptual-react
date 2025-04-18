import React from 'react';
import { ChevronRight, Diamond, Globe, User } from 'lucide-react';

const Topbar: React.FC = () => {
  return (
    <div className="h-14 border-b border-gray-200 bg-white flex items-center justify-between px-4">
      <div className="flex items-center">
        <div className="font-medium text-sm text-gray-700 flex items-center">
          <span>Groove Innovations</span>
          <ChevronRight size={16} className="mx-1 text-gray-400" />
          <span>My Workspace</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-md px-3 py-1.5 hover:bg-gray-50">
          <Diamond size={16} className="text-violet-600" />
          <span>Upgrade</span>
        </button>
        
        <button className="flex items-center gap-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-md px-3 py-1.5 hover:bg-gray-50">
          <Globe size={16} />
          <span>Invite</span>
        </button>
        
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700">
          <User size={16} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;