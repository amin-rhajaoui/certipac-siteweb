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
 * Navbar institutionnel — inspiré gouv.fr / Carbon.
 *   1. Bandeau institutionnel (République — Transition énergétique)
 *   2. Barre principale avec logo + nav primaire + actions
 *   3. Barre tricolore signature
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
        'sticky top-0 z-50 bg-white border-b border-[#E0E0E0]',
        'transition-shadow duration-200',
        scrolled && 'shadow-[0_1px_0_0_#E0E0E0,0_8px_24px_-12px_rgba(22,22,22,0.12)]',
      )}
    >
      <InstitutionalBanner />

      <Container>
        <nav className="flex h-16 items-center justify-between gap-6">
          <Logo />

          {/* Desktop nav */}
          <div
            ref={dropdownRef}
            className="hidden lg:flex items-center gap-0 h-full"
          >
            {NAV_LINKS.map((link) => {
              if (link.children) {
                const active = isChildActive(link.children)
                const isOpen = openDropdown === link.label
                return (
                  <div key={link.label} className="relative h-full flex items-center">
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      className={cn(
                        'nav-link-underline flex items-center gap-1.5 px-4 h-full text-[14px] font-medium cursor-pointer transition-colors',
                        active || isOpen
                          ? 'text-[#194296]'
                          : 'text-[#393939] hover:text-[#194296]',
                      )}
                      data-active={active || isOpen ? 'true' : undefined}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-200',
                          isOpen && 'rotate-180',
                        )}
                        strokeWidth={2}
                      />
                    </button>
                    {isOpen && (
                      <div
                        className={cn(
                          'absolute left-0 top-full w-[24rem] bg-white border border-[#E0E0E0]',
                          'shadow-[0_12px_28px_-12px_rgba(22,22,22,0.18)]',
                          'animate-fade-up',
                        )}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="brand-bar-thin" />
                        <div className="px-2 py-2">
                          <div className="px-3 pt-3 pb-2 mb-1 border-b border-[#E0E0E0] flex items-center justify-between">
                            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#194296]">
                              {link.label}
                            </span>
                            <span className="font-mono text-[10px] tabular-nums text-[#8D8D8D]">
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
                                  ? 'bg-[#E6EBF5]'
                                  : 'hover:bg-[#F4F4F4]',
                              )}
                            >
                              <span className="font-mono text-[10px] text-[#6F6F6F] pt-1 tabular-nums tracking-[0.08em]">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span className="flex-1">
                                <span
                                  className={cn(
                                    'block text-[14px] font-semibold tracking-tight',
                                    location.pathname === child.path
                                      ? 'text-[#194296]'
                                      : 'text-[#161616] group-hover/dropitem:text-[#194296]',
                                  )}
                                >
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="block text-[12px] text-[#525252] mt-0.5 leading-snug">
                                    {child.description}
                                  </span>
                                )}
                              </span>
                              <span
                                aria-hidden
                                className="font-mono text-[14px] text-[#C6C6C6] pt-1 chevron-slide group-hover/dropitem:text-[#194296]"
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
                    'nav-link-underline px-4 h-full flex items-center text-[14px] font-medium transition-colors',
                    active ? 'text-[#194296]' : 'text-[#393939] hover:text-[#194296]',
                  )}
                  data-active={active ? 'true' : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <Button variant="ghost" size="sm" href={APP_URL}>
              {CTA_TEXT.login}
            </Button>
            <Button variant="primary" size="sm" href={APP_URL}>
              {CTA_TEXT.primary}
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2 text-[#161616] hover:bg-[#F4F4F4] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#194296] transition-colors"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      <BrandBar />

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[calc(theme(spacing.16)+4px)] bg-white overflow-y-auto z-40 animate-fade-in">
          <Container className="py-4">
            <div className="divide-y divide-[#E0E0E0]">
              {NAV_LINKS.map((link) => {
                if (link.children) {
                  const expanded = mobileExpanded === link.label
                  const active = isChildActive(link.children)
                  return (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileExpanded(expanded ? null : link.label)}
                        className={cn(
                          'w-full flex items-center justify-between py-4 text-left text-[15px] font-medium cursor-pointer transition-colors',
                          active ? 'text-[#194296]' : 'text-[#161616]',
                        )}
                        aria-expanded={expanded}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            'h-5 w-5 transition-transform duration-200',
                            expanded && 'rotate-180',
                          )}
                          strokeWidth={2}
                        />
                      </button>
                      {expanded && (
                        <div className="pb-4 space-y-1 animate-fade-up">
                          {link.children.map((child, i) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={cn(
                                'flex items-start gap-3 p-3 transition-colors',
                                location.pathname === child.path
                                  ? 'bg-[#E6EBF5]'
                                  : 'hover:bg-[#F4F4F4]',
                              )}
                            >
                              <span className="font-mono text-[10px] text-[#6F6F6F] pt-1 tabular-nums">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span>
                                <span
                                  className={cn(
                                    'block text-[14px] font-semibold',
                                    location.pathname === child.path
                                      ? 'text-[#194296]'
                                      : 'text-[#161616]',
                                  )}
                                >
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="block text-[12px] text-[#525252] mt-0.5 leading-snug">
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
                      'block py-4 text-[15px] font-medium transition-colors',
                      active ? 'text-[#194296]' : 'text-[#161616]',
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <div className="pt-6 space-y-2">
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
