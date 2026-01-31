import React from 'react';
import { LATEST_NEWS } from '../constants';
import Icon from './Icon';

const NewsListView: React.FC = () => {
  // Duplicate news for demo purposes to fill the grid
  const allNews = [...LATEST_NEWS, ...LATEST_NEWS];

  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
      <div className="bg-primary py-24 px-4 text-white text-center">
         <h1 className="text-5xl font-serif font-bold mb-4">Noticias Las Nieves</h1>
         <p className="text-xl opacity-80">Actualidad institucional y logros de nuestra comunidad</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
         {/* Categories Filter (Mock) */}
         <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-secondary text-white rounded-full font-bold shadow-md">Todas</button>
            <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 rounded-full font-bold hover:bg-gray-50">Académico</button>
            <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 rounded-full font-bold hover:bg-gray-50">Deportes</button>
            <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 rounded-full font-bold hover:bg-gray-50">Cultural</button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((news, idx) => (
               <article key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <div className="relative h-60 overflow-hidden">
                     <div className="absolute top-4 left-4 z-10 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded backdrop-blur-sm">
                        {news.category}
                     </div>
                     <img 
                        src={news.imageUrl} 
                        alt={news.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                  </div>
                  <div className="p-8">
                     <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-3 uppercase tracking-wider">
                        <Icon name="Calendar" size={12} /> {news.date}
                     </div>
                     <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-secondary transition-colors line-clamp-2">
                        {news.title}
                     </h3>
                     <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                        {news.summary}
                     </p>
                     <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        Leer más <Icon name="ArrowRight" size={16} />
                     </span>
                  </div>
               </article>
            ))}
         </div>
      </div>
    </div>
  );
};

export default NewsListView;