import { useEffect } from 'react'

export default function SEOHead({ title, description }) {
  useEffect(() => {
    document.title = title
      ? `${title} — Certipac`
      : 'Certipac — Posez vos PAC en toute sérénité.'

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (meta) {
        meta.setAttribute('content', description)
      }
    }
  }, [title, description])

  return null
}
