import './Testimonials.css';

const GARANZIE = [
  {
    num: '01',
    icon: 'ti-lock',
    title: 'Riservatezza assoluta',
    text: 'Ogni informazione condivisa con lo studio è trattata con la massima discrezione. Il segreto professionale è un dovere deontologico e un impegno personale verso ogni cliente.',
  },
  {
    num: '02',
    icon: 'ti-clock',
    title: 'Risposta entro 24 ore',
    text: 'Ogni richiesta di contatto riceve risposta entro la giornata lavorativa successiva. Tempi certi, senza attese indefinite: il vostro tempo ha valore quanto il nostro.',
  },
  {
    num: '03',
    icon: 'ti-map-pin',
    title: 'Radicamento nel territorio',
    text: 'Operativo nel Foro di Brindisi dal 2010, lo studio conosce profondamente la realtà giudiziaria locale, i suoi attori e le sue dinamiche processuali.',
  },
  {
    num: '04',
    icon: 'ti-trending-up',
    title: 'Aggiornamento continuo',
    text: 'Il diritto evolve. L\'Avv. Orsini mantiene una formazione costante in tutti gli ambiti di competenza, per garantire ai clienti strategie sempre aggiornate e pertinenti.',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-header fade-in">
        <span className="section-num">03</span>
        <div>
          <h2 className="section-h2">
            Perché scegliere<br />lo <em>Studio</em>
          </h2>
          <p className="section-intro">
            Quattro impegni concreti che guidano ogni rapporto professionale con
            i nostri clienti, dal primo colloquio alla conclusione del caso.
          </p>
        </div>
      </div>

      <div className="testi-grid stagger">
        {GARANZIE.map((g) => (
          <div className="testi-card garanzia-card" key={g.num}>
            <div className="garanzia-header">
              <span className="garanzia-num">{g.num}</span>
              <i className={`ti ${g.icon} garanzia-icon`} aria-hidden="true" />
            </div>
            <div className="garanzia-title">{g.title}</div>
            <p className="testi-text">{g.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
