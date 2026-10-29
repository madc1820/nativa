import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { NativaLogo } from './NativaLogo';

interface NavbarProps {
  cartCount: number;
  favoritesCount: number;
  onOpenCart: () => void;
  onOpenFavorites: () => void;
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  favoritesCount,
  onOpenCart,
  onOpenFavorites,
  onOpenRegister
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <aside aria-label="Anuncio de lanzamiento" className="bg-[#285943] text-[#F3EBDD] text-xs font-medium py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2 border-b border-[#285943]/20">
        <Sparkles className="w-3.5 h-3.5 text-[#C97852] shrink-0" />
        <span className="truncate">
          Gran Evento de Lanzamiento NATIVA · Cupos limitados para el Taller Sensorial · 15% OFF con código <strong className="text-white underline underline-offset-2">BIENVENIDO15</strong>
        </span>
      </aside>

      {/* Main Navigation Bar - Following strict Top Bar Contract */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#285943]/10 py-3.5'
            : 'bg-[#FAF7F2] py-4 border-b border-[#285943]/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark (Single element, no cluttered pill tags) */}
            <a
              href="#"
              className="flex items-center gap-2 focus-visible:outline-[#285943] rounded-sm shrink-0"
              aria-label="Nativa Inicio"
            >
              <NativaLogo size="md" variant="forest" />
            </a>

            {/* Zone 2: 4-5 Nav Links (Single line, text with subtle hover) */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#285943]/80">
              <a
                href="#beneficios"
                className="hover:text-[#285943] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#6F9E73]"
              >
                Beneficios
              </a>
              <a
                href="#destacado"
                className="hover:text-[#285943] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#6F9E73]"
              >
                Té Vital
              </a>
              <a
                href="#productos"
                className="hover:text-[#285943] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#6F9E73]"
              >
                Nuestra Línea
              </a>
              <a
                href="#evento"
                className="hover:text-[#285943] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#6F9E73]"
              >
                Lanzamiento & Talleres
              </a>
              <a
                href="#nosotros"
                className="hover:text-[#285943] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#6F9E73]"
              >
                Sobre Nativa
              </a>
              <a
                href="#faq"
                className="hover:text-[#285943] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#6F9E73]"
              >
                Preguntas
              </a>
            </nav>

            {/* Zone 3: Actions + Wishlist & Cart Affordances */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Favorites Wishlist Button */}
              <button
                type="button"
                onClick={onOpenFavorites}
                className="relative p-2 rounded-full text-[#285943] hover:bg-[#F3EBDD] transition-colors focus-visible:outline-[#285943] cursor-pointer"
                aria-label={`Ver productos favoritos (${favoritesCount})`}
                title="Mis Favoritos"
              >
                <Heart className={`w-5 h-5 transition-colors ${favoritesCount > 0 ? 'text-[#C97852] fill-[#C97852]' : 'text-[#285943]'}`} />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C97852] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs tabular-nums">
                    {favoritesCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button */}
              <button
                type="button"
                onClick={onOpenCart}
                className="relative p-2 rounded-full text-[#285943] hover:bg-[#F3EBDD] transition-colors focus-visible:outline-[#285943] cursor-pointer"
                aria-label={`Ver carrito de compras con ${cartCount} productos`}
                title="Bolsa de Compras"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#285943] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs tabular-nums">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Primary CTA from Prompt: ME QUIERO REGISTRAR */}
              <button
                type="button"
                onClick={onOpenRegister}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#285943] text-white text-xs font-semibold tracking-wider rounded-lg hover:bg-[#1B3F2F] active:scale-[0.98] transition-all shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>ME QUIERO REGISTRAR</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile menu hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-[#285943] hover:bg-[#F3EBDD] focus-visible:outline-[#285943]"
                aria-label="Abrir menú de navegación"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b border-[#285943]/15 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-2 text-base font-medium text-[#285943]">
              <a
                href="#beneficios"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#F3EBDD] transition-colors"
              >
                Beneficios
              </a>
              <a
                href="#destacado"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#F3EBDD] transition-colors"
              >
                Té Vital
              </a>
              <a
                href="#productos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#F3EBDD] transition-colors"
              >
                Nuestra Línea
              </a>
              <a
                href="#evento"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#F3EBDD] transition-colors"
              >
                Lanzamiento & Talleres
              </a>
              <a
                href="#nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#F3EBDD] transition-colors"
              >
                Sobre Nativa
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#F3EBDD] transition-colors"
              >
                Preguntas Frecuentes
              </a>
            </nav>

            <div className="pt-2 border-t border-[#285943]/10 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenFavorites();
                  }}
                  className="py-2.5 px-3 bg-white border border-[#285943]/15 text-[#285943] text-xs font-semibold rounded-lg flex items-center justify-center gap-2"
                >
                  <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'text-[#C97852] fill-[#C97852]' : ''}`} />
                  <span>Favoritos ({favoritesCount})</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCart();
                  }}
                  className="py-2.5 px-3 bg-[#F3EBDD] border border-[#285943]/15 text-[#285943] text-xs font-semibold rounded-lg flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Bolsa ({cartCount})</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-3 bg-[#285943] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-[#1B3F2F] transition-colors"
              >
                <span>ME QUIERO REGISTRAR</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
