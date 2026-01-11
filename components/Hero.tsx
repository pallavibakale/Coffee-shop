import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate overlay opacity: 0 at top, 1 by 600px scroll
  const overlayOpacity = Math.min(scrollY / 600, 1);
  
  // Parallax subtle movement
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden bg-background">
      
      {/* Parallax Background Layer */}
      <div 
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        {/* High-fidelity espresso extraction shot */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&w=2574&auto=format&fit=crop')",
          }}
        />
        {/* Gradient to ensure text readability at the top even before scroll */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/90" />
      </div>

      {/* Dynamic Scroll Overlay - Fades to solid background color */}
      <div 
        className="absolute inset-0 z-0 bg-background pointer-events-none transition-opacity duration-100 ease-linear"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Atmospheric Glow - Kept for the brand aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* Content */}
      <div className="z-10 text-center max-w-4xl mx-auto space-y-8 animate-fade-in relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-neutral-300 uppercase tracking-wider font-medium">Now roasting: Gesha Village</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-[0.95] md:leading-[0.9]">
          The Perfect Extraction,<br />
          <span className="text-neutral-500">Distilled.</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
          Aether Brew combines artisanal heritage with precision extraction technology 
          to deliver a cup that transcends the ordinary.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="#menu" className="group relative px-8 py-3 bg-white text-black font-medium text-sm overflow-hidden flex items-center gap-2 hover:bg-neutral-200 transition-all duration-300">
            <span className="relative z-10">View Menu</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Bottom fade to seamlessly merge with the next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;