import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Menu from './components/Menu';
import BaristaAi from './components/BaristaAi';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-background text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <BentoGrid />
      <Menu />
      <BaristaAi />
      
      <Footer />
    </main>
  );
}

export default App;