import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import Icon from './Icon';
import Tooltip from './Tooltip';

interface HeaderProps {
  navItems: NavItem[];
  onNavigate: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ navItems, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (!href.startsWith('#')) {
      e.preventDefault();
      onNavigate(href);
      setIsMobileMenuOpen(false);
      setActiveSubMenu(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Prevent default for anchor links that are just placeholders or IDs
      e.preventDefault();
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-white border-b border-gray-100'}`}>
      {/* Top Bar - Minimalist */}
      <div className="bg-primary text-white py-1.5 px-6 hidden md:flex justify-between items-center text-xs tracking-wide">
        <div className="flex gap-6 opacity-90">
          <span className="flex items-center gap-2"><Icon name="Phone" size={12} /> (605) 355-1234</span>
          <span className="flex items-center gap-2"><Icon name="Mail" size={12} /> info@lasnieves.edu.co</span>
        </div>
        <div className="flex items-center gap-4">
          <Tooltip content="Síguenos en Facebook" position="bottom">
            <a href="#" className="hover:text-secondary transition-colors"><Icon name="Facebook" size={14} /></a>
          </Tooltip>
          <Tooltip content="Síguenos en Instagram" position="bottom">
            <a href="#" className="hover:text-secondary transition-colors"><Icon name="Instagram" size={14} /></a>
          </Tooltip>
          <div className="h-3 w-px bg-white/30"></div>
          <button onClick={() => onNavigate('saga')} className="font-bold hover:text-secondary transition-colors">SAGA LOGIN</button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`px-6 md:px-12 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-5'}`}
        onMouseLeave={() => setActiveSubMenu(null)}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Section - Enhanced */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
             <div className="h-10 w-10 md:h-12 md:w-12 bg-primary rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden group-hover:bg-secondary transition-colors duration-500">
                <div className="absolute -bottom-2 -right-2 text-white/10 group-hover:text-white/20 transition-colors">
                  <Icon name="Star" size={40} />
                </div>
                <span className="text-white font-serif font-bold text-lg md:text-xl">LN</span>
             </div>
             <div className="flex flex-col">
                <span className="text-primary font-serif font-bold text-xl md:text-2xl leading-none tracking-tight group-hover:text-secondary transition-colors duration-300">Las Nieves</span>
                <span className="text-gray-400 text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">Instituto Educativo</span>
             </div>
          </div>

          {/* Desktop Menu - Modernized */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const hasSubmenu = !!item.subItems;
              return (
                <div 
                  key={item.label} 
                  className="relative"
                  onMouseEnter={() => setActiveSubMenu(hasSubmenu ? item.label : null)}
                >
                  <a 
                    href={item.href} 
                    onClick={(e) => {
                      if (hasSubmenu) {
                        e.preventDefault();
                      } else {
                        handleNavClick(e, item.href);
                      }
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 flex items-center gap-1
                      ${activeSubMenu === item.label ? 'text-primary bg-green-50' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}
                      ${hasSubmenu ? 'cursor-default' : 'cursor-pointer'}
                    `}
                  >
                    {item.label}
                    {hasSubmenu && (
                      <Icon name="ChevronRight" size={12} className={`transition-transform duration-200 ${activeSubMenu === item.label ? 'rotate-90' : 'rotate-90 md:rotate-0 md:text-gray-300'}`} />
                    )}
                  </a>
                </div>
              );
            })}
            
            <Tooltip content="Buscar en el sitio" position="bottom">
              <button 
                className="ml-4 p-2 text-gray-400 hover:text-primary transition-colors"
              >
                <Icon name="Search" size={18} />
              </button>
            </Tooltip>
          </div>

          {/* Mobile Menu Button */}
          <Tooltip content={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"} position="bottom">
            <button 
              className="lg:hidden text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={28} />
            </button>
          </Tooltip>
        </div>

        {/* Mega Menu Dropdown - Glassmorphism */}
        {activeSubMenu && (
          <div 
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl py-10 animate-fade-in-up origin-top z-30"
            onMouseEnter={() => setActiveSubMenu(activeSubMenu)}
            onMouseLeave={() => setActiveSubMenu(null)}
          >
            <div className="max-w-7xl mx-auto px-12 grid grid-cols-12 gap-12">
               {/* Menu Columns */}
               <div className="col-span-8 grid grid-cols-3 gap-8">
                 {navItems.find(i => i.label === activeSubMenu)?.subItems?.map((column, idx) => (
                   <div key={idx} className="space-y-4 group/col">
                     <h4 className="text-gray-800 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b border-gray-100 pb-2 group-hover/col:border-secondary transition-colors">
                       <Icon name="ChevronRight" size={14} className="text-secondary" />
                       {column.label}
                     </h4>
                     <ul className="space-y-3">
                       {column.subItems?.map((sub, subIdx) => (
                         <li key={subIdx}>
                           <a 
                              href={sub.href} 
                              onClick={(e) => handleNavClick(e, sub.href)}
                              className="text-gray-500 hover:text-primary hover:translate-x-1 transition-all inline-block text-sm font-medium"
                           >
                             {sub.label}
                           </a>
                         </li>
                       ))}
                     </ul>
                   </div>
                 ))}
               </div>

               {/* Promotional Box in Menu */}
               <div className="col-span-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors"></div>
                  <h5 className="font-serif font-bold text-xl text-primary mb-2 relative z-10">Admisiones 2026</h5>
                  <p className="text-sm text-gray-600 mb-6 relative z-10 leading-relaxed">
                    Únete a una comunidad que inspira, crea y transforma. Inscripciones abiertas para todos los niveles.
                  </p>
                  <button 
                    onClick={() => { onNavigate('admissions'); setActiveSubMenu(null); }}
                    className="relative z-10 text-xs font-bold text-white bg-primary px-5 py-3 rounded-lg hover:bg-secondary transition-all shadow-md hover:shadow-lg flex items-center gap-2 w-fit"
                  >
                    INICIAR PROCESO <Icon name="ArrowRight" size={14} />
                  </button>
               </div>
            </div>
          </div>
        )}

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 h-[calc(100vh-80px)] overflow-y-auto">
            <div className="p-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-50 last:border-0 pb-2">
                  <a 
                    href={item.href} 
                    onClick={(e) => {
                      if (item.subItems) e.preventDefault();
                      else handleNavClick(e, item.href);
                    }}
                    className="text-gray-800 font-bold py-3 block text-lg"
                  >
                    {item.label}
                  </a>
                  {item.subItems && (
                    <div className="pl-4 space-y-4 mb-4">
                      {item.subItems.map((sub, idx) => (
                        <div key={idx}>
                          <h5 className="text-secondary text-xs font-bold uppercase tracking-wider mb-2 mt-2">{sub.label}</h5>
                          <ul className="space-y-2 border-l-2 border-gray-100 pl-3">
                            {sub.subItems?.map((nested, nIdx) => (
                              <li key={nIdx}>
                                <a 
                                  href={nested.href} 
                                  onClick={(e) => handleNavClick(e, nested.href)}
                                  className="text-gray-500 text-sm block py-1.5 active:text-primary"
                                >
                                  {nested.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
               <div className="pt-6">
                 <button 
                   onClick={() => { onNavigate('saga'); setIsMobileMenuOpen(false); }}
                   className="w-full bg-primary text-white py-4 rounded-xl font-bold text-center shadow-lg active:scale-95 transition-transform"
                 >
                  ACCESO SAGA
                </button>
               </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;