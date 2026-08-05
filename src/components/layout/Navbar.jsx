import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from '@/components/shared/Logo'
import BrandBar from '@/components/shared/BrandBar'
import InstitutionalBanner from '@/components/shared/InstitutionalBanner'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { NAV_LINKS, CTA_TEXT, APP_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'

/**
 * Header type service public (esprit fr-header).
 * Bandeau ink → service (logo + outils) → nav avec filet bas actif → BrandBar.
 */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setMobileExpanded(null)
  }, [location.pathname])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isChildActive = (children) =>
    children?.some((c) => c.path === location.pathname)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-white',
        scrolled && 'shadow-[0_2px_6px_rgba(22,22,22,0.08)]',
      )}
    >
      <InstitutionalBanner />

      {/* Zone service — logo + CTA */}
      <div className="border-b border-[#DDDDDD]">
        <Container>
          <div className="flex h-[4.5rem] items-center justify-between gap-6">
            <div className="flex items-center gap-4 min-w-0">
              <Logo />
              <p className="hidden xl:block text-[0.875rem] leading-snug text-[#666666] border-l border-[#DDDDDD] pl-4 max-w-[18rem]">
                Conformité documentaire · ANAH · MaPrimeRénov&apos; · CEE
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <Button variant="ghost" size="sm" href={APP_URL}>
                {CTA_TEXT.login}
              </Button>
              <Button variant="primary" size="sm" href={APP_URL}>
                {CTA_TEXT.primary}
              </Button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -mr-2 text-[#161616] hover:bg-[#F6F6F6] cursor-pointer"
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </Container>
      </div>

      {/* Navigation primaire */}
      <nav className="hidden lg:block border-b border-[#DDDDDD] bg-white" aria-label="Menu principal">
        <Container>
          <div
            ref={dropdownRef}
            className="flex items-stretch gap-0 h-12"
          >
            {NAV_LINKS.map((link) => {
              if (link.children) {
                const active = isChildActive(link.children)
                const isOpen = openDropdown === link.label
                return (
                  <div key={link.label} className="relative flex items-stretch">
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      className={cn(
                        'nav-link-underline flex items-center gap-1.5 px-4 text-[1rem] font-medium cursor-pointer transition-colors',
                        active || isOpen
                          ? 'text-[#194296]'
                          : 'text-[#161616] hover:text-[#194296]',
                      )}
                      data-active={active || isOpen ? 'true' : undefined}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform duration-150',
                          isOpen && 'rotate-180',
                        )}
                        strokeWidth={2}
                      />
                    </button>
                    {isOpen && (
                      <div
                        className="absolute left-0 top-full w-[26rem] bg-white border border-[#DDDDDD] shadow-[0_4px_12px_rgba(22,22,22,0.08)] z-50"
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="brand-bar-thin" />
                        <div className="p-2">
                          <div className="px-3 py-2 mb-1 border-b border-[#EEEEEE] flex items-center justify-between">
                            <span className="text-[0.875rem] font-bold uppercase tracking-[0.04em] text-[#194296]">
                              {link.label}
                            </span>
                            <span className="font-mono text-[0.75rem] tabular-nums text-[#666666]">
                              {String(link.children.length).padStart(2, '0')} parcours
                            </span>
                          </div>
                          {link.children.map((child, i) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              onClick={() => setOpenDropdown(null)}
                              className={cn(
                                'group/dropitem flex items-start gap-3 p-3 transition-colors',
                                location.pathname === child.path
                                  ? 'bg-[#E3E3FD]'
                                  : 'hover:bg-[#F6F6F6]',
                              )}
                            >
                              <span className="font-mono text-[0.75rem] text-[#666666] pt-0.5 tabular-nums">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span className="flex-1">
                                <span
                                  className={cn(
                                    'block text-[1rem] font-bold leading-snug',
                                    location.pathname === child.path
                                      ? 'text-[#194296]'
                                      : 'text-[#161616] group-hover/dropitem:text-[#194296]',
                                  )}
                                >
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="block text-[0.875rem] text-[#666666] mt-0.5 leading-snug">
                                    {child.description}
                                  </span>
                                )}
                              </span>
                              <span
                                aria-hidden
                                className="text-[1rem] text-[#CECECE] pt-0.5 chevron-slide group-hover/dropitem:text-[#194296]"
                              >
                                →
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              const active = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'nav-link-underline px-4 flex items-center text-[1rem] font-medium transition-colors',
                    active ? 'text-[#194296]' : 'text-[#161616] hover:text-[#194296]',
                  )}
                  data-active={active ? 'true' : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </Container>
      </nav>

      <BrandBar />

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[calc(4.5rem+3px)] bg-white overflow-y-auto z-40 border-t border-[#DDDDDD]">
          <Container className="py-2">
            <div className="divide-y divide-[#DDDDDD]">
              {NAV_LINKS.map((link) => {
                if (link.children) {
                  const expanded = mobileExpanded === link.label
                  const active = isChildActive(link.children)
                  return (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileExpanded(expanded ? null : link.label)}
                        className={cn(
                          'w-full flex items-center justify-between py-4 text-left text-[1.125rem] font-medium cursor-pointer',
                          active ? 'text-[#194296]' : 'text-[#161616]',
                        )}
                        aria-expanded={expanded}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            'h-5 w-5 transition-transform duration-150',
                            expanded && 'rotate-180',
                          )}
                          strokeWidth={2}
                        />
                      </button>
                      {expanded && (
                        <div className="pb-3 space-y-0">
                          {link.children.map((child, i) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={cn(
                                'flex items-start gap-3 p-3',
                                location.pathname === child.path
                                  ? 'bg-[#E3E3FD]'
                                  : 'hover:bg-[#F6F6F6]',
                              )}
                            >
                              <span className="font-mono text-[0.75rem] text-[#666666] pt-1 tabular-nums">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span>
                                <span
                                  className={cn(
                                    'block text-[1rem] font-bold',
                                    location.pathname === child.path
                                      ? 'text-[#194296]'
                                      : 'text-[#161616]',
                                  )}
                                >
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="block text-[0.875rem] text-[#666666] mt-0.5 leading-snug">
                                    {child.description}
                                  </span>
                                )}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }

                const active = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'block py-4 text-[1.125rem] font-medium',
                      active ? 'text-[#194296]' : 'text-[#161616]',
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <div className="pt-6 pb-8 space-y-2">
              <Button variant="tertiary" size="md" href={APP_URL} className="w-full">
                {CTA_TEXT.login}
              </Button>
              <Button variant="primary" size="md" href={APP_URL} className="w-full">
                {CTA_TEXT.primary}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
