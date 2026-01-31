import React from 'react';
import { ContactInfo } from '../types';
import Icon from './Icon';
import Tooltip from './Tooltip';

interface FooterProps {
  contact: ContactInfo;
}

const Footer: React.FC<FooterProps> = ({ contact }) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <div className="h-10 w-10 bg-secondary rounded-br-lg rounded-tl-lg flex items-center justify-center">
                  <span className="font-bold text-white">LN</span>
               </div>
               <span className="font-serif font-bold text-2xl">Las Nieves</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Una institución comprometida con la excelencia académica y la formación en valores desde hace más de 50 años.
            </p>
            <div className="flex gap-4">
              <Tooltip content="Facebook" position="top">
                <a href={contact.socials.facebook} className="bg-gray-800 p-2 rounded-full hover:bg-secondary transition-colors"><Icon name="Facebook" size={18} /></a>
              </Tooltip>
              <Tooltip content="Instagram" position="top">
                <a href={contact.socials.instagram} className="bg-gray-800 p-2 rounded-full hover:bg-secondary transition-colors"><Icon name="Instagram" size={18} /></a>
              </Tooltip>
              <Tooltip content="Twitter" position="top">
                <a href={contact.socials.twitter} className="bg-gray-800 p-2 rounded-full hover:bg-secondary transition-colors"><Icon name="Twitter" size={18} /></a>
              </Tooltip>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-secondary transition-colors">Nuestra Historia</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Admisiones</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Trabaja con Nosotros</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Política de Datos</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Manual de Convivencia</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Contáctanos</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Icon name="MapPin" size={18} className="text-secondary shrink-0 mt-1" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Phone" size={18} className="text-secondary shrink-0" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Mail" size={18} className="text-secondary shrink-0" />
                <span>{contact.email}</span>
              </li>
            </ul>
          </div>

           {/* Newsletter / Map Placeholder */}
           <div>
             <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Ubícanos</h4>
             <div className="bg-gray-800 h-40 w-full rounded-lg flex items-center justify-center text-gray-500 text-sm">
                [Google Maps Integration]
             </div>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Instituto Las Nieves. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <img src="https://via.placeholder.com/80x30?text=Certificado" alt="Certificado" className="grayscale opacity-50 hover:opacity-100 transition-opacity" />
             <img src="https://via.placeholder.com/80x30?text=MinEducacion" alt="Ministerio" className="grayscale opacity-50 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;