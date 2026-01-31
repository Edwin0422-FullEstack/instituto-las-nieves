import React from 'react';
import { EVENTS } from '../constants';
import Icon from './Icon';

const EventsSection: React.FC = () => {
  return (
    <section id="events" className="py-20 px-4 relative">
       {/* Section Background */}
       <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896333243-596652414d71?q=80&w=2070')] bg-cover bg-fixed opacity-20"></div>

       <div className="max-w-7xl mx-auto relative z-10 text-white">
          <div className="flex flex-col md:flex-row gap-12">
             
             {/* Left: Featured/Intro */}
             <div className="md:w-1/3">
                <div className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded mb-4">AGENDA</div>
                <h3 className="text-4xl font-serif font-bold mb-6 leading-tight">
                   Eventos <br/> Institucionales
                </h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                   Mantente informado sobre las actividades académicas, culturales y deportivas que enriquecen nuestra vida escolar. La participación activa es clave en el desarrollo integral.
                </p>
                <button className="bg-white text-primary px-6 py-3 rounded font-bold hover:bg-secondary hover:text-white transition-colors shadow-lg flex items-center gap-2">
                   <Icon name="Calendar" size={18} />
                   Ver Calendario Completo
                </button>
             </div>

             {/* Right: Events Grid */}
             <div className="md:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {EVENTS.slice(0, 4).map((event) => (
                      <div key={event.id} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all cursor-pointer group flex gap-4 items-start">
                         {/* Date Box */}
                         <div className="bg-white text-primary rounded-lg p-3 text-center min-w-[70px] shadow-lg group-hover:scale-110 transition-transform">
                            <span className="block text-2xl font-bold leading-none">{event.day}</span>
                            <span className="block text-xs font-bold uppercase tracking-wider">{event.month}</span>
                         </div>
                         
                         {/* Content */}
                         <div>
                            <span className="text-secondary font-bold text-xs uppercase mb-1 block">{event.category}</span>
                            <h4 className="font-bold text-lg leading-tight mb-2 group-hover:text-secondary transition-colors">{event.title}</h4>
                            <div className="flex items-center gap-2 text-sm text-blue-100 opacity-80">
                               <Icon name="Clock" size={14} />
                               {event.time}
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default EventsSection;