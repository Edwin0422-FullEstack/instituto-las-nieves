import React from 'react';
import { SENA_DATA } from '../constants';
import Icon from './Icon';

interface SenaSectionProps {
  onNavigate: (view: string) => void;
}

const SenaSection: React.FC<SenaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 px-4 mb-16 relative overflow-hidden">
      {/* Background with abstract orange shapes for SENA identity */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50 skew-x-12 transform translate-x-20"></div>
      
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden relative z-10 border border-orange-100 flex flex-col md:flex-row">
        
        {/* Left: Image/Logo Area */}
        <div className="md:w-1/3 bg-white p-12 flex flex-col items-center justify-center border-r border-orange-50 relative overflow-hidden group cursor-pointer" onClick={() => onNavigate('sena')}>
          {/* Simulated SENA Logo Style */}
          <div className="w-32 h-32 rounded-full border-4 border-orange-500 flex items-center justify-center mb-6 relative z-10 bg-white group-hover:scale-110 transition-transform duration-500">
             <div className="text-orange-500 font-bold text-4xl">SENA</div>
          </div>
          <div className="text-center relative z-10">
             <span className="block text-gray-500 text-sm uppercase tracking-widest mb-1">Convenio Oficial</span>
             <h3 className="text-2xl font-bold text-gray-800">Doble Titulación</h3>
          </div>

          {/* Background decorative circle */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-100 rounded-full opacity-50"></div>
        </div>

        {/* Right: Content */}
        <div className="md:w-2/3 p-10 md:p-14 flex flex-col justify-center">
           <div className="flex items-center gap-2 mb-4">
              <span className="h-1 w-12 bg-orange-500"></span>
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest">Futuro Profesional</span>
           </div>
           
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
              {SENA_DATA.title}
           </h2>
           
           <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              {SENA_DATA.description}
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {SENA_DATA.programs.map((program, idx) => (
                 <div key={idx} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                       <Icon name="Monitor" size={16} />
                    </div>
                    <span className="text-sm font-bold text-gray-700">{program}</span>
                 </div>
              ))}
           </div>

           <button 
             onClick={() => onNavigate('sena')}
             className="self-start px-8 py-3 bg-white border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-colors shadow-sm flex items-center gap-2"
           >
              CONOCER PROGRAMAS TÉCNICOS <Icon name="ArrowRight" size={18} />
           </button>
        </div>
      </div>
    </section>
  );
};

export default SenaSection;