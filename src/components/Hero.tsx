import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Radial Grid Texture */}
<div
  className="absolute inset-0 z-0 pointer-events-none"
  style={{
    WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 0%, black 30%, transparent 80%)',
    maskImage: 'radial-gradient(circle at 50% 50%, black 0%, black 30%, transparent 80%)',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
    backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.20) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.20) 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    backgroundPosition: 'center center',
    opacity: 0.3
  }}
/>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-32">
        <div className="text-center animate-fade-in-up">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Kreovix — Video Editing Agency
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.9] mb-8 max-w-4xl mx-auto">
            Cut. Craft. Captivate.
            
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Professional video editing for YouTube, Instagram, and beyond. 
            We help creators and brands tell compelling stories that captivate audiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>View Our Work</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Play className="h-4 w-4" />
              <span>Start Project</span>
            </button>
          </div>
          <p className="mt-6 text-xs text-gray-400">Fast turnarounds • Motion graphics • Sound design</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;