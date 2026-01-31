import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomeView from './components/HomeView';
import MissionView from './components/MissionView';
import VisionView from './components/VisionView';
import ValuesView from './components/ValuesView';
import StrategicView from './components/StrategicView';
import AnthemView from './components/AnthemView';
import OrgChartView from './components/OrgChartView';
import LegalView from './components/LegalView';
import SagaView from './components/SagaView';
import PaymentsView from './components/PaymentsView';
import SenaView from './components/SenaView';
import AdmissionsView from './components/AdmissionsView';
import AdmissionFormView from './components/AdmissionFormView';
import BilingualView from './components/BilingualView';
import ContactView from './components/ContactView';
import ProgramsView from './components/ProgramsView';
import AgendaView from './components/AgendaView';
import NewsListView from './components/NewsListView';
import VideoGalleryView from './components/VideoGalleryView';
import LeadershipView from './components/LeadershipView';
import AdministrativeView from './components/AdministrativeView';
import CoordinationView from './components/CoordinationView';
import TeachersView from './components/TeachersView';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Tooltip from './components/Tooltip';
import Icon from './components/Icon';

// Importing Data
import { 
  NAVIGATION_ITEMS, 
  CONTACT_DATA 
} from './constants';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    // Open modal automatically after a short delay on mount, only if on home view initially
    if (currentView === 'home') {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentView]);

  // Simple Router Function
  const renderView = () => {
    switch (currentView) {
      case 'mission':
        return <MissionView />;
      case 'vision':
        return <VisionView />;
      case 'values':
        return <ValuesView />;
      case 'strategic':
        return <StrategicView />;
      case 'anthem':
        return <AnthemView />;
      case 'org':
        return <OrgChartView />;
      case 'legal':
        return <LegalView />;
      case 'leadership':
        return <LeadershipView />;
      case 'administrative':
        return <AdministrativeView />;
      case 'coordination':
        return <CoordinationView />;
      case 'teachers':
        return <TeachersView />;
      case 'saga':
        return <SagaView />;
      case 'payments':
        return <PaymentsView />;
      case 'sena':
        return <SenaView />;
      case 'admissions':
        return <AdmissionsView onNavigate={setCurrentView} />;
      case 'admission-form':
        return <AdmissionFormView />;
      case 'bilingual':
        return <BilingualView />;
      case 'programs':
        return <ProgramsView />;
      case 'agenda':
        return <AgendaView />;
      case 'news-list':
        return <NewsListView />;
      case 'video-gallery':
        return <VideoGalleryView />;
      case 'contact':
        return <ContactView />;
      case 'home':
      default:
        return <HomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen text-gray-800 font-sans selection:bg-secondary selection:text-white relative flex flex-col">
      
      {/* Intro Modal - Only show on Home view */}
      {currentView === 'home' && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onNavigate={(view) => {
            setCurrentView(view);
            setIsModalOpen(false);
          }}
        />
      )}

      {/* Header Controller with Navigation Handler */}
      <Header 
        navItems={NAVIGATION_ITEMS} 
        onNavigate={(view) => setCurrentView(view)} 
      />

      <main className="relative z-10 flex-grow">
        {renderView()}
      </main>

      {/* Footer View */}
      <Footer contact={CONTACT_DATA} />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Tooltip content="¡Chatea con nosotros!" position="left">
          <a 
            href="https://wa.me/576053551234?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20Instituto%20Las%20Nieves." 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 hover:bg-[#20b858] transition-all duration-300 animate-bounce hover:animate-none group relative"
          >
             {/* Pulse Effect */}
             <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:animate-none"></div>
             
             <Icon name="MessageCircle" size={32} className="relative z-10" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export default App;