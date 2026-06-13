import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const EMAILJS_SERVICE_ID = "service_3zd45r9";
const EMAILJS_TEMPLATE_ID = "template_9bjsae4";
const EMAILJS_PUBLIC_KEY = "9ey-_ynBfKzYaZsI1";

const AREAS = [
  "Diritto Civile",
  "Diritto Penale",
  "Diritto di Famiglia",
  "Diritto Tributario",
  "Diritto Immobiliare",
  "Successioni e Donazioni",
  "Altro",
];

export default function Contact({ onOpenPrivacy }) {
  const [form, setForm] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    area: "",
    messaggio: "",
    privacy: false,
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    const required = ["nome", "cognome", "email", "area", "messaggio"];

    if (required.some((k) => !form[k].trim()) || !form.privacy) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          nome: form.nome,
          cognome: form.cognome,
          email: form.email,
          telefono: form.telefono || "Non fornito",
          area: form.area,
          messaggio: form.messaggio,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setStatus("sent");

      setForm({
        nome: "",
        cognome: "",
        email: "",
        telefono: "",
        area: "",
        messaggio: "",
        privacy: false,
      });
    } catch (err) {
      console.error("Errore EmailJS:", err);
      setStatus("fail");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const btnLabel = {
    idle: "Invia richiesta →",
    sending: "Invio in corso…",
    error: "Compila tutti i campi e accetta la privacy",
    sent: "Richiesta inviata ✓",
    fail: "Errore di invio — riprova",
  }[status];

  return (
    <section className="contact-section" id="contatti">
      <div className="section-header fade-in">
        <span className="section-num">04</span>

        <div>
          <h2 className="section-h2">
            Prenota una
            <br />
            <em>Consulenza</em>
          </h2>

          <p className="section-intro">
            Il primo colloquio è riservato e senza impegno. Raccontaci la tua
            situazione: troveremo insieme la strada migliore.
          </p>
        </div>
      </div>

      <div className="contact-grid">
        {/* INFO */}
        <div className="contact-info stagger">
          <div className="contact-item">
            <div className="contact-item-label">
              <i className="ti ti-map-pin" /> Dove siamo
            </div>
            <div className="contact-item-val">Via Lecce, 203</div>
            <p className="contact-item-sub">
              72027 San Pietro Vernotico (BR)
              <br />
              Provincia di Brindisi
            </p>
          </div>

          <div className="contact-item">
            <div className="contact-item-label">
              <i className="ti ti-phone" /> Telefono
            </div>
            <a
              className="contact-item-val contact-item-link"
              href="tel:+393287215263"
            >
              +39 328 721 5263
            </a>
            <p className="contact-item-sub">
              Disponibile per appuntamenti
              <br />e urgenze
            </p>
          </div>

          <div className="contact-item">
            <div className="contact-item-label">
              <i className="ti ti-mail" /> Email
            </div>
            <a
              className="contact-item-val contact-item-link contact-item-val--sm"
              href="mailto:orsini1977@hotmail.com"
            >
              orsini1977@hotmail.com
            </a>
            <p className="contact-item-sub">Risposta entro 24 ore lavorative</p>
          </div>

          <div className="contact-item">
            <div className="contact-item-label">
              <i className="ti ti-shield-check" /> PEC
            </div>
            <div className="contact-item-val contact-item-val--sm">
              roberto.orsini@pecstudio.it
            </div>
            <p className="contact-item-sub">Foro di Brindisi · Dal 2010</p>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form fade-in">
          <div className="form-row">
            <div className="form-field">
              <label className="form-label" htmlFor="nome">
                Nome <span className="form-req">*</span>
              </label>
              <input
                className="form-input"
                type="text"
                id="nome"
                name="nome"
                placeholder="Mario"
                value={form.nome}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="cognome">
                Cognome <span className="form-req">*</span>
              </label>
              <input
                className="form-input"
                type="text"
                id="cognome"
                name="cognome"
                placeholder="Rossi"
                value={form.cognome}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Email <span className="form-req">*</span>
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              placeholder="mario@email.it"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="telefono">
              Telefono
            </label>
            <input
              className="form-input"
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="+39 333 000000"
              value={form.telefono}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="area">
              Area di interesse <span className="form-req">*</span>
            </label>
            <select
              className="form-select"
              id="area"
              name="area"
              value={form.area}
              onChange={handleChange}
            >
              <option value="" disabled>
                Seleziona un'area legale
              </option>
              {AREAS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="messaggio">
              Descrizione del caso <span className="form-req">*</span>
            </label>
            <textarea
              className="form-textarea"
              id="messaggio"
              name="messaggio"
              placeholder="Descriva brevemente la sua situazione..."
              value={form.messaggio}
              onChange={handleChange}
            />
          </div>

          {/* PRIVACY CHECKBOX */}
          <div className="form-field form-field--privacy">
            <label className="form-checkbox-label">
              <input
                className="form-checkbox"
                type="checkbox"
                name="privacy"
                checked={form.privacy}
                onChange={handleChange}
              />
              <span>
                Ho letto e accetto l'
                <button
                  type="button"
                  className="form-privacy-link"
                  onClick={onOpenPrivacy}
                >
                  informativa sulla privacy
                </button>{" "}
                ai sensi del GDPR 2016/679. <span className="form-req">*</span>
              </span>
            </label>
          </div>

          <p className="form-privacy">
            <i className="ti ti-lock" /> I dati saranno trattati nel rispetto
            del GDPR 2016/679.
          </p>

          <button
            className={`btn-submit ${status}`}
            type="button"
            onClick={handleSubmit}
            disabled={status === "sending" || status === "sent"}
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </section>
  );
}