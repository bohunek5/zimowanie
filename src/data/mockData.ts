import { Building2, Fence, Lightbulb, ShieldCheck, Wrench } from 'lucide-react';

export const phone = { display: '730 026 007', href: 'tel:+48730026007' };
export const address = 'ul. Sybiraków, 11-500 Giżycko';
export const season = '01.10–30.04';

export const navItems = [
  { label: 'Start', to: '/' },
  { label: 'Oferta', to: '/oferta' },
  { label: 'Cennik', to: '/cennik' },
  { label: 'Plac', to: '/plac' },
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
    image: '/assets/hala-ogrzewana-v1.jpg',
    imageAlt: 'Łodzie przechowywane w jasnej ogrzewanej hali',
  },
  {
    label: 'Usługa dodatkowa',
    title: 'Serwis zimowy',
    text: 'Przygotowanie do postoju możesz zlecić naszej firmie albo wykonać we własnym zakresie.',
    image: '/assets/serwis-zimowy-v1.jpg',
    imageAlt: 'Łódź przygotowana do zimowego postoju na podporach',
  },
] as const;
