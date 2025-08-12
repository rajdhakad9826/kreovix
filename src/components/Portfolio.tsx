import React from 'react';
import { Play, ExternalLink, Eye } from 'lucide-react';

const Portfolio: React.FC = () => {
   const longFormVideos = [
    { embedId: '1DPLO6QQqgg' },
    { embedId: '4JovNM7HvcM' },
    { embedId: 'X4ups-SuZSI' },
    { embedId: 'H7Mbc6E5guQ' },
  ];

  const shortFormVideos = [
    { embedId: 'xZAO_v_3qwM' },
    { embedId: 'Sp_jCMnkyGo' },
    { embedId: '9SYGG9cgnb0' },
    { embedId: 'lCuggeyYFog' },
    { embedId: 'KXH4yeoL_vw' },
    { embedId: 'YDqJMZ5fPH0' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across different formats and platforms.
          </p>
        </div>

        {/* Long Form Videos */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-white">YouTube Long Form</h3>
            <span className="text-gray-400 text-sm">01-60 minute content</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {longFormVideos.map((video, index) => (
              <div key={index} className="bg-black border border-white/[0.08] rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Video Embed */}
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
              </div>
            ))}
          </div>
        </div>

        {/* Short Form Videos */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-white">YouTube Shorts</h3>
            <span className="text-gray-400 text-sm">15-60 second content</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shortFormVideos.map((video, index) => (
              <div key={index} className="bg-black border border-white/[0.08] rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Video Embed - Vertical aspect ratio for shorts */}
                <div className="relative aspect-[9/16] max-h-96 mx-auto">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Portfolio;