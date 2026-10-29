import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/products';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#F3EBDD]/40 border-t border-[#285943]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <div className="text-xs font-semibold tracking-widest text-[#6F9E73] uppercase">
            Resolviendo Dudas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#285943] tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="font-lora italic text-base sm:text-lg text-[#285943]/80">
            Todo lo que necesitas saber sobre el lanzamiento, nuestros productos y pedidos.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-[#285943]/10 overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-[#285943]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-[#285943]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C97852] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#285943]/80 leading-relaxed border-t border-[#285943]/5 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp direct help banner */}
        <div className="mt-10 p-5 rounded-2xl bg-[#FAF7F2] border border-[#285943]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#285943] text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-[#A3D2A7]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#285943]">¿Tienes una consulta específica?</h4>
              <p className="text-xs text-[#285943]/70">Escríbenos directamente a nuestro WhatsApp de atención personalizada.</p>
            </div>
          </div>

          <a
            href="https://wa.me/573001234567?text=Hola%20Nativa%2C%20tengo%20una%20consulta%20sobre%20el%20lanzamiento%20y%20los%20productos."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#285943] text-white text-xs font-semibold rounded-xl hover:bg-[#1B3F2F] transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Chatear por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
