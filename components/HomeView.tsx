import React from 'react';
import Hero from './Hero';
import QuickAccess from './QuickAccess';
import ProgramsSection from './ProgramsSection';
import NewsSection from './NewsSection';
import EventsSection from './EventsSection';
import AdmissionsBanner from './AdmissionsBanner';
import VideoSection from './VideoSection';
import SenaSection from './SenaSection';
import { 
  QUICK_LINKS, 
  PROGRAMS, 
  LATEST_NEWS 
} from '../constants';

interface HomeViewProps {
  onNavigate: (view: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <>
      {/* Hero Slider Section - Full Width */}
      <Hero />

      {/* Quick Access Bar */}
      <div className="relative z-20 -mt-10 mb-24">
         <QuickAccess items={QUICK_LINKS} onNavigate={onNavigate} />
      </div>

      {/* Content Block 1: Programs */}
      <div className="max-w-[95%] mx-auto bg-paper shadow-2xl rounded-3xl overflow-hidden mb-16 reveal">
         <ProgramsSection programs={PROGRAMS} />
      </div>

      {/* Full width interactive break */}
      <div className="mb-16 reveal">
         <EventsSection />
      </div>

      {/* Content Block 2: Multimedia */}
      <div className="max-w-[95%] mx-auto bg-paper shadow-2xl rounded-3xl overflow-hidden mb-16 reveal">
        <VideoSection />
      </div>
      
      {/* Sena Section - Placed above Bilingual/Admissions as requested */}
      <div className="max-w-[95%] mx-auto reveal">
        <SenaSection onNavigate={onNavigate} />
      </div>

      {/* Content Block 3: Admissions & News */}
      <div className="max-w-[95%] mx-auto bg-paper shadow-2xl rounded-3xl overflow-hidden mb-16 reveal">
         <AdmissionsBanner onNavigate={onNavigate} />
         <NewsSection news={LATEST_NEWS} />
      </div>
      
      {/* Gallery / Motto Section */}
      <section className="py-32 bg-primary text-white text-center relative overflow-hidden group mb-16 shadow-2xl reveal">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b955?q=80&w=2070')] bg-cover bg-center opacity-40 bg-fixed"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 animate-float">
           <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 drop-shadow-lg">"Vive la Magia de Aprender"</h2>
           <p className="text-xl md:text-2xl font-light opacity-95 mb-8 max-w-2xl mx-auto drop-shadow">Una comunidad donde cada estudiante es protagonista de su propia historia de éxito.</p>
           <div className="flex justify-center gap-4">
             <span className="text-yellow-400 text-4xl drop-shadow-md">★</span>
             <span className="text-red-500 text-4xl drop-shadow-md">❤</span>
           </div>
        </div>
      </section>
    </>
  );
};

export default HomeView;