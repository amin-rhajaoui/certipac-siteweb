import { Link } from 'react-router-dom'
import { HardHat, Briefcase, Building2, ArrowRight, Shield, Clock, FileCheck } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import FeatureGrid from '@/components/sections/FeatureGrid'
import StepCard from '@/components/sections/StepCard'
import CTASection from '@/components/sections/CTASection'
import DashboardMockup from '@/components/sections/DashboardMockup'
import PartenairesStrip from '@/components/sections/PartenairesStrip'
import Callout from '@/components/ui/Callout'
import Tag from '@/components/ui/Tag'
import { features } from '@/data/features'
import { steps } from '@/data/steps'
import { CTA_TEXT, APP_URL, REGULATORY_FRAMES } from '@/lib/constants'

const piliers = [
  {
    icon: Shield,
    title: 'Conformité',
    description:
      "Vérification automatique de chaque pièce selon les référentiels ANAH, MaPrimeRénov' et CEE. Zéro rejet, zéro surprise.",
    tone: '#194296',
    number: 1,
  },
  {
    icon: FileCheck,
    title: 'Confiance',
    description:
      "Processus transparent, contrôles en temps réel et historique d'audit complet pour chaque dossier.",
    tone: '#43AA43',
    number: 2,
  },
  {
    icon: Clock,
    title: 'Simplicité',
    description:
      "Interface pensée pour les professionnels du terrain. Aucune expertise administrative requise.",
    tone: '#161616',
    number: 3,
  },
]

const audiences = [
  {
    icon: HardHat,
    title: 'Artisans RGE & installateurs',
    description:
      "Visite technique, dimensionnement, devis, signature et dossier conforme depuis le mobile. Vous posez, Certipac structure.",
    to: '/installateurs',
    reference: 'PERSONA · 01',
  },
  {
    icon: Briefcase,
    title: 'Commerciaux PAC',
    description:
      "Éligibilité, dimensionnement, devis avec aides et reste à charge, signature au premier rendez-vous. Transmission à un poseur RGE.",
    to: '/commerciaux',
    reference: 'PERSONA · 02',
  },
  {
    icon: Building2,
    title: 'Entreprises & professionnels',
    description:
      "Pilotage multi-équipes, multi-partenaires, cadre unique pour la prospection, la pose, le SAV et la valorisation des aides.",
    to: '/professionnels',
    reference: 'PERSONA · 03',
  },
]

const ecosystem = [
  'Artisans RGE',
  'Installateurs PAC',
  "Mandataires CEE",
  'Bénéficiaires ANAH',
  'Bureaux de contrôle',
  'Back-office conformité',
]

