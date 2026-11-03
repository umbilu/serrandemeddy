import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Services from './components/Services'
import Applications from './components/Applications'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Products />
        <Services />
        <Applications />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
