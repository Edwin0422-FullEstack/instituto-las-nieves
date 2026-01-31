import React from 'react';
import { PROGRAMS } from '../constants';
import Icon from './Icon';

const ProgramsView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
      {/* Header */}
      <div className="bg-secondary py-24 px-4 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
         {/* Doodle Overlay */}
         <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/education-doodle-set_160335-244.jpg')] opacity-10 bg-cover"></div>
         
         <div className="relative z-10 text-center">
            <h1 className="text-5xl font-serif font-bold mb-4">Programas Académicos</h1>
            <p className="text-xl opacity-90">Formación integral para cada etapa del desarrollo</p>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
         {PROGRAMS.map((program, idx) => (
            <div key={program.id} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
               {/* Image Side */}
               <div className="md:w-1/2 relative group">
                  <div className={`absolute -inset-4 ${idx % 2 === 0 ? 'bg-primary/10 rotate-3' : 'bg-secondary/10 -rotate-3'} rounded-2xl transition-transform group-hover:rotate-0`}></div>
                  <img 
                     src={program.imageUrl} 
                     alt={program.title} 
                     className="w-full h-80 object-cover rounded-2xl shadow-xl relative z-10"
                  />
                  <div className="absolute bottom-6 right-6 z-20 bg-white px-4 py-2 rounded-lg shadow-lg font-bold text-primary">
                     {program.ageRange}
                  </div>
               </div>

               {/* Content Side */}
               <div className="md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                     <span className={`p-2 rounded-lg text-white ${idx === 0 ? 'bg-orange-400' : idx === 1 ? 'bg-blue-500' : 'bg-green-600'}`}>
                        <Icon name={idx === 0 ? 'Star' : idx === 1 ? 'FileText' : 'Award'} size={20} />
                     </span>
                     <span className="text-gray-400 font-bold tracking-widest text-sm uppercase">Nivel Educativo</span>
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">{program.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                     {program.description} En esta etapa, nos enfocamos en potenciar las habilidades individuales, el pensamiento crítico y la inteligencia emocional.
                  </p>
                  
                  <h4 className="font-bold text-gray-800 mb-4">Áreas de Énfasis:</h4>
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                     <li className="flex items-center gap-2 text-gray-600 text-sm">
                        <Icon name="CheckSquare" size={16} className="text-secondary" /> Bilingüismo
                     </li>
                     <li className="flex items-center gap-2 text-gray-600 text-sm">
                        <Icon name="CheckSquare" size={16} className="text-secondary" /> Tecnología
                     </li>
                     <li className="flex items-center gap-2 text-gray-600 text-sm">
                        <Icon name="CheckSquare" size={16} className="text-secondary" /> Artes
                     </li>
                     <li className="flex items-center gap-2 text-gray-600 text-sm">
                        <Icon name="CheckSquare" size={16} className="text-secondary" /> Deportes
                     </li>
                  </ul>

                  <button className="text-primary font-bold hover:text-secondary flex items-center gap-2 transition-colors">
                     Ver Plan de Estudios <Icon name="ArrowRight" size={16} />
                  </button>
               </div>
            </div>
         ))}
      </div>
    </div>
  );
};

export default ProgramsView;