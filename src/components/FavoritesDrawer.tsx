import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Product[];
  onRemoveFavorite: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onAddAllToCart: () => void;
  onOpenProductDetail: (product: Product) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onAddToCart,
  onAddAllToCart,
  onOpenProductDetail
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col z-10 border-l border-[#285943]/15">
        {/* Header */}
        <div className="p-5 bg-white border-b border-[#285943]/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[#FAF7F2] text-[#C97852]">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#285943]">
                Mis Favoritos
              </h2>
              <p className="text-[11px] text-[#285943]/60">
                {favorites.length} {favorites.length === 1 ? 'producto guardado' : 'productos guardados'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#285943] hover:bg-[#FAF7F2] rounded-lg transition-colors cursor-pointer"
            aria-label="Cerrar favoritos"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {favorites.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#F3EBDD] text-[#C97852] flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-[#285943]">
                No tienes productos guardados
              </h3>
              <p className="text-xs text-[#285943]/70 max-w-xs mx-auto leading-relaxed">
                Guarda los productos que más te gusten haciendo clic en el corazón para tenerlos listos en tu próximo pedido.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[#285943] text-white text-xs font-semibold rounded-xl hover:bg-[#1B3F2F] transition-colors cursor-pointer"
              >
                Explorar Productos
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {favorites.map(item => (
                <div
                  key={item.id}
                  className="p-3.5 bg-white rounded-2xl border border-[#285943]/10 flex gap-3.5 items-center shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    onClick={() => onOpenProductDetail(item)}
                    className="w-18 h-18 rounded-xl object-cover bg-[#F3EBDD] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
                  />

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#6F9E73] block">
                      {item.categoryLabel}
                    </span>
                    <h4
                      onClick={() => onOpenProductDetail(item)}
                      className="text-sm font-bold text-[#285943] truncate cursor-pointer hover:underline"
                    >
                      {item.name}
                    </h4>
                    <p className="text-xs font-extrabold text-[#285943] tabular-nums mt-0.5">
                      {item.priceFormatted}
                    </p>
                    <p className="text-[11px] text-[#285943]/60 truncate mt-0.5">
                      {item.size.split('(')[0]}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => onAddToCart(item)}
                        className="px-3 py-1.5 bg-[#285943] hover:bg-[#1B3F2F] text-white text-[11px] font-bold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Añadir a Bolsa</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => onRemoveFavorite(item.id)}
                        className="p-1.5 text-[#285943]/40 hover:text-red-600 transition-colors cursor-pointer"
                        title="Quitar de favoritos"
                        aria-label="Quitar de favoritos"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer actions when favorites exist */}
        {favorites.length > 0 && (
          <div className="p-5 bg-white border-t border-[#285943]/10 space-y-2">
            <button
              type="button"
              onClick={() => {
                onAddAllToCart();
                onClose();
              }}
              className="w-full py-3.5 bg-[#285943] text-white text-xs font-bold tracking-wider rounded-xl hover:bg-[#1B3F2F] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>AGREGAR TODOS A LA BOLSA ({favorites.length})</span>
            </button>
            <p className="text-[11px] text-center text-[#285943]/60">
              Tus favoritos se guardan automáticamente en este dispositivo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
