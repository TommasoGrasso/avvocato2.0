import './About.css';

const CREDENTIALS = [
  {
    period: '2010',
    title: "Iscrizione al Foro di Brindisi",
    desc: "L'Avv. Roberto Orsini è iscritto all'Ordine degli Avvocati di Brindisi. Lo studio opera con sede a San Pietro Vernotico e assiste clienti in tutta la provincia di Brindisi e nei fori limitrofi.",
  },
  {
    period: 'Civile & Penale',
    title: "Diritto Civile e Penale",
    desc: "Assistenza in obbligazioni, contrattualistica, recupero crediti, responsabilità civile e infortunistica stradale. Difesa penale in ogni fase del procedimento davanti al Tribunale di Brindisi.",
  },
  {
    period: 'Famiglia & Successioni',
    title: "Diritto di Famiglia e Successorio",
    desc: "Separazioni consensuali e giudiziali, divorzi, affidamento condiviso, riconoscimento di paternità, tutela dei minori, eredità e donazioni. Ogni pratica seguita con discrezione e competenza.",
  },
  {
    period: 'Tributario',
    title: "Consulenza Tributaria",
    desc: "Rappresentanza nei contenziosi con l'Agenzia delle Entrate e la Commissione Tributaria Provinciale di Brindisi. Consulenza fiscale e societaria per trovare soluzioni tempestive ed efficaci.",
  },
];

export default function About() {
  return (
    <section className="about-section" id="studio">
      <div className="about-grid">
        <div className="about-left fade-in">
          <p className="about-eyebrow">Lo Studio</p>

          <h2 className="about-h2">
            <strong>Roberto Orsini</strong>
            <br />Avvocato presso il
            <br />Foro di Brindisi
          </h2>

          <p className="about-body">
            Lo Studio Legale Orsini è attivo dal 2010 con sede a San Pietro
            Vernotico, in provincia di Brindisi. L'Avv. Roberto Orsini offre
            consulenza e assistenza legale in diritto civile, penale, tributario
            e di famiglia, con un approccio integrato pensato per privati,
            famiglie e imprese del territorio brindisino e pugliese.
            <br /><br />
            In oltre quindici anni di attività presso il Foro di Brindisi, lo
            studio ha maturato una profonda conoscenza delle dinamiche
            processuali locali, offrendo ai propri clienti una difesa tecnica
            rigorosa e una comunicazione sempre chiara e trasparente, dalla
            prima consulenza fino alla conclusione del procedimento.
          </p>

          <div className="about-signature">
            <div className="sig-row">
              <img
                src="/avvocato.webp"
                alt="Avvocato Roberto Orsini"
                className="about-photo-img"
              />
              <div>
                <div className="sig-name">Roberto Orsini</div>
                <div className="sig-title">
                  Avvocato · Ordine degli Avvocati di Brindisi
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-right stagger">
          {CREDENTIALS.map((c) => (
            <div className="credential-card" key={c.period}>
              <div className="cred-year">{c.period}</div>
              <h3 className="cred-title">{c.title}</h3>
              <p className="cred-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}