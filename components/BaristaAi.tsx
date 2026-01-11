import React, { useState } from 'react';
import { Sparkles, RefreshCw, Loader2 } from 'lucide-react';
import { getCoffeeRecommendation } from '../services/geminiService';
import { AiRecommendation } from '../types';

const BaristaAi: React.FC = () => {
  const [mood, setMood] = useState('');
  const [preference, setPreference] = useState('');
  const [recommendation, setRecommendation] = useState<AiRecommendation | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!mood || !preference) return;
    setLoading(true);
    const result = await getCoffeeRecommendation(mood, preference);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section id="ai" className="py-24 px-6 border-t border-neutral-900 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-neutral-400 border border-neutral-800 px-3 py-1 rounded-full text-xs uppercase tracking-wider">
            <Sparkles size={12} className="text-accent" />
            <span>Powered by Gemini</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter">
            Digital Sommelier
          </h2>
          <p className="text-neutral-400">
            Input your state of mind. Our model will engineer the perfect liquid response.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Input Panel */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Current Mood</label>
              <input 
                type="text" 
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="e.g. Focused, Sluggish, Creative..."
                className="w-full bg-surface border border-neutral-800 p-4 text-white placeholder-neutral-600 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Taste Profile</label>
              <input 
                type="text" 
                value={preference}
                onChange={(e) => setPreference(e.target.value)}
                placeholder="e.g. Fruity, Dark, Chocolatey..."
                className="w-full bg-surface border border-neutral-800 p-4 text-white placeholder-neutral-600 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <button 
              onClick={handleGenerate}
              disabled={loading || !mood || !preference}
              className="w-full py-4 bg-white text-black font-semibold uppercase tracking-wide text-sm hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={16} /> Computing...
                </>
              ) : (
                'Generate Protocol'
              )}
            </button>
          </div>

          {/* Output Panel */}
          <div className="relative min-h-[300px] bg-surface border border-neutral-800 p-8 flex flex-col justify-center">
            {/* Decorative grid lines */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
            
            {recommendation ? (
              <div className="space-y-6 animate-fade-in relative z-10">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-xs text-accent font-mono mb-2 block">RECOMMENDATION READY</span>
                        <h3 className="text-2xl text-white font-medium">{recommendation.name}</h3>
                    </div>
                </div>
                
                <p className="text-neutral-400 leading-relaxed text-sm">
                  "{recommendation.description}"
                </p>

                <div className="space-y-2">
                  <span className="text-xs text-neutral-600 uppercase tracking-wider">Flavor Notes</span>
                  <div className="flex flex-wrap gap-2">
                    {recommendation.notes.map((note, idx) => (
                      <span key={idx} className="px-3 py-1 bg-background border border-border text-neutral-300 text-xs">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                 <div className="pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-xs text-neutral-500">Method</span>
                    <span className="text-sm text-white font-mono">{recommendation.brewingMethod}</span>
                 </div>

                 <button 
                    onClick={() => setRecommendation(null)}
                    className="absolute top-4 right-4 text-neutral-600 hover:text-white transition-colors"
                 >
                    <RefreshCw size={16} />
                 </button>
              </div>
            ) : (
              <div className="text-center text-neutral-600 relative z-10">
                <div className="w-12 h-12 rounded-full border border-neutral-800 mx-auto flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-neutral-800 rounded-full animate-pulse"></div>
                </div>
                <p className="text-sm font-mono uppercase">Awaiting Input Parameters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaristaAi;