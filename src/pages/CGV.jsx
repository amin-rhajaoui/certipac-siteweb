import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import Container from '@/components/ui/Container'
import Breadcrumb from '@/components/ui/Breadcrumb'

const sections = [
  {
    number: '01',
    title: 'Objet',
    body: (
      <p>
        Les présentes Conditions Générales de Vente régissent les relations contractuelles
        entre Certipac SAS et tout professionnel souscrivant à un abonnement au service
        Certipac. Elles prévalent sur toute autre condition générale non expressément agréée
        par Certipac.
      </p>
    ),
  },
  {
    number: '02',
    title: 'Service',
    body: (
      <p>
        Certipac propose un service en ligne de type <strong className="text-[#161616]">SaaS</strong>{' '}
        de gestion de dossiers PAC (visite technique, devis, dossiers de conformité, suivi
        des aides). Les fonctionnalités disponibles varient selon la formule souscrite (Solo,
        Équipe, Entreprise).
      </p>
    ),
  },
  {
    number: '03',
    title: 'Tarifs et paiement',
    body: (
      <>
        <p>
          Les tarifs sont indiqués en euros hors taxes. La TVA applicable est celle en
          vigueur au jour de la facturation. Le paiement est dû mensuellement ou annuellement
          selon l'option choisie, par prélèvement SEPA ou carte bancaire.
        </p>
        <dl className="mt-5 divide-y divide-[#E0E0E0] border-t border-b border-[#E0E0E0]">
          <div className="py-3 flex justify-between gap-4">
            <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252]">Solo</dt>
            <dd className="text-[14px] font-semibold text-[#161616]">100 € HT / mois</dd>
          </div>
          <div className="py-3 flex justify-between gap-4">
            <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252]">Équipe</dt>
            <dd className="text-[14px] font-semibold text-[#161616]">190 € HT / mois</dd>
          </div>
          <div className="py-3 flex justify-between gap-4">
            <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252]">Entreprise</dt>
            <dd className="text-[14px] font-semibold text-[#161616]">Sur devis</dd>
          </div>
        </dl>
      </>
    ),
  },
  {
    number: '04',
    title: 'Essai gratuit',
    body: (
      <p>
        Certipac propose une période d'essai gratuite de trente (30) jours, sans engagement
        ni communication de coordonnées bancaires. À l'issue de cette période, le client
        peut souscrire un abonnement ou cesser d'utiliser le service sans frais.
      </p>
    ),
  },
  {
    number: '05',
    title: 'Durée et résiliation',
    body: (
      <p>
        L'abonnement est souscrit pour une durée indéterminée avec une période minimale d'un
        mois (ou de douze mois pour la formule annuelle). Le client peut résilier à tout
        moment ; la résiliation prend effet à la fin de la période de facturation en cours.
      </p>
    ),
  },
  {
    number: '06',
    title: 'Responsabilité',
    body: (
      <p>
        Certipac s'engage à fournir un service conforme aux descriptions publiées. La
        responsabilité de Certipac est limitée au montant des sommes versées par le client
        au cours des douze derniers mois au titre de l'abonnement concerné.
      </p>
    ),
  },
  {
    number: '07',
    title: 'Propriété des données',
    body: (
      <p>
        Les données saisies par le client restent sa propriété exclusive. Le client peut
        exporter ses données à tout moment. En cas de résiliation, les données sont
        conservées trente (30) jours puis supprimées, sauf obligation légale contraire.
      </p>
    ),
  },
  {
    number: '08',
    title: 'Droit applicable',
    body: (
      <p>
        Les présentes CGV sont soumises au droit français. En cas de litige, les parties
        s'engagent à rechercher une solution amiable avant tout recours. À défaut, les
        tribunaux compétents sont ceux de Paris.
      </p>
    ),
  },
]

export default function CGV() {
  return (
    <PageWrapper>
      <SEOHead
        title="Conditions Générales de Vente"
        description="Conditions Générales de Vente du service Certipac : objet, service, tarifs, essai, durée, responsabilité, propriété des données et droit applicable."
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', path: '/' },
          { label: 'CGV' },
        ]}
      />

      <section className="bg-white">
        <Container>
          <div className="pt-10 pb-12 lg:pt-14 lg:pb-16 max-w-4xl">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-10 pb-3 border-b border-[#E0E0E0]">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] font-semibold text-[#194296]">
                Document légal · CGV
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252]">
                CTP-LEGAL-2026-02
              </span>
            </div>
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight text-[#161616] leading-[1.08]">
              Conditions Générales de Vente<span className="text-[#43AA43]">.</span>
            </h1>
            <p className="mt-4 text-[14px] text-[#525252] font-mono uppercase tracking-[0.08em]">
              Dernière mise à jour · Janvier 2026
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#F4F4F4]">
        <Container>
          <div className="py-12 lg:py-16 max-w-4xl space-y-10">
            {sections.map((s) => (
              <article key={s.number} className="bg-white p-6 sm:p-8 border-l-[3px] border-[#194296]">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#194296]">
                    Article · {s.number}
                  </span>
                </div>
                <h2 className="text-[20px] font-bold text-[#161616] mb-4 leading-[1.25]">
                  {s.title}
                </h2>
                <div className="text-[14px] leading-[1.7] text-[#393939] space-y-3">
                  {s.body}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </PageWrapper>
  )
}
