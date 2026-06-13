import "./Marquee.css";

const ITEMS = [
  "Diritto Civile",
  "Separazioni e Divorzi",
  "Diritto Penale",
  "Contenzioso Tributario",
  "Tutela Minori",
  "Recupero Crediti",
  "Diritto di Famiglia",
  "Infortunistica Stradale",
  "Successioni Ereditarie",
  "Risarcimento Danni",
];

export default function Marquee() {
  const all = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee-bar" aria-hidden="true">
      <div className="marquee-inner">
        {all.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
