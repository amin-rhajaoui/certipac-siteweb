import { Link } from 'react-router-dom'

export default function Logo({ className, variant = 'light' }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className || ''}`}>
      <img
        src={variant === 'dark' ? '/CertiPac-white.svg' : '/CertiPac-navbar.svg'}
        alt="Certipac"
        className="h-8 w-auto"
      />
    </Link>
  )
}
