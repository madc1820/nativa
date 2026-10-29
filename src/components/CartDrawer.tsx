import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, MessageCircle, ShieldCheck, Heart, Truck } from 'lucide-react';
import { CartItem, Product } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onMoveToFavorites?: (product: Product) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onMoveToFavorites
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  // Customer checkout info
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const shipping = subtotal > 80000 || subtotal === 0 ? 0 : 9000;
  const total = subtotal - discountAmount + shipping;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'BIENVENIDO15') {
      setDiscountPercent(15);
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Cupón inválido. Usa BIENVENIDO15');
    }
  };

  const handleSendWhatsAppOrder = () => {
    const itemsText = items
      .map(
        i =>
          `• ${i.quantity}x ${i.product.name} (${i.product.size.split('(')[0].trim()}) - $${(i.product.price * i.quantity).toLocaleString('es-CO')}`
      )
      .join('%0A');

    const message = `Hola NATIVA, quiero confirmar mi pedido:%0A%0A${itemsText}%0A%0A*Subtotal:* $${subtotal.toLocaleString('es-CO')} COP${
      discountAmount > 0 ? `%0A*Descuento (15%):* -$${discountAmount.toLocaleString('es-CO')} COP` : ''
    }%0A*Envío:* ${shipping === 0 ? 'GRATIS' : `$${shipping.toLocaleString('es-CO')} COP`}%0A*Total:* $${total.toLocaleString('es-CO')} COP%0A%0A*Datos de entrega:*%0A• Nombre: ${encodeURIComponent(customerName || 'Cliente')}%0A• Celular: ${encodeURIComponent(customerPhone || 'Por confirmar')}%0A• Dirección: ${encodeURIComponent(customerAddress || 'Por confirmar')}%0A• Ciudad: ${encodeURIComponent(customerCity || 'Bogotá')}`;

    window.open(`https://wa.me/573001234567?text=${message}`, '_blank');
  };

  const handleSimulatedCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      onClearCart();
    }, 1200);
  };

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
            <h2 className="text-lg font-bold text-[#285943]">
              Bolsa de Compra
            </h2>
            <span className="text-xs text-[#285943]/70 font-semibold bg-[#FAF7F2] px-2.5 py-0.5 rounded-full border border-[#285943]/10 tabular-nums">
              {items.reduce((s, i) => s + i.quantity, 0)} {items.reduce((s, i) => s + i.quantity, 0) === 1 ? 'producto' : 'productos'}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#285943] hover:bg-[#FAF7F2] rounded-lg transition-colors cursor-pointer"
            aria-label="Cerrar bolsa de compra"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {checkoutComplete ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#6F9E73]/20 text-[#285943] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-8 h-8 text-[#285943]" />
              </div>
              <h3 className="text-xl font-bold text-[#285943]">
                ¡Pedido Recibido con Éxito!
              </h3>
              <p className="text-xs text-[#285943]/75 max-w-xs mx-auto">
                Gracias por confiar en NATIVA. Te hemos enviado un resumen de confirmación y una asesora se comunicará para coordinar tu despacho.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCheckoutComplete(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#285943] text-white text-xs font-semibold rounded-xl hover:bg-[#1B3F2F] transition-colors"
              >
                Volver a la tienda
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <p className="font-lora italic text-lg text-[#285943]/70">
                Tu bolsa de compra está vacía
              </p>
              <p className="text-xs text-[#285943]/60 max-w-xs mx-auto">
                Descubre nuestra línea natural y artesanal para comenzar a transformar tus mañanas.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[#285943] text-white text-xs font-semibold rounded-xl hover:bg-[#1B3F2F] transition-colors cursor-pointer"
              >
                Explorar Catálogo
              </button>
            </div>
          ) : (
            <>
              {/* Free Shipping Progress Indicator */}
              <div className="p-3.5 bg-white rounded-xl border border-[#285943]/10 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold text-[#285943]">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#6F9E73]" />
                    {subtotal >= 80000 ? (
                      <span className="text-[#6F9E73] font-bold">¡Envío GRATIS alcanzado a toda Colombia!</span>
                    ) : (
                      <span>Faltan ${(80000 - subtotal).toLocaleString('es-CO')} COP para envío gratis</span>
                    )}
                  </span>
                  <span className="tabular-nums text-[11px] text-[#285943]/70 font-bold">
                    {Math.min(100, Math.round((subtotal / 80000) * 100))}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#FAF7F2] rounded-full overflow-hidden border border-[#285943]/10">
                  <div
                    className="h-full bg-[#6F9E73] rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, Math.round((subtotal / 80000) * 100))}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {items.map(item => (
                  <div
                    key={item.product.id}
                    className="p-3.5 bg-white rounded-xl border border-[#285943]/10 flex gap-3.5 items-center shadow-2xs"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-lg object-cover bg-[#F3EBDD] shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-[#285943] truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-[#285943]/60 truncate">
                        {item.product.size.split('(')[0]}
                      </p>
                      <span className="text-xs font-extrabold text-[#285943] tabular-nums">
                        ${(item.product.price * item.quantity).toLocaleString('es-CO')} COP
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-1.5 bg-[#FAF7F2] p-1 rounded-lg border border-[#285943]/10">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:text-[#C97852] text-[#285943] rounded transition-colors"
                        aria-label="Disminuir cantidad"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold text-[#285943] w-5 text-center tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:text-[#285943] text-[#285943] rounded transition-colors"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex flex-col gap-1 items-center">
                      {onMoveToFavorites && (
                        <button
                          type="button"
                          onClick={() => {
                            onMoveToFavorites(item.product);
                            onRemoveItem(item.product.id);
                          }}
                          className="p-1 text-[#285943]/40 hover:text-[#C97852] transition-colors cursor-pointer"
                          title="Mover a favoritos"
                          aria-label="Mover a favoritos"
                        >
                          <Heart className="w-3.5 h-3.5" />
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-1 text-[#285943]/40 hover:text-red-600 transition-colors cursor-pointer"
                        title="Eliminar producto"
                        aria-label="Eliminar producto"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Code Box */}
              <div className="p-3.5 bg-white rounded-xl border border-[#285943]/10 space-y-2">
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={e => setCouponCode(e.target.value)}
                    placeholder="Código (BIENVENIDO15)"
                    className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-[#285943]/20 bg-[#FAF7F2] uppercase font-semibold text-[#285943] focus:outline-none focus:ring-1 focus:ring-[#285943]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#FAF7F2] hover:bg-[#F3EBDD] text-[#285943] text-xs font-bold rounded-lg border border-[#285943]/20 transition-colors"
                  >
                    Aplicar
                  </button>
                </form>
                {couponApplied && (
                  <p className="text-[11px] text-[#6F9E73] font-semibold">
                    ✓ Cupón BIENVENIDO15 aplicado (-15%)
                  </p>
                )}
                {couponError && (
                  <p className="text-[11px] text-red-600">
                    {couponError}
                  </p>
                )}
              </div>

              {/* Express customer details form for checkout */}
              <div className="p-3.5 bg-white rounded-xl border border-[#285943]/10 space-y-2">
                <span className="text-xs font-bold text-[#285943] block">
                  Datos de Envío para tu Pedido
                </span>
                <input
                  type="text"
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  placeholder="Tu Nombre Completo"
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-[#285943]/20 bg-[#FAF7F2] text-[#285943]"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={e => setCustomerPhone(e.target.value)}
                    placeholder="Celular / WhatsApp"
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-[#285943]/20 bg-[#FAF7F2] text-[#285943]"
                  />
                  <input
                    type="text"
                    value={customerCity}
                    onChange={e => setCustomerCity(e.target.value)}
                    placeholder="Ciudad"
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-[#285943]/20 bg-[#FAF7F2] text-[#285943]"
                  />
                </div>
                <input
                  type="text"
                  value={customerAddress}
                  onChange={e => setCustomerAddress(e.target.value)}
                  placeholder="Dirección de Entrega"
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-[#285943]/20 bg-[#FAF7F2] text-[#285943]"
                />
              </div>
            </>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && !checkoutComplete && (
          <div className="p-5 bg-white border-t border-[#285943]/10 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#285943]/70">
                <span>Subtotal</span>
                <span className="tabular-nums">${subtotal.toLocaleString('es-CO')} COP</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#6F9E73] font-semibold">
                  <span>Descuento Especial (15%)</span>
                  <span className="tabular-nums">-${discountAmount.toLocaleString('es-CO')} COP</span>
                </div>
              )}
              <div className="flex justify-between text-[#285943]/70">
                <span>Envío Nacional</span>
                <span className="tabular-nums">
                  {shipping === 0 ? (
                    <strong className="text-[#6F9E73]">¡GRATIS! (Compras &gt; $80.000)</strong>
                  ) : (
                    `$${shipping.toLocaleString('es-CO')} COP`
                  )}
                </span>
              </div>
              <div className="pt-2 border-t border-[#285943]/10 flex justify-between text-base font-extrabold text-[#285943]">
                <span>Total Estimado</span>
                <span className="tabular-nums">${total.toLocaleString('es-CO')} COP</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              {/* WhatsApp Checkout Button */}
              <button
                type="button"
                onClick={handleSendWhatsAppOrder}
                className="w-full py-3.5 bg-[#285943] text-white text-xs font-bold tracking-wider rounded-xl hover:bg-[#1B3F2F] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#A3D2A7]" />
                <span>PEDIR DIRECTO POR WHATSAPP</span>
              </button>

              {/* Direct payment simulator */}
              <button
                type="button"
                onClick={handleSimulatedCheckout}
                disabled={isCheckingOut}
                className="w-full py-2.5 bg-[#FAF7F2] hover:bg-[#F3EBDD] text-[#285943] text-xs font-semibold rounded-xl border border-[#285943]/15 transition-colors cursor-pointer text-center"
              >
                {isCheckingOut ? 'Procesando pago seguro...' : 'Pagar en Línea con Nequi / PSE / Tarjeta'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
