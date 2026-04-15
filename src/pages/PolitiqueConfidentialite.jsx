import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import Container from '@/components/ui/Container'

export default function PolitiqueConfidentialite() {
  return (
    <PageWrapper>
      <SEOHead title="Politique de confidentialité" />
      <div className="bg-surface-50 py-20">
        <Container className="max-w-4xl">
          <h1 className="text-4xl font-extrabold text-surface-900">Politique de confidentialité</h1>
          <p className="mt-4 text-surface-600">Dernière mise à jour : janvier 2025</p>
        </Container>
      </div>
      <Container className="max-w-4xl py-16">
        <div className="space-y-10 text-surface-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">1. Responsable du traitement</h2>
            <p>
              Certipac SAS, dont le siège social est situé à Paris, France, est responsable
              du traitement des données personnelles collectées sur le site certipac.fr et
              via le service Certipac.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">2. Données collectées</h2>
            <p>Nous collectons les données suivantes :</p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>Données d'identification : nom, prénom, email, téléphone</li>
              <li>Données professionnelles : entreprise, numéro RGE, SIRET</li>
              <li>Données de connexion : adresse IP, logs de connexion</li>
              <li>Données d'utilisation : pages visitées, fonctionnalités utilisées</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">3. Finalités du traitement</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>Fournir et améliorer le service Certipac</li>
              <li>Gérer votre compte et votre abonnement</li>
              <li>Assurer le support client</li>
              <li>Envoyer des communications commerciales (avec votre consentement)</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">4. Base légale</h2>
            <p>
              Le traitement de vos données repose sur l'exécution du contrat (fourniture du
              service), votre consentement (communications commerciales) et nos intérêts
              légitimes (amélioration du service, sécurité).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">5. Durée de conservation</h2>
            <p>
              Vos données sont conservées pendant la durée de votre abonnement, puis 3 ans
              après la fin de la relation commerciale pour les données de prospection, et
              conformément aux obligations légales pour les données de facturation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">6. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
              <li>Droit à la limitation du traitement</li>
            </ul>
            <p className="mt-4">
              Pour exercer vos droits, contactez-nous à{' '}
              <a href="mailto:dpo@certipac.fr" className="text-primary-500 underline">
                dpo@certipac.fr
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">7. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
              pour protéger vos données : chiffrement SSL/TLS, chiffrement des données au
              repos, authentification forte, sauvegardes quotidiennes, hébergement en France.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">8. Cookies</h2>
            <p>
              Nous utilisons des cookies strictement nécessaires au fonctionnement du site
              et des cookies de mesure d'audience. Vous pouvez gérer vos préférences via
              le bandeau de consentement.
            </p>
          </section>
        </div>
      </Container>
    </PageWrapper>
  )
}
