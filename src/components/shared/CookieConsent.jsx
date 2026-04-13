import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Cookie } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('pacizzy-cookies')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('pacizzy-cookies', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('pacizzy-cookies', 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-lg rounded-xl bg-surface-100 p-5 shadow-elevated border border-surface-200"
        >
          <div className="flex items-start gap-3">
            <Cookie className="h-6 w-6 text-primary-500 shrink-0 mt-0.5" />
            <div className="space-y-3">
              <p className="text-sm text-surface-600 leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience.
                En continuant, vous acceptez notre{' '}
                <a href="/politique-confidentialite" className="text-primary-500 underline">
                  politique de confidentialité
                </a>.
              </p>
              <div className="flex gap-2">
                <Button size="sm" onClick={accept}>
                  Accepter
                </Button>
                <Button size="sm" variant="ghost" onClick={decline}>
                  Refuser
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
