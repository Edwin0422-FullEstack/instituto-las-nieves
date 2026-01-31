import React from 'react';
import Icon from './Icon';

const BilingualView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
       <div className="bg-secondary py-24 px-4 text-white text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-600 to-green-800"></div>
         <div className="relative z-10">
            <Icon name="Monitor" size={60} className="mx-auto mb-4 text-green-200" />
            <h1 className="text-5xl font-serif font-bold">Proyecto Bilingüe</h1>
            <p className="text-xl mt-4 text-green-50">Cambridge English Educational Partner</p>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">English as a Second Language</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
               Nuestro enfoque pedagógico integra el inglés en diversas áreas del conocimiento (Math, Science, Social Studies), permitiendo una inmersión natural y efectiva.
            </p>
            <ul className="space-y-4">
               <li className="flex items-center gap-3">
                  <Icon name="Users" className="text-secondary" />
                  <span className="font-bold text-gray-700">Docentes Certificados C1/C2</span>
               </li>
               <li className="flex items-center gap-3">
                  <Icon name="FileText" className="text-secondary" />
                  <span className="font-bold text-gray-700">Exámenes Internacionales</span>
               </li>
               <li className="flex items-center gap-3">
                  <Icon name="Monitor" className="text-secondary" />
                  <span className="font-bold text-gray-700">Material Didáctico Exclusivo</span>
               </li>
            </ul>
         </div>
         <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-4">Niveles de Referencia (MCER)</h3>
            <div className="space-y-4">
               <div className="bg-white p-4 rounded shadow-sm flex justify-between items-center">
                  <span className="font-bold text-secondary">Primaria</span>
                  <span className="text-gray-500">Starters - Movers - Flyers (A1-A2)</span>
               </div>
               <div className="bg-white p-4 rounded shadow-sm flex justify-between items-center">
                  <span className="font-bold text-secondary">Básica</span>
                  <span className="text-gray-500">KET - PET (A2-B1)</span>
               </div>
               <div className="bg-white p-4 rounded shadow-sm flex justify-between items-center">
                  <span className="font-bold text-secondary">Media</span>
                  <span className="text-gray-500">FCE - CAE (B2-C1)</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default BilingualView;