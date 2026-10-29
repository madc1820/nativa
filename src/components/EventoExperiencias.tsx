import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Gift, CheckCircle2, Ticket, Sparkles, Send } from 'lucide-react';
import { EVENT_DETAILS } from '../data/products';
import { EventRegistration } from '../types';

interface EventoExperienciasProps {
  onRegisterSuccess: (reg: EventRegistration) => void;
}

export const EventoExperiencias: React.FC<EventoExperienciasProps> = ({
  onRegisterSuccess
}) => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 8,
    minutes: 42,
    seconds: 15
  });

  // Form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [modality, setModality] = useState<'online' | 'presencial'>('online');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState<EventRegistration | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg('Por favor completa todos los campos obligatorios.');
      return;
    }
    if (!email.includes('@')) {
      setErrorMsg('Por favor ingresa un correo electrónico válido.');
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
    onRegisterSuccess(regData);
    setErrorMsg('');
  };

  return (
    <section id="evento" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="text-xs font-semibold tracking-widest text-[#C97852] uppercase">
            Servicios & Experiencia en Vivo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#285943] tracking-tight">
            Gran Evento de Lanzamiento NATIVA
          </h2>
          <p className="font-lora italic text-lg text-[#285943]/85">
            Una jornada dedicada a conectar con el poder curativo de las plantas andinas, degustar nuestras fórmulas y aprender a diseñar tus propios rituales.
          </p>
        </div>

        {/* Live Countdown & Event Key Badges */}
        <div className="mb-14 p-6 sm:p-8 bg-[#285943] text-white rounded-3xl shadow-lg border border-[#285943] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#F3EBDD]/90">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#C97852]" />
                {EVENT_DETAILS.dateFormatted}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C97852]" />
                {EVENT_DETAILS.timeFormatted}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C97852]" />
                Presencial en Bogotá + Online HD
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-lora italic text-[#F3EBDD]">
              El contador hacia el cambio de tu rutina está en marcha
            </h3>
            <p className="text-xs text-[#F3EBDD]/75 max-w-xl">
              Quedan <strong className="text-white underline">{EVENT_DETAILS.spotsRemaining} cupos con obsequio</strong> de bienvenida asegurado para los primeros registrados.
            </p>
          </div>

          {/* Countdown Blocks */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="bg-[#1B3F2F] px-3.5 py-3 rounded-xl text-center min-w-[64px] border border-white/10">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#F3EBDD] tabular-nums">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase text-[#6F9E73] font-semibold tracking-wider">Días</span>
            </div>
            <span className="text-lg font-bold text-[#6F9E73]">:</span>
            <div className="bg-[#1B3F2F] px-3.5 py-3 rounded-xl text-center min-w-[64px] border border-white/10">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#F3EBDD] tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase text-[#6F9E73] font-semibold tracking-wider">Horas</span>
            </div>
            <span className="text-lg font-bold text-[#6F9E73]">:</span>
            <div className="bg-[#1B3F2F] px-3.5 py-3 rounded-xl text-center min-w-[64px] border border-white/10">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#F3EBDD] tabular-nums">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase text-[#6F9E73] font-semibold tracking-wider">Min</span>
            </div>
            <span className="text-lg font-bold text-[#6F9E73]">:</span>
            <div className="bg-[#1B3F2F] px-3.5 py-3 rounded-xl text-center min-w-[64px] border border-white/10">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#C97852] tabular-nums">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase text-[#C97852] font-semibold tracking-wider">Seg</span>
            </div>
          </div>
        </div>

        {/* 2-Column Section: Schedule & Experiences + Interactive Registration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: 4 Event Schedule Services */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-xl font-bold text-[#285943] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#C97852]" />
              <span>Experiencias y Servicios Incluidos</span>
            </h3>

            <div className="space-y-4">
              {EVENT_DETAILS.schedule.map((item, idx) => (
                <div
                  key={item.title}
                  className="bg-white p-5 rounded-2xl border border-[#285943]/10 shadow-xs hover:border-[#285943]/20 transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#C97852] tabular-nums">
                      {item.time}
                    </span>
                    <span className="text-[11px] font-semibold text-[#6F9E73] bg-[#FAF7F2] px-2.5 py-0.5 rounded-md border border-[#285943]/10">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#285943]">
                    {item.title}
                  </h4>
                  <p className="text-xs font-medium text-[#285943]/70 mt-0.5">
                    {item.speaker}
                  </p>
                  <p className="text-xs text-[#285943]/80 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Gift Kit Box */}
            <div className="p-5 rounded-2xl bg-[#F3EBDD] border border-[#285943]/15 flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl text-[#C97852] shadow-2xs shrink-0">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#285943]">
                  Kit de Bienvenida Exclusivo
                </h4>
                <p className="text-xs text-[#285943]/80 mt-1 leading-relaxed">
                  {EVENT_DETAILS.giftKitDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Registration Form or Confirmed Ticket */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#285943]/15 shadow-md">
              {!submitted ? (
                <div>
                  <div className="mb-6 space-y-1">
                    <span className="text-xs font-semibold text-[#6F9E73] uppercase tracking-wider">
                      Inscripción Gratuita de Prelanzamiento
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#285943]">
                      Reserva tu Cupo VIP
                    </h3>
                    <p className="text-xs text-[#285943]/70">
                      Completa tus datos para recibir tu pase de acceso y separar tu kit de degustación.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#285943] mb-1.5" htmlFor="reg-name">
                        Nombre Completo *
                      </label>
                      <input
                        id="reg-name"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Ej. Carolina Mendoza"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#285943]/20 bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285943]/30 transition-all text-[#285943]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#285943] mb-1.5" htmlFor="reg-email">
                          Correo Electrónico *
                        </label>
                        <input
                          id="reg-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="carolina@ejemplo.com"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#285943]/20 bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285943]/30 transition-all text-[#285943]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#285943] mb-1.5" htmlFor="reg-phone">
                          WhatsApp / Celular *
                        </label>
                        <input
                          id="reg-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+57 300 000 0000"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#285943]/20 bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285943]/30 transition-all text-[#285943]"
                        />
                      </div>
                    </div>

                    {/* Modality radio toggle */}
                    <div>
                      <span className="block text-xs font-bold text-[#285943] mb-2">
                        ¿Cómo deseas asistir?
                      </span>
                      <div className="grid grid-cols-2 gap-3">
                        <label
                          className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                            modality === 'online'
                              ? 'border-[#285943] bg-[#F3EBDD] text-[#285943] font-semibold'
                              : 'border-[#285943]/15 bg-[#FAF7F2] text-[#285943]/80'
                          }`}
                        >
                          <input
                            type="radio"
                            name="modality"
                            checked={modality === 'online'}
                            onChange={() => setModality('online')}
                            className="text-[#285943] focus:ring-[#285943]"
                          />
                          <span>Virtual en Vivo HD</span>
                        </label>

                        <label
                          className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                            modality === 'presencial'
                              ? 'border-[#285943] bg-[#F3EBDD] text-[#285943] font-semibold'
                              : 'border-[#285943]/15 bg-[#FAF7F2] text-[#285943]/80'
                          }`}
                        >
                          <input
                            type="radio"
                            name="modality"
                            checked={modality === 'presencial'}
                            onChange={() => setModality('presencial')}
                            className="text-[#285943] focus:ring-[#285943]"
                          />
                          <span>Presencial (Bogotá)</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#285943] mb-1.5" htmlFor="reg-city">
                        Ciudad de Residencia
                      </label>
                      <input
                        id="reg-city"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Ej. Bogotá, Medellín, Cali..."
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#285943]/20 bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285943]/30 transition-all text-[#285943]"
                      />
                    </div>

                    {/* Submit CTA button with explicit label: ME QUIERO REGISTRAR */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#285943] text-white text-sm font-semibold tracking-wider rounded-xl hover:bg-[#1B3F2F] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-4"
                    >
                      <Send className="w-4 h-4" />
                      <span>ME QUIERO REGISTRAR</span>
                    </button>

                    <p className="text-[11px] text-center text-[#285943]/60 pt-2">
                      🔒 No enviamos spam. Recibirás tu enlace de acceso y confirmación vía WhatsApp y correo.
                    </p>
                  </form>
                </div>
              ) : (
                /* Confirmed Digital Ticket Preview */
                <div className="space-y-6 text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#6F9E73]/20 text-[#285943] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#285943]" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-[#C97852] uppercase tracking-wider">
                      ¡Registro Exitoso!
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#285943] mt-1">
                      Bienvenido al Lanzamiento NATIVA
                    </h3>
                    <p className="text-xs text-[#285943]/70 mt-1">
                      Hemos reservado tu cupo y asignado tu Pase Digital Oficial.
                    </p>
                  </div>

                  {/* Stylized Digital Pass Card */}
                  <div className="p-6 rounded-2xl bg-[#F3EBDD] border border-[#285943]/20 text-left space-y-4 shadow-xs relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#6F9E73]/20 rounded-bl-full pointer-events-none" />

                    <div className="flex items-center justify-between border-b border-[#285943]/15 pb-3">
                      <div>
                        <span className="text-[10px] text-[#285943]/60 uppercase font-bold tracking-widest block">
                          Pase VIP Oficial
                        </span>
                        <span className="text-sm font-bold text-[#285943]">
                          {submitted.fullName}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-[#285943]/60 block font-bold">Código</span>
                        <span className="text-xs font-mono font-bold text-[#C97852]">
                          {submitted.ticketId}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-[10px] text-[#285943]/60 block">Modalidad</span>
                        <span className="font-semibold text-[#285943] capitalize">
                          {submitted.modality === 'presencial' ? 'Presencial (Bogotá)' : 'Transmisión Online'}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#285943]/60 block">Ciudad</span>
                        <span className="font-semibold text-[#285943]">{submitted.city}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#285943]/60 block">Fecha</span>
                        <span className="font-semibold text-[#285943]">15 Nov 2026 · 9:30 AM</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#285943]/60 block">Kit Bienvenida</span>
                        <span className="font-semibold text-[#6F9E73]">✓ Asignado</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#285943]/15 flex items-center justify-between text-[11px] text-[#285943]/70">
                      <span>NATIVA · Lo natural también puede transformar tu día</span>
                      <Ticket className="w-4 h-4 text-[#285943]" />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        window.open(`https://wa.me/?text=${encodeURIComponent(`¡Me acabo de registrar al lanzamiento de NATIVA! Descubre productos naturales y bienestar: ${window.location.href}`)}`, '_blank');
                      }}
                      className="flex-1 py-3 px-4 bg-[#285943] text-white text-xs font-semibold rounded-xl hover:bg-[#1B3F2F] transition-colors"
                    >
                      Compartir en WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(null)}
                      className="py-3 px-4 bg-white border border-[#285943]/20 text-[#285943] text-xs font-semibold rounded-xl hover:bg-[#FAF7F2] transition-colors"
                    >
                      Inscribir a otra persona
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
