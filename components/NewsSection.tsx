import React, { useRef } from 'react';
import { NewsItem } from '../types';
import Icon from './Icon';
import Tooltip from './Tooltip';

interface NewsSectionProps {
  news: NewsItem[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="news" className="py-24 bg-gradient-to-b from-white to-blue-50/30 px-4 relative overflow-hidden reveal">
       {/* Background decorative elements */}
       <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl animate-pulse"></div>
       <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
               <span className="h-1 w-8 bg-secondary"></span>
               <span className="text-secondary font-bold text-xs uppercase tracking-widest">Al Día</span>
            </div>
            <h3 className="text-4xl font-serif font-bold text-gray-800">
              Orgullo de <span className="text-primary">Las Nieves</span>
            </h3>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex gap-2 mt-4 md:mt-0">
            <Tooltip content="Ver anteriores" position="top">
              <button onClick={() => scroll('left')} className="p-3 border border-gray-200 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                <Icon name="ChevronLeft" size={20} />
              </button>
            </Tooltip>
            <Tooltip content="Ver siguientes" position="top">
              <button onClick={() => scroll('right')} className="p-3 border border-gray-200 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                <Icon name="ChevronRight" size={20} />
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {news.map((item) => (
            <article 
              key={item.id} 
              className="min-w-[300px] md:min-w-[350px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden snap-start hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4">
                   <span className="bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded shadow-sm">
                      {item.category}
                   </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col h-[260px]">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold mb-3">
                   <Icon name="Calendar" size={12} />
                   {item.date}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3 leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
                  {item.summary}
                </p>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                   <a href="#" className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                     Leer noticia completa <Icon name="ArrowRight" size={14} />
                   </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default NewsSection;