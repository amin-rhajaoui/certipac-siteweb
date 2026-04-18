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

  const isChildActive = (children) =>
    children?.some((c) => c.path === location.pathname)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E0E0E0]">
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
                        'flex items-center gap-1.5 px-4 h-full text-[14px] font-medium cursor-pointer transition-colors',
                        'border-b-2 -mb-px',
                        active || isOpen
                          ? 'text-[#194296] border-[#194296]'
                          : 'text-[#393939] border-transparent hover:text-[#194296]',
                      )}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn('h-3.5 w-3.5 transition-transform', isOpen && 'rotate-180')}
                      />
                    </button>
                    {isOpen && (
                      <div
                        className="absolute left-0 top-full w-[22rem] bg-white border border-[#E0E0E0] shadow-[0_8px_24px_-8px_rgba(22,22,22,0.16)]"
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="brand-bar-thin" />
                        <div className="p-2">
                          {link.children.map((child, i) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              onClick={() => setOpenDropdown(null)}
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
                              <span className="flex-1">
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
                    'px-4 h-full flex items-center text-[14px] font-medium border-b-2 -mb-px transition-colors',
                    active
                      ? 'text-[#194296] border-[#194296]'
                      : 'text-[#393939] border-transparent hover:text-[#194296]',
                  )}
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
            className="lg:hidden p-2 -mr-2 text-[#161616] hover:bg-[#F4F4F4] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#194296]"
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
        <div className="lg:hidden fixed inset-0 top-[calc(theme(spacing.16)+4px)] bg-white overflow-y-auto z-40">
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
                          className={cn('h-5 w-5 transition-transform', expanded && 'rotate-180')}
                        />
                      </button>
                      {expanded && (
                        <div className="pb-4 space-y-1">
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
                              <span className="font-mono text-[10px] text-[#6F6F6F] pt-1">
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
