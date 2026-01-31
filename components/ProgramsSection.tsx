import React from 'react';
import { ProgramItem } from '../types';

interface ProgramsSectionProps {
  programs: ProgramItem[];
}

const ProgramsSection: React.FC<ProgramsSectionProps> = ({ programs }) => {
  return (
    <section id="programs" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Nuestra Oferta Académica</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-800 font-bold">
            Formación para <span className="text-secondary italic">Toda la Vida</span>
          </h3>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={program.id} className="group relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={program.imageUrl} 
                  alt={program.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  {program.ageRange}
                </div>
              </div>

              {/* Dotted border effect like reference */}
              <div className="absolute inset-4 border-2 border-white/50 z-20 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="p-8 text-center relative z-20 bg-white -mt-6 mx-4 rounded-lg shadow-sm group-hover:-translate-y-2 transition-transform">
                <h4 className="text-2xl font-bold text-primary mb-3 font-serif">{program.title}</h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {program.description}
                </p>
                <button className="inline-block px-6 py-2 border-2 border-secondary text-secondary font-bold text-sm rounded hover:bg-secondary hover:text-white transition-colors">
                  VER MÁS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;