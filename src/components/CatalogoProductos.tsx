import React, { useState } from 'react';
import { ShoppingBag, Eye, Star, Plus, Heart } from 'lucide-react';
import { Product } from '../types';

interface CatalogoProductosProps {
  products: Product[];
  favorites: string[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
}

export const CatalogoProductos: React.FC<CatalogoProductosProps> = ({
  products,
  favorites,
  onSelectProduct,
  onAddToCart,
  onToggleFavorite
}) => {
  const [filter, setFilter] = useState<'all' | 'infusion' | 'alimento' | 'miel'>('all');

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <section id="productos" className="py-20 bg-[#F3EBDD]/40 border-t border-[#285943]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="text-xs font-semibold tracking-widest text-[#6F9E73] uppercase">
              Catálogo Oficial · Lanzamiento
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#285943] tracking-tight">
              Nuestra Línea de Bienestar
            </h2>
            <p className="font-lora italic text-base sm:text-lg text-[#285943]/80 max-w-xl">
              Cada fórmula ha sido elaborada de manera artesanal pensando en el equilibrio de tu día a día.
            </p>
          </div>

          {/* Interactive Filter Controls - Segmented control adhering to zero-pill discipline */}
          <div className="inline-flex items-center gap-1 p-1 bg-white border border-[#285943]/15 rounded-xl shadow-2xs self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#285943] text-white shadow-2xs'
                  : 'text-[#285943]/70 hover:text-[#285943]'
              }`}
            >
              Todos (4)
            </button>
            <button
              type="button"
              onClick={() => setFilter('infusion')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'infusion'
                  ? 'bg-[#285943] text-white shadow-2xs'
                  : 'text-[#285943]/70 hover:text-[#285943]'
              }`}
            >
              Infusiones
            </button>
            <button
              type="button"
              onClick={() => setFilter('alimento')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'alimento'
                  ? 'bg-[#285943] text-white shadow-2xs'
                  : 'text-[#285943]/70 hover:text-[#285943]'
              }`}
            >
              Granola
            </button>
            <button
              type="button"
              onClick={() => setFilter('miel')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'miel'
                  ? 'bg-[#285943] text-white shadow-2xs'
                  : 'text-[#285943]/70 hover:text-[#285943]'
              }`}
            >
              Miel Pura
            </button>
          </div>
        </div>

        {/* 4 Cards Grid with Clean Aesthetics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#285943]/10 overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col group"
            >
              {/* Product Photography Container */}
              <div className="relative aspect-4/3 bg-[#F3EBDD] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                />

                {/* Subdued top tag */}
                {item.highlightTag && (
                  <span className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-xs text-[#285943] text-[11px] font-bold px-2.5 py-1 rounded-md border border-[#285943]/10">
                    {item.highlightTag}
                  </span>
                )}

                {/* Heart Favorite Toggle Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(item);
                  }}
                  className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white text-[#285943] rounded-full shadow-sm border border-[#285943]/10 transition-transform active:scale-90 cursor-pointer z-10"
                  aria-label={favorites.includes(item.id) ? `Quitar ${item.name} de favoritos` : `Guardar ${item.name} en favoritos`}
                  title={favorites.includes(item.id) ? "Quitar de favoritos" : "Guardar en favoritos"}
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      favorites.includes(item.id)
                        ? 'text-[#C97852] fill-[#C97852]'
                        : 'text-[#285943] hover:text-[#C97852]'
                    }`}
                  />
                </button>

                {/* Quick view button overlay */}
                <button
                  type="button"
                  onClick={() => onSelectProduct(item)}
                  className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white text-[#285943] rounded-lg shadow-sm border border-[#285943]/10 transition-colors opacity-90 hover:opacity-100 cursor-pointer"
                  title="Ver detalles rápidos"
                  aria-label={`Ver detalles de ${item.name}`}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-[#6F9E73] font-medium">
                    <span>{item.categoryLabel}</span>
                    <div className="flex items-center gap-1 text-[#C97852]">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="tabular-nums font-semibold">{item.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#285943] group-hover:text-[#1B3F2F] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#285943]/70 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-[#285943]/10">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[11px] text-[#285943]/60 block">Presentación</span>
                      <span className="text-xs font-medium text-[#285943]">{item.size.split('(')[0]}</span>
                    </div>
                    <span className="text-lg font-extrabold text-[#285943] tabular-nums">
                      {item.priceFormatted}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(item)}
                      className="w-full py-2.5 px-3 bg-[#FAF7F2] hover:bg-[#F3EBDD] text-[#285943] text-xs font-semibold rounded-lg border border-[#285943]/15 transition-colors cursor-pointer text-center"
                    >
                      Detalles
                    </button>
                    <button
                      type="button"
                      onClick={() => onAddToCart(item)}
                      className="w-full py-2.5 px-3 bg-[#285943] hover:bg-[#1B3F2F] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Comprar</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
