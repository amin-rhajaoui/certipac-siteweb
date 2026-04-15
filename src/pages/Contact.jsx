import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import SectionWrapper from '@/components/sections/SectionWrapper'
import Container from '@/components/ui/Container'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Select from '@/components/ui/Select'
import Button from '@/components/ui/Button'
import { fadeUp } from '@/lib/animations'
import { COMPANY_INFO } from '@/lib/constants'

const subjectOptions = [
  { value: '', label: 'Sélectionnez un sujet' },
  { value: 'demo', label: 'Voir une démo' },
  { value: 'essai', label: 'Essai gratuit' },
  { value: 'tarif', label: 'Question sur les tarifs' },
  { value: 'support', label: 'Support technique' },
  { value: 'partenariat', label: 'Partenariat' },
  { value: 'autre', label: 'Autre' },
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
        description="Contactez l'équipe Certipac. Demandez une démo, posez vos questions sur le logiciel, l'app mobile ou les dossiers conformes."
      />

      <section className="bg-surface-50 py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-extrabold text-surface-900 sm:text-5xl">
                Parlons de votre <span className="text-primary-500">activité</span>
              </h1>
              <p className="mt-6 text-lg text-surface-600 leading-relaxed">
                Notre équipe est à votre disposition pour vous montrer comment Certipac
                peut vous guider au quotidien : visite technique, dimensionnement, dossiers conformes.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-500">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-surface-500">Email</p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="font-medium text-surface-900 hover:text-primary-500 transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-500">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-surface-500">Téléphone</p>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="font-medium text-surface-900 hover:text-primary-500 transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-500">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-surface-500">Adresse</p>
                    <p className="font-medium text-surface-900">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100 text-accent-500">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-surface-500">Délai de réponse</p>
                    <p className="font-medium text-surface-900">Moins de 2h en jours ouvrés</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl bg-surface-100 p-8 shadow-card"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-100 text-accent-500 mb-6">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-surface-900 mb-3">
                    Message envoyé !
                  </h3>
                  <p className="text-surface-600">
                    Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-bold text-surface-900 mb-2">
                    Envoyez-nous un message
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input label="Prénom" id="firstName" placeholder="Jean" required />
                    <Input label="Nom" id="lastName" placeholder="Dupont" required />
                  </div>
                  <Input label="Email" id="email" type="email" placeholder="jean@entreprise.fr" required />
                  <Input label="Téléphone" id="phone" type="tel" placeholder="06 12 34 56 78" />
                  <Select label="Sujet" id="subject" options={subjectOptions} required />
                  <Textarea label="Message" id="message" placeholder="Comment pouvons-nous vous aider ?" required />
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4" />
                    Envoyer le message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </Container>
      </section>
    </PageWrapper>
  )
}
