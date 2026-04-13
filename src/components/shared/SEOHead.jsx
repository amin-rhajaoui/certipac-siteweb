import { useEffect } from 'react'

export default function SEOHead({ title, description }) {
  useEffect(() => {
    document.title = title
      ? `${title} — PACIZZY`
      : 'PACIZZY — Dossiers & Devis PAC pour Artisans RGE'

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (meta) {
        meta.setAttribute('content', description)
      }
    }
  }, [title, description])

  return null
}
