import React from 'react';
import { Sprout, Sparkles, HeartPulse, Compass } from 'lucide-react';
import { BRAND_VALUES } from '../data/products';

export const Beneficios: React.FC = () => {
  const icons = [
    <Sprout className="w-6 h-6 text-[#285943]" key="sprout" />,
    <Sparkles className="w-6 h-6 text-[#C97852]" key="sparkles" />,
    <HeartPulse className="w-6 h-6 text-[#285943]" key="heart" />,
    <Compass className="w-6 h-6 text-[#6F9E73]" key="compass" />
  ];

  return (
    <section id="beneficios" className="py-20 bg-[#F3EBDD]/60 border-y border-[#285943]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <div className="text-xs font-semibold tracking-widest text-[#6F9E73] uppercase">
            Nuestros Cuatro Pilares
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#285943] tracking-tight">
            La Esencia de lo Auténtico
          </h2>
          <p className="font-lora italic text-lg text-[#285943]/80">
            Cada producto NATIVA responde a una promesa inquebrantable de respeto por tu organismo y por el entorno.
          </p>
        </div>

        {/* 4 Cards Grid - Clean, spacious, with single-level subtle elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_VALUES.map((val, index) => (
            <div
              key={val.title}
              className="bg-white rounded-2xl p-7 border border-[#285943]/10 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#285943]/10 flex items-center justify-center">
                  {icons[index]}
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#C97852] uppercase tracking-wider block mb-1">
                    0{index + 1} · {val.title}
                  </span>
                  <h3 className="text-xl font-bold text-[#285943]">
                    {val.tagline}
                  </h3>
                </div>
                <p className="text-sm text-[#285943]/75 leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#285943]/10 text-xs font-medium text-[#6F9E73] flex items-center gap-1.5">
                <span>Compromiso garantizado</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
