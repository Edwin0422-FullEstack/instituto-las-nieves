import React from 'react';
import { VISION_DATA } from '../constants';
import Icon from './Icon';

const VisionView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
      {/* Futuristic Hero */}
      <div className="relative h-[60vh] bg-gray-900 flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-40"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
         
         {/* Animated Grid lines */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [perspective:1000px] transform rotate-x-60"></div>

         <div className="relative z-10 text-center max-w-4xl px-6">
            <div className="text-secondary font-mono text-sm tracking-widest mb-4 animate-pulse">ESTRATEGIA 2030</div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
               Hacia el <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Futuro</span>
            </h1>
            <p className="text-gray-300 text-xl font-light">
               Construyendo hoy el liderazgo del mañana.
            </p>
         </div>
      </div>

      {/* Main Vision Text */}
      <div className="max-w-4xl mx-auto px-6 -mt-20 relative z-20">
         <div className="bg-white rounded-2xl shadow-2xl p-10 md:p-16 text-center border-t-4 border-secondary">
            <Icon name="Search" className="mx-auto text-primary mb-6" size={48} />
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">Nuestra Visión</h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
               "{VISION_DATA.text}"
            </p>
         </div>
      </div>

      {/* Strategic Pillars Timeline-ish */}
      <div className="max-w-6xl mx-auto px-6 py-24">
         <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800">Pilares de Proyección</h3>
            <p className="text-gray-500 mt-2">Nuestros ejes estratégicos para alcanzar la excelencia.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-blue-50 rounded-2xl p-8 hover:bg-blue-100 transition-colors group cursor-pointer">
               <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🌍</span>
               </div>
               <h4 className="text-xl font-bold text-primary mb-3">Bilingüismo Global</h4>
               <p className="text-gray-600 text-sm leading-relaxed">
                  Consolidación del inglés como segunda lengua en todos los niveles, con certificaciones internacionales Cambridge.
               </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-green-50 rounded-2xl p-8 hover:bg-green-100 transition-colors group cursor-pointer">
               <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="text-3xl">💡</span>
               </div>
               <h4 className="text-xl font-bold text-secondary mb-3">Innovación Pedagógica</h4>
               <p className="text-gray-600 text-sm leading-relaxed">
                  Integración de metodologías activas y tecnología educativa (STEAM) para potenciar el pensamiento crítico.
               </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-orange-50 rounded-2xl p-8 hover:bg-orange-100 transition-colors group cursor-pointer">
               <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🤝</span>
               </div>
               <h4 className="text-xl font-bold text-accent mb-3">Compromiso Social</h4>
               <p className="text-gray-600 text-sm leading-relaxed">
                  Formación de líderes sensibles a su entorno, promoviendo proyectos de impacto comunitario y sostenibilidad.
               </p>
            </div>
         </div>
      </div>

      {/* Stats / Goals Section */}
      <div className="bg-gray-900 text-white py-20 border-t border-gray-800">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
               <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">100%</div>
               <div className="text-sm text-gray-400 uppercase tracking-widest">Bilingües</div>
            </div>
            <div>
               <div className="text-4xl md:text-5xl font-bold text-primary mb-2">A+</div>
               <div className="text-sm text-gray-400 uppercase tracking-widest">Categoría ICFES</div>
            </div>
             <div>
               <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
               <div className="text-sm text-gray-400 uppercase tracking-widest">Convenios</div>
            </div>
             <div>
               <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">2030</div>
               <div className="text-sm text-gray-400 uppercase tracking-widest">Meta Visión</div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default VisionView;