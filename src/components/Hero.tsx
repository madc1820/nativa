import React from 'react';
import { ArrowRight, ShoppingBag, ShieldCheck, Heart, Leaf, MapPin } from 'lucide-react';
import { HERO_IMAGE } from '../data/products';
import { NativaLogo } from './NativaLogo';

interface HeroProps {
  onOpenRegister: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRegister,
  onExploreProducts
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Background ambient accents in brand palette */}
      <div className="absolute top-0 right-0 -z-10 w-[550px] h-[550px] bg-[#6F9E73]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -z-10 w-[450px] h-[450px] bg-[#F3EBDD] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column split with items-stretch for visual balance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Contextual eyebrow without garish pills */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#6F9E73] uppercase">
              <span>Gran Lanzamiento Oficial</span>
              <span aria-hidden="true" className="text-[#C97852]">·</span>
              <span>Edición Limitada</span>
              <span aria-hidden="true" className="text-[#C97852]">·</span>
              <span>Colombia</span>
            </div>

            {/* Title & Official Brand Logo: NATIVA */}
            <div className="space-y-3">
              <NativaLogo size="xl" className="h-14 sm:h-18" />
              <h1 className="sr-only">NATIVA</h1>
            </div>

            {/* Subtitle from user prompt: Lo natural también puede transformar tu día */}
            <p className="font-lora italic text-2xl sm:text-3xl text-[#285943]/90 leading-snug">
              “Lo natural también puede transformar tu día”
            </p>

            {/* Explanatory editorial copy */}
            <p className="text-base sm:text-lg text-[#285943]/75 leading-relaxed max-w-xl">
              Elaboramos infusiones botánicas, miel pura de bosque andino y alimentos artesanales en pequeños lotes. Cosechados en armonía con la tierra para devolverle vitalidad limpia y serenidad a cada momento de tu rutina.
            </p>

            {/* CTAs: Exact copy from user prompt */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA: ME QUIERO REGISTRAR */}
              <button
                type="button"
                onClick={onOpenRegister}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#285943] text-white text-sm font-semibold tracking-wider rounded-xl hover:bg-[#1B3F2F] hover:shadow-lg hover:shadow-[#285943]/20 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>ME QUIERO REGISTRAR</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA: COMPRAR */}
              <button
                type="button"
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#F3EBDD] text-[#285943] text-sm font-semibold tracking-wider rounded-xl border border-[#285943]/15 hover:bg-[#e8decb] hover:border-[#285943]/30 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <ShoppingBag className="w-4 h-4 text-[#C97852]" />
                <span>COMPRAR</span>
              </button>
            </div>

            {/* Direct proof quote snippet */}
            <div className="pt-4 border-t border-[#285943]/10 flex items-center gap-4 text-xs text-[#285943]/70">
              <div className="flex -space-x-1.5">
                <span className="inline-block w-7 h-7 rounded-full bg-[#285943] text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-[#FAF7F2]">
                  NV
                </span>
                <span className="inline-block w-7 h-7 rounded-full bg-[#6F9E73] text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-[#FAF7F2]">
                  CM
                </span>
                <span className="inline-block w-7 h-7 rounded-full bg-[#C97852] text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-[#FAF7F2]">
                  AG
                </span>
              </div>
              <p>
                <strong className="text-[#285943] font-semibold">+1,200 personas</strong> ya han transformado sus mañanas con nuestro prelanzamiento.
              </p>
            </div>
          </div>

          {/* Right Column: Hero Visual Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-[#285943]/10 border border-[#285943]/10 bg-[#F3EBDD]">
              <img
                src={HERO_IMAGE}
                alt="Ritual matutino con infusión natural de hierbas aromáticas y miel pura NATIVA"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[460px] object-cover hover:scale-102 transition-transform duration-500"
              />

              {/* Bottom organic badge overlay with measured scrim */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                <p className="font-lora italic text-base sm:text-lg font-medium text-[#F3EBDD]">
                  Cata sensorial & Nueva línea de bienestar
                </p>
                <div className="flex items-center gap-2 mt-1 text-xs text-white/85">
                  <span>Té Vital</span>
                  <span aria-hidden="true">·</span>
                  <span>Granola Artesanal</span>
                  <span aria-hidden="true">·</span>
                  <span>Miel de Montaña</span>
                </div>
              </div>

              {/* Special Tag in Terracota */}
              <div className="absolute top-4 right-4 bg-[#C97852] text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md">
                15% OFF Prelanzamiento
              </div>
            </div>
          </div>
        </div>

        {/* 4-Pillar Trust Strip below Hero */}
        <div className="mt-14 pt-8 border-t border-[#285943]/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#F3EBDD] text-[#285943] shrink-0">
              <Leaf className="w-5 h-5 text-[#285943]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#285943]">100% Botánico</h4>
              <p className="text-xs text-[#285943]/70">Hierbas puras sin químicos</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#F3EBDD] text-[#285943] shrink-0">
              <Heart className="w-5 h-5 text-[#C97852]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#285943]">Artesanal Colombiano</h4>
              <p className="text-xs text-[#285943]/70">Hecho en pequeños lotes</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#F3EBDD] text-[#285943] shrink-0">
              <MapPin className="w-5 h-5 text-[#6F9E73]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#285943]">Comercio Local</h4>
              <p className="text-xs text-[#285943]/70">Apoyo a familias campesinas</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#F3EBDD] text-[#285943] shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#285943]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#285943]">Empaques Eco</h4>
              <p className="text-xs text-[#285943]/70">100% biodegradables</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
