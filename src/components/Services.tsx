import React from 'react';
import { Youtube, Instagram, Video, Palette, BarChart3, Camera } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Youtube className="h-8 w-8" />,
      title: 'YouTube Video Editing',
      description: 'Complete YouTube video production including cuts, transitions, color correction, audio sync, thumbnails, and SEO-optimized content.',
      features: ['Long-form content editing', 'Thumbnail design', 'SEO optimization', 'Engagement hooks', 'End screens & cards'],
    
    },
    {
      icon: <Instagram className="h-8 w-8" />,
      title: 'Instagram Reels & Stories',
      description: 'Eye-catching vertical videos optimized for Instagram with trending effects, music sync, and engaging transitions.',
      features: ['Vertical video optimization', 'Trending effects', 'Music synchronization', 'Text animations', 'Story templates'],
     
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Social Media Management',
      description: 'Complete social media content strategy, including video planning, editing, posting, and performance analytics.',
      features: ['Content strategy', 'Posting schedule', 'Analytics tracking', 'Audience engagement', 'Brand consistency'],
     
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: 'Corporate Videos',
      description: 'Professional, brand-aligned videos for businesses, presentations, training modules, and product showcases. Designed to inform, impress, and convert.',
      features: ['Professional editing', 'Brand integration', 'Multi-camera sync', 'Audio enhancement', 'Subtitle integration'],
      
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive video editing solutions tailored to your content needs and platform requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-black border border-white/[0.08] rounded-lg p-6 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-white mb-4">
                {service.icon}
              </div>
        
              <h3 className="text-white text-lg font-medium mb-3">{service.title}</h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-500 text-sm flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Services;