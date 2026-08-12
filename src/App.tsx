import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { useTheme } from './hooks/useTheme';
import { ContactPage, GalleryPage, HallPage, HomePage, OfferPage, PricingPage, SitePage } from './pages/Pages';
import { LegalPage } from './pages/LegalPages';

interface AppProps {
  readonly initialPath?: string;
}

export default function App(_props: Readonly<AppProps>) {
  const { theme, toggleTheme } = useTheme();
  return <BrowserRouter basename={import.meta.env.BASE_URL}><Routes><Route element={<Layout theme={theme} onToggleTheme={toggleTheme}/>}><Route index element={<HomePage/>}/><Route path="oferta" element={<OfferPage/>}/><Route path="cennik" element={<PricingPage/>}/><Route path="plac" element={<SitePage/>}/><Route path="hala" element={<HallPage/>}/><Route path="galeria" element={<GalleryPage/>}/><Route path="kontakt" element={<ContactPage/>}/><Route path="regulamin" element={<LegalPage type="terms"/>}/><Route path="polityka-prywatnosci" element={<LegalPage type="privacy"/>}/><Route path="cookies" element={<LegalPage type="cookies"/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Route></Routes></BrowserRouter>;
}
