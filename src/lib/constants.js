export const NAV_LINKS = [
  {
    label: 'Pour qui ?',
    children: [
      {
        label: 'Installateurs & poseurs',
        path: '/installateurs',
        description: 'Artisans RGE et équipes de pose sur le terrain',
      },
      {
        label: 'Commerciaux PAC',
        path: '/commerciaux',
        description: 'Équipes de vente : éligibilité, devis, signature',
      },
      {
        label: 'Entreprises & professionnels',
        path: '/professionnels',
        description: 'Pilotage multi-équipes et conformité globale',
      },
    ],
  },
  { label: 'Fonctionnalités', path: '/fonctionnalites' },
  { label: 'Comment ça marche', path: '/comment-ca-marche' },
  { label: 'Tarifs', path: '/tarifs' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export const FOOTER_LINKS = {
  produit: [
    { label: 'Professionnels / entreprises', path: '/professionnels' },
    { label: 'Installateurs & artisans', path: '/installateurs' },
    { label: 'Commerciaux PAC', path: '/commerciaux' },
    { label: 'Fonctionnalités', path: '/fonctionnalites' },
    { label: 'Tarifs', path: '/tarifs' },
    { label: 'Comment ça marche', path: '/comment-ca-marche' },
    { label: 'Conformité', path: '/conformite' },
    { label: 'Financement', path: '/financement' },
  ],
  ressources: [
    { label: 'Blog', path: '/blog' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Témoignages', path: '/temoignages' },
    { label: 'Contact', path: '/contact' },
  ],
  legal: [
    { label: 'Mentions légales', path: '/mentions-legales' },
    { label: 'CGV', path: '/cgv' },
    { label: 'Politique de confidentialité', path: '/politique-confidentialite' },
  ],
}

export const COMPANY_INFO = {
  name: 'Certipac',
  tagline: 'Posez vos PAC en toute sérénité.',
  description:
    'Certipac est le logiciel + app mobile qui guide les artisans RGE de A à Z : visite technique, dimensionnement, devis, signature électronique et dossiers conformes pour toucher les primes.',
  email: 'contact@certipac.fr',
  phone: '01 23 45 67 89',
  address: 'Paris, France',
}

export const APP_URL = 'https://app.certipac.fr'

export const CTA_TEXT = {
  primary: 'Essayer gratuitement',
  secondary: 'Voir une démo',
  pricing: 'Voir les tarifs',
  login: 'Se connecter',
  signup: 'S\'inscrire',
}
