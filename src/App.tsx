import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Beneficios } from './components/Beneficios';
import { ProductoDestacado } from './components/ProductoDestacado';
import { CatalogoProductos } from './components/CatalogoProductos';
import { EventoExperiencias } from './components/EventoExperiencias';
import { SobreNosotros } from './components/SobreNosotros';
import { Testimonios } from './components/Testimonios';
import { FaqSection } from './components/FaqSection';
import { CtaFinal } from './components/CtaFinal';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { RegistrationModal } from './components/RegistrationModal';
import { PRODUCTS } from './data/products';
import { Product, CartItem, EventRegistration } from './types';
import { MessageCircle, Heart, ShoppingBag } from 'lucide-react';

export default function App() {
  // Shopping Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Pre-populate with Té Vital
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Favorites state with persistence
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('nativa_favorites');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return ['te-vital']; // Pre-save Té Vital as favorite example
  });
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  // Sync favorites with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('nativa_favorites', JSON.stringify(favorites));
    } catch {
      // Silent error handling for storage limits
    }
  }, [favorites]);

  // Selected product for quick details modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Registration modal state
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  // Notification toast when adding item
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`¡${product.name} agregado a tu bolsa de compra!`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleToggleFavorite = (product: Product) => {
    setFavorites(prev => {
      if (prev.includes(product.id)) {
        showToast(`"${product.name}" eliminado de tus favoritos`);
        return prev.filter(id => id !== product.id);
      } else {
        showToast(`❤️ "${product.name}" guardado en tus favoritos`);
        return [...prev, product.id];
      }
    });
  };

  const handleRemoveFavorite = (productId: string) => {
    setFavorites(prev => prev.filter(id => id !== productId));
  };

  const handleAddAllFavoritesToCart = () => {
    const favoriteProducts = PRODUCTS.filter(p => favorites.includes(p.id));
    favoriteProducts.forEach(p => {
      handleAddToCart(p, 1);
    });
    showToast(`¡${favoriteProducts.length} productos agregados a tu bolsa!`);
  };

  const handleMoveToFavorites = (product: Product) => {
    if (!favorites.includes(product.id)) {
      setFavorites(prev => [...prev, product.id]);
    }
    showToast(`"${product.name}" movido a tus favoritos`);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const favoriteProducts = PRODUCTS.filter(p => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#285943] selection:bg-[#6F9E73]/30 selection:text-[#285943] relative font-sans">
      {/* Toast Alert Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#285943] text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 border border-[#6F9E73]/30 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#6F9E73]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        favoritesCount={favorites.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenRegister={() => setIsRegisterModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenRegister={() => setIsRegisterModalOpen(true)}
          onExploreProducts={() => scrollToSection('productos')}
        />

        {/* 4 Brand Pillars (Beneficios: Natural, Artesanal, Saludable, Local) */}
        <Beneficios />

        {/* Featured Product: Té Vital */}
        <ProductoDestacado
          product={PRODUCTS[0]}
          isFavorite={favorites.includes(PRODUCTS[0].id)}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* Complete 4-product line catalog with Favorites and Cart */}
        <CatalogoProductos
          products={PRODUCTS}
          favorites={favorites}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* Launch Event & Services (Countdown + Workshops + Registration) */}
        <EventoExperiencias
          onRegisterSuccess={(reg) => {
            showToast(`¡Registro confirmado para ${reg.fullName}!`);
          }}
        />

        {/* About NATIVA (History, Colombian Andes Origin & Philosophy) */}
        <SobreNosotros />

        {/* Real Testimonials from Colombia */}
        <Testimonios />

        {/* FAQ Accordions */}
        <FaqSection />

        {/* Final Conversion Section */}
        <CtaFinal
          onOpenRegister={() => setIsRegisterModalOpen(true)}
          onExploreProducts={() => scrollToSection('productos')}
        />
      </main>

      {/* Complete Footer */}
      <Footer />

      {/* Floating Action Bars */}
      <aside aria-label="Acciones rápidas" className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
        {/* WhatsApp Direct Inquiry */}
        <a
          href="https://wa.me/573001234567?text=Hola%20Nativa%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20evento%20de%20lanzamiento%20y%20los%20productos."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#285943] text-white rounded-full shadow-lg hover:bg-[#1B3F2F] hover:shadow-xl transition-all cursor-pointer"
          title="Consultar por WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-[#A3D2A7] group-hover:scale-110 transition-transform" />
          <span className="hidden md:inline text-xs font-semibold whitespace-nowrap">
            ¿Dudas? Chatea con una asesora
          </span>
        </a>
      </aside>

      {/* Floating Quick Bag & Wishlist Access Pill (Bottom-Right) */}
      <aside aria-label="Bolsa y Favoritos Flotante" className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md p-1.5 rounded-full shadow-lg border border-[#285943]/15">
        <button
          type="button"
          onClick={() => setIsFavoritesOpen(true)}
          className="relative p-2.5 rounded-full hover:bg-[#FAF7F2] text-[#285943] transition-colors cursor-pointer"
          title="Mis Favoritos"
          aria-label={`Ver mis favoritos (${favorites.length})`}
        >
          <Heart className={`w-4 h-4 ${favorites.length > 0 ? 'text-[#C97852] fill-[#C97852]' : ''}`} />
          {favorites.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#C97852] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center tabular-nums">
              {favorites.length}
            </span>
          )}
        </button>

        <div className="w-[1px] h-4 bg-[#285943]/15" />

        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="relative px-3.5 py-2 rounded-full bg-[#285943] text-white text-xs font-bold flex items-center gap-2 hover:bg-[#1B3F2F] transition-colors cursor-pointer shadow-xs"
          aria-label={`Abrir carrito con ${totalCartCount} productos`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Bolsa ({totalCartCount})</span>
        </button>
      </aside>

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onMoveToFavorites={handleMoveToFavorites}
      />

      {/* Favorites Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favoriteProducts}
        onRemoveFavorite={handleRemoveFavorite}
        onAddToCart={(p) => handleAddToCart(p, 1)}
        onAddAllToCart={handleAddAllFavoritesToCart}
        onOpenProductDetail={(p) => setSelectedProduct(p)}
      />

      {/* Product Details Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isFavorite={selectedProduct ? favorites.includes(selectedProduct.id) : false}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleFavorite={handleToggleFavorite}
      />

      {/* VIP Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onSuccess={(reg: EventRegistration) => {
          showToast(`¡Registro confirmado para ${reg.fullName}!`);
        }}
      />
    </div>
  );
}
