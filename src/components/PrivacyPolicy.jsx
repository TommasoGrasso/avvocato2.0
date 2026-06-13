import { useEffect } from 'react';
import './PrivacyPolicy.css';

export default function PrivacyPolicy({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="pp-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Privacy Policy"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="pp-modal">
        <button className="pp-close" onClick={onClose} aria-label="Chiudi Privacy Policy">✕</button>

        <div className="pp-body">
          <h2 className="pp-title">Informativa sul trattamento dei dati personali</h2>
          <p className="pp-subtitle">
            ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR)
          </p>
          <hr className="pp-rule" />

          <h3 className="pp-h3">1. Titolare del trattamento</h3>
          <p>
            Avv. Roberto Orsini<br />
            Via Lecce, 203 – 72027 San Pietro Vernotico (BR)<br />
            Telefono: <a href="tel:+393287215263">+39 328 721 5263</a><br />
            E-mail: <a href="mailto:orsini1977@hotmail.com">orsini1977@hotmail.com</a><br />
            PEC: <a href="mailto:roberto.orsini@pecstudio.it">roberto.orsini@pecstudio.it</a>
          </p>

          <h3 className="pp-h3">2. Dati raccolti e finalità</h3>
          <p>Il sito raccoglie i seguenti dati personali tramite il modulo di contatto:</p>
          <ul>
            <li><strong>Nome e cognome</strong> – per identificare il richiedente;</li>
            <li><strong>Indirizzo e-mail</strong> – per rispondere alla richiesta;</li>
            <li><strong>Numero di telefono</strong> (facoltativo) – per contatti telefonici su richiesta;</li>
            <li><strong>Area legale di interesse e descrizione del caso</strong> – per fornire una risposta pertinente.</li>
          </ul>
          <p>
            I dati non vengono utilizzati per finalità di marketing, profilazione o ceduti a terzi,
            salvo quanto strettamente necessario per l'erogazione del servizio legale richiesto.
          </p>

          <h3 className="pp-h3">3. Base giuridica del trattamento</h3>
          <p>
            Il trattamento dei dati inviati tramite il modulo di contatto è necessario per dare seguito
            alla richiesta dell'interessato e per l'adozione di misure precontrattuali richieste dallo stesso
            (art. 6, par. 1, lett. b GDPR).
          </p>
          <p>
            Il trattamento dei dati tecnici di navigazione avviene sulla base del legittimo interesse
            del titolare alla sicurezza del sito, alla prevenzione di accessi abusivi e al corretto
            funzionamento dei servizi online (art. 6, par. 1, lett. f GDPR).
          </p>
          <p>
            Per eventuali trattamenti ulteriori non necessari alla gestione della richiesta sarà richiesto,
            ove necessario, uno specifico consenso dell'interessato (art. 6, par. 1, lett. a GDPR).
          </p>

          <h3 className="pp-h3">4. Modalità di trattamento e conservazione</h3>
          <p>
            I dati sono trattati con strumenti elettronici e conservati in modo sicuro. Il messaggio inviato
            tramite il modulo viene recapitato mediante <strong>EmailJS</strong>, servizio tecnico di terze parti,
            direttamente alla casella di posta del titolare. Non vengono memorizzati su server propri del sito web.
          </p>
          <p>
            Qualora l'utilizzo di servizi tecnici comporti trasferimenti di dati verso Paesi situati al di fuori
            dello Spazio Economico Europeo, tali trasferimenti avverranno nel rispetto degli artt. 44 e ss. GDPR,
            mediante adeguate garanzie, quali decisioni di adeguatezza o clausole contrattuali standard.
          </p>
          <p>
            I dati saranno conservati per il tempo strettamente necessario a evadere la richiesta e, in caso
            di instaurazione di un rapporto professionale, per il periodo previsto dalla normativa in materia
            di esercizio della professione forense, ordinariamente <strong>10 anni</strong> dalla conclusione del mandato.
          </p>

          <h3 className="pp-h3">5. Cookie e dati di navigazione</h3>
          <p>
            Il sito utilizza esclusivamente <strong>cookie tecnici</strong> necessari al funzionamento,
            ad esempio per memorizzare la preferenza relativa al consenso cookie. Non vengono installati
            cookie di profilazione, tracciamento o analitici di terze parti.
          </p>
          <p>
            I server web possono registrare automaticamente dati tecnici di navigazione, quali indirizzo IP,
            tipo di browser, pagine visitate, data e ora della richiesta. Tali dati sono conservati per un massimo
            di <strong>30 giorni</strong> e utilizzati esclusivamente per finalità di sicurezza, prevenzione di abusi
            e corretto funzionamento del sito.
          </p>

          <h3 className="pp-h3">6. Comunicazione e diffusione dei dati</h3>
          <p>
            I dati personali non vengono venduti, affittati o diffusi. Possono essere comunicati esclusivamente a:
          </p>
          <ul>
            <li>
              fornitori tecnici strettamente necessari all'erogazione del servizio, come servizi di invio e-mail,
              hosting o manutenzione tecnica;
            </li>
            <li>
              soggetti nominati, ove necessario, responsabili del trattamento ai sensi dell'art. 28 GDPR;
            </li>
            <li>
              autorità competenti, nei casi previsti dalla legge.
            </li>
          </ul>

          <h3 className="pp-h3">7. Diritti dell'interessato</h3>
          <p>Ai sensi degli artt. 15–22 GDPR, l'interessato ha il diritto di:</p>
          <ul>
            <li><strong>Accesso</strong>: ottenere conferma del trattamento e copia dei dati;</li>
            <li><strong>Rettifica</strong>: correggere dati inesatti o incompleti;</li>
            <li><strong>Cancellazione</strong> ("diritto all'oblio"): richiedere la cancellazione dei dati;</li>
            <li><strong>Limitazione</strong>: richiedere la limitazione del trattamento;</li>
            <li><strong>Portabilità</strong>: ricevere i propri dati in formato strutturato;</li>
            <li><strong>Opposizione</strong>: opporsi al trattamento basato sul legittimo interesse;</li>
            <li>
              <strong>Revoca del consenso</strong>: revocare il consenso eventualmente prestato,
              senza pregiudicare la liceità del trattamento precedente.
            </li>
          </ul>
          <p>
            Per esercitare i propri diritti, scrivere a{' '}
            <a href="mailto:orsini1977@hotmail.com">orsini1977@hotmail.com</a> o alla PEC{' '}
            <a href="mailto:roberto.orsini@pecstudio.it">roberto.orsini@pecstudio.it</a>.
            L'interessato ha altresì il diritto di proporre reclamo al{' '}
            <strong>Garante per la protezione dei dati personali</strong>{' '}
            (<a href="https://www.garanteprivacy.it" target="_blank" rel="noreferrer">
              www.garanteprivacy.it
            </a>).
          </p>

          <h3 className="pp-h3">8. Aggiornamenti</h3>
          <p>
            La presente informativa può essere aggiornata. La versione vigente è sempre disponibile
            su questa pagina. Ultimo aggiornamento: <strong>giugno 2026</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}