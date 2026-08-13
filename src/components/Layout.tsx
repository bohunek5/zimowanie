import { BadgeDollarSign, Compass, House, Images, Info, Map, MapPin, Menu, Moon, PackageOpen, Phone, Sun, Warehouse, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { BackToTop } from './BackToTop';
import { address, legalItems, navItems, phone } from '../data/mockData';
import { useScrollToTop } from '../hooks/useScrollToTop';
import type { Theme } from '../hooks/useTheme';

interface LayoutProps {
  readonly theme: Theme;
  readonly onToggleTheme: () => void;
}

interface BrandProps {
  readonly footer?: boolean;
}

function Brand({ footer = false }: Readonly<BrandProps>) {
  return (
    <NavLink className={`brand ${footer ? 'brand--footer' : ''}`} to="/" aria-label="Zimowanie Jachtów Giżycko — strona główna">
      <svg className="brand__mark" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M23 7v27H9L23 7Z"/><path d="M27 15v19h12L27 15Z"/><path d="M8 39c5-3 10-3 15 0s10 3 16 0"/>
      </svg>
      <span className="brand__name"><strong>Zimowanie Jachtów</strong><small>Giżycko</small></span>
    </NavLink>
  );
}

export function Layout({ theme, onToggleTheme }: Readonly<LayoutProps>) {
  const location = useLocation();
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const mobilePrimary = [
    { label: 'Start', to: '/', icon: House },
    { label: 'Cennik', to: '/cennik', icon: BadgeDollarSign },
    { label: 'Hala', to: '/hala', icon: Warehouse },
    { label: 'Kontakt', to: '/kontakt', icon: Phone },
  ] as const;
  const mobileMore = [
    { label: 'Oferta', to: '/oferta', icon: PackageOpen },
    { label: 'Plac', to: '/plac', icon: Map },
    { label: 'Galeria', to: '/galeria', icon: Images },
  ] as const;
  const isMoreRoute = mobileMore.some((item) => location.pathname === item.to);
  useScrollToTop(location.pathname);
  useEffect(() => setMobileMoreOpen(false), [location.pathname]);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header__inner">
          <Brand/>
          <nav className="desktop-nav" aria-label="Główna nawigacja">
            {navItems.slice(1).map((item) => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}
          </nav>
          <div className="header__actions">
            <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={theme === 'day' ? 'Włącz tryb nocny' : 'Włącz tryb dzienny'}>
              {theme === 'day' ? <Moon/> : <Sun/>}
            </button>
            <a className="header__phone" href={phone.href} aria-label={`Zadzwoń: ${phone.display}`}><Phone/><span><small>Zadzwoń</small>{phone.display}</span></a>
          </div>
        </div>
      </header>

      <main key={location.pathname}><Outlet/></main>

      <footer className="footer">
        <div className="container footer__top">
          <div className="footer__intro"><Brand footer/><p>Miejsce dla łodzi na zimę.<br/>Plac i ogrzewana hala w Giżycku.</p></div>
          <div className="footer__contact"><small><Phone/>Kontakt</small><a href={phone.href}>{phone.display}</a><span><MapPin/> {address}</span></div>
          <nav className="footer__nav" aria-label="Nawigacja w stopce"><small><Compass/>Strona</small>{navItems.slice(1).map((item) => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}</nav>
          <nav className="footer__nav footer__legal" aria-label="Informacje prawne"><small><Info/>Informacje</small>{legalItems.map((item) => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}</nav>
        </div>
        <div className="container footer__bottom"><span>© {new Date().getFullYear()} RAD'LIGHT</span></div>
      </footer>

      <BackToTop/>

      {mobileMoreOpen && <div className="mobile-more" role="dialog" aria-modal="true" aria-label="Więcej stron">
        <button className="mobile-more__backdrop" type="button" onClick={() => setMobileMoreOpen(false)} aria-label="Zamknij menu"/>
        <div className="mobile-more__panel">
          <header><span>Więcej</span><button type="button" onClick={() => setMobileMoreOpen(false)} aria-label="Zamknij"><X/></button></header>
          <div>{mobileMore.map(({ icon: Icon, ...item }) => <NavLink key={item.to} to={item.to}><Icon/><span>{item.label}</span></NavLink>)}</div>
        </div>
      </div>}
      <nav className="mobile-nav" aria-label="Nawigacja mobilna">
        {mobilePrimary.map(({ icon: Icon, ...item }) => <NavLink key={item.to} to={item.to} end={item.to === '/'}><Icon/><span>{item.label}</span></NavLink>)}
        <button className={mobileMoreOpen || isMoreRoute ? 'active' : ''} type="button" onClick={() => setMobileMoreOpen((open) => !open)} aria-expanded={mobileMoreOpen}><Menu/><span>Więcej</span></button>
      </nav>
    </div>
  );
}
