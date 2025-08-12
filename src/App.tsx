import React from 'react';
import MouseGlow from './components/MouseGlow';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <MouseGlow />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Clients />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;