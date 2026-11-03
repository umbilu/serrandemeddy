function Icon({ name }) {
  const common = {
    width: 34,
    height: 34,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  switch (name) {
    case 'mesh':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 3v18M16 3v18M3 8h18M3 16h18" />
        </svg>
      )
    case 'blind':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 7h18M3 11h18M3 15h18M3 19h18" />
        </svg>
      )
    case 'quiet':
      return (
        <svg {...common}>
          <path d="M11 5 6 9H3v6h3l5 4V5Z" />
          <path d="m16 9 5 6M21 9l-5 6" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    case 'profile':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="6" height="16" rx="1" />
          <rect x="15" y="4" width="6" height="16" rx="1" />
          <path d="M10 9h4M10 15h4" />
        </svg>
      )
    case 'motor':
      return (
        <svg {...common}>
          <rect x="3" y="8" width="12" height="8" rx="2" />
          <path d="M15 11h4a2 2 0 0 1 2 2v3M7 8V5h4v3" />
          <circle cx="7" cy="16" r="1" />
        </svg>
      )
    default:
      return null
  }
}

export default Icon
