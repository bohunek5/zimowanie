import { BadgeDollarSign, Compass, House, Images, Info, Map, MapPin, Moon, PackageOpen, Phone, Sun, Warehouse } from 'lucide-react';
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
  const mobileIcons = [House, PackageOpen, BadgeDollarSign, Map, Warehouse, Images, Phone];
  useScrollToTop(location.pathname);

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

      <nav className="mobile-nav" aria-label="Nawigacja mobilna">
        {navItems.map((item, index) => {
          const Icon = mobileIcons[index];
          return <NavLink key={item.to} to={item.to} end={item.to === '/'}><Icon/><span>{item.label}</span></NavLink>;
        })}
      </nav>
    </div>
  );
}
