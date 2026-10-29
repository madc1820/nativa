import { Product, Testimonial, EventScheduleItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_nativa_wellness_1792679056577.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'te-vital',
    name: 'Té Vital',
    category: 'infusion',
    categoryLabel: 'Infusión Herbal',
    subtitle: 'Mezcla natural de hierbas aromáticas.',
    price: 34900,
    priceFormatted: '$34.900 COP',
    size: 'Doypack 150g (Aprox. 45 tazas)',
    description: 'Una mezcla natural para comenzar el día con energía y bienestar.',
    fullDescription: 'Té Vital es nuestra fórmula insignia de prelanzamiento diseñada para despertar tu mente y reactivar el metabolismo de manera armónica. Cosechada en parcelas agroecológicas de las montañas de Colombia, combina notas cítricas y refrescantes que elevan tu vitalidad matutina sin provocar picos de ansiedad ni caídas energéticas.',
    ingredients: [
      'Limoncillo silvestre cosechado a mano',
      'Menta andina piperita',
      'Hojas de romero de altura',
      'Cáscaras deshidratadas de naranja agria orgánica',
      'Flores de caléndula cultivadas sin pesticidas'
    ],
    benefits: [
      'Estimulación suave y sostenida de la claridad mental',
      'Favorece la digestión tras el desayuno',
      'Rico en antioxidantes botánicos naturales',
      'Sin cafeína sintética, azúcares ni aditivos químicos'
    ],
    tasteNotes: ['Cítrico refrescante', 'Toque mentolado sutil', 'Final herbal aromático'],
    ritual: 'Infundir 1 cucharadita (3g) en 250ml de agua caliente a 90°C durante 5 a 7 minutos. Disfrútalo solo o endulzado con una cucharadita de Miel de Montaña Nativa.',
    image: '/src/assets/images/product_te_vital_1792679057620.jpg',
    featured: true,
    highlightTag: 'Producto Destacado',
    stockStatus: 'Edición Prelanzamiento (Lotes Limitados)',
    rating: 4.9,
    reviewsCount: 128
  },
  {
    id: 'granola-nativa',
    name: 'Granola Nativa',
    category: 'alimento',
    categoryLabel: 'Alimento Saludable',
    subtitle: 'Granola artesanal con frutos secos.',
    price: 28500,
    priceFormatted: '$28.500 COP',
    size: 'Empaque kraft biodegradable 350g',
    description: 'Tostada lentamente en pequeños lotes con frutos secos seleccionados y miel pura.',
    fullDescription: 'Nuestra Granola Artesanal está elaborada con hojuelas de avena entera, almendras crocantes, semillas de calabaza y girasol, bañadas suavemente con miel de montaña y un sutil toque de canela. Horneada a fuego bajo para conseguir un crujido perfecto que nutre con fibra y grasas saludables.',
    ingredients: [
      'Avena integral en hojuelas sin gluten',
      'Almendras enteras seleccionadas',
      'Semillas de calabaza y girasol',
      'Miel de abejas pura de producción local',
      'Arándanos deshidratados al sol',
      'Canela en rama molida en frío'
    ],
    benefits: [
      'Fuente natural de fibra prebiótica y saciedad',
      'Grasas buenas y micronutrientes para el corazón',
      'Crujiente y naturalmente endulzada',
      'Elaborada artesanalmente sin conservantes'
    ],
    tasteNotes: ['Tostado dorado', 'Dulzura floral de miel', 'Crocancia almendrada'],
    ritual: 'Acompaña con yogur natural, rodajas de banano o disfrútala sola como snack consciente a media tarde.',
    image: '/src/assets/images/product_granola_nativa_1792679058709.jpg',
    featured: false,
    highlightTag: 'Artesanal',
    stockStatus: 'Disponible',
    rating: 4.8,
    reviewsCount: 94
  },
  {
    id: 'miel-montana',
    name: 'Miel de Montaña',
    category: 'miel',
    categoryLabel: 'Miel Pura Local',
    subtitle: 'Miel natural de producción local.',
    price: 32000,
    priceFormatted: '$32.000 COP',
    size: 'Frasco de vidrio hexagonal 340g',
    description: 'Miel 100% pura y cruda cosechada de bosques andinos protegidos.',
    fullDescription: 'Miel cruda de origen floral silvestre, recolectada por comunidades apícolas asociadas en los bosques andinos. No ha sido pasteurizada ni filtrada industrialmente, conservando todas sus enzimas vivas, polen residual y propiedades terapéuticas.',
    ingredients: [
      'Miel de abejas 100% pura cruda de bosque nativo',
      'Polen floral multifloral silvestre residual',
      'Sin mezclas, sin jarabes de maíz ni adulterantes'
    ],
    benefits: [
      'Poder antibacteriano y fortalecedor inmunológico natural',
      'Textura densa y cristalización auténtica de pureza',
      'Comercio justo con apicultores campesinos colombianos',
      'Índice glucémico más equilibrado que el azúcar refinado'
    ],
    tasteNotes: ['Ámbar dorado', 'Notas florales silvestres', 'Final suave y sedoso'],
    ritual: 'Una cucharadita directa en ayunas, o para endulzar el Té Vital y la Infusión Relax.',
    image: '/src/assets/images/product_miel_montana_1792679059480.jpg',
    featured: false,
    highlightTag: 'Cosecha Local',
    stockStatus: 'Disponible',
    rating: 5.0,
    reviewsCount: 162
  },
  {
    id: 'infusion-relax',
    name: 'Infusión Relax',
    category: 'infusion',
    categoryLabel: 'Infusión Herbal',
    subtitle: 'Mezcla de plantas aromáticas para relajación.',
    price: 34900,
    priceFormatted: '$34.900 COP',
    size: 'Doypack 100g (Aprox. 40 tazas)',
    description: 'Armonía y descanso profundo para liberar la tensión acumulada al caer la noche.',
    fullDescription: 'Infusión Relax combina flores enteras de manzanilla silvestre, toronjil reconfortante, hojas de pasiflora y botones de lavanda andina. Una infusión formulada para desacelerar la mente, calmar el sistema nervioso y preparar el cuerpo para un sueño reparador y natural.',
    ingredients: [
      'Flores enteras de manzanilla silvestre',
      'Toronjil (Melisa) recolectado en huertas locales',
      'Hojas de pasiflora silvestre',
      'Botones aromáticos de lavanda orgánica',
      'Menta dulce suave'
    ],
    benefits: [
      'Facilita la transición natural hacia el sueño profundo',
      'Disminuye la inquietud y el estrés diario',
      'Efecto digestivo suave y relajante muscular',
      'Aroma envolvente reconfortante'
    ],
    tasteNotes: ['Floral envolvente', 'Toronjil cítrico dulce', 'Bruma sedosa de lavanda'],
    ritual: 'Tomar 30 a 45 minutos antes de dormir. Dejar reposar en agua a 85°C durante 8 minutos con la taza tapada para atrapar todos los aceites esenciales.',
    image: '/src/assets/images/product_infusion_relax_1792679058282.jpg',
    featured: false,
    highlightTag: 'Bienestar Nocturno',
    stockStatus: 'Disponible',
    rating: 4.9,
    reviewsCount: 115
  }
];

