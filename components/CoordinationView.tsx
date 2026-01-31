import React from 'react';
import { COORDINATORS } from '../constants';
import Icon from './Icon';

const CoordinationView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
      <div className="bg-gray-900 py-20 px-4 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-20"></div>
         <div className="relative z-10">
            <h1 className="text-4xl font-serif font-bold mb-2">Coordinación Académica & Convivencia</h1>
            <p className="text-gray-400">Acompañamiento integral para nuestros estudiantes</p>
         </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 relative">
         {/* Center Line for Timeline effect on Desktop */}
         <div className="hidden md:block absolute left-1/2 top-20 bottom-20 w-px bg-gray-200 -translate-x-1/2"></div>

         <div className="space-y-12">
            {COORDINATORS.map((coord, index) => (
               <div key={coord.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Side */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                     <h3 className="text-2xl font-bold text-gray-800">{coord.name}</h3>
                     <div className={`inline-block px-3 py-1 rounded text-white text-xs font-bold my-2 ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}>
                        {coord.role}
                     </div>
                     <p className="text-gray-500 mb-4 text-sm">Responsable del seguimiento académico y formativo de la sección, garantizando el cumplimiento de nuestro horizonte institucional.</p>
                     <button className={`text-sm font-bold flex items-center gap-2 mx-auto ${index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'} text-gray-600 hover:text-primary transition-colors`}>
                        <Icon name="Mail" size={14} /> {coord.email}
                     </button>
                  </div>

                  {/* Marker (Center) */}
                  <div className="relative z-10 flex-shrink-0">
                     <div className="w-12 h-12 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center shadow-lg">
                        <div className={`w-4 h-4 rounded-full ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}></div>
                     </div>
                  </div>

                  {/* Image Side */}
                  <div className="md:w-1/2">
                     <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-white shadow-xl">
                        <img src={coord.image} alt={coord.name} className="w-full h-full object-cover" />
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default CoordinationView;