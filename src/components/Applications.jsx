import { applications } from '../data'

function Applications() {
  return (
    <section id="applicazioni" className="section">
      <div className="section-head">
        <p className="eyebrow">Applicazioni</p>
        <h2>Dove installiamo le nostre serrande</h2>
        <p className="section-text">
          Ogni ambiente ha esigenze diverse. Ti guidiamo nella scelta più
          adatta, dall&apos;estetica alla parte funzionale e alla sicurezza.
        </p>
      </div>

      <ul className="chips">
        {applications.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default Applications
