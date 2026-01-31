import React, { useState } from 'react';
import Icon from './Icon';
import Tooltip from './Tooltip';

const SagaView: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 2000);
  };

  if (isLoggedIn) {
    return (
      <div className="bg-gray-100 min-h-screen animate-fade-in-up">
        {/* Mock Dashboard */}
        <div className="bg-primary text-white p-4 shadow-md flex justify-between items-center">
           <div className="flex items-center gap-2 font-bold text-xl"><Icon name="Monitor" /> SAGA <span className="text-xs bg-secondary px-2 py-0.5 rounded ml-2 font-normal">Estudiante</span></div>
           <div className="flex items-center gap-4">
              <span className="text-sm">Hola, Juan Pérez</span>
              <Tooltip content="Cerrar sesión" position="bottom">
                <button onClick={() => setIsLoggedIn(false)} className="bg-white/20 p-2 rounded hover:bg-white/30"><Icon name="X" size={16} /></button>
              </Tooltip>
           </div>
        </div>
        
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-500 text-sm uppercase mb-4">Promedio Académico</h3>
              <div className="text-4xl font-bold text-primary">4.5</div>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2"><div className="bg-green-500 h-2 rounded-full w-[90%]"></div></div>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-500 text-sm uppercase mb-4">Asistencias</h3>
              <div className="text-4xl font-bold text-secondary">98%</div>
              <p className="text-xs text-gray-400 mt-2">Última falta: Ninguna</p>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-500 text-sm uppercase mb-4">Próxima Clase</h3>
              <div className="text-xl font-bold text-gray-800">Matemáticas</div>
              <p className="text-sm text-gray-500">Salón 301 - 10:00 AM</p>
           </div>
           
           <div className="md:col-span-3 bg-white p-8 rounded-xl shadow-sm border border-gray-200 h-64 flex items-center justify-center text-gray-400">
              <div className="text-center">
                 <Icon name="FileText" size={48} className="mx-auto mb-2 opacity-50" />
                 <p>Selecciona una opción del menú para ver detalles</p>
              </div>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 animate-fade-in-up">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
         {/* Login Left */}
         <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <div className="mb-8">
               <span className="text-primary font-bold text-2xl tracking-tight flex items-center gap-2">
                  <Icon name="Monitor" className="text-secondary" /> SAGA
               </span>
               <p className="text-gray-500 text-sm mt-1">Sistema Académico de Gestión y Administración</p>
            </div>
            
            <form className="space-y-6" onSubmit={handleLogin}>
               <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Usuario</label>
                  <div className="relative">
                     <Icon name="Users" size={18} className="absolute left-3 top-3 text-gray-400" />
                     <input 
                       type="text" 
                       required 
                       className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-gray-900 bg-white placeholder-gray-400" 
                       placeholder="Código de estudiante" 
                     />
                  </div>
               </div>
               <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                  <div className="relative">
                     <Icon name="Lock" size={18} className="absolute left-3 top-3 text-gray-400" />
                     <input 
                       type="password" 
                       required 
                       className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-gray-900 bg-white placeholder-gray-400" 
                       placeholder="••••••••" 
                     />
                  </div>
               </div>
               
               <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-600">
                     <input type="checkbox" className="rounded text-primary focus:ring-primary" /> Recordarme
                  </label>
                  <a href="#" className="text-primary font-bold hover:underline">¿Olvidaste tu clave?</a>
               </div>

               <button 
                 type="submit" 
                 disabled={isLoading}
                 className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors shadow-lg flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
               >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Ingresando...
                    </>
                  ) : (
                    'INGRESAR'
                  )}
               </button>
            </form>
         </div>
         
         {/* Info Right */}
         <div className="md:w-1/2 bg-primary text-white p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            <div className="relative z-10">
               <h3 className="text-3xl font-serif font-bold mb-6">Bienvenido a tu Portal Académico</h3>
               <ul className="space-y-4 text-blue-100">
                  <li className="flex items-center gap-3"><Icon name="CheckSquare" size={18} /> Consulta de Calificaciones</li>
                  <li className="flex items-center gap-3"><Icon name="FileText" size={18} /> Descarga de Boletines</li>
                  <li className="flex items-center gap-3"><Icon name="Clock" size={18} /> Horarios de Clase</li>
               </ul>
            </div>
         </div>
      </div>
    </div>
  );
};

export default SagaView;