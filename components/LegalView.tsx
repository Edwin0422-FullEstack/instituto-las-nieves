import React from 'react';
import { LEGAL_DATA } from '../constants';
import Icon from './Icon';
import Tooltip from './Tooltip';

const LegalView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
      <div className="py-20 px-4 bg-gray-900 text-white text-center">
         <h1 className="text-4xl font-serif font-bold">Documentos & Políticas</h1>
         <p className="text-gray-400 mt-2">Transparencia y Normatividad Institucional</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
         <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {LEGAL_DATA.map((doc, idx) => (
               <div key={doc.id} className={`p-6 flex items-center justify-between hover:bg-gray-50 transition-colors ${idx !== LEGAL_DATA.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="flex items-center gap-4">
                     <div className="bg-red-50 text-red-500 p-3 rounded-lg">
                        <Icon name="FileText" size={24} />
                     </div>
                     <div>
                        <h4 className="font-bold text-gray-800">{doc.title}</h4>
                        <span className="text-xs text-gray-500">Actualizado: {doc.date} • {doc.size}</span>
                     </div>
                  </div>
                  <Tooltip content="Descargar PDF" position="left">
                    <button className="text-primary hover:text-secondary transition-colors p-2">
                       <Icon name="Download" size={20} />
                    </button>
                  </Tooltip>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default LegalView;