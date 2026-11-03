import { gallery } from '../data'

function Gallery() {
  return (
    <section id="realizzazioni" className="section section-alt">
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow">Realizzazioni</p>
          <h2>Alcuni dei nostri lavori</h2>
          <p className="section-text">
            Installazioni recenti per negozi e abitazioni: serrande nuove,
            sostituzioni e interventi di manutenzione.
          </p>
        </div>

        <div className="gallery">
          {gallery.map((item) => (
            <figure className="gallery-item" key={item.label}>
              <img
                src={item.image}
                alt={item.label}
                width="700"
                height="525"
                loading="lazy"
              />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
