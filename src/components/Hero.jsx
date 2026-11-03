import serrandaMaglia from '../assets/serranda-maglia.jpg'
import { site } from '../data'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="eyebrow">Serrande · Saracinesche · Motorizzazioni</p>
        <h1>Serrande su misura, installate e garantite.</h1>
        <p className="lead">
          Progettiamo, installiamo e ripariamo serrande avvolgibili per negozi,
          abitazioni e capannoni. Materiali certificati CE, interventi rapidi e
          assistenza post-vendita a {site.area}.
        </p>
        <div className="actions">
          <a className="btn btn-primary" href="#contatti">
            Richiedi un preventivo
          </a>
          <a className="btn btn-ghost" href={site.phoneHref}>
            Pronto intervento
          </a>
        </div>
        <ul className="badges" aria-label="Punti di forza">
          <li>Certificazione CE</li>
          <li>Su misura</li>
          <li>Pronto intervento</li>
        </ul>
      </div>

      <div className="hero-visual">
        <img
          src={serrandaMaglia}
          alt="Serranda a maglia installata su un negozio"
          width="900"
          height="600"
          fetchPriority="high"
        />
        <span className="hero-tag">Installazione su misura</span>
      </div>
    </section>
  )
}

export default Hero
