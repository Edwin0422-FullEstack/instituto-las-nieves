import React from 'react';
import { LEADERSHIP_TEAM } from '../constants';
import Icon from './Icon';

const LeadershipView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
      <div className="bg-primary py-20 px-4 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="relative z-10">
            <h1 className="text-4xl font-serif font-bold mb-2">Equipo Líder</h1>
            <p className="opacity-80">Gestión estratégica para la excelencia educativa</p>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
         {/* Rector Card - Featured */}
         {LEADERSHIP_TEAM.filter(m => m.role === 'Rectora').map(leader => (
            <div key={leader.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row mb-16">
               <div className="md:w-1/3 relative">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover min-h-[300px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent md:bg-none"></div>
               </div>
               <div className="md:w-2/3 p-10 flex flex-col justify-center">
                  <div className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded mb-4 w-fit">RECTORÍA</div>
                  <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">{leader.name}</h2>
                  <p className="text-primary font-medium text-lg mb-6">{leader.role}</p>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8 italic border-l-4 border-gray-200 pl-4">
                     "{leader.bio}"
                  </p>
                  <div className="flex gap-4">
                     <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
                        <Icon name="Mail" size={18} /> Contactar
                     </button>
                  </div>
               </div>
            </div>
         ))}

         {/* Other Leaders Grid */}
         <h3 className="text-2xl font-bold text-gray-800 mb-8 border-b border-gray-200 pb-2">Consejo Directivo & Académico</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEADERSHIP_TEAM.filter(m => m.role !== 'Rectora').map(member => (
               <div key={member.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                  <div className="h-64 overflow-hidden relative group">
                     <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <p className="text-white text-sm">{member.bio}</p>
                     </div>
                  </div>
                  <div className="p-6 text-center">
                     <h4 className="font-bold text-xl text-gray-800">{member.name}</h4>
                     <p className="text-secondary font-medium text-sm mt-1">{member.role}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default LeadershipView;