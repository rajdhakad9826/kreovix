import React from 'react';
import { Users, Star } from 'lucide-react';

const Clients: React.FC = () => {
  const clients = [
    {
      name: 'Think School',
      subscribers: '4.68M',
      platform: 'YouTube',
      logo: 'src/assets/thinkschool.jpg'
    },
    {
      name: 'Ashok Aggarwal',
      subscribers: '436K',
      platform: 'Instagram',
      logo: 'src/assets/ashokaggarwal.jpg'
    },
    {
      name: 'Zahabi',
      subscribers: null,
      platform: 'Brand',
      logo: 'src/assets/zahabi.jpg'
    },
    {
      name: 'Unending Education',
      subscribers: '498K',
      platform: 'YouTube',
      logo: 'src/assets/unendingeducation.jpg'
    },
  ];

  // const achievements = [
  //   {
  //     icon: <Users className="h-6 w-6" />,
  //     title: '500+ Happy Clients',
  //     description: 'Trusted by creators worldwide'
  //   },
  //   {
  //     icon: <TrendingUp className="h-6 w-6" />,
  //     title: '500M+ Total Views',
  //     description: 'Generated across all projects'
  //   },
  //   {
  //     icon: <Award className="h-6 w-6" />,
  //     title: '98% Client Retention',
  //     description: 'Long-term partnerships'
  //   },
  //   {
  //     icon: <Star className="h-6 w-6" />,
  //     title: '4.9/5 Average Rating',
  //     description: 'Consistent quality delivery'
  //   }
  // ];

  return (
    <section id="clients" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Clients
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're proud to work with some of the most successful content creators and brands across different platforms.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div key={index} className="bg-black border border-white/[0.08] rounded-lg p-6 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Logo */}
              <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center mb-4 mx-auto">
                <img src={client.logo} alt={client.name} />
              </div>
              
              {/* Client Info */}
              <div className="text-center">
                <h3 className="text-white text-lg font-medium mb-1">{client.name}</h3>
                
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Users className="h-4 w-4 text-white" />
                  <span className="text-white font-medium">{client.subscribers || 'N/A'}</span>
                </div>
              
                <div className="bg-black/50 text-gray-400 px-3 py-1 rounded-full text-xs inline-block">
                  {client.platform}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        {/* <div className="bg-black border border-white/[0.08] rounded-lg p-8 mt-16">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-white fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-white mb-6 max-w-4xl mx-auto leading-relaxed">
              "Kreovix transformed our content strategy completely. Their editing quality and turnaround time is unmatched. Our channel grew from 100K to 2.5M subscribers in just 18 months!"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
                <span className="text-black font-bold">TS</span>
              </div>
              <div>
                <p className="text-white font-medium">Sarah Johnson</p>
                <p className="text-gray-400 text-sm">Founder, TechScope</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Clients;