export default function Accueil() {
  return (
    <PageWrapper>
      <SEOHead
        title="Accueil"
        description="Certipac — La conformité de vos dossiers, certifiée. Plateforme institutionnelle de conformité documentaire ANAH · MaPrimeRénov' · CEE pour les professionnels de la pompe à chaleur."
      />

      <HeroSection
        eyebrow="Transition énergétique · Édition 2026"
        reference="CTP-PLATEFORME · v2.0"
        title="La conformité de vos dossiers,"
        highlight="certifiée"
        description="Certipac est la plateforme institutionnelle de conformité documentaire pour la rénovation énergétique. Elle aligne les artisans RGE, les commerciaux PAC et les entreprises sur les exigences ANAH, MaPrimeRénov' et CEE — de la visite technique au versement des primes."
        primaryCTA={{ label: CTA_TEXT.primary, href: APP_URL }}
        secondaryCTA={{ label: 'Découvrir la plateforme', to: '/fonctionnalites' }}
        metadata={[
          { label: 'Cadres couverts', value: "ANAH · MPR · CEE" },
          { label: 'Qualification', value: 'RGE Qualibat · QualiPAC' },
          { label: 'Hébergement', value: 'HDS · France' },
          { label: 'Édition', value: '2026 · v2.0' },
        ]}
      >
        <DashboardMockup />
      </HeroSection>

      <PartenairesStrip />

      {/* Piliers — façon brand book page 3 */}
      <SectionWrapper tone="white">
        <SectionHeader
          eyebrow="Identité de plateforme"
          number="01 — La marque"
          title="Trois piliers opposables."
          lede="Le nom Certipac articule deux promesses : Certi pour la conformité réglementaire (CEE · ANAH · MPR · RGE) et PAC pour la pompe à chaleur, cœur de métier de la transition énergétique."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {piliers.map((p, i) => (
            <article
              key={p.title}
              className="bg-[#F4F4F4] p-5 sm:p-6 rounded-[2px]"
              style={{ borderLeft: `3px solid ${p.tone}` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252]">
                  Pilier {String(p.number).padStart(2, '0')}
                </span>
                <p.icon className="h-5 w-5" style={{ color: p.tone }} strokeWidth={1.75} />
              </div>
              <h3 className="text-[18px] font-semibold text-[#161616] mb-2">{p.title}</h3>
              <p className="text-[14px] leading-[1.6] text-[#525252]">{p.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#194296] mb-4">
            Écosystème utilisateurs
          </p>
          <ul className="flex flex-wrap gap-2">
            {ecosystem.map((e, i) => (
              <li key={e}>
                <Tag active={i === 0}>{e}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* Personas */}
      <SectionWrapper tone="gray">
        <SectionHeader
          number="02 — Pour qui"
          eyebrow="Parcours spécialisés"
          title="Un cadre commun, trois parcours métier."
          lede="Certipac sert trois populations professionnelles avec un noyau réglementaire partagé et des interfaces adaptées à leur usage terrain."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {audiences.map((a) => (
            <Link
              key={a.title}
              to={a.to}
              className="group block h-full bg-white border border-[#E0E0E0] p-6 transition-colors hover:border-[#194296] rounded-[2px]"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252]">
                  {a.reference}
                </span>
                <a.icon className="h-5 w-5 text-[#194296]" strokeWidth={1.75} />
              </div>
              <h3 className="text-[18px] font-semibold text-[#161616] mb-2 leading-[1.3]">
                {a.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-[#525252] mb-6">
                {a.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#194296] group-hover:gap-3 transition-all">
                Consulter le parcours
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </span>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Fonctionnalités */}
      <SectionWrapper tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7">
            <SectionHeader
              number="03 — Fonctionnalités"
              eyebrow="Capacités plateforme"
              title="Tout ce qu'il faut pour poser une PAC conforme."
            />
          </div>
          <div className="lg:col-span-5 lg:pt-2">
            <p className="text-[15px] leading-[1.65] text-[#525252]">
              De la visite technique au dépôt du dossier d'aides, chaque étape est guidée
              sur mobile et sur le web. Les pièces attendues par les organismes sont intégrées
              au parcours, les contrôles de cohérence sont exécutés en temps réel.
            </p>
          </div>
        </div>
        <FeatureGrid features={features.slice(0, 6)} />
      </SectionWrapper>

      {/* Étapes */}
      <SectionWrapper tone="gray">
        <SectionHeader
          number="04 — Processus"
          eyebrow="Parcours opposable"
          title="Cinq étapes, du terrain au versement."
          lede="Le processus Certipac matérialise la chaîne documentaire attendue par les organismes — chaque étape est horodatée, chaque contrôle est tracé."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>

        <div className="mt-12">
          <Callout title="Article 1 · Engagement de conformité" reference="CTP-ART-001" tone="info">
            Les règles documentaires de la plateforme sont opposables aux organismes de financement.
            Chaque contrôle est tracé et horodaté ; l'historique d'audit est accessible à tout moment
            depuis l'interface.
          </Callout>
        </div>
      </SectionWrapper>

      {/* Cadre réglementaire résumé */}
      <SectionWrapper tone="white">
        <SectionHeader
          number="05 — Cadre réglementaire"
          eyebrow="Référentiels intégrés"
          title="Opposable aux dispositifs officiels."
          lede="Les parcours Certipac sont alignés sur les arrêtés et décrets en vigueur. Les mises à jour sont déployées dès leur publication."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E0E0E0]">
          <div className="bg-white p-6 border-l-[3px] border-[#194296]">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252] mb-2">
              Référence · A
            </p>
            <h3 className="text-[16px] font-semibold text-[#161616] mb-2">
              ANAH — Agence Nationale de l'Habitat
            </h3>
            <p className="text-[13.5px] leading-[1.6] text-[#525252]">
              Conformité aux critères d'éligibilité des aides à la rénovation énergétique.
              Vérification des plafonds de ressources, conditions de logement et travaux éligibles.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.06em] text-[#194296]">
              Décret n°2020–26 du 14 janvier 2020
            </p>
          </div>
          <div className="bg-white p-6 border-l-[3px] border-[#43AA43]">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252] mb-2">
              Référence · M
            </p>
            <h3 className="text-[16px] font-semibold text-[#161616] mb-2">
              MaPrimeRénov'
            </h3>
            <p className="text-[13.5px] leading-[1.6] text-[#525252]">
              Constitution automatisée des dossiers selon le barème en vigueur. Contrôle des devis,
              attestations sur l'honneur et qualification RGE de l'installateur.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.06em] text-[#43AA43]">
              Arrêté du 14 janvier 2020 modifié
            </p>
          </div>
          <div className="bg-white p-6 border-l-[3px] border-[#161616]">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252] mb-2">
              Référence · C
            </p>
            <h3 className="text-[16px] font-semibold text-[#161616] mb-2">
              CEE — Certificats d'Économies d'Énergie
            </h3>
            <p className="text-[13.5px] leading-[1.6] text-[#525252]">
              Génération des fiches d'opérations standardisées (BAR-TH-159, BAR-TH-171).
              Contrôle de la complétude documentaire et de la cohérence technique.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.06em] text-[#161616]">
              Fiches CEE BAR-TH en vigueur
            </p>
          </div>
          <div className="bg-white p-6 border-l-[3px] border-[#DA1E28]">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252] mb-2">
              Référence · R
            </p>
            <h3 className="text-[16px] font-semibold text-[#161616] mb-2">
              Qualification RGE
            </h3>
            <p className="text-[13.5px] leading-[1.6] text-[#525252]">
              Vérification en temps réel de la validité de la qualification RGE de chaque artisan
              partenaire. Alerte automatique en cas d'expiration imminente.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.06em] text-[#DA1E28]">
              Label RGE · Qualibat / QualiPAC
            </p>
          </div>
        </div>
      </SectionWrapper>

      <CTASection />
    </PageWrapper>
  )
}
