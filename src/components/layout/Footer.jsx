import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import Logo from '@/components/shared/Logo'
import BrandBar from '@/components/shared/BrandBar'
import Container from '@/components/ui/Container'
import { FOOTER_LINKS, COMPANY_INFO, APP_URL, CTA_TEXT, REGULATORY_FRAMES } from '@/lib/constants'

/**
 * Footer institutionnel — dense, référentiel visible, métadonnées en bas.
 */

const linkClass =
  'text-[13px] text-[#C6C6C6] hover:text-white transition-colors duration-150 link-underline hover:underline'

export default function Footer() {
  return (
    <footer className="bg-[#161616] text-[#C6C6C6]">
      <BrandBar />

      <Container className="py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand + contact */}
          <div className="md:col-span-4 space-y-6">
            <Logo variant="dark" size="lg" />
            <p className="text-[14px] leading-[1.65] text-[#C6C6C6] max-w-sm">
              {COMPANY_INFO.tagline}
            </p>

            <dl className="space-y-2.5 text-[13px]">
              <div>
                <dt className="sr-only">Courriel</dt>
                <dd>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="inline-flex items-center gap-2.5 text-[#E0E0E0] hover:text-[#43AA43] transition-colors"
                  >
                    <Mail className="h-4 w-4 text-[#8D8D8D]" strokeWidth={1.75} />
                    {COMPANY_INFO.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Téléphone</dt>
                <dd>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2.5 text-[#E0E0E0] hover:text-[#43AA43] transition-colors"
                  >
                    <Phone className="h-4 w-4 text-[#8D8D8D]" strokeWidth={1.75} />
                    {COMPANY_INFO.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Adresse</dt>
                <dd className="inline-flex items-center gap-2.5 text-[#8D8D8D]">
                  <MapPin className="h-4 w-4" strokeWidth={1.75} />
                  {COMPANY_INFO.address}
                </dd>
              </div>
            </dl>

            <div className="pt-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6F6F6F] mb-2.5">
                Cadre réglementaire
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {REGULATORY_FRAMES.map((f) => (
                  <li
                    key={f}
                    className="px-2 py-1 leading-none text-[11px] font-mono bg-[#1F1F1F] text-[#E0E0E0] border border-[#393939] rounded-[2px] tabular-nums"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8D8D8D] mb-4 tabular-nums">
              <span className="text-[#43AA43]">01</span> · Produit
            </h3>
            <ul className="space-y-2.5">
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
            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8D8D8D] mb-4 tabular-nums">
              <span className="text-[#43AA43]">02</span> · Ressources
            </h3>
            <ul className="space-y-2.5">
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
            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8D8D8D] mb-4 tabular-nums">
              <span className="text-[#43AA43]">03</span> · Société
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8D8D8D] mt-6 mb-4 tabular-nums">
              <span className="text-[#43AA43]">04</span> · Espace client
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {CTA_TEXT.login}
                </a>
              </li>
              <li>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {CTA_TEXT.signup}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#393939] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.08em] text-[#6F6F6F]">
          <p className="tabular-nums">
            © {new Date().getFullYear()} {COMPANY_INFO.legalName} · Tous droits réservés
          </p>
          <p className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden className="inline-block h-1.5 w-1.5 bg-[#43AA43] rounded-full" />
              Conformité · Confiance · Simplicité
            </span>
            <span aria-hidden className="hidden sm:inline h-3 w-px bg-[#393939]" />
            <span className="text-[#525252] tabular-nums">{COMPANY_INFO.reference}</span>
          </p>
        </div>
      </Container>
    </footer>
  )
}
