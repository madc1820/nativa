import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const Testimonios: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <div className="text-xs font-semibold tracking-widest text-[#6F9E73] uppercase">
            Testimonios & Comunidad
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#285943] tracking-tight">
            Historias Reales de Transformación
          </h2>
          <p className="font-lora italic text-lg text-[#285943]/80">
            Personas que decidieron cambiar el afán diario por momentos de pausa consciente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 border border-[#285943]/10 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Rating stars & product used */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-[#C97852]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#6F9E73] bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#285943]/10">
                    {t.productMentioned}
                  </span>
                </div>

                {/* Comment quote in Lora font */}
                <p className="font-lora italic text-sm sm:text-base text-[#285943]/85 leading-relaxed relative">
                  “{t.comment}”
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-6 mt-6 border-t border-[#285943]/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#285943] flex items-center gap-1.5">
                    <span>{t.name}</span>
                    {t.verified && (
                      <span title="Comprador verificado" className="inline-flex">
                        <CheckCircle className="w-3.5 h-3.5 text-[#6F9E73]" />
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-[#285943]/60">
                    {t.role} · {t.city}
                  </p>
                </div>
                <span className="text-[11px] text-[#285943]/50">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
