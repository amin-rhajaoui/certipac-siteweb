import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('certipac-cookies')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!visible) return null

  const accept = () => {
    localStorage.setItem('certipac-cookies', 'accepted')
    setVisible(false)
  }
  const decline = () => {
    localStorage.setItem('certipac-cookies', 'declined')
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 sm:max-w-md bg-white border border-[#E0E0E0] shadow-elevated"
    >
      <div className="brand-bar-thin" />
      <div className="p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#525252] mb-2">
          Cookies · Information
        </p>
        <p className="text-[13px] leading-relaxed text-[#393939] mb-4">
          Ce site utilise des cookies de mesure d'audience. En continuant, vous acceptez notre{' '}
          <a
            href="/politique-confidentialite"
            className="text-[#194296] underline underline-offset-2 hover:text-[#143578]"
          >
            politique de confidentialité
          </a>
          .
        </p>
        <div className="flex gap-2">
          <Button size="sm" onClick={accept}>
            Accepter
          </Button>
          <Button size="sm" variant="tertiary" onClick={decline}>
            Refuser
          </Button>
        </div>
      </div>
    </div>
  )
}