export const BRAND_VALUES = [
  {
    title: 'Natural',
    tagline: 'Pureza Botánica 100%',
    description: 'Plantas aromáticas, semillas y mieles cosechadas sin pesticidas sintéticos, saborizantes artificiales ni conservantes químicos.'
  },
  {
    title: 'Artesanal',
    tagline: 'Elaboración en Pequeños Lotes',
    description: 'Mezclamos, tostamos y envasamos a mano con respeto por los tiempos de reposo y la conservación íntegra de aromas y nutrientes.'
  },
  {
    title: 'Saludable',
    tagline: 'Bienestar que se Siente',
    description: 'Fórmulas concebidas para devolverle el ritmo a tu cuerpo: energía limpia por la mañana y calma reparadora al anochecer.'
  },
  {
    title: 'Local',
    tagline: 'Origen Colombiano Consciente',
    description: 'Alianzas directas con 24 familias campesinas y apicultores de Cundinamarca y Boyacá bajo esquemas de pago justo.'
  }
];

export const EVENT_DETAILS = {
  title: 'Gran Lanzamiento NATIVA: La Experiencia del Bienestar',
  slogan: 'Lo natural también puede transformar tu día',
  dateFormatted: 'Sábado 15 de Noviembre, 2026',
  timeFormatted: '9:30 AM – 1:00 PM (Hora Colombia)',
  location: 'Casa Botánica Nativa (Bogotá) & Transmisión Exclusiva en Vivo HD',
  spotsRemaining: 28,
  giftKitDesc: 'Kit de Bienvenida de Prelanzamiento con muestras de Té Vital, Granola y Miel para los primeros 100 inscritos.',
  schedule: [
    {
      time: '09:30 AM',
      title: 'Apertura & Bienvenida Botánica',
      speaker: 'Equipo Fundador NATIVA',
      description: 'Presentación de la filosofía, los agricultores aliados y la historia de nuestra conexión con la tierra.',
      badge: 'Inauguración'
    },
    {
      time: '10:15 AM',
      title: 'Masterclass: El Ritmo del Bienestar',
      speaker: 'Dra. Marcela Restrepo · Fitoterapia & Hábitos',
      description: 'Aprende a sintonizar tu reloj biológico y cómo los adaptógenos naturales reemplazan la cafeína sintética.',
      badge: 'Conferencia'
    },
    {
      time: '11:15 AM',
      title: 'Taller Sensorial & Cata Guiada',
      speaker: 'Sommelier Botánico NATIVA',
      description: 'Degustación y maridaje de Té Vital, Miel de Montaña multifloral e Infusión Relax. Secretos de infusión perfecta.',
      badge: 'Experiencia Práctica'
    },
    {
      time: '12:15 PM',
      title: 'Lanzamiento Oficial & Beneficios VIP',
      speaker: 'NATIVA',
      description: 'Entrega de kits, acceso al catálogo exclusivo con 15% de descuento y ronda de asesoría personalizada.',
      badge: 'Exclusivo'
    }
  ] as EventScheduleItem[]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Camila Morales',
    role: 'Arquitecta & Diseñadora',
    city: 'Bogotá, Colombia',
    comment: 'Comencé a tomar Té Vital reemplazando el café de la mañana que me generaba acidez. La sensación de claridad mental es impresionante y el sabor a limoncillo fresco es adictivo. Se nota el amor artesanal.',
    rating: 5,
    productMentioned: 'Té Vital',
    verified: true,
    date: 'Hace 2 semanas'
  },
  {
    id: 'test-2',
    name: 'Andrés Felipe Gómez',
    role: 'Docente y Maratonista amateur',
    city: 'Medellín, Colombia',
    comment: 'La Granola Nativa con la Miel de Montaña se convirtió en mi combustible pre-entreno. No empalaga, las almendras son enteras y crujientes. Es difícil encontrar productos tan honestos en el mercado.',
    rating: 5,
    productMentioned: 'Granola Nativa & Miel',
    verified: true,
    date: 'Hace 1 mes'
  },
  {
    id: 'test-3',
    name: 'Valentina Restrepo',
    role: 'Psicóloga Clínica',
    city: 'Cali, Colombia',
    comment: 'Infusión Relax ha sido mi salvación después de jornadas intensas. El aroma de lavanda y manzanilla entera te cambia el estado de ánimo en minutos. Ya me inscribí al evento de lanzamiento.',
    rating: 5,
    productMentioned: 'Infusión Relax',
    verified: true,
    date: 'Hace 3 semanas'
  }
];

export const FAQS = [
  {
    question: '¿Qué es NATIVA y en qué se diferencia de otras marcas?',
    answer: 'NATIVA es una marca colombiana nacida para reconectar tu cotidianidad con el bienestar botánico real. A diferencia de las opciones industriales que usan aromatizantes sintéticos y hojas pulverizadas, seleccionamos hierbas enteras, miel cruda sin pasteurizar y granolas horneadas en pequeños lotes, apoyando a 24 familias campesinas.'
  },
  {
    question: '¿En qué consiste el Evento de Lanzamiento y cómo participo?',
    answer: 'Es una jornada experiencial presencial (en Bogotá con aforo limitado) y virtual vía streaming interactivo. Tendrás acceso a una Masterclass de hábitos saludables, cata botánica guiada de nuestros productos, y si eres de los primeros 100 inscritos, recibirás el Kit de Bienvenida NATIVA en tu domicilio.'
  },
  {
    question: '¿Hacen envíos a toda Colombia?',
    answer: '¡Sí! Realizamos envíos a nivel nacional con cobertura a todas las ciudades principales (Bogotá, Medellín, Cali, Barranquilla, Bucaramanga, etc.) y municipios. El tiempo estimado de entrega es de 1 a 2 días hábiles en Bogotá y 2 a 4 días hábiles en el resto del país.'
  },
  {
    question: '¿Cómo puedo hacer pedidos si prefiero comprar por WhatsApp?',
    answer: 'Todos nuestros productos y el carrito de la página están sincronizados con WhatsApp. Puedes armar tu pedido aquí y finalizarlo con un solo clic enviando un mensaje preformateado a nuestro canal de atención directa, donde una asesora te guiará.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos transferencias directas por Nequi, Daviplata, transferencias Bancolombia, pagos seguros con tarjeta de crédito/débito y PSE.'
  }
];
