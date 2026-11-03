import { year, site } from '../data'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand">
            <span className="brand-mark" aria-hidden="true" />
            Serrande <strong>Meddy</strong>
          </span>
          <p>
            Installazione, manutenzione e riparazione di serrande avvolgibili
            per negozi e abitazioni a {site.area}.
          </p>
        </div>

        <div className="footer-col">
          <h3>Prodotti</h3>
          <a href="#prodotti">Serrande a maglia</a>
          <a href="#prodotti">Serrande cieche</a>
          <a href="#prodotti">Motorizzazione</a>
          <a href="#prodotti">Profili e componenti</a>
        </div>

        <div className="footer-col">
          <h3>Contatti</h3>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.hours}</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Serrande Meddy</span>
        <span>Tutti i diritti riservati</span>
      </div>
    </footer>
  )
}

export default Footer
