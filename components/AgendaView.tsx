import React from 'react';
import { EVENTS } from '../constants';
import Icon from './Icon';

const AgendaView: React.FC = () => {
  const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  // Mock calendar grid for October
  const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const day = i - 2; // Offset start
    return day > 0 && day <= 31 ? day : null;
  });

  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
       <div className="bg-primary py-20 px-4 text-center text-white">
          <h1 className="text-4xl font-serif font-bold mb-2">Agenda Institucional</h1>
          <p className="opacity-80">Programación de actividades y eventos escolares</p>
       </div>

       <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
          {/* Calendar Side */}
          <div className="lg:w-2/3">
             <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                   <h2 className="text-xl font-bold text-gray-800">Octubre 2023</h2>
                   <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-full"><Icon name="ChevronLeft" size={20} /></button>
                      <button className="p-2 hover:bg-gray-100 rounded-full"><Icon name="ChevronRight" size={20} /></button>
                   </div>
                </div>
                
                {/* Days Header */}
                <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-100">
                   {days.map(d => (
                      <div key={d} className="py-3 text-center text-xs font-bold text-gray-500 uppercase">{d}</div>
                   ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 h-[400px]">
                   {calendarDays.map((day, idx) => {
                      const event = day ? EVENTS.find(e => parseInt(e.day) === day) : null;
                      return (
                         <div key={idx} className={`border-b border-r border-gray-50 p-2 relative group hover:bg-blue-50 transition-colors ${!day ? 'bg-gray-50/50' : ''}`}>
                            {day && <span className={`text-sm font-semibold ${event ? 'text-primary' : 'text-gray-400'}`}>{day}</span>}
                            {event && (
                               <div className="mt-2">
                                  <div className="bg-secondary text-white text-[10px] p-1 rounded truncate shadow-sm cursor-pointer hover:scale-105 transition-transform">
                                     {event.title}
                                  </div>
                               </div>
                            )}
                         </div>
                      );
                   })}
                </div>
             </div>
          </div>

          {/* List Side */}
          <div className="lg:w-1/3 space-y-6">
             <h3 className="font-bold text-gray-800 text-lg border-l-4 border-secondary pl-3">Próximos Eventos</h3>
             {EVENTS.map(event => (
                <div key={event.id} className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex gap-4 hover:-translate-x-1 transition-transform cursor-pointer">
                   <div className="flex flex-col items-center justify-center bg-blue-50 text-primary w-16 rounded-lg font-bold">
                      <span className="text-xl">{event.day}</span>
                      <span className="text-xs uppercase">{event.month}</span>
                   </div>
                   <div>
                      <span className="text-xs text-secondary font-bold uppercase">{event.category}</span>
                      <h4 className="font-bold text-gray-800 leading-tight mb-1">{event.title}</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                         <Icon name="Clock" size={12} /> {event.time}
                      </div>
                   </div>
                </div>
             ))}
             
             <div className="bg-accent/10 p-6 rounded-xl border border-accent/20">
                <h4 className="font-bold text-accent mb-2">¿Necesitas ayuda?</h4>
                <p className="text-sm text-gray-600 mb-4">Si tienes dudas sobre el cronograma o inscripciones a eventos.</p>
                <button className="text-accent font-bold text-sm underline">Contactar Secretaría</button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default AgendaView;