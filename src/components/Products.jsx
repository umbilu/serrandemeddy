import { products } from '../data'
import Icon from './Icon'

function Products() {
  return (
    <section id="prodotti" className="section">
      <div className="section-head">
        <p className="eyebrow">I nostri prodotti</p>
        <h2>Serrande e componenti per ogni esigenza</h2>
        <p className="section-text">
          Una gamma completa di serrande avvolgibili in acciaio zincato,
          alluminio e ferro, tutte realizzabili su misura e disponibili con
          certificazione CE.
        </p>
      </div>

      <div className="grid">
        {products.map((product) => (
          <article className="card" key={product.title}>
            <span className="card-icon">
              <Icon name={product.icon} />
            </span>
            <h3>{product.title}</h3>
            <p className="card-models">{product.models}</p>
            <p>{product.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Products
