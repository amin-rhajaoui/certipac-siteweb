import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import Container from '@/components/ui/Container'

export default function CGV() {
  return (
    <PageWrapper>
      <SEOHead title="Conditions Générales de Vente" />
      <div className="bg-surface-50 py-20">
        <Container className="max-w-4xl">
          <h1 className="text-4xl font-extrabold text-surface-900">Conditions Générales de Vente</h1>
          <p className="mt-4 text-surface-600">Dernière mise à jour : janvier 2025</p>
        </Container>
      </div>
      <Container className="max-w-4xl py-16">
        <div className="space-y-10 text-surface-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">1. Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les relations
              contractuelles entre Certipac SAS et tout professionnel souscrivant à un
              abonnement au service Certipac.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">2. Services</h2>
            <p>
              Certipac propose un service en ligne (SaaS) de génération de dossiers et devis
              pour l'installation de pompes à chaleur. Les fonctionnalités varient selon le
              forfait souscrit (Solo, Équipe, Entreprise).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">3. Tarifs et paiement</h2>
            <p>
              Les tarifs sont indiqués en euros hors taxes. La TVA applicable est celle en
              vigueur au jour de la facturation. Le paiement est dû mensuellement ou annuellement
              selon l'option choisie, par prélèvement bancaire ou carte bancaire.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>Solo : 100€ HT/mois</li>
              <li>Équipe : 190€ HT/mois</li>
              <li>Entreprise : sur devis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">4. Essai gratuit</h2>
            <p>
              Certipac offre une période d'essai gratuite de 30 jours, sans engagement et sans
              carte bancaire. À l'issue de cette période, le client peut souscrire un abonnement
              ou cesser d'utiliser le service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">5. Durée et résiliation</h2>
            <p>
              L'abonnement est souscrit pour une durée indéterminée avec une période minimale
              d'un mois. Le client peut résilier à tout moment, la résiliation prenant effet
              à la fin de la période de facturation en cours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">6. Responsabilité</h2>
            <p>
              Certipac SAS s'engage à fournir un service conforme aux descriptions. La
              responsabilité de Certipac est limitée au montant des sommes versées par le
              client au cours des 12 derniers mois.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">7. Propriété des données</h2>
            <p>
              Les données saisies par le client restent sa propriété exclusive. Le client
              peut exporter ses données à tout moment. En cas de résiliation, les données
              sont conservées 30 jours puis supprimées.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">8. Droit applicable</h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de litige, les
              parties s'engagent à rechercher une solution amiable avant tout recours
              judiciaire. À défaut, les tribunaux de Paris seront compétents.
            </p>
          </section>
        </div>
      </Container>
    </PageWrapper>
  )
}
