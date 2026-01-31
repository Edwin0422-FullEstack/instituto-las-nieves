import React from 'react';
import { MISSION_DATA, VISION_DATA, VALUES_DATA } from '../constants';
import Icon from './Icon';

const InstitutionalHorizon: React.FC = () => {
  return (
    <section id="horizonte" className="py-24 px-4 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-bl-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-tr-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-2">Nuestra Esencia</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-800 font-bold">
            Horizonte <span className="text-primary italic">Institucional</span>
          </h3>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Mission Card */}
          <div className="relative group perspective-1000">
             <div className="bg-white border-l-8 border-primary rounded-r-xl shadow-xl p-10 h-full transform transition-transform hover:-translate-y-2 duration-300">
                <div className="absolute top-6 right-6 text-primary/10">
                   <Icon name="Monitor" size={80} />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-primary shadow-inner">
                      <Icon name="Users" size={28} />
                   </div>
                   <h4 className="text-3xl font-serif font-bold text-gray-800">{MISSION_DATA.title}</h4>
                </div>
                
                <p className="text-gray-600 leading-loose text-lg relative z-10 text-justify">
                   {MISSION_DATA.text}
                </p>
             </div>
          </div>

          {/* Vision Card */}
          <div className="relative group perspective-1000">
             <div className="bg-white border-l-8 border-secondary rounded-r-xl shadow-xl p-10 h-full transform transition-transform hover:-translate-y-2 duration-300">
                <div className="absolute top-6 right-6 text-secondary/10">
                   <Icon name="Search" size={80} />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-secondary shadow-inner">
                      <Icon name="MapPin" size={28} />
                   </div>
                   <h4 className="text-3xl font-serif font-bold text-gray-800">{VISION_DATA.title}</h4>
                </div>
                
                <p className="text-gray-600 leading-loose text-lg relative z-10 text-justify">
                   {VISION_DATA.text}
                </p>
             </div>
          </div>

        </div>

        {/* Values Strip */}
        <div className="mt-20">
           <h4 className="text-center text-2xl font-bold text-gray-800 mb-10">Valores Corporativos</h4>
           <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {VALUES_DATA.map((val, idx) => (
                 <div key={idx} className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                       <Icon name="Users" size={24} />
                    </div>
                    <span className="font-bold text-gray-600 group-hover:text-primary transition-colors">{val.label}</span>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalHorizon;