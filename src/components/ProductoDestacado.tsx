import React from 'react';
import { ArrowRight, ShoppingBag, CheckCircle2, Clock, Flame, Sparkles, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductoDestacadoProps {
  product: Product;
  isFavorite: boolean;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
}

export const ProductoDestacado: React.FC<ProductoDestacadoProps> = ({
  product,
  isFavorite,
  onSelectProduct,
  onAddToCart,
  onToggleFavorite
}) => {
  return (
    <section id="destacado" className="py-20 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#285943]/15 shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: High-impact image */}
            <div className="lg:col-span-6 relative bg-[#F3EBDD] h-[400px] lg:h-[540px]">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute top-5 left-5 bg-[#285943] text-[#F3EBDD] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm">
                ⭐ Producto Insignia
              </div>
              <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-xs text-[#285943] px-4 py-2 rounded-xl text-xs font-bold border border-[#285943]/10 shadow-sm">
                {product.size}
              </div>
            </div>

            {/* Right: Detailed Story & Value Proposition */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-12 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#6F9E73] uppercase tracking-wider mb-2">
                  <span>Edición Prelanzamiento</span>
                  <span aria-hidden="true" className="text-[#C97852]">·</span>
                  <span>Mezcla Botánica Matutina</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#285943] tracking-tight">
                  {product.name}
                </h2>
                <p className="font-lora italic text-xl text-[#C97852] mt-2">
                  “Una mezcla natural para comenzar el día con energía y bienestar.”
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#285943]/80 leading-relaxed">
                {product.description} Creado para sustituir las bebidas estimulantes sintéticas por una energía limpia, digestiva y reconfortante.
              </p>

              {/* Key botanical ingredients pills replaced with clean list */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#285943]">
                  Ingredientes Botánicos Seleccionados:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#285943]/85">
                  {product.ingredients.slice(0, 4).map((ing) => (
                    <div key={ing} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6F9E73] shrink-0" />
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preparation time & temperature notes */}
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#285943]/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#285943]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C97852]" />
                  <span><strong>Infusión:</strong> 5–7 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#6F9E73]" />
                  <span><strong>Temperatura:</strong> 90°C</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#285943]" />
                  <span><strong>Rinde:</strong> ~45 tazas</span>
                </div>
              </div>

              {/* Price & Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-[#285943]/10">
                <div>
                  <span className="text-xs text-[#285943]/70 block">Precio de prelanzamiento</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#285943] tabular-nums">
                      {product.priceFormatted}
                    </span>
                    <span className="text-xs text-[#285943]/50 line-through tabular-nums">$42.000 COP</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  {/* Favorite Toggle Button */}
                  <button
                    type="button"
                    onClick={() => onToggleFavorite(product)}
                    className="p-3 rounded-xl border border-[#285943]/20 hover:border-[#285943] bg-[#FAF7F2] hover:bg-white text-[#285943] transition-all cursor-pointer"
                    aria-label={isFavorite ? "Quitar Té Vital de favoritos" : "Guardar Té Vital en favoritos"}
                    title={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
                  >
                    <Heart className={`w-5 h-5 transition-colors ${isFavorite ? 'text-[#C97852] fill-[#C97852]' : 'text-[#285943]'}`} />
                  </button>

                  {/* CTA explicit from manual: DESCUBRIR TÉ VITAL */}
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 sm:flex-initial px-5 py-3 rounded-xl border border-[#285943] text-[#285943] text-xs font-bold tracking-wider hover:bg-[#F3EBDD] transition-colors cursor-pointer"
                  >
                    DESCUBRIR TÉ VITAL
                  </button>

                  {/* Buy / Add to Cart */}
                  <button
                    type="button"
                    onClick={() => onAddToCart(product)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#285943] text-white text-xs font-bold tracking-wider rounded-xl hover:bg-[#1B3F2F] active:scale-[0.98] transition-all cursor-pointer shadow-xs"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>COMPRAR</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
