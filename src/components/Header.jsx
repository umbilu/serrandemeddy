import { useState } from 'react'
import { site } from '../data'

const links = [
  { href: '#prodotti', label: 'Prodotti' },
  { href: '#servizi', label: 'Servizi' },
  { href: '#applicazioni', label: 'Applicazioni' },
  { href: '#chi-siamo', label: 'Chi siamo' },
  { href: '#contatti', label: 'Contatti' },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <a className="brand" href="#top" onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true" />
        Serrande <strong>Meddy</strong>
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">Apri il menu</span>
        <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true" />
      </button>

      <nav
        id="main-nav"
        className={`nav ${open ? 'is-open' : ''}`}
        aria-label="Navigazione principale"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="nav-cta" href={site.phoneHref}>
          Chiama ora
        </a>
      </nav>
    </header>
  )
}

export default Header
