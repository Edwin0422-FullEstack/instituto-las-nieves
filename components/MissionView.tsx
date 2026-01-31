import React from 'react';
import { MISSION_DATA, VALUES_DATA } from '../constants';
import Icon from './Icon';

const MissionView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
      {/* Hero Header with Video Background simulation */}
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        {/* Abstract Video Background */}
        <div className="absolute inset-0 bg-primary/40 z-10"></div>
        <video 
           autoPlay 
           loop 
           muted 
           playsInline
           className="absolute inset-0 w-full h-full object-cover"
        >
           <source src="https://videos.pexels.com/video-files/5266858/5266858-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-20 text-center text-white p-8">
           <div className="inline-block border border-white/50 px-4 py-1 rounded-full text-sm tracking-[0.3em] uppercase mb-4 backdrop-blur-sm">Nuestra Razón de Ser</div>
           <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 drop-shadow-2xl">La Misión</h1>
           <div className="w-24 h-1 bg-secondary mx-auto shadow-lg"></div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 w-full leading-[0] z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24 fill-white">
             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-24">
         <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
               <div className="relative">
                  {/* Decorative frame */}
                  <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-primary/20 rounded-tl-3xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-secondary/20 rounded-br-3xl"></div>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1287" 
                    alt="Estudiantes aprendiendo" 
                    className="rounded-2xl shadow-2xl relative z-10 w-full"
                  />
                  
                  {/* Floating play button simulation */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/80 p-4 rounded-full shadow-xl backdrop-blur-md">
                     <Icon name="Users" className="text-primary animate-pulse" size={32} />
                  </div>
               </div>
            </div>
            
            <div className="md:w-1/2">
               <h3 className="text-3xl font-serif font-bold text-primary mb-8 leading-snug">
                  Formando ciudadanos para la <span className="text-secondary bg-green-50 px-2 rounded">transformación social</span>
               </h3>
               <p className="text-lg text-gray-600 leading-relaxed mb-8 text-justify">
                  {MISSION_DATA.text}
               </p>
               <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                     <Icon name="Monitor" className="text-secondary" />
                     <span className="font-bold text-sm text-gray-700">Innovación</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                     <Icon name="Users" className="text-secondary" />
                     <span className="font-bold text-sm text-gray-700">Humanismo</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                     <Icon name="FileText" className="text-secondary" />
                     <span className="font-bold text-sm text-gray-700">Excelencia</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                     <Icon name="MapPin" className="text-secondary" />
                     <span className="font-bold text-sm text-gray-700">Proyección</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Values Scroll */}
      <div className="bg-primary py-20 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h4 className="text-2xl font-serif font-bold mb-12">Nuestros Valores Fundamentales</h4>
            <div className="flex flex-wrap justify-center gap-10">
               {VALUES_DATA.map((val, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-4 group cursor-default">
                     <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-primary transition-all duration-300 transform group-hover:scale-110">
                        <Icon name={val.icon as any} size={30} />
                     </div>
                     <span className="text-lg font-semibold tracking-wide">{val.label}</span>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default MissionView;