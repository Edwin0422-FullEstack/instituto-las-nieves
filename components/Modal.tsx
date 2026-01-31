import React from 'react';
import Icon from './Icon';
import Tooltip from './Tooltip';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  const handleAction = (view: string) => {
    onNavigate(view);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row animate-fade-in-up border-t-8 border-primary">
        
        {/* Close Button */}
        <div className="absolute top-2 right-2 z-30">
          <Tooltip content="Cerrar ventana" position="left">
            <button 
              onClick={onClose}
              className="bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors cursor-pointer group"
            >
              <Icon name="X" size={20} className="text-gray-500 group-hover:text-red-500" />
            </button>
          </Tooltip>
        </div>

        {/* Left Side: Campaign Visual */}
        <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-full">
          <div className="absolute inset-0 bg-primary">
            <img 
               src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000" 
               alt="Estudiantes" 
               className="w-full h-full object-cover opacity-80 mix-blend-multiply"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10">
             <div className="bg-accent text-white text-xs font-bold px-3 py-1 rounded w-fit mb-3 uppercase tracking-wider shadow-sm">
                Abiertas 2026
             </div>
             <h2 className="text-4xl font-serif font-bold leading-tight mb-2 drop-shadow-lg">
                Admisiones <br/> Abiertas
             </h2>
             <p className="text-blue-100 text-sm font-light border-l-2 border-accent pl-3">
                Sé parte de una experiencia educativa única que transformará tu futuro.
             </p>
          </div>
        </div>

        {/* Right Side: Quick Actions */}
        <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center relative">
          {/* Logo Watermark */}
          <div className="absolute top-[-20px] right-[-20px] text-gray-50 opacity-10 pointer-events-none">
             <Icon name="Users" size={200} />
          </div>

          <div className="relative z-10">
             <div className="text-center md:text-left mb-6">
                <h3 className="text-gray-800 font-bold text-xl flex items-center gap-2 justify-center md:justify-start">
                   <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                   Accesos Rápidos
                </h3>
                <p className="text-gray-500 text-xs mt-1">Selecciona una opción para continuar</p>
             </div>

             <div className="space-y-3">
                {/* Main Action: Admissions */}
                <button 
                  onClick={() => handleAction('admissions')}
                  className="w-full flex items-center justify-between p-4 bg-primary text-white rounded-lg shadow-lg hover:bg-blue-900 hover:shadow-xl transition-all group border-l-4 border-accent"
                >
                   <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-2 rounded-full">
                         <Icon name="FileText" size={20} />
                      </div>
                      <div className="text-left">
                         <span className="block font-bold text-sm">Iniciar Inscripción</span>
                         <span className="block text-[10px] text-blue-200 uppercase tracking-wider">Nuevos Estudiantes</span>
                      </div>
                   </div>
                   <Icon name="ChevronRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary Action: Payments */}
                <button 
                  onClick={() => handleAction('payments')}
                  className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-secondary hover:bg-green-50 transition-all group"
                >
                   <div className="flex items-center gap-4">
                      <div className="bg-gray-100 p-2 rounded-full text-secondary group-hover:bg-white">
                         <Icon name="CreditCard" size={20} />
                      </div>
                      <div className="text-left">
                         <span className="block font-bold text-sm">Pagos en Línea</span>
                         <span className="block text-[10px] text-gray-400 uppercase tracking-wider">PSE / Tarjetas</span>
                      </div>
                   </div>
                   <Icon name="ChevronRight" size={16} className="text-gray-300 group-hover:text-secondary" />
                </button>

                {/* Tertiary Action: SAGA */}
                <button 
                  onClick={() => handleAction('saga')}
                  className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all group"
                >
                   <div className="flex items-center gap-4">
                      <div className="bg-gray-100 p-2 rounded-full text-blue-500 group-hover:bg-white">
                         <Icon name="Monitor" size={20} />
                      </div>
                      <div className="text-left">
                         <span className="block font-bold text-sm">Plataforma SAGA</span>
                         <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Estudiantes y Padres</span>
                      </div>
                   </div>
                   <Icon name="ChevronRight" size={16} className="text-gray-300 group-hover:text-blue-500" />
                </button>
             </div>
             
             <div className="mt-8 text-center">
                <button 
                  onClick={onClose}
                  className="text-xs font-bold text-gray-400 hover:text-primary underline decoration-dotted"
                >
                   Continuar al sitio web sin acciones
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;