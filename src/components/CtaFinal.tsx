import React from 'react';
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';

interface CtaFinalProps {
  onOpenRegister: () => void;
  onExploreProducts: () => void;
}

export const CtaFinal: React.FC<CtaFinalProps> = ({
  onOpenRegister,
  onExploreProducts
}) => {
  return (
    <section className="py-20 bg-[#285943] text-white relative overflow-hidden">
      {/* Organic radial accents */}
      <div className="absolute top-0 right-1/4 -z-0 w-96 h-96 bg-[#6F9E73]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-0 w-80 h-80 bg-[#C97852]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F3EBDD] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#C97852]" />
          <span>Únete al Gran Lanzamiento</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F3EBDD] leading-tight max-w-3xl mx-auto">
          ¿Listo para transformar tu día desde la primera taza?
        </h2>

        <p className="font-lora italic text-xl sm:text-2xl text-[#6F9E73] max-w-2xl mx-auto">
          “Lo natural también puede transformar tu día”
        </p>

        <p className="text-sm sm:text-base text-[#F3EBDD]/80 max-w-xl mx-auto leading-relaxed">
          Inscríbete hoy al evento de lanzamiento y obtén tu kit de bienvenida exclusivo junto a un 15% de descuento en tu primer pedido.
        </p>

        {/* Both CTAs with exact required copy */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenRegister}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C97852] text-white text-sm font-semibold tracking-wider rounded-xl hover:bg-[#b86944] active:scale-[0.98] transition-all shadow-lg hover:shadow-[#C97852]/30 cursor-pointer"
          >
            <span>ME QUIERO REGISTRAR</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onExploreProducts}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FAF7F2] text-[#285943] text-sm font-semibold tracking-wider rounded-xl hover:bg-[#F3EBDD] active:scale-[0.98] transition-all cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#C97852]" />
            <span>COMPRAR</span>
          </button>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#F3EBDD]/70">
          <span>✓ Cupo de prelanzamiento gratuito</span>
          <span aria-hidden="true">·</span>
          <span>✓ Envíos seguros a toda Colombia</span>
          <span aria-hidden="true">·</span>
          <span>✓ Atención directa por WhatsApp</span>
        </div>
      </div>
    </section>
  );
};
