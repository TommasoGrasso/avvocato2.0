import './PracticeAreas.css';

const AREAS = [
  {
    icon: 'ti-scale',
    title: 'Diritto Civile',
    desc: 'Tutela completa dei diritti nelle obbligazioni, nella contrattualistica e nella responsabilità extracontrattuale, con un approccio pragmatico e orientato al risultato.',
    items: ['Contratti e obbligazioni', 'Recupero crediti', 'Responsabilità civile', 'Infortunistica stradale'],
  },
  {
    icon: 'ti-gavel',
    title: 'Diritto Penale',
    desc: 'Difesa tecnica e rigorosa in ogni fase del procedimento penale, con piena tutela dei diritti dell\'indagato e dell\'imputato davanti al Foro di Brindisi e sedi limitrofe.',
    items: ['Difesa in giudizio', 'Udienza preliminare', 'Misure cautelari', 'Diritto penitenziario'],
  },
  {
    icon: 'ti-heart',
    title: 'Diritto di Famiglia',
    desc: 'Accompagnamento professionale e umano nelle fasi più delicate della vita familiare: separazioni, divorzi, affidamento dei figli e tutela dei soggetti vulnerabili.',
    items: ['Separazioni consensuali e giudiziali', 'Divorzio', 'Affidamento condiviso', 'Tutela dei minori'],
  },
  {
    icon: 'ti-file-invoice',
    title: 'Diritto Tributario',
    desc: 'Consulenza fiscale qualificata e rappresentanza nei contenziosi con l\'Agenzia delle Entrate e altre autorità tributarie, per una gestione professionale delle questioni fiscali.',
    items: ['Contenzioso tributario', 'Consulenza fiscale', 'Questioni societarie', 'Ricorsi e opposizioni'],
  },
  {
    icon: 'ti-home',
    title: 'Diritto Immobiliare e Successorio',
    desc: 'Assistenza nelle operazioni immobiliari e nelle successioni ereditarie: dalla compravendita alla gestione delle eredità, donazioni e questioni condominiali.',
    items: ['Successioni ed eredità', 'Donazioni', 'Locazioni e sfratti', 'Diritto condominiale'],
  },
  {
    icon: 'ti-users',
    title: 'Diritto di Famiglia avanzato',
    desc: 'Gestione delle situazioni familiari più complesse: riconoscimento della paternità, adozioni, e ogni forma di tutela legale per i soggetti più vulnerabili del nucleo familiare.',
    items: ['Riconoscimento di paternità', 'Adozioni', 'Tutela e curatela', 'Mediazione familiare'],
  },
];

export default function PracticeAreas() {
  return (
    <section className="practice-section" id="aree">
      <div className="section-header fade-in">
        <span className="section-num">01</span>
        <div>
          <h2 className="section-h2">
            Aree di <em>Pratica</em>
          </h2>
          <p className="section-intro">
            Lo Studio Legale Orsini offre assistenza specializzata nei principali
            ambiti del diritto, con un approccio integrato e personalizzato per
            privati, famiglie e imprese nel territorio.
          </p>
        </div>
      </div>

      <div className="practice-grid stagger">
        {AREAS.map((area) => (
          <div className="practice-card" key={area.title}>
            <i className={`ti ${area.icon} practice-icon`} aria-hidden="true" />
            <h3 className="practice-title">{area.title}</h3>
            <p className="practice-desc">{area.desc}</p>
            <ul className="practice-list">
              {area.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
