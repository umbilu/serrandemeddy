import { site } from '../data'

function Contact() {
  return (
    <section id="contatti" className="section section-alt">
      <div className="section-inner">
        <div className="contact-head">
          <p className="eyebrow">Contatti</p>
          <h2>Richiedi informazioni</h2>
          <p className="section-text">
            Chiamaci o scrivici per un sopralluogo e un preventivo gratuito: ti
            risponderemo nel più breve tempo possibile.
          </p>
        </div>

        <div className="contact-list">
          <a className="contact-item" href={site.phoneHref}>
            <span className="contact-label">Telefono</span>
            <span>{site.phoneDisplay}</span>
          </a>
          <a className="contact-item" href={`mailto:${site.email}`}>
            <span className="contact-label">Email</span>
            <span>{site.email}</span>
          </a>
          <div className="contact-item">
            <span className="contact-label">Orari</span>
            <span>{site.hours}</span>
          </div>
          <a className="contact-item contact-item-accent" href={site.phoneHref}>
            <span className="contact-label">Urgenze</span>
            <span>Pronto intervento</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
