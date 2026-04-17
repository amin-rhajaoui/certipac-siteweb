import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://certipac.fr'
const DEFAULT_TITLE = 'Certipac — Le logiciel des équipes PAC, du terrain aux primes.'
const DEFAULT_DESCRIPTION =
  "Certipac aligne installateurs, commerciaux et mise en service sur un même outil : visite, dimensionnement, devis, signatures et dossiers conformes jusqu'au versement des aides."
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo-certipac.jpg`

function upsertMeta({ name, property, content }) {
  if (!content) return
  const selector = name
    ? `meta[name="${name}"]`
    : `meta[property="${property}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    if (name) el.setAttribute('name', name)
    if (property) el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink({ rel, href }) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function SEOHead({ title, description, image }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} — Certipac` : DEFAULT_TITLE
    const finalDescription = description || DEFAULT_DESCRIPTION
    const canonical = `${SITE_URL}${pathname}`
    const ogImage = image
      ? (image.startsWith('http') ? image : `${SITE_URL}${image}`)
      : DEFAULT_OG_IMAGE

    document.title = fullTitle

    upsertMeta({ name: 'description', content: finalDescription })
    upsertLink({ rel: 'canonical', href: canonical })

    upsertMeta({ property: 'og:title', content: fullTitle })
    upsertMeta({ property: 'og:description', content: finalDescription })
    upsertMeta({ property: 'og:url', content: canonical })
    upsertMeta({ property: 'og:type', content: 'website' })
    upsertMeta({ property: 'og:site_name', content: 'Certipac' })
    upsertMeta({ property: 'og:image', content: ogImage })
    upsertMeta({ property: 'og:locale', content: 'fr_FR' })

    upsertMeta({ name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta({ name: 'twitter:title', content: fullTitle })
    upsertMeta({ name: 'twitter:description', content: finalDescription })
    upsertMeta({ name: 'twitter:image', content: ogImage })
  }, [title, description, image, pathname])

  return null
}
