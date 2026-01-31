import React from 'react';
import { ANTHEM_DATA } from '../constants';
import Icon from './Icon';

const AnthemView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
      <div className="bg-primary py-20 px-4 text-center text-white relative">
         <div className="absolute inset-0 bg-black/20"></div>
         <div className="relative z-10">
            <Icon name="PlayCircle" size={64} className="mx-auto mb-6 text-secondary" />
            <h1 className="text-5xl font-serif font-bold">Marcha Las Nieves</h1>
            <p className="mt-4 text-lg opacity-80">Símbolo de nuestra identidad y orgullo.</p>
         </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
         <div className="bg-gray-50 p-8 rounded-3xl shadow-inner mb-12 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Letra Oficial</h3>
            <div className="space-y-6">
               {ANTHEM_DATA.lyrics.map((line, idx) => (
                  <p key={idx} className={`text-lg ${line === '' ? 'h-4' : ''} ${idx < 5 ? 'font-bold text-primary' : 'text-gray-700'}`}>
                     {line}
                  </p>
               ))}
            </div>
         </div>
         
         <div className="flex justify-center">
            <button className="bg-secondary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
               <Icon name="Download" size={20} /> Descargar Audio MP3
            </button>
         </div>
      </div>
    </div>
  );
};

export default AnthemView;