import './Footer.css';

const NAV_LINKS = [
  { label: 'Aree di pratica', href: '#aree' },
  { label: 'Lo studio',       href: '#studio' },
  { label: 'Contatti',        href: '#contatti' },
];

export default function Footer({ onOpenPrivacy }) {
  return (
    <>
      <footer className="footer" role="contentinfo">
        <div className="footer__brand">
          <img
            src="/logo.webp"
            alt="Stemma Studio Legale Orsini"
            className="footer__logo"
            width="56"
            height="56"
          />
          <div className="footer__avv">Avv.</div>
          <div className="footer__name">Roberto Orsini</div>
          <p className="footer__tagline">Studio Legale · Foro di Brindisi dal 2010</p>
        </div>

        <nav className="footer__links" aria-label="Navigazione footer">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="footer__link">
              {l.label}
            </a>
          ))}
          <button className="footer__link footer__link--btn" onClick={onOpenPrivacy}>
            Privacy policy
          </button>
          <button className="footer__link footer__link--btn" onClick={onOpenPrivacy}>
            Note legali
          </button>
        </nav>

        <address className="footer__legal">
          Avv. Roberto Orsini<br />
          Iscritto all'Ordine degli Avvocati di Brindisi<br />
          Via Lecce, 203 · 72027 San Pietro Vernotico (BR)<br />
          <a href="tel:+393287215263" className="footer__contact-link">+39 328 721 5263</a><br />
          <a href="mailto:orsini1977@hotmail.com" className="footer__contact-link">orsini1977@hotmail.com</a><br />
          <a href="mailto:roberto.orsini@pecstudio.it" className="footer__contact-link">PEC: roberto.orsini@pecstudio.it</a>
        </address>
      </footer>

      <div className="footer__bottom">
        <span className="footer__copy">
          © {new Date().getFullYear()} Studio Legale Roberto Orsini · Tutti i diritti riservati
        </span>
        <span className="footer__copy">Conforme al GDPR 2016/679</span>
      </div>
    </>
  );
}
