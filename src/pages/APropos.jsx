import { motion } from 'motion/react'
import { Target, Heart, Users, Lightbulb } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import CTASection from '@/components/sections/CTASection'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { team, values } from '@/data/team'

const valueIcons = [Target, Heart, Users, Lightbulb]

export default function APropos() {
  return (
    <PageWrapper>
      <SEOHead
        title="À propos"
        description="Découvrez l'équipe et la mission de Certipac : guider chaque artisan RGE de A à Z pour poser des PAC sereinement."
      />

      <HeroSection
        badge="Notre histoire"
        title="Guider les artisans,"
        highlight="pas à pas."
        description="Certipac est né d'un constat : les artisans RGE passent trop de temps à stresser sur la paperasse et pas assez sur le terrain. Notre mission : leur donner un outil qui les guide sereinement."
      />

      {/* Mission */}
      <SectionWrapper>
        <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center">
          <Badge className="mb-4">Notre mission</Badge>
          <h2 className="text-3xl font-bold text-surface-900 sm:text-4xl mb-6">
            Permettre à chaque artisan de poser sereinement
          </h2>
          <p className="text-lg text-surface-600 leading-relaxed">
            Dimensionnement, paperasse, conformité des dossiers... tout ça ne devrait jamais être
            une source de stress. Certipac guide l'artisan de la visite technique au versement des primes,
            pour qu'il se concentre sur ce qu'il fait de mieux : installer des pompes à chaleur.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-surface-50" stagger>
        <motion.div variants={fadeUp} className="text-center mb-12">
          <Badge variant="accent" className="mb-4">Nos valeurs</Badge>
          <h2 className="text-3xl font-bold text-surface-900 sm:text-4xl">
            Ce qui nous guide
          </h2>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, i) => {
            const Icon = valueIcons[i]
            return (
              <motion.div key={i} variants={fadeUp}>
                <Card className="text-center h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-500 mx-auto">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-surface-900 mb-2">{value.title}</h3>
                  <p className="text-surface-600">{value.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper stagger>
        <motion.div variants={fadeUp} className="text-center mb-12">
          <Badge className="mb-4">L'équipe</Badge>
          <h2 className="text-3xl font-bold text-surface-900 sm:text-4xl">
            Les personnes derrière Certipac
          </h2>
          <p className="mt-4 text-lg text-surface-600 max-w-2xl mx-auto">
            Une équipe passionnée par la rénovation énergétique et le terrain.
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="text-center h-full">
                <div className="mb-4 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-accent-400 text-white text-2xl font-bold">
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-surface-900">{member.name}</h3>
                <p className="text-primary-500 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-surface-600 text-sm leading-relaxed">{member.bio}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      <CTASection
        title="Envie de rejoindre l'aventure ?"
        description="Nous recrutons ! Si vous êtes passionné par la rénovation énergétique et la tech, contactez-nous."
        secondaryCTA={{ label: 'Nous contacter', to: '/contact' }}
      />
    </PageWrapper>
  )
}
