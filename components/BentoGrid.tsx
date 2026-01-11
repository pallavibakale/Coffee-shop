import React from "react";
import { Thermometer, Droplets, Map, Cpu } from "lucide-react";
import { Feature } from "../types";

const features: Feature[] = [
  {
    id: "1",
    title: "Single Origin. Global Curation.",
    description:
      "We source exclusively from micro-lots that demonstrate exceptional character and clarity.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1887&auto=format&fit=crop",
    large: true,
  },
  {
    id: "2",
    title: "Precision Thermal Stability",
    description:
      "PID-controlled brewing ensures consistent extraction temperature within 0.1°F.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Molecular Water Chemistry",
    description:
      "Custom mineral profiles optimized for flavor carrier efficiency.",
    image:
      "https://images.unsplash.com/photo-1544253101-55508f58b2e8?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "High Control. High Volume.",
    description:
      "Automated workflow solutions for peak hour throughput without quality compromise.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    large: true,
  },
];

const BentoGrid: React.FC = () => {
  return (
    <section id="methodology" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white">
            Workflow on Demand.
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl">
            Stop toggling between mediocre cups. Unify your caffeine workflow
            with our integrated brewing ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative border border-border bg-surface overflow-hidden flex flex-col ${
                feature.large ? "md:col-span-2" : "md:col-span-1"
              } min-h-[300px] md:min-h-[400px]`}
            >
              {/* Image Container */}
              <div className="absolute inset-0 z-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out grayscale mix-blend-soft-light"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 mt-auto p-8 space-y-2">
                <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center mb-4 border border-white/10 group-hover:border-accent/50 transition-colors">
                  {index === 0 && <Map size={16} className="text-accent" />}
                  {index === 1 && (
                    <Thermometer size={16} className="text-accent" />
                  )}
                  {index === 2 && (
                    <Droplets size={16} className="text-accent" />
                  )}
                  {index === 3 && <Cpu size={16} className="text-accent" />}
                </div>
                <h3 className="text-2xl font-medium text-white tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-accent/20 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
