import {
  ClipboardCheck,
  Ruler,
  Package,
  FileText,
  PenTool,
  Building2,
  Leaf,
  Calculator,
  Users,
  HardHat,
  Smartphone,
  BarChart3,
} from 'lucide-react'

export const features = [
  {
    icon: ClipboardCheck,
    title: 'Visite technique guidée',
    description:
      'L\'app mobile vous guide pas à pas pendant la visite chez le client : relevés, photos, caractéristiques du logement. Rien n\'est oublié.',
    category: 'Terrain',
  },
  {
    icon: Ruler,
    title: 'Dimensionnement automatique',
    description:
      'Calcul automatique de la puissance PAC nécessaire selon la surface, l\'isolation et la zone climatique. Fini les erreurs de dimensionnement.',
    category: 'Technique',
  },
  {
    icon: Package,
    title: 'Choix du modèle PAC',
    description:
      'Accédez au catalogue des PAC compatibles avec le dimensionnement calculé. Comparez les modèles, les COP et les prix en un coup d\'œil.',
    category: 'Technique',
  },
  {
    icon: FileText,
    title: 'Devis professionnel',
    description:
      'Générez un devis complet et personnalisé avec votre logo, vos marges, le détail des aides et le reste à charge client. Prêt à envoyer.',
    category: 'Commercial',
  },
  {
    icon: PenTool,
    title: 'Signature électronique',
    description:
      'Votre client signe le devis directement sur tablette ou par email. Valeur légale, horodatage, archivage automatique.',
    category: 'Commercial',
  },
  {
    icon: Building2,
    title: 'Dossier ANAH conforme',
    description:
      'Le dossier MaPrimeRénov\' est généré automatiquement avec toutes les pièces requises. Conforme aux exigences de l\'ANAH, prêt au dépôt.',
    category: 'Conformité',
  },
  {
    icon: Leaf,
    title: 'Dossier CEE conforme',
    description:
      'Attestations et documents CEE générés automatiquement. Calcul des volumes de kWh cumac selon la fiche d\'opération standardisée.',
    category: 'Conformité',
  },
  {
    icon: Calculator,
    title: 'Calcul des aides',
    description:
      'MaPrimeRénov\', CEE, éco-PTZ, aides locales : Certipac calcule toutes les aides et affiche le reste à charge réel sur le devis.',
    category: 'Financement',
  },
  {
    icon: Users,
    title: 'Gestion commerciale',
    description:
      'Pipeline de prospects, suivi des relances, taux de conversion : gérez toute votre activité commerciale depuis un seul endroit.',
    category: 'Pilotage',
  },
  {
    icon: HardHat,
    title: 'Suivi des chantiers',
    description:
      'Planifiez vos interventions, suivez l\'avancement des chantiers et recevez des alertes sur les étapes clés.',
    category: 'Pilotage',
  },
  {
    icon: Smartphone,
    title: 'App mobile terrain',
    description:
      'Tout Certipac dans votre poche. Visite technique, devis, signature : travaillez directement sur le terrain, même hors connexion.',
    category: 'Terrain',
  },
  {
    icon: BarChart3,
    title: 'Tableau de bord & pilotage',
    description:
      'CA généré, dossiers en cours, primes à encaisser, performance de l\'équipe : pilotez votre activité avec des indicateurs clairs.',
    category: 'Pilotage',
  },
]

export const featureCategories = [
  'Terrain',
  'Technique',
  'Commercial',
  'Conformité',
  'Financement',
  'Pilotage',
]
