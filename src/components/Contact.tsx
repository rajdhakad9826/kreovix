import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Youtube, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };

  const projectTypes = [
    'YouTube Video Editing',
    'Instagram Reels',
    'TikTok Content',
    'Motion Graphics',
    'Corporate Video',
    'Social Media Management',
    'Custom Project'
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email Us',
      value: 'hello@kreovix.com',
      link: 'mailto:hello@kreovix.com'
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      label: 'DM Us',
      value: '@Kreovix_',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <Youtube className="h-6 w-6" />, name: 'YouTube', link: '#' },
    { icon: <Instagram className="h-6 w-6" />, name: 'Instagram', link: '#' },
    { icon: <Twitter className="h-6 w-6" />, name: 'Twitter', link: '#' },
    { icon: <Linkedin className="h-6 w-6" />, name: 'LinkedIn', link: '#' }
  ];
  
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your content? Get in touch and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="bg-black border border-white/[0.08] rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2 text-sm">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/50 border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2 text-sm">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/50 border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-white font-medium mb-2 text-sm">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-white/20 rounded-md px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2 text-sm">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-black/50 border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-black border border-white/[0.08] rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors group"
                    >
                      <div className="text-white group-hover:text-gray-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-white text-sm">{info.label}</p>
                        <p className="text-sm">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-black border border-white/[0.08] rounded-lg p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Follow Us</h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="bg-black/50 hover:bg-white text-gray-400 hover:text-black p-3 rounded-md transition-all duration-300 transform hover:-translate-y-1"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-black border border-white/[0.08] rounded-lg p-6">
                <h4 className="text-white font-medium mb-2 text-sm">Quick Response Guarantee</h4>
                <p className="text-gray-400 text-sm">
                  We respond to all inquiries within 24 hours. For urgent projects, 
                  DM us directly for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;