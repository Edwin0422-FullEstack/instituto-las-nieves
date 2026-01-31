import React from 'react';
import { ADMIN_STAFF } from '../constants';
import Icon from './Icon';

const AdministrativeView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
      <div className="bg-secondary py-20 px-4 text-center text-white relative">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
         <div className="relative z-10">
            <h1 className="text-4xl font-serif font-bold mb-2">Gestión Administrativa</h1>
            <p className="opacity-80">El equipo que soporta nuestra operación diaria</p>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ADMIN_STAFF.map(staff => (
               <div key={staff.id} className="flex bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="w-32 h-32 md:w-40 md:h-auto flex-shrink-0">
                     <img src={staff.image} alt={staff.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col justify-center w-full">
                     <h3 className="font-bold text-lg text-gray-800">{staff.name}</h3>
                     <p className="text-primary text-sm font-semibold mb-3">{staff.role}</p>
                     
                     <div className="mt-auto pt-3 border-t border-gray-100 w-full">
                        <a href={`mailto:${staff.email}`} className="flex items-center gap-2 text-gray-500 text-sm hover:text-secondary transition-colors">
                           <Icon name="Mail" size={14} />
                           {staff.email}
                        </a>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         <div className="mt-16 bg-blue-50 p-8 rounded-2xl text-center">
            <h4 className="font-bold text-gray-800 text-lg mb-2">¿Necesitas realizar un trámite?</h4>
            <p className="text-gray-600 mb-6">Consulta nuestros horarios de atención y canales oficiales.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700">
               <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Icon name="Clock" size={16} className="text-primary" /> Lun-Vie 7:00 AM - 3:00 PM</span>
               <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Icon name="Phone" size={16} className="text-primary" /> (605) 355-1234 Ext. 101</span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AdministrativeView;