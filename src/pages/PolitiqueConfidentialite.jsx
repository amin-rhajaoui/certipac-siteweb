import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import Container from '@/components/ui/Container'
import Breadcrumb from '@/components/ui/Breadcrumb'

function List({ items }) {
  return (
    <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#194296]">
      {items.map((it) => (
        <li key={it} className="text-[14px] leading-[1.6] text-[#393939]">
          {it}
        </li>
      ))}
    </ul>
  )
}

const sections = [
  {
    number: '01',
    title: 'Responsable du traitement',
    body: (
      <p>
        <strong className="text-[#161616]">Certipac SAS</strong>, dont le siège social est situé à
        Paris, France, est responsable du traitement des données personnelles collectées sur
        le site certipac.fr et via le service Certipac.
      </p>
    ),
  },
  {
    number: '02',
    title: 'Données collectées',
    body: (
      <>
        <p>Les catégories de données traitées sont les suivantes :</p>
        <List
          items={[
            "Données d'identification : nom, prénom, email, téléphone",
            'Données professionnelles : entreprise, numéro RGE, SIRET',
            'Données de connexion : adresse IP, logs techniques',
            "Données d'utilisation : pages visitées, fonctionnalités utilisées",
          ]}
        />
      </>
    ),
  },
  {
    number: '03',
    title: 'Finalités du traitement',
    body: (
      <>
        <p>Vos données sont traitées pour les finalités suivantes :</p>
        <List
          items={[
            'Fourniture et amélioration du service Certipac',
            "Gestion du compte client et de l'abonnement",
            'Support technique et commercial',
            'Communications commerciales après consentement explicite',
            'Respect des obligations légales et comptables',
          ]}
        />
      </>
    ),
  },
  {
    number: '04',
    title: 'Base légale',
    body: (
      <p>
        Le traitement repose sur l'exécution du contrat (fourniture du service), le
        consentement (communications commerciales), l'intérêt légitime (amélioration produit,
        sécurité) et le respect d'obligations légales (facturation, archivage).
      </p>
    ),
  },
  {
    number: '05',
    title: 'Durée de conservation',
    body: (
      <p>
        Les données sont conservées pendant la durée de l'abonnement, puis trois (3) ans
        après la fin de la relation commerciale pour les données de prospection.
        Les données comptables sont conservées dix (10) ans conformément aux obligations
        légales applicables.
      </p>
    ),
  },
  {
    number: '06',
    title: 'Vos droits',
    body: (
      <>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <List
          items={[
            "Droit d'accès aux données vous concernant",
            'Droit de rectification',
            "Droit à l'effacement (« droit à l'oubli »)",
            'Droit à la portabilité',
            "Droit d'opposition et de limitation du traitement",
          ]}
        />
        <p className="mt-4">
          L'exercice de ces droits se fait par courriel à l'adresse{' '}
          <a href="mailto:dpo@certipac.fr" className="text-[#194296] underline hover:text-[#0F2E73]">
            dpo@certipac.fr
          </a>
          . Une réponse est apportée sous un délai maximum d'un mois.
        </p>
      </>
    ),
  },
  {
    number: '07',
    title: 'Sécurité',
    body: (
      <p>
        Certipac met en œuvre les mesures techniques et organisationnelles nécessaires à
        la protection des données : chiffrement en transit (TLS) et au repos, authentification
        forte, sauvegardes chiffrées, journalisation des accès et hébergement sur des
        infrastructures localisées en France.
      </p>
    ),
  },
  {
    number: '08',
    title: 'Cookies',
    body: (
      <p>
        Le site utilise des cookies strictement nécessaires au fonctionnement et des cookies
        de mesure d'audience anonymisée. Le consentement est recueilli via un bandeau dédié
        affiché lors de la première visite ; il peut être retiré ou modifié à tout moment.
      </p>
    ),
  },
]

export default function PolitiqueConfidentialite() {
  return (
    <PageWrapper>
      <SEOHead
        title="Politique de confidentialité"
        description="Traitement des données personnelles par Certipac : responsable, données collectées, finalités, base légale, durée de conservation, droits, sécurité et cookies."
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', path: '/' },
          { label: 'Politique de confidentialité' },
        ]}
      />

      <section className="bg-white">
        <Container>
          <div className="pt-10 pb-12 lg:pt-14 lg:pb-16 max-w-4xl">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-10 pb-3 border-b border-[#E0E0E0]">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] font-semibold text-[#194296]">
                Document légal · Confidentialité
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252]">
                CTP-LEGAL-2026-03
              </span>
            </div>
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight text-[#161616] leading-[1.08]">
              Politique de confidentialité<span className="text-[#43AA43]">.</span>
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
