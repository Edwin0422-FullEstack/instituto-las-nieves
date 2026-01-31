import React from 'react';
import Icon from './Icon';

interface AdmissionsViewProps {
  onNavigate?: (view: string) => void;
}

const AdmissionsView: React.FC<AdmissionsViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
      <div className="bg-primary py-24 px-4 text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/school.png')] opacity-10"></div>
         <h1 className="text-5xl font-serif font-bold relative z-10">Admisiones 2026</h1>
         <p className="text-xl mt-4 relative z-10 text-blue-100">Únete a la Familia Nieves</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
         <div className="space-y-12">
            
            {/* Step 1 */}
            <div className="flex gap-6">
               <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">1</div>
               <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Inscripción en Línea</h3>
                  <p className="text-gray-600 mb-4">Diligencia el formulario de inscripción a través de nuestra plataforma. Asegúrate de tener los documentos digitales listos.</p>
                  <button 
                    onClick={() => onNavigate && onNavigate('admission-form')}
                    className="bg-secondary text-white px-6 py-2 rounded shadow hover:bg-green-700 transition-colors flex items-center gap-2"
                  >
                    Ir al Formulario <Icon name="ArrowRight" size={16} />
                  </button>
               </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
               <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">2</div>
               <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Entrevista y Valoración</h3>
                  <p className="text-gray-600">Asiste con tu acudiente a la entrevista psicopedagógica y presenta las pruebas de admisión para el grado aspirado.</p>
               </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
               <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">3</div>
               <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Matrícula</h3>
                  <p className="text-gray-600">Una vez admitido, recibirás la orden de matrícula para formalizar tu ingreso a la institución.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AdmissionsView;