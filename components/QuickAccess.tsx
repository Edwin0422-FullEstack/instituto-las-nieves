import React from 'react';
import { QuickLinkItem } from '../types';
import Icon from './Icon';

interface QuickAccessProps {
  items: QuickLinkItem[];
  onNavigate: (view: string) => void;
}

const QuickAccess: React.FC<QuickAccessProps> = ({ items, onNavigate }) => {
  return (
    <div className="relative -mt-16 z-20 px-4 mb-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div 
            key={item.id} 
            onClick={() => onNavigate(item.id)}
            className={`${item.color} rounded-lg shadow-xl p-6 text-white transform transition-transform hover:-translate-y-2 cursor-pointer flex items-center justify-between group overflow-hidden relative`}
          >
            {/* Background Pattern effect */}
            <div className="absolute -right-4 -bottom-4 opacity-10 transform rotate-12 group-hover:scale-125 transition-transform duration-500">
              <Icon name={item.iconName} size={80} />
            </div>

            <div className="z-10 flex flex-col">
              <span className="font-bold text-lg mb-1 leading-tight">{item.label}</span>
              <span className="text-xs opacity-80 uppercase tracking-wider font-semibold group-hover:underline">Acceder &rarr;</span>
            </div>
            
            <div className="z-10 bg-white/20 p-3 rounded-full backdrop-blur-sm">
              <Icon name={item.iconName} size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickAccess;