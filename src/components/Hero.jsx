import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-label="Intestazione principale">
      {/* ── Pannello sinistro — identità ── */}
      <div className="hero__left">
        <span className="hero__bg-num" aria-hidden="true">
          Lex
        </span>

        <div className="hero__content">
          <div className="hero__crest">
            <img
              src="/logo.webp"
              alt="Stemma Studio Legale Orsini"
              width="180"
              height="180"
            />
          </div>

          <p className="hero__eyebrow">Foro di Brindisi · Dal 2010</p>

          <h1 className="hero__h1">
            Studio Legale <em>Orsini</em>
          </h1>

          <p className="hero__avvocato">
            <span className="hero__avv-label">Avv.</span> Roberto Orsini
          </p>

          <div className="hero__rule" aria-hidden="true" />

          <p className="hero__sub">
            Assistenza legale in diritto civile, penale, tributario e di
            famiglia per privati e imprese.
          </p>

          <div className="hero__actions">
            <a href="#contatti" className="btn-primary">
              Richiedi consulenza
            </a>
            <a href="#aree" className="btn-ghost">
              Le aree di pratica →
            </a>
          </div>
        </div>
      </div>

      {/* ── Pannello destro — stat ── */}
      <div className="hero__right">
        <div className="hero__stats">
          <div className="stat-block">
            <div className="stat-num">
              15<span>+</span>
            </div>
            <div className="stat-label">Anni al Foro di Brindisi</div>
            <p className="stat-desc">
              Iscritto all'Ordine degli Avvocati di Brindisi dal 2010, lo studio
              assiste privati, famiglie e imprese con competenza e dedizione.
            </p>
          </div>
          <div className="stat-block">
            <div className="stat-num">
              7<span>+</span>
            </div>
            <div className="stat-label">Aree di specializzazione</div>
            <p className="stat-desc">
              Civile, penale, amministrativo, tributario, diritto del lavoro e
              diritto di famiglia: copertura integrata per ogni esigenza legale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}