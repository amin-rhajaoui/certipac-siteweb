import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from '@/components/shared/Logo'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { NAV_LINKS, CTA_TEXT, APP_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const isChildActive = (children) =>
    children?.some((c) => c.path === location.pathname)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/92 backdrop-blur-xl shadow-soft'
          : 'bg-transparent'
      )}
    >
      <div className="brand-bar" />

      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop */}
          <div ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              if (link.children) {
                const active = isChildActive(link.children)
                const isOpen = openDropdown === link.label
                return (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                      className={cn(
                        'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer',
                        active || isOpen
                          ? 'text-[#194296] bg-[#194296]/8'
                          : 'text-surface-600 hover:text-[#194296] hover:bg-surface-100'
                      )}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform',
                          isOpen && 'rotate-180'
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-0 top-full mt-2 w-80 rounded-xl bg-white shadow-soft ring-1 ring-surface-200/60 p-2"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              onClick={() => setOpenDropdown(null)}
                              className={cn(
                                'block rounded-lg px-3 py-2.5 transition-colors',
                                location.pathname === child.path
                                  ? 'bg-[#194296]/8'
                                  : 'hover:bg-surface-100'
                              )}
                            >
                              <div
                                className={cn(
                                  'text-sm font-semibold',
                                  location.pathname === child.path
                                    ? 'text-[#194296]'
                                    : 'text-surface-800'
                                )}
                              >
                                {child.label}
                              </div>
                              {child.description && (
                                <div className="text-xs text-surface-500 mt-0.5">
                                  {child.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    location.pathname === link.path
                      ? 'text-[#194296] bg-[#194296]/8'
                      : 'text-surface-600 hover:text-[#194296] hover:bg-surface-100'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" href={APP_URL}>
              {CTA_TEXT.login}
            </Button>
            <Button size="sm" href={APP_URL}>
              {CTA_TEXT.primary}
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-surface-600 hover:bg-surface-100 cursor-pointer"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-white/95 backdrop-blur-lg overflow-hidden"
          >
            <Container className="py-4 space-y-1">
              {NAV_LINKS.map((link, i) => {
                if (link.children) {
                  const expanded = mobileExpanded === link.label
                  const active = isChildActive(link.children)
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <button
                        onClick={() =>
                          setMobileExpanded(expanded ? null : link.label)
                        }
                        className={cn(
                          'w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer',
                          active
                            ? 'text-[#194296] bg-[#194296]/8'
                            : 'text-surface-600 hover:text-[#194296] hover:bg-surface-100'
                        )}
                        aria-expanded={expanded}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform',
                            expanded && 'rotate-180'
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {expanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden ml-3 border-l border-surface-200 pl-3 mt-1 space-y-1"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className={cn(
                                  'block rounded-lg px-3 py-2.5 transition-colors',
                                  location.pathname === child.path
                                    ? 'bg-[#194296]/8 text-[#194296]'
                                    : 'text-surface-700 hover:bg-surface-100'
                                )}
                              >
                                <div className="text-sm font-semibold">
                                  {child.label}
                                </div>
                                {child.description && (
                                  <div className="text-xs text-surface-500 mt-0.5">
                                    {child.description}
                                  </div>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                }

                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                        location.pathname === link.path
                          ? 'text-[#194296] bg-[#194296]/8'
                          : 'text-surface-600 hover:text-[#194296] hover:bg-surface-100'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <div className="pt-4 space-y-2 mt-2">
                <Button variant="ghost" size="md" href={APP_URL} className="w-full">
                  {CTA_TEXT.login}
                </Button>
                <Button size="md" href={APP_URL} className="w-full">
                  {CTA_TEXT.primary}
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
