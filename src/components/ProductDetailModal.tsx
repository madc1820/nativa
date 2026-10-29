import React, { useState } from 'react';
import { X, CheckCircle2, ShoppingBag, Plus, Minus, Clock, Sparkles, Star, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  isFavorite: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onToggleFavorite: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isFavorite,
  onClose,
  onAddToCart,
  onToggleFavorite
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#285943]/15 overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Favorite Heart Button */}
        <button
          type="button"
          onClick={() => onToggleFavorite(product)}
          className="absolute top-4 right-14 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-[#285943] shadow-md border border-[#285943]/10 transition-colors cursor-pointer"
          aria-label={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
          title={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
        >
          <Heart className={`w-5 h-5 transition-colors ${isFavorite ? 'text-[#C97852] fill-[#C97852]' : 'text-[#285943]'}`} />
        </button>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-[#285943] shadow-md border border-[#285943]/10 transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto">
          {/* Product Image Banner */}
          <div className="relative h-64 sm:h-72 bg-[#F3EBDD] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#285943] text-[#F3EBDD] text-xs font-semibold px-3 py-1 rounded-md">
              {product.categoryLabel}
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 rounded-xl text-white">
              <div className="flex items-center gap-1.5 text-xs text-[#F3EBDD]">
                <Star className="w-4 h-4 text-[#C97852] fill-current" />
                <span className="font-bold">{product.rating}</span>
                <span>({product.reviewsCount} opiniones verificadas)</span>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#285943]">
                {product.name}
              </h2>
              <p className="font-lora italic text-base text-[#C97852] mt-1">
                {product.subtitle}
              </p>
              <div className="mt-2 text-xl font-extrabold text-[#285943] tabular-nums">
                {product.priceFormatted} <span className="text-xs font-normal text-[#285943]/60">/ {product.size}</span>
              </div>
            </div>

            <p className="text-sm text-[#285943]/80 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Ingredients */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#285943]">
                Ingredientes Botánicos:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#285943]/80">
                {product.ingredients.map(ing => (
                  <div key={ing} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6F9E73] shrink-0" />
                    <span>{ing}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#285943]">
                Beneficios Principales:
              </h4>
              <ul className="space-y-1.5 text-xs text-[#285943]/80">
                {product.benefits.map(b => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-[#C97852] font-bold">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ritual de preparación */}
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#285943]/10 space-y-1 text-xs text-[#285943]">
              <div className="flex items-center gap-2 font-bold text-[#285943]">
                <Clock className="w-4 h-4 text-[#C97852]" />
                <span>Ritual de Preparación & Disfrute</span>
              </div>
              <p className="text-[#285943]/80 leading-relaxed pt-1">
                {product.ritual}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-5 bg-[#FAF7F2] border-t border-[#285943]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#285943]">Cantidad:</span>
            <div className="flex items-center bg-white rounded-lg border border-[#285943]/15 p-1">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-1 hover:text-[#C97852] text-[#285943]"
                aria-label="Menos cantidad"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center text-xs font-bold text-[#285943] tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="p-1 hover:text-[#285943] text-[#285943]"
                aria-label="Más cantidad"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#285943] text-white text-xs font-bold tracking-wider rounded-xl hover:bg-[#1B3F2F] active:scale-[0.98] transition-all cursor-pointer shadow-xs"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>AGREGAR A LA BOLSA ( ${(product.price * quantity).toLocaleString('es-CO')} COP )</span>
          </button>
        </div>
      </div>
    </div>
  );
};
