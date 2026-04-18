import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import Container from '@/components/ui/Container'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { COMPANY_INFO } from '@/lib/constants'

const sections = [
  {
    number: '01',
    title: 'Éditeur du site',
    body: (
      <>
        <p>
          Le site <strong className="text-[#161616]">certipac.fr</strong> est édité par{' '}
          <strong className="text-[#161616]">{COMPANY_INFO.legalName}</strong>, société par actions
          simplifiée au capital de 10 000 €, immatriculée au Registre du Commerce et des
          Sociétés de Paris sous le numéro RCS Paris XXX XXX XXX.
        </p>
        <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-[#E0E0E0]">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#525252] mb-1">Siège social</dt>
            <dd className="text-[14px] text-[#161616] font-medium">{COMPANY_INFO.address}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#525252] mb-1">Directeur publication</dt>
            <dd className="text-[14px] text-[#161616] font-medium">Alexandre Fontaine</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#525252] mb-1">Courriel</dt>
            <dd className="text-[14px] text-[#161616] font-medium">{COMPANY_INFO.email}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#525252] mb-1">Téléphone</dt>
            <dd className="text-[14px] text-[#161616] font-medium">{COMPANY_INFO.phone}</dd>
          </div>
        </dl>
      </>
    ),
  },
  {
    number: '02',
    title: 'Hébergement',
    body: (
      <p>
        Le site est hébergé par <strong className="text-[#161616]">OVH SAS</strong>, 2 rue Kellermann,
        59100 Roubaix, France — téléphone : 09 72 10 10 07. L'infrastructure applicative
        est localisée sur le territoire français.
      </p>
    ),
  },
  {
    number: '03',
    title: 'Propriété intellectuelle',
    body: (
      <p>
        L'ensemble des contenus du site (textes, visuels, logo Certipac, maquettes, code
        source) sont la propriété exclusive de {COMPANY_INFO.legalName} ou de ses partenaires.
        Toute reproduction, représentation, modification, publication ou adaptation de tout
        ou partie de ces éléments est interdite sans autorisation préalable écrite.
      </p>
    ),
  },
  {
    number: '04',
    title: 'Données personnelles',
    body: (
      <p>
        Les données personnelles collectées sur ce site sont traitées conformément à la{' '}
        <a href="/politique-confidentialite" className="text-[#194296] underline hover:text-[#0F2E73]">
          politique de confidentialité
        </a>
        . Conformément au RGPD, vous disposez d'un droit d'accès, de rectification,
        d'effacement, de portabilité et d'opposition sur vos données.
      </p>
    ),
  },
  {
    number: '05',
    title: 'Cookies',
    body: (
      <p>
        Le site utilise des cookies strictement nécessaires à son fonctionnement et des
        cookies de mesure d'audience anonymisée. Le consentement est demandé lors de la
        première visite via un bandeau dédié et peut être retiré à tout moment.
      </p>
    ),
  },
  {
    number: '06',
    title: 'Limitation de responsabilité',
    body: (
      <p>
        {COMPANY_INFO.legalName} s'efforce de fournir des informations exactes et à jour.
        L'éditeur ne peut toutefois garantir l'absence d'erreur ou l'actualité permanente
        des informations diffusées et décline toute responsabilité pour les dommages résultant
        de leur utilisation.
      </p>
    ),
  },
]

export default function MentionsLegales() {
  return (
    <PageWrapper>
      <SEOHead
        title="Mentions légales"
        description="Mentions légales du site certipac.fr : éditeur, hébergement, propriété intellectuelle, données personnelles, cookies et responsabilité."
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', path: '/' },
          { label: 'Mentions légales' },
        ]}
      />

      <section className="bg-white">
        <Container>
          <div className="pt-10 pb-12 lg:pt-14 lg:pb-16 max-w-4xl">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-10 pb-3 border-b border-[#E0E0E0]">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] font-semibold text-[#194296]">
                Document légal · Mentions
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252]">
                CTP-LEGAL-2026-01
              </span>
            </div>
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight text-[#161616] leading-[1.08]">
              Mentions légales<span className="text-[#43AA43]">.</span>
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
