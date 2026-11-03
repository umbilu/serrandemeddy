import van from '../assets/van.jpg'
import { services, site } from '../data'

function Services() {
  return (
    <section id="servizi" className="section section-alt">
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow">Assistenza completa</p>
          <h2>Dal sopralluogo all&apos;assistenza post-vendita</h2>
        </div>

        <div className="grid">
          {services.map((service, index) => (
            <article className="service" key={service.title}>
              <span className="service-step">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>

        <div className="callout">
          <img
            src={van}
            alt="Furgone attrezzato per il pronto intervento serrande"
            width="700"
            height="467"
            loading="lazy"
          />
          <div className="callout-body">
            <strong>Serranda bloccata? Interveniamo subito.</strong>
            <p>
              Servizio di pronto intervento a {site.area}, con intervento rapido
              per non lasciare la tua attività chiusa.
            </p>
            <a className="btn btn-primary" href={site.phoneHref}>
              Chiama {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
