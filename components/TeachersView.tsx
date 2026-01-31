import React, { useState } from 'react';
import { TEACHERS } from '../constants';
import Icon from './Icon';

const TeachersView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Preschool' | 'Primary' | 'HighSchool'>('All');

  const filteredTeachers = activeTab === 'All' 
    ? TEACHERS 
    : TEACHERS.filter(t => t.category === activeTab);

  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
      <div className="bg-primary py-24 px-4 text-center text-white">
         <h1 className="text-4xl font-serif font-bold mb-4">Cuerpo Docente</h1>
         <p className="text-xl opacity-90">Maestros comprometidos con la formación del ser</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
         {/* Tabs */}
         <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
               { id: 'All', label: 'Todos' },
               { id: 'Preschool', label: 'Preescolar' },
               { id: 'Primary', label: 'Primaria' },
               { id: 'HighSchool', label: 'Bachillerato' }
            ].map(tab => (
               <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-2 rounded-full font-bold transition-all shadow-sm ${
                     activeTab === tab.id 
                     ? 'bg-secondary text-white shadow-lg scale-105' 
                     : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
               >
                  {tab.label}
               </button>
            ))}
         </div>

         {/* Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTeachers.map(teacher => (
               <div key={teacher.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
                  <div className="relative h-64 overflow-hidden">
                     <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-gray-700 shadow-sm">
                        {teacher.category === 'HighSchool' ? 'Bachillerato' : teacher.category === 'Primary' ? 'Primaria' : 'Preescolar'}
                     </div>
                  </div>
                  <div className="p-6 text-center">
                     <h3 className="font-bold text-gray-800 text-lg mb-1">{teacher.name}</h3>
                     <p className="text-secondary text-sm font-medium flex items-center justify-center gap-1">
                        <Icon name={teacher.role.includes('English') ? 'Briefcase' : 'GraduationCap'} size={14} />
                        {teacher.role}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default TeachersView;