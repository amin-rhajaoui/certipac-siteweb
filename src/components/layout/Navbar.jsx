import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/shared/Logo'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { NAV_LINKS, CTA_TEXT, APP_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

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
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
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
            ))}
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
              {NAV_LINKS.map((link, i) => (
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
              ))}
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
