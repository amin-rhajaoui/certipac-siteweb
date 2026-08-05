import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import Logo from '@/components/shared/Logo'
import BrandBar from '@/components/shared/BrandBar'
import Container from '@/components/ui/Container'
import { FOOTER_LINKS, COMPANY_INFO, APP_URL, CTA_TEXT, REGULATORY_FRAMES } from '@/lib/constants'

/**
 * Footer type fr-footer — fond ink, filet top marque, colonnes denses.
 */

const linkClass =
  'text-[0.875rem] text-[#CECECE] hover:text-white underline-offset-2 hover:underline'

export default function Footer() {
  return (
    <footer className="bg-[#161616] text-[#CECECE]" id="footer">
      <BrandBar />

      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          <div className="md:col-span-4 space-y-5">
            <Logo variant="dark" size="lg" />
            <p className="text-[1rem] leading-[1.5] text-[#CECECE] max-w-sm">
              {COMPANY_INFO.tagline}
            </p>

            <dl className="space-y-2 text-[0.875rem]">
              <div>
                <dt className="sr-only">Courriel</dt>
                <dd>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="inline-flex items-center gap-2.5 text-[#EEEEEE] hover:text-[#43AA43] transition-colors"
                  >
                    <Mail className="h-4 w-4 text-[#929292]" strokeWidth={1.75} />
                    {COMPANY_INFO.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Téléphone</dt>
                <dd>
                  {COMPANY_INFO.phone ? (
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2.5 text-[#EEEEEE] hover:text-[#43AA43] transition-colors"
                    >
                      <Phone className="h-4 w-4 text-[#929292]" strokeWidth={1.75} />
                      {COMPANY_INFO.phone}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2.5 text-[#929292]">
                      <Phone className="h-4 w-4" strokeWidth={1.75} />
                      {COMPANY_INFO.phoneLabel}
                    </span>
                  )}
                </dd>
              </div>
              <div>
                <dt className="sr-only">Adresse</dt>
                <dd className="inline-flex items-center gap-2.5 text-[#929292]">
                  <MapPin className="h-4 w-4" strokeWidth={1.75} />
                  {COMPANY_INFO.address}
                </dd>
              </div>
            </dl>

            <div className="pt-1">
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.06em] text-[#929292] mb-2">
                Cadre réglementaire
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {REGULATORY_FRAMES.map((f) => (
                  <li
                    key={f}
                    className="px-2 py-1 leading-none text-[0.75rem] font-mono bg-[#242424] text-[#EEEEEE] shadow-[inset_0_0_0_1px_#3A3A3A] tabular-nums"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[0.875rem] font-bold uppercase tracking-[0.04em] text-white mb-4">
              Produit
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.produit.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[0.875rem] font-bold uppercase tracking-[0.04em] text-white mb-4">
              Ressources
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.ressources.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[0.875rem] font-bold uppercase tracking-[0.04em] text-white mb-4">
              Société
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-[0.875rem] font-bold uppercase tracking-[0.04em] text-white mt-8 mb-4">
              Espace client
            </h3>
            <ul className="space-y-2">
              <li>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {CTA_TEXT.login}
                </a>
              </li>
              <li>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {CTA_TEXT.signup}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#3A3A3A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[0.75rem] font-mono uppercase tracking-[0.06em] text-[#929292]">
          <p className="tabular-nums">
            © {new Date().getFullYear()} {COMPANY_INFO.legalName} · Tous droits réservés
          </p>
          <p className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden className="inline-block h-1.5 w-1.5 bg-[#43AA43]" />
              Conformité · Confiance · Simplicité
            </span>
            <span aria-hidden className="hidden sm:inline h-3 w-px bg-[#3A3A3A]" />
            <span className="text-[#666666] tabular-nums">{COMPANY_INFO.reference}</span>
          </p>
        </div>
      </Container>
    </footer>
  )
}
