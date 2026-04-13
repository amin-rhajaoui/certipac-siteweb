import { Link } from 'react-router-dom'

export default function Logo({ className }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className || ''}`}>
      <img src="/logo.svg" alt="PACIZZY" className="h-9 w-9" />
      <span className="text-lg font-black tracking-[0.15em] text-white uppercase">
        PACIZZY
      </span>
    </Link>
  )
}
