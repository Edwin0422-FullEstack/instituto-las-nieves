import React from 'react';
import { VIDEOS } from '../constants';
import Icon from './Icon';

const VideoSection: React.FC = () => {
  return (
    <section id="videos" className="py-24 px-4 relative overflow-hidden bg-white reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Multimedia</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-800 font-bold">
            Vive la Experiencia <span className="text-secondary italic">Nieves</span>
          </h3>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feature Video */}
          <div className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl h-[400px] lg:h-[500px]">
             <img 
               src={VIDEOS[0].thumbnail} 
               alt={VIDEOS[0].title} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="bg-white/90 w-20 h-20 rounded-full flex items-center justify-center pl-2 text-primary shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-primary border-b-[12px] border-b-transparent"></div>
                </div>
             </div>
             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
               <h4 className="text-white text-3xl font-bold font-serif">{VIDEOS[0].title}</h4>
               <p className="text-gray-200 mt-2 flex items-center gap-2">
                 <Icon name="Clock" size={16} /> {VIDEOS[0].duration} • Video Oficial
               </p>
             </div>
          </div>

          {/* Side Videos */}
          <div className="flex flex-col gap-8">
            {VIDEOS.slice(1).map((video) => (
              <div key={video.id} className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg h-[234px] flex-1">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                   <div className="bg-white/80 w-12 h-12 rounded-full flex items-center justify-center pl-1 text-primary shadow-lg group-hover:scale-110 transition-transform">
                     <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-primary border-b-[8px] border-b-transparent"></div>
                   </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <h5 className="text-white font-bold text-lg">{video.title}</h5>
                  <p className="text-gray-300 text-xs">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
           <button className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">
              Ver Galería Completa <Icon name="ArrowRight" size={16} />
           </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;