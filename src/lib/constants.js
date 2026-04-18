export const NAV_LINKS = [
  {
    label: 'Pour qui',
    children: [
      {
        label: 'Artisans RGE & installateurs',
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
  { label: 'Conformité', path: '/conformite' },
  { label: 'Tarifs', path: '/tarifs' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export const FOOTER_LINKS = {
  produit: [
    { label: 'Professionnels & entreprises', path: '/professionnels' },
    { label: 'Installateurs & artisans', path: '/installateurs' },
    { label: 'Commerciaux PAC', path: '/commerciaux' },
    { label: 'Fonctionnalités', path: '/fonctionnalites' },
    { label: 'Comment ça marche', path: '/comment-ca-marche' },
    { label: 'Tarifs', path: '/tarifs' },
  ],
  ressources: [
    { label: 'Conformité réglementaire', path: '/conformite' },
    { label: 'Financement & primes', path: '/financement' },
    { label: 'Blog', path: '/blog' },
    { label: 'Témoignages', path: '/temoignages' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ],
  legal: [
    { label: 'À propos', path: '/a-propos' },
    { label: 'Mentions légales', path: '/mentions-legales' },
    { label: 'CGV', path: '/cgv' },
    { label: 'Politique de confidentialité', path: '/politique-confidentialite' },
  ],
}

export const COMPANY_INFO = {
  name: 'Certipac',
  legalName: 'Certipac SAS',
  tagline: 'La conformité de vos dossiers, certifiée.',
  description:
    "Certipac est la plateforme institutionnelle de conformité documentaire pour la rénovation énergétique. Elle guide les artisans RGE, les installateurs et les commerciaux PAC dans la constitution de dossiers conformes aux exigences ANAH, MaPrimeRénov' et CEE — de la visite technique au versement des primes.",
  email: 'contact@certipac.fr',
  phone: '01 23 45 67 89',
  address: 'Paris, France',
  reference: 'CTP-BB-2026-FR-001',
  edition: 'Édition 2026',
  version: 'v2.0',
}

export const INSTITUTIONAL_BANNER = {
  left: 'Transition énergétique · Conformité documentaire',
  right: 'Édition 2026 · Document de référence',
}

export const REGULATORY_FRAMES = ['ANAH', "MaPrimeRénov'", 'CEE', 'RGE']

export const APP_URL = 'https://app.certipac.fr'

export const CTA_TEXT = {
  primary: 'Accéder à la plateforme',
  secondary: 'Demander une démonstration',
  pricing: 'Consulter les tarifs',
  login: 'Se connecter',
  signup: 'Créer un compte',
  contact: 'Contacter Certipac',
}
