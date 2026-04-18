import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Select from '@/components/ui/Select'
import Button from '@/components/ui/Button'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { COMPANY_INFO, CTA_TEXT } from '@/lib/constants'

const subjectOptions = [
  { value: '', label: 'Sélectionnez un motif' },
  { value: 'demo', label: 'Demande de démonstration' },
  { value: 'essai', label: 'Démarrer l\'essai gratuit' },
  { value: 'tarif', label: 'Question tarification' },
  { value: 'support', label: 'Support technique' },
  { value: 'partenariat', label: 'Partenariat' },
  { value: 'autre', label: 'Autre motif' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageWrapper>
      <SEOHead
        title="Contact"
        description="Contacter Certipac : demande de démonstration, essai gratuit, tarification, support technique. Réponse écrite sous 2 heures en jours ouvrés."
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', path: '/' },
          { label: 'Contact' },
        ]}
      />

      <HeroSection
        eyebrow="Canal officiel"
        reference="CTP-CONTACT-2026"
        title="Contacter Certipac,"
        highlight="recevoir une réponse"
        description="L'équipe Certipac traite les demandes entrantes par email, téléphone et formulaire. Les réponses sont apportées par écrit en moins de 2 heures pendant les jours ouvrés, avec une traçabilité pour chaque échange."
        metadata={[
          { label: 'Délai', value: '< 2 h ouvrées' },
          { label: 'Canaux', value: 'Email · Téléphone · Formulaire' },
          { label: 'Siège', value: COMPANY_INFO.address },
          { label: 'Langue', value: 'Français' },
        ]}
      />

      <SectionWrapper tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              number="01 — Coordonnées"
              eyebrow="Canaux officiels"
              title="Joindre les équipes."
              lede="Quatre points de contact pour acheminer votre demande vers le bon interlocuteur."
            />

            <div className="mt-10 divide-y divide-[#E0E0E0] border-t border-b border-[#E0E0E0]">
              <div className="flex items-start gap-4 py-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F0F4FC] text-[#194296]">
                  <Mail className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#525252] mb-1">
                    Courriel
                  </p>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-[15px] font-semibold text-[#161616] hover:text-[#194296] break-words"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F0F4FC] text-[#194296]">
                  <Phone className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#525252] mb-1">
                    Téléphone
                  </p>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                    className="text-[15px] font-semibold text-[#161616] hover:text-[#194296]"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F0F4FC] text-[#194296]">
                  <MapPin className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#525252] mb-1">
                    Adresse
                  </p>
                  <p className="text-[15px] font-semibold text-[#161616]">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#DEFBE6] text-[#2A7A2A]">
                  <MessageSquare className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#525252] mb-1">
                    Délai de réponse
                  </p>
                  <p className="text-[15px] font-semibold text-[#161616]">
                    Moins de 2 heures en jours ouvrés
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#F4F4F4] p-6 sm:p-8 border border-[#E0E0E0]">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E0E0E0]">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] font-semibold text-[#194296]">
                  Formulaire · 01
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252]">
                  CTP-FORM-2026
                </span>
              </div>

              {submitted ? (
                <div className="flex flex-col items-start py-6">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#DEFBE6] text-[#2A7A2A] mb-5">
                    <CheckCircle className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-[22px] font-bold text-[#161616] mb-3 leading-[1.2]">
                    Message réceptionné.
                  </h3>
                  <p className="text-[14px] leading-[1.65] text-[#525252]">
                    Votre demande a été enregistrée sous une référence interne. L'équipe
                    Certipac vous répondra par écrit en moins de 2 heures pendant les jours
                    ouvrés.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-[22px] font-bold text-[#161616] mb-1 leading-[1.2]">
                    Adresser une demande.
                  </h2>
                  <p className="text-[13px] text-[#525252] mb-5 leading-[1.6]">
                    Les champs marqués d'un astérisque sont obligatoires.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Prénom" id="firstName" placeholder="Jean" required />
                    <Input label="Nom" id="lastName" placeholder="Dupont" required />
                  </div>
                  <Input label="Email" id="email" type="email" placeholder="jean@entreprise.fr" required />
                  <Input label="Téléphone" id="phone" type="tel" placeholder="06 12 34 56 78" />
                  <Select label="Motif" id="subject" options={subjectOptions} required />
                  <Textarea label="Message" id="message" placeholder="Précisez votre demande." required />
                  <Button type="submit" variant="primary" className="w-full">
                    <Send className="h-4 w-4" strokeWidth={2} />
                    {CTA_TEXT.contact}
                  </Button>
                  <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#6F6F6F] pt-2">
                    Traitement conforme RGPD · Données hébergées en France
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </PageWrapper>
  )
}
