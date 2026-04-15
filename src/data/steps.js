import { ClipboardCheck, Ruler, FileText, FolderCheck, Banknote } from 'lucide-react'

export const steps = [
  {
    number: 1,
    icon: ClipboardCheck,
    title: 'Visite technique',
    description:
      'Ouvrez l\'app mobile sur le terrain. Certipac vous guide : relevés, photos, caractéristiques du logement. Tout est structuré, rien n\'est oublié.',
  },
  {
    number: 2,
    icon: Ruler,
    title: 'Dimensionnement & choix du modèle',
    description:
      'Certipac calcule la puissance nécessaire et vous propose les modèles de PAC compatibles. Vous choisissez, le logiciel valide.',
  },
  {
    number: 3,
    icon: FileText,
    title: 'Devis + signature électronique',
    description:
      'Générez un devis professionnel avec le détail des aides et le reste à charge. Votre client signe directement sur tablette ou par email.',
  },
  {
    number: 4,
    icon: FolderCheck,
    title: 'Dossier conforme',
    description:
      'Le dossier complet (ANAH, CEE, MaPrimeRénov\') est généré automatiquement avec toutes les pièces. Prêt au dépôt, sans stress.',
  },
  {
    number: 5,
    icon: Banknote,
    title: 'Suivi & encaissement des primes',
    description:
      'Suivez l\'avancement de chaque dossier jusqu\'au versement des primes. Tableau de bord clair, alertes automatiques, zéro surprise.',
  },
]
