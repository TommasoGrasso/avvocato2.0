import './Values.css';

const VALUES = [
  {
    num: '01',
    title: 'Competenza',
    desc: 'Aggiornamento costante e specializzazione approfondita in ogni ambito di intervento, per garantire la massima qualità della consulenza.',
  },
  {
    num: '02',
    title: 'Trasparenza',
    desc: 'Informazione chiara e puntuale sull\'evoluzione di ogni pratica. Nessuna sorpresa sui costi, nessuna ambiguità nelle strategie.',
  },
  {
    num: '03',
    title: 'Ascolto',
    desc: 'Ogni caso è unico. La comprensione profonda della situazione del cliente è il fondamento di ogni efficace strategia difensiva.',
  },
  {
    num: '04',
    title: 'Risultati',
    desc: 'L\'obiettivo è sempre concreto: tutelare i diritti del cliente, minimizzare i rischi e ottenere il miglior esito possibile in ogni procedimento.',
  },
];

export default function Values() {
  return (
    <section className="values-section">
      <div className="section-header fade-in">
        <span className="section-num">02</span>
        <div>
          <h2 className="section-h2">
            I nostri <em>valori</em>
          </h2>
        </div>
      </div>
      <div className="values-grid stagger">
        {VALUES.map((v) => (
          <div className="value-item" key={v.num}>
            <div className="value-num">{v.num}</div>
            <div className="value-title">{v.title}</div>
            <p className="value-desc">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
