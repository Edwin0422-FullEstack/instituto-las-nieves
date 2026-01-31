import React from 'react';

const OrgChartView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
      <div className="bg-gray-50 py-20 px-4 text-center">
         <h1 className="text-4xl font-serif font-bold text-gray-800">Organigrama Institucional</h1>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-16">
         <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100 overflow-x-auto">
            {/* Simple CSS Org Chart Simulation */}
            <div className="min-w-[800px] flex flex-col items-center gap-8 py-10">
               {/* Level 1: Rectoría */}
               <div className="flex flex-col items-center">
                  <div className="bg-primary text-white px-8 py-4 rounded-lg font-bold shadow-lg text-lg">Rectoría</div>
                  <div className="h-8 w-0.5 bg-gray-300"></div>
               </div>
               
               {/* Level 2: Councils */}
               <div className="flex gap-16 relative">
                  <div className="absolute top-0 left-10 right-10 h-0.5 bg-gray-300 -z-10"></div>
                  <div className="bg-white border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold shadow-sm">Consejo Directivo</div>
                  <div className="bg-white border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold shadow-sm">Consejo Académico</div>
               </div>

               {/* Connector */}
               <div className="h-8 w-0.5 bg-gray-300"></div>

               {/* Level 3: Coordinations */}
               <div className="grid grid-cols-3 gap-8 w-full px-12">
                  <div className="flex flex-col items-center">
                     <div className="bg-secondary text-white px-6 py-3 rounded-lg font-bold w-full text-center shadow">Coord. Académica</div>
                     <div className="h-4 w-0.5 bg-gray-300"></div>
                     <div className="bg-gray-50 p-4 rounded w-full text-center text-sm">Docentes</div>
                  </div>
                  <div className="flex flex-col items-center">
                     <div className="bg-secondary text-white px-6 py-3 rounded-lg font-bold w-full text-center shadow">Coord. Convivencia</div>
                     <div className="h-4 w-0.5 bg-gray-300"></div>
                     <div className="bg-gray-50 p-4 rounded w-full text-center text-sm">Psicorientación</div>
                  </div>
                  <div className="flex flex-col items-center">
                     <div className="bg-secondary text-white px-6 py-3 rounded-lg font-bold w-full text-center shadow">Administración</div>
                     <div className="h-4 w-0.5 bg-gray-300"></div>
                     <div className="bg-gray-50 p-4 rounded w-full text-center text-sm">Servicios Generales</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default OrgChartView;