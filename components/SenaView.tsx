import React from 'react';
import { SENA_DATA } from '../constants';
import Icon from './Icon';

const SenaView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 py-24 px-4 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
         <div className="max-w-7xl mx-auto flex items-center gap-6 relative z-10">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-orange-500 font-bold text-3xl shadow-lg border-4 border-orange-200">
               SENA
            </div>
            <div>
               <h1 className="text-4xl md:text-6xl font-serif font-bold mb-2">Articulación SENA</h1>
               <p className="text-xl opacity-90">Formación Técnica y Laboral para el mundo real.</p>
            </div>
         </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
         {/* Intro */}
         <div className="bg-white shadow-xl rounded-2xl p-10 -mt-20 relative z-20 border-t-8 border-orange-500 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Qué es la Articulación?</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
               Es una estrategia institucional que permite a los estudiantes de educación media (grados 10° y 11°) adelantar estudios técnicos con el Servicio Nacional de Aprendizaje (SENA) mientras cursan su bachillerato. Al finalizar, obtienen doble titulación.
            </p>
            <div className="flex flex-wrap gap-4">
               <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-bold text-sm">✓ Doble Titulación</span>
               <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-bold text-sm">✓ Experiencia Real</span>
               <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-bold text-sm">✓ Gratuito</span>
            </div>
         </div>

         {/* Programs */}
         <h3 className="text-3xl font-serif font-bold text-gray-800 mb-10 text-center">Programas Técnicos Ofertados</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SENA_DATA.programs.map((prog, idx) => (
               <div key={idx} className="bg-gray-50 rounded-xl p-8 hover:bg-orange-50 transition-colors border border-gray-200 group">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                     <Icon name="Monitor" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">{prog}</h4>
                  <p className="text-gray-500 text-sm">
                     Desarrolla habilidades competencias específicas demandadas por el sector productivo actual.
                  </p>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default SenaView;