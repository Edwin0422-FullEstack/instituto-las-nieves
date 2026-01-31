import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../constants';
import Icon from './Icon';
import Tooltip from './Tooltip';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-[650px] w-full overflow-hidden bg-gray-900 group">
      
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Background Image with Zoom Effect */}
          <div 
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[10000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          ></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>

          {/* Text Content */}
          <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
            <div className={`max-w-3xl text-white transform transition-all duration-1000 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-0.5 w-12 bg-secondary"></span>
                <span className="uppercase tracking-widest text-sm font-bold text-secondary">Instituto Las Nieves</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
                {slide.title}
              </h1>
              
              <p className="text-lg md:text-2xl text-gray-100 mb-10 font-light leading-relaxed max-w-2xl drop-shadow-md">
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-secondary text-white px-8 py-4 rounded-md font-bold hover:bg-white hover:text-secondary transition-all shadow-lg hover:shadow-green-500/30 flex items-center gap-2">
                  {slide.cta}
                  <Icon name="ArrowRight" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <Tooltip content="Anterior" position="right">
          <button 
            onClick={prevSlide}
            className="bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full border border-white/20"
          >
            <Icon name="ChevronLeft" size={32} />
          </button>
        </Tooltip>
      </div>
      
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <Tooltip content="Siguiente" position="left">
          <button 
            onClick={nextSlide}
            className="bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full border border-white/20"
          >
            <Icon name="ChevronRight" size={32} />
          </button>
        </Tooltip>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-10 bg-secondary' : 'w-3 bg-white/50 hover:bg-white'}`}
          />
        ))}
      </div>
      
      {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-paper"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;