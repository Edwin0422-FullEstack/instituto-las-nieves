import React from 'react';
import Icon from './Icon';

const PaymentsView: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-4 animate-fade-in-up">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
         <div className="bg-secondary p-8 text-white text-center">
            <Icon name="CreditCard" size={48} className="mx-auto mb-4 text-green-200" />
            <h1 className="text-3xl font-bold">Pagos en Línea</h1>
            <p className="text-green-50 mt-2">Plataforma segura de recaudos</p>
         </div>
         
         <div className="p-10 space-y-8">
            <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-start gap-3">
               <Icon name="Shield" className="text-primary shrink-0 mt-1" />
               <p className="text-sm text-blue-800">
                  Todas las transacciones se realizan bajo protocolos seguros SSL. No almacenamos información sensible de sus tarjetas.
               </p>
            </div>

            <div className="space-y-4">
               <label className="block text-gray-700 font-bold">Referencia de Pago / Código Estudiante</label>
               <input type="text" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-lg text-gray-900 bg-white" placeholder="Ej: 202400123" />
               <button className="w-full bg-secondary text-white font-bold py-4 rounded-lg hover:bg-green-700 transition-colors shadow-lg">
                  CONSULTAR VALOR A PAGAR
               </button>
            </div>

            <div className="border-t border-gray-100 pt-8 text-center">
               <p className="text-gray-400 text-sm mb-4">Medios de pago aceptados</p>
               <div className="flex justify-center gap-4 opacity-60">
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default PaymentsView;