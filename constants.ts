import { NavItem, NewsItem, QuickLinkItem, ProgramItem, ContactInfo, StaffMember } from './types';

export const APP_NAME = "Instituto Las Nieves";

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Inicio', href: 'home' },
  {
    label: 'Nosotros',
    href: '#',
    subItems: [
      {
        label: 'Horizonte Institucional',
        href: '#horizonte',
        subItems: [
          { label: 'Misión', href: 'mission' },
          { label: 'Visión', href: 'vision' },
          { label: 'Valores', href: 'values' },
          { label: 'Propuesta de Valor', href: 'strategic' }, 
          { label: 'Plan Estratégico', href: 'strategic' },
          { label: 'Marcha Las Nieves', href: 'anthem' },
          { label: 'Organigrama', href: 'org' },
          { label: 'Políticas', href: 'legal' },
          { label: 'Documentos', href: 'legal' },
        ]
      },
      {
        label: 'Personal',
        href: '#',
        subItems: [
          { label: 'Equipo Líder', href: 'leadership' },
          { label: 'Administrativos', href: 'administrative' },
          { label: 'Coordinación', href: 'coordination' },
          { label: 'Docentes', href: 'teachers' },
        ]
      },
      {
        label: 'Reseña Histórica',
        href: '#',
        subItems: [
          { label: 'Fundación', href: 'mission' }, 
        ]
      }
    ]
  },
  { label: 'Admisiones', href: 'admissions' },
  { label: 'Proyectos', href: '#', 
    subItems: [
       { label: 'Bilingüismo Cambridge', href: 'bilingual' },
       { label: 'Convenio SENA', href: 'sena' }
    ]
  },
  { label: 'Programas', href: 'programs' },
  { label: 'Agenda', href: 'agenda' },
  { label: 'Noticias', href: 'news-list' },
  { label: 'Videos', href: 'video-gallery' },
  { label: 'Contacto', href: 'contact' },
];

export const QUICK_LINKS: QuickLinkItem[] = [
  { id: 'admissions', label: 'Proceso de Admisión', iconName: 'FileText', color: 'bg-orange-500' },
  { id: 'saga', label: 'Plataforma Académica', iconName: 'Monitor', color: 'bg-blue-600' },
  { id: 'payments', label: 'Pagos en Línea', iconName: 'CreditCard', color: 'bg-secondary' },
  { id: 'contact', label: 'Correo Institucional', iconName: 'Users', color: 'bg-cyan-600' },
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'p1',
    title: 'Preescolar',
    description: 'Despertando la curiosidad y la creatividad en un ambiente seguro y estimulante.',
    imageUrl: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800',
    ageRange: '3 a 5 años'
  },
  {
    id: 'p2',
    title: 'Primaria',
    description: 'Fundamentando el conocimiento y los valores para el desarrollo integral del niño.',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    ageRange: '6 a 10 años'
  },
  {
    id: 'p3',
    title: 'Bachillerato',
    description: 'Formando líderes con excelencia académica, críticos y comprometidos con su entorno.',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    ageRange: '11 a 17 años'
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1600',
    title: 'Excelencia Académica',
    subtitle: 'Formamos líderes con valores para transformar el mundo.',
    cta: 'CONOCE MÁS'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1600',
    title: 'Innovación Educativa',
    subtitle: 'Tecnología y humanismo unidos en el aula.',
    cta: 'ADMISIONES'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1577896333243-596652414d71?auto=format&fit=crop&q=80&w=1600',
    title: 'Deporte y Cultura',
    subtitle: 'Desarrollo integral mente, cuerpo y espíritu.',
    cta: 'EXPLORAR'
  }
];

export const CONTACT_DATA: ContactInfo = {
  address: 'Calle 123 # 45-67, Bogotá, Colombia',
  phone: '(601) 555-0123',
  email: 'info@lasnieves.edu.co',
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com'
  }
};

