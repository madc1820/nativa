import React from 'react';
import { Leaf, Users, Sprout, Award } from 'lucide-react';

export const SobreNosotros: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-[#F3EBDD]/60 border-t border-[#285943]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold tracking-widest text-[#6F9E73] uppercase">
              Nuestra Historia & Filosofía
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#285943] tracking-tight">
              Nacidos entre niebla, montañas y saberes ancestrales
            </h2>

            {/* Emotional Highlight Quote in Lora font as required by manual */}
            <blockquote className="font-lora italic text-xl sm:text-2xl text-[#285943] border-l-2 border-[#C97852] pl-5 py-1 leading-snug">
              “Creemos que volver a lo natural no es retroceder, sino reencontrarnos con lo que de verdad nos hace bien.”
            </blockquote>

            <p className="text-sm sm:text-base text-[#285943]/80 leading-relaxed">
              NATIVA nació en Colombia como respuesta a la aceleración excesiva de nuestros días. Nos dimos cuenta de que la mayoría de los productos que consumimos están saturados de endulzantes artificiales, saborizantes sintéticos y procesos industriales que apagan la vitalidad.
            </p>

            <p className="text-sm sm:text-base text-[#285943]/80 leading-relaxed">
              Decidimos recorrer parcelas campesinas y apiarios andinos para seleccionar plantas aromáticas enteras, semillas nutritivas y miel pura sin pasteurizar. Elaboramos cada lote con la calma que exige la naturaleza, protegiendo tanto tu salud como el sustento digno de quienes cultivan la tierra.
            </p>

            {/* Three key philosophical commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-[#285943]/10">
                <Leaf className="w-5 h-5 text-[#285943] mb-2" />
                <h4 className="text-xs font-bold text-[#285943]">Origen Trazable</h4>
                <p className="text-[11px] text-[#285943]/70 mt-1">Conocemos el nombre y parcela de cada productor.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#285943]/10">
                <Users className="w-5 h-5 text-[#C97852] mb-2" />
                <h4 className="text-xs font-bold text-[#285943]">Comercio Justo</h4>
                <p className="text-[11px] text-[#285943]/70 mt-1">Pagamos un 35% por encima del mercado tradicional.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#285943]/10">
                <Sprout className="w-5 h-5 text-[#6F9E73] mb-2" />
                <h4 className="text-xs font-bold text-[#285943]">Empaque Circular</h4>
                <p className="text-[11px] text-[#285943]/70 mt-1">Papel kraft reciclable y tintas ecológicas a base de soya.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Quantitative Proof Metrics in Tabular Numerals */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#285943] text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6F9E73]/20 rounded-bl-full pointer-events-none" />

              <span className="text-xs uppercase tracking-widest text-[#6F9E73] font-semibold block mb-2">
                Impacto Real & Verificado
              </span>
              <h3 className="text-2xl font-bold font-lora italic text-[#F3EBDD] mb-6">
                Construyendo bienestar con raíces profundas
              </h3>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#F3EBDD] tabular-nums">
                    +5,000
                  </span>
                  <span className="text-xs text-white/75 mt-1 block">
                    Mañanas y noches transformadas en Colombia
                  </span>
                </div>

                <div>
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#C97852] tabular-nums">
                    24
                  </span>
                  <span className="text-xs text-white/75 mt-1 block">
                    Familias campesinas y apicultores asociados
                  </span>
                </div>

                <div>
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#6F9E73] tabular-nums">
                    100%
                  </span>
                  <span className="text-xs text-white/75 mt-1 block">
                    Ingredientes de origen natural sin conservantes
                  </span>
                </div>

                <div>
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#F3EBDD] tabular-nums">
                    0%
                  </span>
                  <span className="text-xs text-white/75 mt-1 block">
                    Azúcares añadidos ni cafeína sintética
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-[#F3EBDD]/80">
                <Award className="w-5 h-5 text-[#C97852] shrink-0" />
                <span>Certificación de buenas prácticas agrícolas y artesanales de Boyacá y Cundinamarca.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
