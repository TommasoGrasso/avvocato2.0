import { useState, useEffect } from 'react';
import './CookieBanner.css';

export default function CookieBanner({ onOpenPrivacy }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Consenso cookie">
      <div className="cookie-banner__content">
        <p className="cookie-banner__text">
          Questo sito utilizza cookie tecnici necessari al funzionamento.
          Non utilizziamo cookie di profilazione o tracciamento di terze parti.
          Per maggiori informazioni consulta la{' '}
          <button className="cookie-banner__link" onClick={onOpenPrivacy}>
            Privacy Policy
          </button>.
        </p>
        <div className="cookie-banner__actions">
          <button className="cookie-banner__btn cookie-banner__btn--reject" onClick={reject}>
            Solo necessari
          </button>
          <button className="cookie-banner__btn cookie-banner__btn--accept" onClick={accept}>
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
