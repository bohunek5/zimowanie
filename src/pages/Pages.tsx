import { ArrowRight, Building2, CalendarDays, Check, Clock3, Fence, Images, Lamp, MapPin, Phone, Ruler, Sailboat, ShieldCheck, Snowflake, Warehouse, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PhotoGallery } from '../components/PhotoGallery';
import { address, editorialServices, galleryPhotos, offers, phone, prices, season } from '../data/mockData';

interface PageHeroProps {
  readonly label: string;
  readonly title: string;
  readonly text?: string;
  readonly image?: string;
  readonly imageAlt?: string;
}

interface EmptyPageProps {
  readonly className?: string;
}

interface PrimaryCtaProps {
  readonly title?: string;
}

interface PriceCardsProps {
  readonly compact?: boolean;
}

interface SeasonBandProps {
  readonly className?: string;
}

function PhotoLayers() {
  return <><div className="photo-layer photo-layer--day" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}assets/hero-yard-sun-v3.jpg')` }}/><div className="photo-layer photo-layer--night" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}assets/hero-yard-evening-v3.jpg')` }}/></>;
}

function PageHero({ label, title, text, image, imageAlt = '' }: Readonly<PageHeroProps>) {
  return (
    <section className="page-hero">
      <div className="container page-hero__grid">
        <div className="page-hero__copy"><span className="overline">{label}</span><h1>{title}</h1>{text && <p>{text}</p>}</div>
        <div className="page-hero__photo">{image ? <img src={`${import.meta.env.BASE_URL}${image.replace(/^\//,'')}`} alt={imageAlt}/> : <PhotoLayers/>}<span className="photo-caption"><MapPin/> Giżycko · ul. Sybiraków</span></div>
      </div>
    </section>
  );
}

function PrimaryCta({ title = 'Zapytaj o miejsce dla swojej łodzi.' }: Readonly<PrimaryCtaProps>) {
  return (
    <section className="primary-cta"><div className="container primary-cta__inner"><div><span>Rezerwacje na sezon {season}</span><h2>{title}</h2></div><a href={phone.href}><Phone/>{phone.display}<ArrowRight/></a></div></section>
  );
}

function PriceCards({ compact = false }: Readonly<PriceCardsProps>) {
  return (
    <div className={`prices ${compact ? 'prices--compact' : ''}`}>
      {prices.map((item) => <article className={`price ${item.featured ? 'price--featured' : ''}`} key={item.length}>
        <div className="price__top"><span><Ruler/>{item.length}</span>{item.featured && <small>Najczęściej wybierane</small>}</div>
        <div className="price__visual" aria-hidden="true"><Sailboat/><i/></div>
        <strong>{item.price.replace(' zł','')}<sup>zł</sup></strong>
        <p>za sezon {season}</p>
        <a href={phone.href}>Rezerwuję <ArrowRight/></a>
      </article>)}
    </div>
  );
}

function SeasonBand({ className = '' }: Readonly<SeasonBandProps>) {
  return (
    <section className={`season-band ${className}`}>
      <div className="container season-band__grid">
        <div><span className="overline"><Snowflake/> Sezon zimowy</span><h2>Od października<br/>do końca kwietnia.</h2><p>Jedna rezerwacja obejmuje pełny okres postoju na placu.</p></div>
        <div className="season-dates"><div><CalendarDays/><small>Początek sezonu</small><strong>01.10</strong></div><span aria-hidden="true"><Snowflake/></span><div><CalendarDays/><small>Koniec sezonu</small><strong>30.04</strong></div></div>
      </div>
    </section>
  );
}

