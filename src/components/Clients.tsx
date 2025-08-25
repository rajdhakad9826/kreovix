import React from 'react';
import { Users, Star } from 'lucide-react';

const Clients: React.FC = () => {
  const clients = [
    {
      name: 'Think School',
      subscribers: '4.68M',
      service: 'Reels',
      logo: 'src/assets/thinkschool.jpg'
    },
    {
      name: 'Ashok Aggarwal',
      subscribers: '436K',
      service: 'Reels',
      logo: 'src/assets/ashokaggarwal.jpg'
    },
    {
      name: 'Zahabi',
      subscribers: null,
      service: 'Explainer Video',
      logo: 'src/assets/zahabi.jpg'
    },
    {
      name: 'Unending Education',
      subscribers: '498K',
      service: 'YouTube Video',
      logo: 'src/assets/unendingeducation.jpg'
    },
    {
      name: 'Pluto Academy',
      subscribers: '162k',
      service: 'Reels',
      logo: 'src/assets/plutoacademy.jpg'
    },
    {
      name: 'SFS',
      subscribers: null,
      service: 'Design',
      logo: 'src/assets/sfsinnovative.png'
    },
  ];

  return (
    <section id="clients" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Clients
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Clients We've Worked With
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div key={index} className="bg-black border border-white/[0.08] rounded-lg p-6 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Logo */}
              <div className="w-16 h-16 bg-black rounded-md flex items-center justify-center mb-4 mx-auto">
                <img style={{borderRadius: '0.375rem'}} src={client.logo} alt={client.name} />
              </div>
              
              {/* Client Info */}
              <div className="text-center">
                <h3 className="text-white text-lg font-medium mb-1">{client.name}</h3>
                
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Users className="h-4 w-4 text-white" />
                  <span className="text-white font-medium">{client.subscribers || 'N/A'}</span>
                </div>
              
                <div className="bg-black/50 text-gray-400 px-3 py-1 rounded-full text-xs inline-block">
                  {client.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-black border border-white/[0.08] rounded-lg p-8 mt-16">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-white fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-white mb-6 max-w-4xl mx-auto leading-relaxed">
              "Kreovix took my videos to the next level. The edits were smooth, engaging, and exactly how I imagined them, only better. They made my content stand out and saved me hours of work!"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div>
                <p className="text-white font-medium">Ashok Aggarwal</p>
                <p className="text-gray-400 text-sm">Content Creator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;