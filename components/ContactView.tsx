import React from 'react';
import { CONTACT_DATA } from '../constants';
import Icon from './Icon';

const ContactView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
      <div className="bg-primary py-24 px-4 text-white text-center">
         <div className="relative z-10">
            <Icon name="Mail" size={60} className="mx-auto mb-4 text-secondary" />
            <h1 className="text-5xl font-serif font-bold">Contáctanos</h1>
            <p className="text-xl mt-4 text-blue-100">Estamos aquí para resolver tus dudas</p>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
         {/* Contact Info */}
         <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
            
            <div className="flex items-start gap-4">
               <div className="bg-gray-100 p-3 rounded-full text-primary">
                  <Icon name="MapPin" size={24} />
               </div>
               <div>
                  <h4 className="font-bold text-gray-800">Dirección</h4>
                  <p className="text-gray-600">{CONTACT_DATA.address}</p>
               </div>
            </div>

            <div className="flex items-center gap-4">
               <div className="bg-gray-100 p-3 rounded-full text-primary">
                  <Icon name="Phone" size={24} />
               </div>
               <div>
                  <h4 className="font-bold text-gray-800">Teléfono</h4>
                  <p className="text-gray-600">{CONTACT_DATA.phone}</p>
               </div>
            </div>

            <div className="flex items-center gap-4">
               <div className="bg-gray-100 p-3 rounded-full text-primary">
                  <Icon name="Mail" size={24} />
               </div>
               <div>
                  <h4 className="font-bold text-gray-800">Correo Electrónico</h4>
                  <p className="text-gray-600">{CONTACT_DATA.email}</p>
               </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
               <h4 className="font-bold text-gray-800 mb-4">Síguenos en Redes</h4>
               <div className="flex gap-4">
                  <a href="#" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"><Icon name="Facebook" /></a>
                  <a href="#" className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors"><Icon name="Instagram" /></a>
                  <a href="#" className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors"><Icon name="Twitter" /></a>
               </div>
            </div>
         </div>

         {/* Form */}
         <div className="bg-gray-50 p-8 rounded-2xl shadow-inner">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h3>
            <form className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                  <div>
                     <label className="block text-sm font-bold text-gray-700 mb-1">Nombre</label>
                     <input type="text" className="w-full p-3 rounded border border-gray-200 focus:outline-none focus:border-secondary text-gray-900 bg-white" placeholder="Tu nombre" />
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-gray-700 mb-1">Apellido</label>
                     <input type="text" className="w-full p-3 rounded border border-gray-200 focus:outline-none focus:border-secondary text-gray-900 bg-white" placeholder="Tu apellido" />
                  </div>
               </div>
               <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Correo Electrónico</label>
                  <input type="email" className="w-full p-3 rounded border border-gray-200 focus:outline-none focus:border-secondary text-gray-900 bg-white" placeholder="tucorreo@ejemplo.com" />
               </div>
               <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Asunto</label>
                  <select className="w-full p-3 rounded border border-gray-200 focus:outline-none focus:border-secondary text-gray-900 bg-white">
                     <option>Información General</option>
                     <option>Admisiones</option>
                     <option>Soporte Académico</option>
                     <option>Pagos</option>
                  </select>
               </div>
               <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Mensaje</label>
                  <textarea className="w-full p-3 rounded border border-gray-200 focus:outline-none focus:border-secondary h-32 text-gray-900 bg-white" placeholder="Escribe tu mensaje aquí..."></textarea>
               </div>
               <button type="button" className="w-full bg-secondary text-white font-bold py-3 rounded shadow-lg hover:bg-green-700 transition-colors">
                  ENVIAR MENSAJE
               </button>
            </form>
         </div>
      </div>
    </div>
  );
};

export default ContactView;