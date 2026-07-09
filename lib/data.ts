import type {
  Program,
  Trainer,
  Testimonial,
  MembershipPlan,
  FAQItem,
  Stat,
} from "@/types";

export const SITE = {
  name: "Cluj Arena Fitness",
  legalName: "Fitness Club Arena Cluj",
  domain: "clujarenafitness.ro",
  tagline: "Antrenează-te ca un campion, chiar în inima arenei.",
  address: "Stadionul Cluj Arena, Splaiul Independenței nr. 2, Cluj-Napoca",
  phone: "0779 296 500",
  email: "clujarenafitness@gmail.com",
  hours: "Luni – Vineri: 07:00 – 22:00 · Sâmbătă: 09:00 – 18:00 · Duminică: închis",
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/cluj.arena.fitness?igsh=N3ZqcHFnYWRkMWM2",
  facebook: "https://www.facebook.com/share/1Edwg9Fbcz/?mibextid=wwXIfr",
  tiktok: "https://vm.tiktok.com/ZNREmrjMM/",
};

export const NAV_LINKS = [
  { label: "Acasă", href: "#hero" },
  { label: "Beneficii", href: "#beneficii" },
  { label: "Programe", href: "#programe" },
  { label: "Traineri", href: "#traineri" },
  { label: "Galerie", href: "#galerie" },
  { label: "Planuri", href: "#planuri" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS: Stat[] = [
  { label: "Membri activi", value: 1200, suffix: "+" },
  { label: "Antrenori certificați", value: 9 },
  { label: "Programe săptămânale", value: 25, suffix: "+" },
  { label: "Ani de experiență", value: 12 },
];

export const BENEFITS = [
  {
    title: "Echipamente de ultimă generație",
    description:
      "Zonă de forță, cardio și free-weights complet utilată, întreținută constant pentru performanță maximă.",
    icon: "Dumbbell",
  },
  {
    title: "Antrenori certificați",
    description:
      "Echipă de specialiști în fitness și bodybuilding, dedicați progresului tău real.",
    icon: "BadgeCheck",
  },
  {
    title: "Locație unică — Cluj Arena",
    description:
      "Antrenează-te chiar în incinta stadionului Cluj Arena, într-un spațiu premium, cu acces facil.",
    icon: "MapPin",
  },
  {
    title: "Focus 100% Bodybuilding",
    description:
      "Hipertrofie, forță, powerlifting și recompoziție corporală — un singur domeniu, dus la excelență.",
    icon: "Sparkles",
  },
  {
    title: "Comunitate motivantă",
    description:
      "Un climat energic, prietenos, în care fiecare membru este împins să depășească limite noi.",
    icon: "Users",
  },
  {
    title: "Flexibilitate totală",
    description:
      "Orar extins, programări simple și planuri adaptate stilului tău de viață.",
    icon: "CalendarClock",
  },
] as const;

export const PROGRAMS: Program[] = [
  {
    slug: "hipertrofie-masa-musculara",
    title: "Hipertrofie & Masă Musculară",
    description:
      "Antrenament intensiv de forță și masă musculară, ghidat de antrenori specializați în culturism.",
    duration: "60-90 min",
    level: "Toate nivelurile",
    image: "/images/gym-01.jpg",
  },
  {
    slug: "powerlifting-forta",
    title: "Powerlifting & Forță",
    description:
      "Genoflexiuni, îndreptări și împins culcat — progresie sigură pe cele trei mișcări fundamentale.",
    duration: "75-90 min",
    level: "Intermediar - Avansat",
    image: "/images/gym-02.jpg",
  },
  {
    slug: "definire-recompozitie",
    title: "Definire & Recompoziție Corporală",
    description:
      "Planuri structurate de antrenament și nutriție pentru reducerea grăsimii cu păstrarea masei musculare.",
    duration: "60 min",
    level: "Toate nivelurile",
    image: "/images/gym-03.jpg",
  },
  {
    slug: "personal-training",
    title: "Personal Training 1-la-1",
    description:
      "Program complet personalizat, cu antrenor dedicat, pentru rezultate rapide și tehnică ireproșabilă.",
    duration: "60 min",
    level: "Toate nivelurile",
    image: "/images/gym-04.jpg",
  },
] as const;

export const TRAINERS: Trainer[] = [
  {
    slug: "florea-mircea-mihai",
    name: "Florea Mircea Mihai",
    role: "Antrenor Fitness & Bodybuilding",
    bio: "Specialist în programe de forță și masă musculară, cu ani de experiență în pregătirea sportivilor de performanță.",
    image: "/images/trainer-placeholder.jpg",
  },
  {
    slug: "neamtu-adrian",
    name: "Neamțu Adrian",
    role: "Antrenor Fitness",
    bio: "Ghidează membrii spre progres constant prin programe personalizate de antrenament.",
    image: "/images/trainer-placeholder.jpg",
  },
  {
    slug: "vasut-sebastian",
    name: "Vașut Sebastian",
    role: "Antrenor Fitness & Bodybuilding",
    bio: "Pasionat de culturism, ajută membrii să atingă obiective clare de forță și compoziție corporală.",
    image: "/images/trainer-placeholder.jpg",
  },
  {
    slug: "stanciu-ana",
    name: "Stanciu Ana",
    role: "Antrenoare Fitness & Recompoziție Corporală",
    bio: "Ghidează membrii spre definire și tonifiere prin programe structurate de forță și nutriție.",
    image: "/images/trainer-placeholder.jpg",
  },
  {
    slug: "oana-duma",
    name: "Oana Duma",
    role: "Antrenoare Fitness & Bodybuilding",
    bio: "Program de antrenament axat pe tehnică corectă și progresie constantă în sala de forță.",
    image: "/images/trainer-placeholder.jpg",
  },
  {
    slug: "puscas-mircea",
    name: "Pușcaș Mircea",
    role: "Antrenor Fitness & Bodybuilding",
    bio: "Se concentrează pe tehnică corectă și progresie sigură în ridicări de forță.",
    image: "/images/trainer-placeholder.jpg",
  },
  {
    slug: "muresan-mihai",
    name: "Mureșan Mihai",
    role: "Antrenor Fitness & Bodybuilding",
    bio: "Susține membrii în atingerea obiectivelor de masă musculară și definire.",
    image: "/images/trainer-placeholder.jpg",
  },
  {
    slug: "lazar-razvan",
    name: "Lazăr Răzvan",
    role: "Antrenor Fitness",
    bio: "Program de antrenament adaptat fiecărui membru, cu accent pe consecvență.",
    image: "/images/trainer-placeholder.jpg",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alexandra P.",
    role: "Membră din 2022",
    quote:
      "Cea mai bună sală din Cluj. Locația de la Arena e superbă, iar antrenorii chiar îți urmăresc progresul.",
    rating: 5,
  },
  {
    name: "Radu M.",
    role: "Membru din 2021",
    quote:
      "Am slăbit 14 kg în 6 luni cu programul de Fitness-Bodybuilding. Echipa e foarte implicată.",
    rating: 5,
  },
  {
    name: "Ioana T.",
    role: "Membră din 2023",
    quote:
      "Antrenorii chiar înțeleg biomecanica. Progresul meu la genoflexiuni a fost vizibil în doar câteva săptămâni.",
    rating: 5,
  },
  {
    name: "Bogdan S.",
    role: "Membru din 2020",
    quote:
      "Echipamente moderne, sală curată, orar flexibil. Exact ce aveam nevoie.",
    rating: 5,
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    name: "Basic",
    price: "159,98",
    period: "/ lună",
    description: "Acces standard la sala de Fitness & Bodybuilding.",
    features: [
      "Acces zonă fitness & bodybuilding",
      "Acces zonă cardio",
      "Acces nelimitat la pista interioară & exterioară",
      "Evaluare inițială gratuită",
      "Acces conform programului sălii",
    ],
  },
  {
    name: "Student",
    price: "139,98",
    period: "/ lună",
    description: "Preț special pentru studenți, cu legitimație valabilă.",
    features: [
      "Acces nelimitat zonă fitness & bodybuilding",
      "Acces complet zonă forță & cardio",
      "Acces nelimitat la pista interioară & exterioară",
      "Valabil cu carnet de student",
      "Acces conform programului sălii",
    ],
    highlighted: true,
  },
  {
    name: "Ședință unică",
    price: "19,98",
    period: "/ ședință",
    description: "O singură vizită, fără abonament.",
    features: [
      "Acces complet zonă fitness & bodybuilding",
      "Acces nelimitat la pista interioară & exterioară",
      "Fără abonament sau angajament",
      "Ideal pentru testare",
      "Plată directă la recepție",
    ],
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Unde este localizată sala Cluj Arena Fitness?",
    answer:
      "Ne găsești chiar în incinta Stadionului Cluj Arena, cu acces facil auto și transport public.",
  },
  {
    question: "Ce tipuri de antrenament oferiți?",
    answer:
      "Ne concentrăm exclusiv pe Fitness & Bodybuilding: hipertrofie, powerlifting, forță și recompoziție corporală, ghidate de antrenori specializați în culturism.",
  },
  {
    question: "Pot testa sala înainte de abonament?",
    answer:
      "Da, oferim o evaluare inițială gratuită și o sesiune de probă pentru orice membru nou.",
  },
  {
    question: "Aveți antrenori personali?",
    answer:
      "Da, sesiunile de antrenori personali se programează direct cu antrenorul personal.",
  },
  {
    question: "Cum mă pot programa la o sesiune de personal training?",
    answer:
      "Prin pagina de Programări de pe site sau direct la recepție — locurile sunt limitate pentru fiecare antrenor.",
  },
];

export const GALLERY_IMAGES = [
  "/images/gym-01.jpg",
  "/images/gym-02.jpg",
  "/images/gym-03.jpg",
  "/images/gym-04.jpg",
  "/images/gym-05.jpg",
  "/images/gym-06.jpg",
];
