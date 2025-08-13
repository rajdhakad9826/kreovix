import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope,
  FaPaperPlane,
  FaYoutube,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';

import { FaXTwitter } from 'react-icons/fa6';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'success' | 'error' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    formData,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  .then((result) => {
    console.log('Email sent successfully:', result.text);
    setStatusType('success');
    setStatusMessage('Your message has been sent successfully!');
    setFormData({ name: '', email: '', projectType: '', message: '' });
  })
  .catch((error) => {
    console.error('Email send error:', error);
    setStatusType('error');
    setStatusMessage('Oops! Something went wrong. Please try again later.');
  })
  .finally(() => {
    setIsSubmitting(false); // Stop loading
    setTimeout(() => {
      setStatusMessage(null);
      setStatusType(null);
    }, 5000);
  });
  };

  const projectTypes = [
    'YouTube Video Editing',
    'Instagram Reels',
    'Motion Graphics',
    'Corporate Video',
    'Social Media Management',
    'Other'
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="h-6 w-6" />,
      label: 'Email Us',
      value: 'teamkreovix@gmail.com',
      link: 'mailto:teamkreovix@gmail.com'
    },
    {
      icon: <FaInstagram className="h-6 w-6" />,
      label: 'DM Us',
      value: '@thekreovix',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <FaYoutube className="h-6 w-6" />, name: 'YouTube', link: '#' },
    { icon: <FaInstagram className="h-6 w-6" />, name: 'Instagram', link: '#' },
    { icon: <FaXTwitter className="h-6 w-6" />, name: 'Twitter', link: '#' },
    { icon: <FaLinkedin className="h-6 w-6" />, name: 'LinkedIn', link: '#' }
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
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center space-x-2 ${isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-white hover:bg-gray-100 text-black'
                    }`}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
              {statusMessage && (
                <div
                  className={`mt-4 px-4 py-3 rounded-md text-sm ${statusType === 'success'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                    }`}
                >
                  {statusMessage}
                </div>
              )}
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