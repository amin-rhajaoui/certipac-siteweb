import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import Logo from '@/components/shared/Logo'
import Container from '@/components/ui/Container'
import { FOOTER_LINKS, COMPANY_INFO } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="text-surface-500 border-t border-surface-200/50">
      {/* Brand bar */}
      <div className="brand-bar" />

      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Logo />
            <p className="text-surface-400 leading-relaxed max-w-sm text-sm">
              Vos dossiers PAC, simplement conformes.
            </p>
            <div className="space-y-2 text-sm">
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-primary-500 transition-colors">
                <Mail className="h-4 w-4 text-surface-400" /> {COMPANY_INFO.email}
              </a>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-primary-500 transition-colors">
                <Phone className="h-4 w-4 text-surface-400" /> {COMPANY_INFO.phone}
              </a>
              <p className="flex items-center gap-2 text-surface-400">
                <MapPin className="h-4 w-4" /> {COMPANY_INFO.address}
              </p>
            </div>
          </div>

          {/* Produit */}
          <div>
            <h3 className="text-surface-700 font-semibold text-xs uppercase tracking-wider mb-4">Produit</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.produit.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-surface-400 hover:text-primary-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-surface-700 font-semibold text-xs uppercase tracking-wider mb-4">Ressources</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.ressources.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-surface-400 hover:text-primary-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-surface-700 font-semibold text-xs uppercase tracking-wider mb-4">Légal</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-surface-400 hover:text-primary-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-surface-200/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface-400">
          <p>&copy; {new Date().getFullYear()} PACIZZY. Tous droits réservés.</p>
          <p className="tracking-wider uppercase text-[10px]">CEE &middot; MPR &middot; Pompe à chaleur &middot; Conformité &middot; Simple</p>
        </div>
      </Container>
    </footer>
  )
}
