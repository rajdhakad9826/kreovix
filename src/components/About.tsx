import React from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';

const About: React.FC = () => {
  const tools = [
    'Adobe After Effects',
    'Adobe Premiere Pro',
    'Adobe Photoshop',
    'Figma'
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality First',
      description: 'Every project meets our high standards for visual excellence and storytelling.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality or creativity.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaborative',
      description: 'We work closely with clients to bring their vision to life perfectly.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Results Driven',
      description: 'Focused on creating content that engages audiences and drives results.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Kreovix
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're a creative video editing agency passionate about transforming raw footage into compelling visual stories that captivate audiences and drive engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-white mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Over the years, we've helped creators and brands generate millions of views, grow their audiences, and deliver content that resonates. Whether you're a solo creator or a large brand, Kreovix is your behind-the-scenes partner for professional, impactful edits.
              </p>
              <p>
                Our expertise spans across YouTube content, social media videos, corporate presentations, and motion graphics. We understand that every frame matters and every edit should serve a purpose in your storytelling journey.
              </p>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-semibold text-white mb-6">Tools & Technologies</h3>
            <p className="text-gray-400 mb-6">
              We use industry-leading software and cutting-edge techniques to ensure your content stands out in today's competitive digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool, index) => (
                <div key={index} className="bg-black/50 px-4 py-3 rounded-md border border-white/[0.08] hover:border-white/20 transition-colors">
                  <span className="text-white font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg border border-white/[0.08] hover:border-white/20 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-white mb-4">
                {value.icon}
              </div>
              <h4 className="text-white font-medium mb-2">{value.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;