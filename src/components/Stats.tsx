import React from 'react';
import { Eye, Clock, CheckCircle } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Eye className="h-8 w-8" />,
      number: '15M+',
      label: 'Total Views Generated',
      description: 'Across all platforms and projects'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: '100+',
      label: 'Hours of Content Edited',
      description: 'Professional editing expertise'
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      number: '200+',
      label: 'Projects Completed',
      description: 'Successful deliveries on time'
    }
  ];

  // const milestones = [
  //   { year: '2019', event: 'Kerovix Founded', description: 'Started with a passion for video editing' },
  //   { year: '2020', event: '100 Projects Milestone', description: 'Reached our first major milestone' },
  //   { year: '2021', event: 'Team Expansion', description: 'Grew to 10 professional editors' },
  //   { year: '2022', event: '1000 Projects Completed', description: 'Established as industry leader' },
  //   { year: '2023', event: '500M Views Generated', description: 'Massive impact across platforms' },
  //   { year: '2024', event: 'Global Recognition', description: 'Award-winning video editing agency' }
  // ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the measurable success we've achieved for our clients through professional video editing.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-black/50 border border-white/[0.08] rounded-lg p-8 text-center hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-white flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-400 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Stats;