import React, { useState } from 'react';
import { X, CheckCircle2, Ticket, Send, Gift, Calendar, Clock, MapPin } from 'lucide-react';
import { EVENT_DETAILS } from '../data/products';
import { EventRegistration } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (reg: EventRegistration) => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [modality, setModality] = useState<'online' | 'presencial'>('online');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState<EventRegistration | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg('Por favor completa todos los campos requeridos.');
      return;
    }

    const regData: EventRegistration = {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      modality,
      city: city.trim() || (modality === 'presencial' ? 'Bogotá' : 'Colombia'),
      ticketId: `NAT-${Math.floor(100000 + Math.random() * 900000)}`,
      registeredAt: new Date().toLocaleDateString('es-CO')
    };

    setSubmitted(regData);
    onSuccess(regData);
    setErrorMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#285943]/15 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-[#285943] shadow-xs border border-[#285943]/10 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-[#6F9E73] uppercase tracking-wider">
                  Acceso Gratuito Exclusivo
                </span>
                <h3 className="text-2xl font-extrabold text-[#285943] mt-1">
                  Inscripción al Gran Lanzamiento NATIVA
                </h3>
                <p className="text-xs text-[#285943]/70 mt-1">
                  Taller sensorial, masterclass de bienestar botánico y kit de bienvenida.
                </p>
              </div>

              {/* Event quick info */}
              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#285943]/10 flex flex-wrap gap-3 text-xs text-[#285943]">
                <span className="flex items-center gap-1 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-[#C97852]" />
                  15 Nov 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#6F9E73]" />
                  9:30 AM
                </span>
                <span className="flex items-center gap-1">
                  <Gift className="w-3.5 h-3.5 text-[#C97852]" />
                  Kit asegurado
                </span>
              </div>

              {errorMsg && (
                <div className="p-2.5 rounded-lg bg-red-50 text-red-700 text-xs border border-red-200">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-[#285943] mb-1" htmlFor="modal-name">
                    Nombre Completo *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="Tu nombre y apellido"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#285943]/20 bg-[#FAF7F2] text-[#285943] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#285943]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#285943] mb-1" htmlFor="modal-email">
                      Correo Electrónico *
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="nombre@correo.com"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#285943]/20 bg-[#FAF7F2] text-[#285943] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#285943]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#285943] mb-1" htmlFor="modal-phone">
                      WhatsApp / Celular *
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+57 300 000 0000"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#285943]/20 bg-[#FAF7F2] text-[#285943] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#285943]"
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-bold text-[#285943] mb-1.5">
                    Modalidad de Asistencia
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <label
                      className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                        modality === 'online'
                          ? 'border-[#285943] bg-[#F3EBDD] font-semibold text-[#285943]'
                          : 'border-[#285943]/15 bg-[#FAF7F2] text-[#285943]/70'
                      }`}
                    >
                      <input
                        type="radio"
                        checked={modality === 'online'}
                        onChange={() => setModality('online')}
                        className="text-[#285943]"
                      />
                      <span>Virtual en Vivo HD</span>
                    </label>
                    <label
                      className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                        modality === 'presencial'
                          ? 'border-[#285943] bg-[#F3EBDD] font-semibold text-[#285943]'
                          : 'border-[#285943]/15 bg-[#FAF7F2] text-[#285943]/70'
                      }`}
                    >
                      <input
                        type="radio"
                        checked={modality === 'presencial'}
                        onChange={() => setModality('presencial')}
                        className="text-[#285943]"
                      />
                      <span>Presencial (Bogotá)</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#285943] mb-1" htmlFor="modal-city">
                    Ciudad
                  </label>
                  <input
                    id="modal-city"
                    type="text"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    placeholder="Ej. Bogotá, Medellín, Cali..."
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#285943]/20 bg-[#FAF7F2] text-[#285943] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#285943]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#285943] text-white text-xs font-bold tracking-wider rounded-xl hover:bg-[#1B3F2F] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <Send className="w-4 h-4" />
                  <span>ME QUIERO REGISTRAR</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center space-y-4 py-4 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-[#6F9E73]/20 text-[#285943] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-[#285943]" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#C97852] uppercase tracking-wider">
                  ¡Confirmación Exitosa!
                </span>
                <h3 className="text-xl font-bold text-[#285943] mt-1">
                  Tu cupo para el lanzamiento está listo
                </h3>
              </div>

              {/* Digital ticket card */}
              <div className="p-5 rounded-2xl bg-[#F3EBDD] border border-[#285943]/20 text-left space-y-3">
                <div className="flex justify-between items-center border-b border-[#285943]/15 pb-2">
                  <span className="text-xs font-bold text-[#285943]">{submitted.fullName}</span>
                  <span className="text-xs font-mono font-bold text-[#C97852]">{submitted.ticketId}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] text-[#285943]/60 block">Modalidad</span>
                    <span className="font-semibold text-[#285943]">{submitted.modality === 'presencial' ? 'Presencial' : 'Virtual'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#285943]/60 block">Kit Bienvenida</span>
                    <span className="font-semibold text-[#6F9E73]">✓ Asignado</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 bg-[#285943] text-white text-xs font-semibold rounded-xl hover:bg-[#1B3F2F] transition-colors"
              >
                Entendido, ¡gracias!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
