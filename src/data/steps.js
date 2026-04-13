import { UserPlus, FileText, Settings, Send, CheckCircle } from 'lucide-react'

export const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: 'Créez votre compte',
    description:
      'Inscrivez-vous en 2 minutes. Renseignez les informations de votre entreprise et votre numéro RGE. Aucune carte bancaire requise.',
  },
  {
    number: 2,
    icon: Settings,
    title: 'Configurez vos préférences',
    description:
      'Ajoutez votre logo, vos conditions générales et paramétrez vos marges par défaut. PACIZZY s\'adapte à votre façon de travailler.',
  },
  {
    number: 3,
    icon: FileText,
    title: 'Créez votre premier dossier',
    description:
      'Saisissez les informations client et les caractéristiques de l\'installation. PACIZZY génère automatiquement le dossier complet et le devis.',
  },
  {
    number: 4,
    icon: Send,
    title: 'Envoyez et suivez',
    description:
      'Exportez vos documents en PDF, envoyez-les par email à vos clients et déposez les dossiers directement sur les plateformes ANAH et CEE.',
  },
  {
    number: 5,
    icon: CheckCircle,
    title: 'Recevez le paiement',
    description:
      'Suivez l\'avancement de chaque dossier jusqu\'au versement des aides. Tableau de bord clair avec statuts en temps réel.',
  },
]