export const EVENTS = [
  { id: 1, day: '15', month: 'OCT', title: 'Feria de Ciencias', category: 'ACADÉMICO', time: '8:00 AM' },
  { id: 2, day: '22', month: 'OCT', title: 'Día de la Familia', category: 'INSTITUCIONAL', time: '9:00 AM' },
  { id: 3, day: '30', month: 'OCT', title: 'Celebración Halloween', category: 'CULTURAL', time: '2:00 PM' },
  { id: 4, day: '05', month: 'NOV', title: 'Entrega de Informes', category: 'ACADÉMICO', time: '7:00 AM' },
  { id: 5, day: '12', month: 'NOV', title: 'Clausura Deportiva', category: 'DEPORTES', time: '10:00 AM' },
];

export const VIDEOS = [
  { id: 1, title: 'Video Institucional 2024', duration: '3:45', thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800' },
  { id: 2, title: 'Día del Idioma', duration: '2:15', thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b955?q=80&w=800' },
  { id: 3, title: 'Feria de Emprendimiento', duration: '4:20', thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800' },
  { id: 4, title: 'Presentación Banda Marcial', duration: '5:10', thumbnail: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=800' },
];

export const MISSION_DATA = {
  title: 'Misión',
  text: 'El Instituto Las Nieves es una comunidad educativa católica que forma integralmente a niños y jóvenes líderes, competentes, con pensamiento crítico y compromiso social, fundamentados en valores humanos y cristianos, mediante una propuesta pedagógica innovadora y bilingüe que contribuye a la transformación de la sociedad.'
};

export const VISION_DATA = {
  title: 'Visión',
  text: 'Para el año 2030, el Instituto Las Nieves será reconocido a nivel nacional como una institución líder en calidad educativa, bilingüismo e innovación pedagógica, destacándose por la formación de ciudadanos globales con alta sensibilidad social y ambiental.'
};

export const VALUES_DATA = [
  { label: 'Respeto', icon: 'Heart' },
  { label: 'Responsabilidad', icon: 'CheckSquare' },
  { label: 'Honestidad', icon: 'Shield' },
  { label: 'Solidaridad', icon: 'Users' },
  { label: 'Excelencia', icon: 'Star' },
  { label: 'Fe', icon: 'Award' },
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 1,
    title: 'Estudiantes ganan concurso de robótica regional',
    summary: 'Nuestro equipo de robótica "NievesTech" obtuvo el primer lugar en la categoría juvenil, demostrando gran innovación y trabajo en equipo.',
    date: 'Oct 10, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=800',
    category: 'Académico'
  },
  {
    id: 2,
    title: 'Celebración del Día de la Colombianidad',
    summary: 'Una jornada llena de color, música y tradición donde nuestros estudiantes resaltaron la riqueza cultural de las regiones de nuestro país.',
    date: 'Sep 25, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1533228876829-2a4527785c3d?q=80&w=800',
    category: 'Cultural'
  },
  {
    id: 3,
    title: 'Nuevos convenios universitarios para 2024',
    summary: 'Firmamos alianzas estratégicas con tres prestigiosas universidades para garantizar el tránsito armónico de nuestros bachilleres a la educación superior.',
    date: 'Sep 15, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800',
    category: 'Institucional'
  },
  {
    id: 4,
    title: 'Inauguración del nuevo laboratorio STEAM',
    summary: 'Espacio dotado con tecnología de punta para potenciar el aprendizaje en ciencias, tecnología, ingeniería, artes y matemáticas.',
    date: 'Ago 30, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800',
    category: 'Infraestructura'
  }
];

export const SENA_DATA = {
  title: 'Articulación con la Media Técnica',
  description: 'Gracias a nuestro convenio con el SENA, nuestros estudiantes de grados 10° y 11° tienen la oportunidad de graduarse con doble titulación: Bachiller Académico y Técnico Laboral.',
  programs: [
    'Técnico en Programación de Software',
    'Técnico en Asistencia Administrativa',
    'Técnico en Diseño e Integración de Multimedia',
    'Técnico en Conservación de Recursos Naturales'
  ]
};

export const STRATEGIC_DATA = {
  valueProp: 'Educación con propósito para un futuro sin límites.',
  objectives: [
    'Fortalecer el bilingüismo en todos los niveles educativos.',
    'Implementar metodologías activas mediadas por TIC.',
    'Consolidar la formación en valores y competencias ciudadanas.',
    'Asegurar la sostenibilidad financiera e institucional.'
  ]
};

export const ANTHEM_DATA = {
  lyrics: [
    'Coro',
    'Salve, salve Instituto Las Nieves',
    'Templo vivo de ciencia y virtud,',
    'Donde forjas con noble denuedo',
    'El futuro de la juventud.',
    '',
    'I',
    'En tus aulas la luz del saber',
    'Ilumina la mente infantil,',
    'Y el maestro con sabio querer',
    'Va sembrando la flor de abril.',
    '',
    'II',
    'Con valores de fe y esperanza',
    'Construimos un mundo mejor,',
    'Donde reine la paz, la bonanza,',
    'La justicia, la verdad y el amor.'
  ]
};

export const LEGAL_DATA = [
  { id: 1, title: 'Manual de Convivencia Escolar', date: 'Ene 2024', size: '2.5 MB' },
  { id: 2, title: 'Sistema Institucional de Evaluación (SIEE)', date: 'Feb 2024', size: '1.2 MB' },
  { id: 3, title: 'Política de Tratamiento de Datos', date: 'Mar 2023', size: '800 KB' },
  { id: 4, title: 'Protocolos de Bioseguridad', date: 'Ene 2023', size: '1.5 MB' },
  { id: 5, title: 'Lista de Útiles Escolares', date: 'Dic 2023', size: '500 KB' },
];

export const LEADERSHIP_TEAM: StaffMember[] = [
  { id: 1, name: 'Hna. María González', role: 'Rectora', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400', category: 'Leadership', bio: 'Magíster en Gestión Educativa con 20 años de experiencia.' },
  { id: 2, name: 'Dr. Carlos Rodríguez', role: 'Vicerrector Académico', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400', category: 'Leadership', bio: 'Doctor en Pedagogía y Especialista en Currículo.' },
  { id: 3, name: 'Lic. Ana Martínez', role: 'Coord. de Calidad', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400', category: 'Leadership', bio: 'Auditora interna ISO 9001 en procesos educativos.' },
];

export const ADMIN_STAFF: StaffMember[] = [
  { id: 1, name: 'Patricia López', role: 'Secretaria General', image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f8e?q=80&w=400', email: 'secretaria@lasnieves.edu.co' },
  { id: 2, name: 'Roberto Díaz', role: 'Tesorero', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400', email: 'pagaduria@lasnieves.edu.co' },
  { id: 3, name: 'Laura Sánchez', role: 'Admisiones', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400', email: 'admisiones@lasnieves.edu.co' },
  { id: 4, name: 'Miguel Torres', role: 'Sistemas', image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400', email: 'sistemas@lasnieves.edu.co' },
];

export const COORDINATORS: StaffMember[] = [
  { id: 1, name: 'Lucía Fernández', role: 'Coord. Preescolar', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400', email: 'preescolar@lasnieves.edu.co' },
  { id: 2, name: 'Jorge Ramírez', role: 'Coord. Primaria', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400', email: 'primaria@lasnieves.edu.co' },
  { id: 3, name: 'Elena Castro', role: 'Coord. Bachillerato', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400', email: 'bachillerato@lasnieves.edu.co' },
  { id: 4, name: 'Mario Ruíz', role: 'Coord. Convivencia', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400', email: 'convivencia@lasnieves.edu.co' },
];

export const TEACHERS: StaffMember[] = [
  { id: 1, name: 'Carmen Vega', role: 'Titular Jardín', category: 'Preschool', image: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=400' },
  { id: 2, name: 'Luis Mendoza', role: 'Matemáticas', category: 'HighSchool', image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=400' },
  { id: 3, name: 'Sofia Herrera', role: 'Lengua Castellana', category: 'Primary', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400' },
  { id: 4, name: 'David Wilson', role: 'English Teacher', category: 'HighSchool', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400' },
  { id: 5, name: 'Clara Ortiz', role: 'Ciencias Naturales', category: 'Primary', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400' },
  { id: 6, name: 'Fernando Gómez', role: 'Educación Física', category: 'HighSchool', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400' },
  { id: 7, name: 'Beatriz Silva', role: 'Artes', category: 'Preschool', image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=400' },
  { id: 8, name: 'Ricardo Peña', role: 'Física y Química', category: 'HighSchool', image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=400' },
];