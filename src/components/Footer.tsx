import React from 'react';
import { Instagram, MessageCircle, Heart, Shield } from 'lucide-react';
import { NativaLogo } from './NativaLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1B3F2F] text-[#F3EBDD] pt-16 pb-12 border-t border-[#285943]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <NativaLogo size="md" variant="white" />
            <p className="font-lora italic text-base text-[#6F9E73]">
              “Lo natural también puede transformar tu día.”
            </p>
            <p className="text-xs text-[#F3EBDD]/70 max-w-sm leading-relaxed">
              Empresa colombiana dedicada a la elaboración artesanal de infusiones herbales, miel pura de bosque andino y alimentos saludables con impacto regenerativo local.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#6F9E73] text-[#F3EBDD] flex items-center justify-center transition-colors"
                aria-label="Instagram de Nativa"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#6F9E73] text-[#F3EBDD] flex items-center justify-center transition-colors"
                aria-label="WhatsApp de Nativa"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-[#F3EBDD]/75">
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">
                  Pilares & Beneficios
                </a>
              </li>
              <li>
                <a href="#destacado" className="hover:text-white transition-colors">
                  Té Vital (Producto Destacado)
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">
                  Catálogo Completo
                </a>
              </li>
              <li>
                <a href="#evento" className="hover:text-white transition-colors">
                  Evento de Lanzamiento & Talleres
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                  Historia & Filosofía NATIVA
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Dispatch */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Atención & Despachos
            </h4>
            <div className="space-y-2 text-xs text-[#F3EBDD]/75">
              <p>📍 Bogotá, Colombia · Envíos a todo el país</p>
              <p>📱 WhatsApp Directo: +57 (300) 123-4567</p>
              <p>✉️ Correo: contacto@nativa.co</p>
              <p>⏰ Lunes a Sábado: 8:00 AM – 6:00 PM</p>
            </div>

            <div className="pt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-white block mb-2">
                Métodos de Pago Aceptados
              </span>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-[#1B3F2F]">
                <span className="bg-[#FAF7F2] px-2 py-0.5 rounded">Nequi</span>
                <span className="bg-[#FAF7F2] px-2 py-0.5 rounded">Daviplata</span>
                <span className="bg-[#FAF7F2] px-2 py-0.5 rounded">PSE</span>
                <span className="bg-[#FAF7F2] px-2 py-0.5 rounded">Bancolombia</span>
                <span className="bg-[#FAF7F2] px-2 py-0.5 rounded">Tarjetas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F3EBDD]/60">
          <p>© {new Date().getFullYear()} NATIVA S.A.S. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Hecho con amor y plantas puras en Colombia</span>
            <Heart className="w-3.5 h-3.5 text-[#C97852] fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};
