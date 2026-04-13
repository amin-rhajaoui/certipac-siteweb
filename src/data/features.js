import {
  FileText,
  Calculator,
  Shield,
  Zap,
  Users,
  BarChart3,
  Download,
  RefreshCw,
  Settings,
  Headphones,
  Cloud,
  Lock,
} from 'lucide-react'

export const features = [
  {
    icon: FileText,
    title: 'Génération de dossiers',
    description:
      'Créez des dossiers complets et conformes en quelques clics. Formulaires pré-remplis, pièces justificatives automatiques, mise en page professionnelle.',
    category: 'Productivité',
  },
  {
    icon: Calculator,
    title: 'Devis automatiques',
    description:
      'Calculez automatiquement le coût des installations PAC avec prix des équipements, main d\'œuvre et marges. Export PDF professionnel.',
    category: 'Productivité',
  },
  {
    icon: Shield,
    title: 'Conformité garantie',
    description:
      'Zéro risque de non-conformité. Nos modèles sont mis à jour en temps réel selon les évolutions réglementaires RGE et les exigences des organismes certificateurs.',
    category: 'Conformité',
  },
  {
    icon: Zap,
    title: 'Rapidité d\'exécution',
    description:
      'Divisez par 5 le temps de création de vos dossiers. Ce qui prenait 2 heures ne prend plus que 20 minutes.',
    category: 'Productivité',
  },
  {
    icon: Users,
    title: 'Gestion d\'équipe',
    description:
      'Attribuez des dossiers à vos collaborateurs, suivez l\'avancement en temps réel et centralisez la communication.',
    category: 'Collaboration',
  },
  {
    icon: BarChart3,
    title: 'Tableau de bord',
    description:
      'Visualisez votre activité en un coup d\'œil : dossiers en cours, revenus générés, taux de conversion, statistiques mensuelles.',
    category: 'Pilotage',
  },
  {
    icon: Download,
    title: 'Export multi-formats',
    description:
      'Exportez vos dossiers en PDF, Excel ou directement vers les plateformes des organismes (ANAH, CEE).',
    category: 'Productivité',
  },
  {
    icon: RefreshCw,
    title: 'Mises à jour automatiques',
    description:
      'Les barèmes MaPrimeRénov\', CEE et les formulaires réglementaires sont mis à jour automatiquement dès leur publication officielle.',
    category: 'Conformité',
  },
  {
    icon: Settings,
    title: 'Personnalisation',
    description:
      'Ajoutez votre logo, vos coordonnées et personnalisez l\'apparence de vos devis et dossiers à l\'image de votre entreprise.',
    category: 'Personnalisation',
  },
  {
    icon: Headphones,
    title: 'Support dédié',
    description:
      'Une équipe d\'experts en rénovation énergétique à votre disposition par chat, email et téléphone.',
    category: 'Support',
  },
  {
    icon: Cloud,
    title: 'Cloud sécurisé',
    description:
      'Toutes vos données stockées en France sur des serveurs sécurisés. Accédez à vos dossiers depuis n\'importe quel appareil.',
    category: 'Sécurité',
  },
  {
    icon: Lock,
    title: 'RGPD & Sécurité',
    description:
      'Conforme RGPD, chiffrement de bout en bout, sauvegardes automatiques quotidiennes et authentification deux facteurs.',
    category: 'Sécurité',
  },
]

export const featureCategories = [
  'Productivité',
  'Conformité',
  'Collaboration',
  'Pilotage',
  'Personnalisation',
  'Support',
  'Sécurité',
]
