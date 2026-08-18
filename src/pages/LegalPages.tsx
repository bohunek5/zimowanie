import { Cookie, FileText, ShieldCheck } from 'lucide-react';
import { company, email, phone } from '../data/mockData';

interface LegalPageProps {
  readonly type: 'terms' | 'privacy' | 'cookies';
}

const updatedAt = '12 sierpnia 2026 r.';

function TermsContent() {
  return <>
    <section><h2>1. Informacje podstawowe</h2><p>Serwis prezentuje ofertę zimowania łodzi na placu i w ogrzewanej hali w Giżycku. Jego właścicielem i administratorem jest {company.fullName}, {company.registeredAddress}, NIP {company.nip}, REGON {company.regon}.</p></section>
    <section><h2>2. Korzystanie z serwisu</h2><p>Z serwisu można korzystać bez rejestracji. Użytkownik powinien korzystać ze strony zgodnie z prawem, dobrymi obyczajami i jej przeznaczeniem. Zabronione jest dostarczanie treści bezprawnych oraz podejmowanie działań zakłócających działanie strony.</p></section>
    <section><h2>3. Oferta i rezerwacja</h2><p>Informacje oraz ceny widoczne w serwisie mają charakter informacyjny i nie stanowią oferty w rozumieniu Kodeksu cywilnego. Dostępność miejsca, zakres usług, termin przyjęcia łodzi i ostateczna cena są potwierdzane indywidualnie. Rezerwacji można dokonać telefonicznie pod numerem <a href={phone.href}>{phone.display}</a>.</p></section>
    <section><h2>4. Treści i odpowiedzialność</h2><p>Dokładamy starań, aby dane na stronie były aktualne i czytelne. Chwilowa niedostępność serwisu może wynikać z prac technicznych albo przyczyn niezależnych od administratora. Zdjęcia, teksty i elementy graficzne serwisu są chronione prawem i nie mogą być wykorzystywane bez zgody właściciela.</p></section>
    <section><h2>5. Kontakt i zmiany regulaminu</h2><p>Pytania dotyczące działania strony można zgłaszać telefonicznie lub e-mailem: <a href={email.href}>{email.display}</a>. Regulamin może zostać zmieniony, jeżeli zmieni się sposób działania serwisu, zakres publikowanych funkcji lub obowiązujące przepisy. Aktualna wersja jest zawsze dostępna na tej stronie.</p></section>
  </>;
}

function PrivacyContent() {
  return <>
    <section><h2>1. Administrator danych</h2><p>Administratorem danych osobowych jest {company.fullName}, {company.registeredAddress}, NIP {company.nip}. W sprawach dotyczących danych osobowych można skontaktować się telefonicznie: <a href={phone.href}>{phone.display}</a> lub e-mailem: <a href={email.href}>{email.display}</a>.</p></section>
    <section><h2>2. Jakie dane przetwarzamy</h2><p>Serwis nie zawiera formularza kontaktowego, kont użytkowników ani systemu płatności. Jeżeli skontaktujesz się telefonicznie lub e-mailem, możemy przetwarzać dane przekazane w wiadomości albo podczas rozmowy, w szczególności imię, dane kontaktowe oraz informacje potrzebne do przygotowania oferty i rezerwacji miejsca dla łodzi.</p></section>
    <section><h2>3. Cele i podstawy przetwarzania</h2><ul><li>udzielenie odpowiedzi, przygotowanie oferty i podjęcie działań przed zawarciem umowy — art. 6 ust. 1 lit. b RODO;</li><li>realizacja umowy i obsługa rezerwacji — art. 6 ust. 1 lit. b RODO;</li><li>rozliczenia i obowiązki podatkowe — art. 6 ust. 1 lit. c RODO;</li><li>ustalenie, dochodzenie lub obrona roszczeń — prawnie uzasadniony interes administratora, art. 6 ust. 1 lit. f RODO.</li></ul></section>
    <section><h2>4. Odbiorcy i okres przechowywania</h2><p>Dane mogą być przekazywane dostawcom usług niezbędnych do prowadzenia działalności, takim jak obsługa księgowa, prawna i dostawcy infrastruktury IT, wyłącznie w niezbędnym zakresie. Dane przechowujemy przez czas potrzebny do obsługi zapytania lub wykonania umowy, a później przez okres wymagany przepisami albo do upływu terminów przedawnienia roszczeń.</p></section>
    <section><h2>5. Twoje prawa</h2><p>Masz prawo żądać dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania i przeniesienia, a w przypadkach opartych na prawnie uzasadnionym interesie — wnieść sprzeciw. Możesz także złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych. Dane nie są wykorzystywane do zautomatyzowanego podejmowania decyzji ani profilowania.</p></section>
  </>;
}

function CookiesContent() {
  return <>
    <section><h2>1. Czym są pliki cookies</h2><p>Cookies to niewielkie pliki zapisywane przez przeglądarkę. Serwis nie wykorzystuje cookies reklamowych, analitycznych ani narzędzi służących do profilowania użytkowników.</p></section>
    <section><h2>2. Pamięć przeglądarki</h2><p>Strona zapisuje w pamięci lokalnej przeglądarki wyłącznie wybrany tryb wyświetlania — dzienny albo nocny. Służy do tego wpis <code>zimowanie-theme-v3</code>. Nie zawiera on danych osobowych i można go usunąć w ustawieniach przeglądarki.</p></section>
    <section><h2>3. Usługi techniczne</h2><p>Strona jest publikowana przez GitHub Pages i pobiera kroje pisma z Google Fonts. Podczas połączenia dostawcy tych usług mogą otrzymywać dane techniczne, takie jak adres IP, typ przeglądarki, czas żądania i adres odwiedzanej strony. Zasady przetwarzania tych danych określają polityki odpowiednich dostawców.</p></section>
    <section><h2>4. Ustawienia przeglądarki</h2><p>W ustawieniach przeglądarki możesz usunąć dane witryny, zablokować ich zapisywanie lub korzystać z trybu prywatnego. Ograniczenie pamięci lokalnej może spowodować, że wybrany tryb kolorystyczny nie zostanie zapamiętany.</p></section>
    <section><h2>5. Zmiany polityki</h2><p>Jeżeli na stronie pojawią się narzędzia analityczne, formularze albo nowe technologie przechowywania danych, ta polityka zostanie zaktualizowana, a w razie potrzeby serwis poprosi o zgodę.</p></section>
  </>;
}

const pageData = {
  terms: { label: 'Dokumenty', title: 'Regulamin serwisu', intro: 'Zasady korzystania ze strony zimowania łodzi w Giżycku.', icon: FileText, content: <TermsContent/> },
  privacy: { label: 'Twoje dane', title: 'Polityka prywatności', intro: 'Informacje o przetwarzaniu danych podczas kontaktu i korzystania ze strony.', icon: ShieldCheck, content: <PrivacyContent/> },
  cookies: { label: 'Ustawienia strony', title: 'Polityka cookies', intro: 'Jak strona korzysta z pamięci przeglądarki i usług technicznych.', icon: Cookie, content: <CookiesContent/> },
} as const;

export function LegalPage({ type }: Readonly<LegalPageProps>) {
  const page = pageData[type];
  const Icon = page.icon;
  return <article className="legal-page"><header className="legal-hero"><div className="container"><span className="overline"><Icon/>{page.label}</span><h1>{page.title}</h1><p>{page.intro}</p><small>Ostatnia aktualizacja: {updatedAt}</small></div></header><div className="container legal-content">{page.content}</div></article>;
}