export function HomePage(_props: Readonly<EmptyPageProps>) {
  return (
    <>
      <section className="home-hero">
        <PhotoLayers/><div className="home-hero__overlay"/>
        <div className="container home-hero__content">
          <span className="overline"><Snowflake/> Sezon {season} · Giżycko</span>
          <h1>Zimowanie łodzi w Giżycku.</h1>
          <p>Ogrodzony, oświetlony i monitorowany plac 1800 m² oraz możliwość postoju w ogrzewanej hali.</p>
          <div className="hero-actions"><a className="button button--primary" href={phone.href}><Phone/>Zarezerwuj miejsce</a><Link className="button button--on-photo" to="/cennik">Zobacz cennik<ArrowRight/></Link></div>
          <div className="hero-details"><span><CalendarDays/>{season}</span><span><MapPin/>ul. Sybiraków, Giżycko</span></div>
        </div>
        <div className="container home-hero__caption"><span>Plac · hala · serwis zimowy</span><strong>1800 m²</strong></div>
      </section>

      <section className="trust-strip"><div className="container trust-strip__grid">
        <div><ShieldCheck/><span><strong>Monitorowany</strong><small>nadzór nad placem</small></span></div>
        <div><Fence/><span><strong>Ogrodzony</strong><small>wydzielony teren</small></span></div>
        <div><Lamp/><span><strong>Oświetlony</strong><small>czytelny po zmroku</small></span></div>
        <div><Warehouse/><span><strong>Ogrzewana hala</strong><small>wycena indywidualna</small></span></div>
      </div></section>

      <section className="section offer-section">
        <div className="container section-intro"><div><span className="overline">Oferta</span><h2>Plac, hala i przygotowanie łodzi.</h2></div><p>Najpierw wybierasz miejsce. Jeśli chcesz, możemy również przygotować jednostkę do zimowego postoju.</p></div>
        <div className="container storage-feature"><div className="storage-feature__metric"><Fence/><span className="storage-feature__number">1800<sup>m²</sup></span><small>utwardzonego placu</small></div><div><span className="overline">Najczęściej wybierane</span><h3>Monitorowany plac</h3><p>Ogrodzona i oświetlona przestrzeń dla jednostek różnych długości.</p><Link to="/cennik">Ceny od 1 000 zł <ArrowRight/></Link></div><ul><li><Check/>Wjazd od ul. Sybiraków</li><li><Check/>Pełny sezon {season}</li><li><Check/>Możliwość własnego przygotowania łodzi</li></ul></div>
        <div className="container editorial-services">{editorialServices.map((item) => <article className="editorial-service" key={item.title}><div className="editorial-service__image"><img src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//,'')}`} alt={item.imageAlt}/></div><div className="editorial-service__copy"><small>{item.label}</small><h3>{item.title}</h3><p>{item.text}</p><Link to="/oferta">Poznaj szczegóły <ArrowRight/></Link></div></article>)}</div>
      </section>

      <section className="section real-gallery-preview"><div className="container section-intro"><div><span className="overline"><Images/> Prawdziwe realizacje</span><h2>Tak wygląda nasze zaplecze.</h2></div><div><p>Hala, plac, wózki i łodzie klientów — zdjęcia wykonane na miejscu.</p><Link to="/galeria">Zobacz całą galerię <ArrowRight/></Link></div></div><div className="container"><PhotoGallery photos={galleryPhotos} compact/></div></section>

      <SeasonBand/>

      <section className="section yard-section">
        <div className="container yard-section__head"><div><span className="overline">Nasz plac</span><h2>Warunki przygotowane na zimowy postój.</h2></div><div><p>Plac znajduje się przy ul. Sybiraków w Giżycku. Przed przyjazdem ustalamy wymiary łodzi, wybraną formę postoju i termin.</p><Link to="/plac">Szczegóły placu <ArrowRight/></Link></div></div>
        <div className="container yard-facts-layout"><article className="yard-number"><Ruler/><span>Utwardzony plac</span><strong>1800<sup>m²</sup></strong><p>Miejsce dla łodzi o różnych długościach.</p></article><div className="yard-facts-grid"><article><ShieldCheck/><span><strong>Monitoring</strong><small>Nadzór nad terenem</small></span></article><article><Fence/><span><strong>Ogrodzenie</strong><small>Wydzielona przestrzeń</small></span></article><article><Lamp/><span><strong>Oświetlenie</strong><small>Plac widoczny po zmroku</small></span></article><article><Warehouse/><span><strong>Hala</strong><small>Opcja ogrzewanego postoju</small></span></article></div></div>
      </section>

      <section className="section pricing-section"><div className="container section-intro"><div><span className="overline">Cennik placu</span><h2>Jedna opłata za cały sezon.</h2></div><p>Stawka zależy od długości łodzi. Sezon trwa od 1 października do 30 kwietnia.</p></div><div className="container"><PriceCards/><div className="hall-row"><Building2/><div><strong>Ogrzewana hala</strong><span>Miejsce oraz cena ustalane indywidualnie.</span></div><a href={phone.href}>Zapytaj o dostępność <ArrowRight/></a></div></div></section>

      <PrimaryCta/>
    </>
  );
}

export function OfferPage(_props: Readonly<EmptyPageProps>) {
  return <><PageHero label="Oferta" title="Plac, hala i przygotowanie do zimy." text="Wybierz zakres odpowiedni dla swojej jednostki. Szczegóły i termin ustalimy telefonicznie."/><section className="section"><div className="container offer-page-grid">{offers.map(({icon: Icon,...item}) => <article className="offer-detail" key={item.title}><div className="offer-detail__icon"><Icon/></div><h2>{item.title}</h2><p>{item.text}</p><ul>{item.points.map(point => <li key={point}><Check/>{point}</li>)}</ul></article>)}</div></section><PrimaryCta/></>;
}

export function PricingPage(_props: Readonly<EmptyPageProps>) {
  return <><PageHero label="Cennik" title="Jasne stawki za pełny sezon."/><section className="section pricing-page"><div className="container pricing-groups"><article className="pricing-group pricing-group--yard"><header><span><ShieldCheck/>Monitorowany plac</span><h2>Postój na placu</h2><p>Opłata obejmuje pełny sezon od 1 października do 30 kwietnia.</p></header><PriceCards/></article><article className="pricing-group pricing-group--hall"><div className="pricing-group__photo"><img src={`${import.meta.env.BASE_URL}assets/gallery/lodz-w-hali.jpg`} alt="Łódź przechowywana w ogrzewanej hali"/></div><div className="pricing-group__body"><span><Building2/>Ogrzewana hala</span><h2>Wycena indywidualna</h2><p>Podaj długość i szerokość łodzi. Sprawdzimy dostępność miejsca i ustalimy cenę.</p><a className="button button--primary" href={phone.href}><Phone/>Zadzwoń</a><div className="service-note"><Wrench/><p>Serwis zimowy wyceniamy oddzielnie po ustaleniu zakresu prac.</p></div></div></article></div></section><PrimaryCta/></>;
}

export function SitePage(_props: Readonly<EmptyPageProps>) {
  return <><PageHero label="Plac" title="1800 m² dla małych i dużych jednostek." text="Plac jest ogrodzony, oświetlony i monitorowany. Wjazd znajduje się od ul. Sybiraków." image="/assets/gallery/lodz-na-wozku.jpg" imageAlt="Łódź motorowa ustawiona na wózku na placu"/><section className="section site-page"><div className="container site-facts"><article className="site-facts__main"><Ruler/><span className="overline">Plac w Giżycku</span><strong>1800<sup>m²</sup></strong><p>Utwardzona przestrzeń przeznaczona do zimowania łodzi.</p></article><article><ShieldCheck/><h2>Monitorowany</h2><p>Nadzór nad terenem podczas sezonu zimowego.</p></article><article><Fence/><h2>Ogrodzony</h2><p>Wydzielony plac przy ul. Sybiraków.</p></article><article><Lamp/><h2>Oświetlony</h2><p>Czytelna przestrzeń również po zmroku.</p></article></div><div className="container arrival"><div><span className="overline">Przed przyjazdem</span><h2>Wystarczą trzy ustalenia.</h2></div><ol><li><Check/><strong>Podaj długość łodzi</strong></li><li><Check/><strong>Wybierz plac lub halę</strong></li><li><Check/><strong>Ustal termin przyjazdu</strong></li></ol></div></section><PrimaryCta/></>;
}

export function HallPage(_props: Readonly<EmptyPageProps>) {
  return <><PageHero label="Ogrzewana hala" title="Postój pod dachem przez całą zimę." text="Miejsce dobieramy do wymiarów jednostki. Dostępność oraz cenę potwierdzamy przed przyjęciem łodzi." image="/assets/gallery/lodz-w-hali.jpg" imageAlt="Łódź przechowywana w ogrzewanej hali"/><section className="section hall-page"><div className="container hall-benefits"><article><Warehouse/><h2>Ogrzewane wnętrze</h2><p>Osłonięte miejsce dla jednostek wymagających postoju pod dachem.</p></article><article><Ruler/><h2>Miejsce dopasowane do łodzi</h2><p>Przed rezerwacją ustalamy długość i szerokość jednostki.</p></article><article><Phone/><h2>Wycena indywidualna</h2><p>Zadzwoń — sprawdzimy dostępność i podamy cenę.</p></article></div><div className="container hall-photo-pair"><img src={`${import.meta.env.BASE_URL}assets/gallery/hala-wnetrze.jpg`} alt="Przestronne wnętrze ogrzewanej hali"/><img src={`${import.meta.env.BASE_URL}assets/gallery/lodzie-zimowanie-hala.jpg`} alt="Łodzie ustawione w ogrzewanej hali"/></div></section><PrimaryCta title="Zapytaj o miejsce w ogrzewanej hali."/></>;
}

export function GalleryPage(_props: Readonly<EmptyPageProps>) {
  return <><section className="gallery-hero"><div className="container"><span className="overline"><Images/> Galeria</span><h1>Prawdziwe zdjęcia<br/>z naszego obiektu.</h1><p>Plac, ogrzewana hala, przygotowane wózki i obsługa dużych jednostek w Giżycku.</p></div></section><section className="section gallery-page"><div className="container gallery-page__head"><strong>{galleryPhotos.length} zdjęć</strong><span>Giżycko · ul. Sybiraków</span></div><div className="container"><PhotoGallery photos={galleryPhotos}/></div></section><PrimaryCta/></>;
}

export function ContactPage(_props: Readonly<EmptyPageProps>) {
  return <><PageHero label="Kontakt" title="Ustalmy miejsce dla Twojej łodzi." text="Zadzwoń i podaj długość jednostki oraz wybraną formę postoju."/><section className="section contact-page"><div className="container contact-layout"><a className="contact-main" href={phone.href}><small>Telefon</small><strong>{phone.display}</strong><span>Zadzwoń teraz <ArrowRight/></span></a><div className="contact-info"><article><MapPin/><small>Lokalizacja</small><strong>{address}</strong><p>Wjazd od ul. Sybiraków.</p></article><article><Clock3/><small>Sezon</small><strong>{season}</strong><p>Postój od października do końca kwietnia.</p></article><article><Wrench/><small>Serwis</small><strong>Do ustalenia</strong><p>Przygotowanie możesz zlecić nam albo wykonać samodzielnie.</p></article></div></div></section></>;
}
