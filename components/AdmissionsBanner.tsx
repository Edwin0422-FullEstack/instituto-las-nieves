import React from 'react';
import Icon from './Icon';

interface AdmissionsBannerProps {
  onNavigate: (view: string) => void;
}

const AdmissionsBanner: React.FC<AdmissionsBannerProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card 1: Admissions */}
        <div 
          onClick={() => onNavigate('admissions')}
          className="relative bg-white rounded-2xl shadow-xl overflow-hidden group border border-gray-100 cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
        >
           {/* Decorative doodle background */}
           <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/school.png')]"></div>
           
           <div className="p-10 flex flex-col h-full relative z-10">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6 text-primary group-hover:scale-110 transition-transform">
                 <Icon name="FileText" size={32} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-primary mb-4 group-hover:underline decoration-secondary underline-offset-4">Admisiones 2026</h3>
              <p className="text-gray-600 mb-8 text-lg">
                 Inicia el proceso para ser parte de la familia Nieves. Descubre nuestra propuesta educativa e inscríbete en línea.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">1</span>
                  Formulario de Inscripción
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">2</span>
                  Entrevista Familiar
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">3</span>
                  Resultados
                </li>
              </ul>

              <button className="mt-auto w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-blue-900 transition-colors shadow-lg flex items-center justify-center gap-2">
                INICIAR PROCESO <Icon name="ChevronRight" size={16} />
              </button>
           </div>
           
           {/* Image on side for desktop visual interest */}
           <div className="absolute top-0 right-0 w-1/3 h-full hidden md:block">
              <img src="https://picsum.photos/300/600?random=50" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" alt="student" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
           </div>
        </div>

        {/* Card 2: Cambridge / Bilingual */}
        <div 
          onClick={() => onNavigate('bilingual')}
          className="relative bg-secondary rounded-2xl shadow-xl overflow-hidden text-white group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
        >
           <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800"></div>
           
           {/* Floating elements */}
           <div className="absolute top-10 right-10 text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-500">
             <Icon name="Monitor" size={120} />
           </div>

           <div className="p-10 flex flex-col h-full relative z-10">
              <div className="bg-white/20 p-3 rounded-full w-fit mb-6 text-white backdrop-blur-sm group-hover:scale-110 transition-transform">
                 <Icon name="Users" size={32} />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 group-hover:underline decoration-white underline-offset-4">Proyecto Bilingüe</h3>
              <p className="text-green-50 mb-8 text-lg font-light">
                 Somos partners educativos de Cambridge. Preparamos a nuestros estudiantes para un mundo sin fronteras.
              </p>

              <div className="bg-white/10 rounded-xl p-6 mb-8 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-secondary font-bold text-xl">
                    C1
                  </div>
                  <div>
                    <h5 className="font-bold">Nivel Avanzado</h5>
                    <p className="text-xs text-green-100">Meta de graduación</p>
                  </div>
                </div>
                <p className="text-sm italic opacity-90">"English as a vehicle for global understanding"</p>
              </div>

              <button className="mt-auto w-full bg-white text-secondary py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2">
                CONOCER MÁS <Icon name="ChevronRight" size={16} />
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsBanner;