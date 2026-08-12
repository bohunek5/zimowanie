import { Building2, Fence, Lightbulb, ShieldCheck, Wrench } from 'lucide-react';

export const phone = { display: '730 026 007', href: 'tel:+48730026007' };
export const address = 'ul. Sybiraków, 11-500 Giżycko';
export const season = '01.10–30.04';
export const company = {
  fullName: "Radosław Narwojsz „RAD'LIGHT”",
  registeredAddress: 'ul. Myśliwska 3, 11-500 Giżycko',
  nip: '8451647713',
  regon: '519594153',
} as const;

export const legalItems = [
  { label: 'Regulamin serwisu', to: '/regulamin' },
  { label: 'Polityka prywatności', to: '/polityka-prywatnosci' },
  { label: 'Cookies', to: '/cookies' },
] as const;

export const navItems = [
  { label: 'Start', to: '/' },
  { label: 'Oferta', to: '/oferta' },
  { label: 'Cennik', to: '/cennik' },
  { label: 'Plac', to: '/plac' },
  { label: 'Hala', to: '/hala' },
  { label: 'Galeria', to: '/galeria' },
  { label: 'Kontakt', to: '/kontakt' },
] as const;

export const benefits = [
  { icon: ShieldCheck, title: 'Monitorowany', text: 'Nadzór nad terenem' },
  { icon: Fence, title: 'Ogrodzony', text: 'Wyznaczona, zamknięta przestrzeń' },
  { icon: Lightbulb, title: 'Oświetlony', text: 'Czytelny również po zmroku' },
  { icon: Building2, title: 'Ogrzewana hala', text: 'Wycena indywidualna' },
] as const;

export const prices = [
  { length: 'do 5 m', price: '1 000 zł', featured: false },
  { length: '5–12 m', price: '1 500 zł', featured: true },
  { length: 'powyżej 12 m', price: '2 500 zł', featured: false },
] as const;

export const offers = [
  {
    icon: ShieldCheck,
    title: 'Monitorowany plac',
    text: '1800 m² utwardzonego terenu przeznaczonego do zimowania łodzi różnych długości.',
    points: ['Ogrodzony i oświetlony teren', 'Wygodny wjazd od ul. Sybiraków', 'Jedna opłata za cały sezon'],
  },
  {
    icon: Building2,
    title: 'Ogrzewana hala',
    text: 'Postój pod dachem dla jednostek wymagających osłoniętego miejsca na zimę.',
    points: ['Miejsce dopasowane do łodzi', 'Warunki ustalane przed przyjęciem', 'Cena ustalana indywidualnie'],
  },
  {
    icon: Wrench,
    title: 'Serwis zimowy',
    text: 'Przygotowanie jednostki do postoju możesz zlecić naszej firmie lub wykonać samodzielnie.',
    points: ['Zakres dopasowany do jednostki', 'Wycena przed rozpoczęciem prac', 'Możliwość własnego przygotowania'],
  },
] as const;

export const editorialServices = [
  {
    label: 'Postój pod dachem',
    title: 'Ogrzewana hala',
    text: 'Miejsce dobieramy do wymiarów jednostki. Dostępność oraz cenę potwierdzamy przed przyjęciem łodzi.',
    image: '/assets/gallery/lodz-w-hali.jpg',
    imageAlt: 'Łódź przechowywana w ogrzewanej hali w Giżycku',
  },
  {
    label: 'Usługa dodatkowa',
    title: 'Serwis zimowy',
    text: 'Przygotowanie do postoju możesz zlecić naszej firmie albo wykonać we własnym zakresie.',
    image: '/assets/gallery/transport-do-hali.jpg',
    imageAlt: 'Łódź przenoszona dźwigiem na przygotowany wózek',
  },
] as const;

export const galleryPhotos = [
  { src: '/assets/gallery/hala-zewnatrz.jpg', alt: 'Ogrzewana hala i przygotowane wózki na placu', title: 'Hala i zaplecze', category: 'Obiekt', featured: true },
  { src: '/assets/gallery/lodz-na-wozku.jpg', alt: 'Duża łódź motorowa ustawiona na stalowym wózku', title: 'Łódź na wózku', category: 'Plac', featured: true },
  { src: '/assets/gallery/lodz-w-hali.jpg', alt: 'Łódź motorowa przechowywana wewnątrz hali', title: 'Postój w hali', category: 'Hala', featured: true },
  { src: '/assets/gallery/wozek-pod-lodz.jpg', alt: 'Regulowany stalowy wózek przygotowany pod łódź', title: 'Wózek transportowy', category: 'Zaplecze', featured: false },
  { src: '/assets/gallery/podpory-lodzi.jpg', alt: 'Regulowane podpory zabezpieczające kadłub łodzi', title: 'Regulowane podpory', category: 'Zaplecze', featured: false },
  { src: '/assets/gallery/hala-wnetrze.jpg', alt: 'Przestronne wnętrze ogrzewanej hali', title: 'Wnętrze hali', category: 'Hala', featured: true },
  { src: '/assets/gallery/wozek-plac.jpg', alt: 'Stalowy wózek ustawiony na utwardzonym placu', title: 'Przygotowanie miejsca', category: 'Plac', featured: false },
  { src: '/assets/gallery/lodz-na-placu.jpg', alt: 'Łódź motorowa zabezpieczona na wózku na placu', title: 'Postój na placu', category: 'Plac', featured: true },
  { src: '/assets/gallery/wodowanie-dzwigiem.jpg', alt: 'Łódź podnoszona pasami przy użyciu dźwigu', title: 'Bezpieczne podnoszenie', category: 'Transport', featured: true },
  { src: '/assets/gallery/lodz-motorowa.jpg', alt: 'Łódź motorowa ustawiona na stalowym wózku', title: 'Jednostka motorowa', category: 'Plac', featured: false },
  { src: '/assets/gallery/transport-do-hali.jpg', alt: 'Łódź przenoszona dźwigiem nad przygotowany wózek', title: 'Transport do hali', category: 'Transport', featured: true },
  { src: '/assets/gallery/lodzie-zimowanie-hala.jpg', alt: 'Łodzie motorowe ustawione w ogrzewanej hali', title: 'Zimowanie pod dachem', category: 'Hala', featured: false },
] as const;
