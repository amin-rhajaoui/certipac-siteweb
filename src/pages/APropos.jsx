import { Target, Heart, Users, Lightbulb } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import CTASection from '@/components/sections/CTASection'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Callout from '@/components/ui/Callout'
import { team, values } from '@/data/team'

const valueIcons = [Target, Heart, Users, Lightbulb]

export default function APropos() {
  return (
    <PageWrapper>
      <SEOHead
        title="À propos"
        description="Certipac : la mission, les valeurs et l'équipe derrière la plateforme institutionnelle de conformité pour la rénovation énergétique en France."
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', path: '/' },
          { label: 'À propos' },
        ]}
      />

      <HeroSection
        eyebrow="Institution · Certipac"
        reference="CTP-ABOUT-2026"
        title="Guider la filière PAC,"
        highlight="cadrer chaque dossier"
        description="Certipac est née du constat que les artisans RGE et les entreprises de la filière PAC perdent un temps considérable sur des exigences administratives mouvantes. Notre mission : structurer la conformité documentaire pour que le terrain reste concentré sur l'installation."
        metadata={[
          { label: 'Forme', value: 'SAS · France' },
          { label: 'Siège', value: 'Paris' },
          { label: 'Périmètre', value: 'National' },
          { label: 'Édition', value: '2026' },
        ]}
      />

      <SectionWrapper tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeader
              number="01 — Mission"
              eyebrow="Raison d'être"
              title="Pourquoi Certipac."
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-[17px] leading-[1.65] text-[#393939] mb-6">
              Les artisans et les entreprises qui installent des pompes à chaleur en France
              opèrent dans un cadre réglementaire exigeant — MaPrimeRénov', CEE, ANAH, RGE —
              qui évolue plusieurs fois par an. Sans outil dédié, la conformité devient une
              charge cognitive qui entame la qualité de pose et le temps disponible pour le
              client.
            </p>
            <p className="text-[17px] leading-[1.65] text-[#393939] mb-10">
              Certipac traduit ces exigences en parcours concrets : pièces attendues, barèmes
              en vigueur, pièces justificatives archivées. La plateforme cadre l'activité,
              l'installateur reste l'expert de sa pose.
            </p>
            <Callout tone="info" title="Positionnement" reference="Art. 1">
              Certipac n'est pas un outil d'agrément officiel mais une plateforme privée de
              conformité documentaire. Nos parcours sont alignés sur les publications de
              l'ANAH, de la DGEC et des obligés CEE, sans jamais s'y substituer.
            </Callout>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="gray">
        <SectionHeader
          number="02 — Valeurs"
          eyebrow="Principes opérationnels"
          title="Quatre repères."
          lede="Les valeurs qui orientent les choix produit et la relation avec les utilisateurs."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E0E0E0]">
          {values.map((value, i) => {
            const Icon = valueIcons[i]
            return (
              <article key={value.title} className="bg-white p-5 sm:p-6 border-t-[3px] border-[#194296]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#194296]">
                    Valeur · {String(i + 1).padStart(2, '0')}
                  </span>
                  <Icon className="h-4 w-4 text-[#525252]" strokeWidth={1.75} />
                </div>
                <h3 className="text-[15px] font-semibold text-[#161616] mb-2 leading-[1.3]">
                  {value.title}
                </h3>
                <p className="text-[13px] leading-[1.55] text-[#525252]">{value.description}</p>
              </article>
            )
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="white">
        <SectionHeader
          number="03 — Équipe"
          eyebrow="Direction & responsables"
          title="Les personnes derrière la plateforme."
          lede="Une équipe mixant expertise terrain, conformité réglementaire et ingénierie logicielle."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E0E0E0]">
          {team.map((member, i) => (
            <article key={member.name} className="bg-white p-6 border-t-[3px] border-[#161616]">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252]">
                  Référence · {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center bg-[#161616] text-white text-[18px] font-bold tracking-tight">
                {member.initials}
              </div>
              <h3 className="text-[15px] font-semibold text-[#161616] mb-1 leading-[1.3]">
                {member.name}
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#194296] mb-3">
                {member.role}
              </p>
              <p className="text-[13px] leading-[1.55] text-[#525252]">{member.bio}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        title="Rejoindre Certipac ?"
        description="Nous recherchons des profils passionnés par la rénovation énergétique et l'ingénierie produit. Écrivez-nous pour candidater."
      />
    </PageWrapper>
  )
}
