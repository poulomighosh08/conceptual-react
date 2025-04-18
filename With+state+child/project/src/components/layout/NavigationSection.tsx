import React from 'react';
import { NavLink } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { NavSection } from '../../types';

interface NavigationSectionProps {
  section: NavSection;
}

const NavigationSection: React.FC<NavigationSectionProps> = ({ section }) => {
  return (
    <div className="mb-4 px-2">
      {section.title && (
        <h3 className="text-xs font-medium text-gray-500 px-3 py-2">{section.title}</h3>
      )}
      <ul>
        {section.items.map((item, idx) => {
          // Dynamically get the icon component
          const IconComponent = (LucideIcons as Record<string, React.FC<{ size?: number }>>)[item.icon];
          
          return (
            <li key={idx}>
              <NavLink 
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center gap-3 px-3 py-2 text-sm rounded-md ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                {IconComponent && <IconComponent size={18} />}
                <span>{item.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavigationSection;