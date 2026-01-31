import React from 'react';
import { VALUES_DATA } from '../constants';
import Icon from './Icon';

const ValuesView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
      <div className="bg-gradient-to-br from-blue-900 to-primary py-24 px-4 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-10"></div>
        <div className="relative z-10">
           <Icon name="Star" size={60} className="mx-auto mb-4 text-yellow-400" />
           <h1 className="text-5xl font-serif font-bold">Nuestros Valores</h1>
           <p className="text-xl mt-4 text-blue-100">Los pilares que sostienen nuestra comunidad educativa.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {VALUES_DATA.map((val, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-secondary hover:-translate-y-2 transition-transform duration-300">
                 <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-6">
                    <Icon name={val.icon as any} size={32} />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-800 mb-4">{val.label}</h3>
                 <p className="text-gray-600 leading-relaxed">
                    Fomentamos la {val.label.toLowerCase()} como un principio fundamental para la convivencia y el crecimiento personal de nuestros estudiantes.
                 </p>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesView;