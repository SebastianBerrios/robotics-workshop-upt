// Fuente única de datos de la landing. Para abrir inscripciones, pon una URL en `registrationUrl`.
export const registrationUrl: string | null = null;

export const info = {
  venue: 'Laboratorio de la Escuela Profesional de Ingeniería Electrónica',
  university: 'Universidad Privada de Tacna',
  maxStudents: 15,
  price: 'Gratuito',
  time: '09:00 – 13:00',
  email: 'sebberrios99@gmail.com',
};

export interface Workshop {
  id: 'sumo' | 'evasor';
  name: string;
  tagline: string;
  description: string;
  learn: string[];
  challenge: string;
  hardware: string[];
  dates: { iso: string; label: string }[];
}

export const workshops: Workshop[] = [
  {
    id: 'sumo',
    name: 'Mini Robot Sumo',
    tagline: 'Controla tu robot desde el celular y gana el ring',
    description:
      'Arma y programa un robot de combate con ESP32 que se controla de forma inalámbrica por WiFi desde tu celular. Termina con una competencia amistosa en el Dohyo.',
    learn: [
      'Control inalámbrico por WiFi con ESP32',
      'Velocidades PWM y control de motores',
      'Calibración y ajuste fino de parámetros',
      'Estrategia de combate y trabajo en equipo',
    ],
    challenge: 'Competencia en ring de sumo (Dohyo)',
    hardware: ['ESP32', 'Chasis impreso en 3D con pala', 'Motores duales', 'Batería recargable'],
    dates: [
      { iso: '2026-10-17', label: 'Sáb 17 oct' },
      { iso: '2026-10-24', label: 'Sáb 24 oct' },
      { iso: '2026-10-31', label: 'Sáb 31 oct' },
      { iso: '2026-11-07', label: 'Sáb 07 nov' },
    ],
  },
  {
    id: 'evasor',
    name: 'Vehículo Autónomo Evasor de Obstáculos',
    tagline: 'Un robot que decide solo por dónde avanzar',
    description:
      'Programa un vehículo con ESP32 y sensor ultrasónico que detecta obstáculos y esquiva por sí mismo. Pon a prueba tu lógica en una pista real.',
    learn: [
      'Lectura de sensores ultrasónicos HC-SR04',
      'Lógica de control autónomo',
      'Umbrales de detección y distancias de frenado',
      'Pruebas de mesa y corrección inmediata',
    ],
    challenge: 'Pista de evasión de obstáculos',
    hardware: ['ESP32', 'Sensor ultrasónico HC-SR04', 'Chasis impreso en 3D', 'Batería recargable'],
    dates: [],
  },
];

export const schedule = [
  { time: '09:00 – 09:15', title: 'Bienvenida y entrega de módulos', text: 'Presentación del reto del día, normas de seguridad y entrega del módulo a cada estudiante.' },
  { time: '09:15 – 09:35', title: 'Reconocimiento del módulo', text: 'Identificamos ESP32, driver, motores y sensores, y explicamos la lógica de control.' },
  { time: '09:35 – 11:15', title: 'Ensamblaje, programación y calibración', text: 'Ensamblas tu robot, cargas el código base y ajustas velocidades, umbrales y distancias.' },
  { time: '11:15 – 12:30', title: 'Reto en pista', text: 'Dinámica competitiva amistosa en el ring de sumo o en la pista de obstáculos.' },
  { time: '12:30 – 13:00', title: 'Cierre', text: 'Resultados, conclusiones y cierre del taller.' },
];

export const faqs = [
  { q: '¿Necesito saber programar?', a: 'No. Trabajamos con código base ya preparado y te guiamos paso a paso para ajustar parámetros y probar tu robot.' },
  { q: '¿Cuánto cuesta?', a: 'Es totalmente gratuito. Los módulos robóticos están listos para que los armes y programes el día del taller.' },
  { q: '¿Quiénes pueden participar?', a: 'Estudiantes de los últimos años de secundaria y jóvenes que recientemente terminaron el colegio.' },
  { q: '¿Qué debo llevar?', a: 'Tu DNI y muchas ganas de aprender. Para Mini Robot Sumo es útil llevar un celular con WiFi. Si tienes laptop, tráela.' },
  { q: '¿Dónde y a qué hora es?', a: `En el ${info.venue} de la UPT, de ${info.time}.` },
  { q: '¿Cuántos cupos hay?', a: `Máximo ${info.maxStudents} estudiantes por taller. Los cupos son limitados.` },
  { q: '¿Cuándo abren las inscripciones?', a: 'Muy pronto. Publicaremos el enlace de inscripción en esta página.' },
];
