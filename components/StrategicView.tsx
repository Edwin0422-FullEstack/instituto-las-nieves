import React from 'react';
import { STRATEGIC_DATA } from '../constants';
import Icon from './Icon';

const StrategicView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
      <div className="bg-gray-100 py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
           <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">Horizonte Institucional</span>
           <h1 className="text-5xl font-serif font-bold text-gray-800">Plan Estratégico</h1>
           <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
         {/* Value Prop */}
         <div className="bg-primary text-white rounded-3xl p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10">
               <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Icon name="Award" /> Propuesta de Valor
               </h2>
               <p className="text-2xl md:text-4xl font-serif leading-tight">
                  "{STRATEGIC_DATA.valueProp}"
               </p>
            </div>
         </div>

         {/* Objectives */}
         <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Objetivos Estratégicos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {STRATEGIC_DATA.objectives.map((obj, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                     <div className="text-secondary font-bold text-xl">0{idx + 1}</div>
                     <p className="text-gray-700 font-medium">{obj}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default StrategicView;