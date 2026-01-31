import React, { useState } from 'react';
import { VIDEOS } from '../constants';
import Icon from './Icon';

const VideoGalleryView: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState(VIDEOS[0]);

  return (
    <div className="bg-gray-900 min-h-screen animate-fade-in-up text-white">
      <div className="py-20 px-4 text-center">
         <h1 className="text-4xl font-serif font-bold text-white mb-2">Galería Multimedia</h1>
         <p className="text-gray-400">Revive los mejores momentos de Las Nieves</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">
         {/* Main Player */}
         <div className="mb-12">
            <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative group">
               <img src={activeVideo.thumbnail} alt={activeVideo.title} className="w-full h-full object-cover opacity-60" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-24 h-24 bg-secondary/90 rounded-full flex items-center justify-center pl-2 text-white hover:scale-110 transition-transform shadow-[0_0_30px_rgba(46,139,87,0.5)]">
                     <Icon name="PlayCircle" size={64} />
                  </button>
               </div>
               <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
                  <h2 className="text-3xl font-bold">{activeVideo.title}</h2>
                  <p className="text-gray-300 mt-2">Duración: {activeVideo.duration}</p>
               </div>
            </div>
         </div>

         {/* Grid */}
         <h3 className="text-xl font-bold mb-6 border-l-4 border-secondary pl-4">Más Videos</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIDEOS.map((video) => (
               <div 
                  key={video.id} 
                  onClick={() => setActiveVideo(video)}
                  className={`cursor-pointer rounded-xl overflow-hidden bg-gray-800 transition-all hover:-translate-y-2 ${activeVideo.id === video.id ? 'ring-2 ring-secondary' : ''}`}
               >
                  <div className="relative h-40">
                     <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors flex items-center justify-center">
                        <Icon name="PlayCircle" className="text-white opacity-80" size={32} />
                     </div>
                     <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-2 py-1 rounded">
                        {video.duration}
                     </span>
                  </div>
                  <div className="p-4">
                     <h4 className="font-bold text-sm line-clamp-2">{video.title}</h4>
                  </div>
               </div>
            ))}
            {/* placeholders to fill grid */}
            {[1, 2, 3, 4].map((i) => (
                <div key={`p-${i}`} className="bg-gray-800 rounded-xl p-4 opacity-50 flex flex-col gap-3">
                   <div className="h-32 bg-gray-700 rounded-lg"></div>
                   <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                   <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default VideoGalleryView;