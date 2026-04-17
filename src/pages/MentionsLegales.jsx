import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import Container from '@/components/ui/Container'

export default function MentionsLegales() {
  return (
    <PageWrapper>
      <SEOHead
        title="Mentions légales"
        description="Mentions légales du site certipac.fr : éditeur, hébergement, propriété intellectuelle et traitement des données personnelles."
      />
      <div className="bg-surface-50 py-20">
        <Container className="max-w-4xl">
          <h1 className="text-4xl font-extrabold text-surface-900">Mentions légales</h1>
          <p className="mt-4 text-surface-600">Dernière mise à jour : janvier 2025</p>
        </Container>
      </div>
      <Container className="max-w-4xl py-16">
        <div className="space-y-10 text-surface-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">1. Éditeur du site</h2>
            <p>
              Le site certipac.fr est édité par la société Certipac SAS, au capital de 10 000 euros,
              immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro
              RCS Paris XXX XXX XXX.
            </p>
            <ul className="mt-4 space-y-2">
              <li><strong>Siège social :</strong> Paris, France</li>
              <li><strong>Directeur de la publication :</strong> Alexandre Fontaine</li>
              <li><strong>Email :</strong> contact@certipac.fr</li>
              <li><strong>Téléphone :</strong> 01 23 45 67 89</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">2. Hébergement</h2>
            <p>
              Le site est hébergé par OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.
              Téléphone : 09 72 10 10 07.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur le site certipac.fr (textes, images, graphismes,
              logo, icônes, logiciels) sont la propriété exclusive de Certipac SAS ou de ses
              partenaires. Toute reproduction, représentation, modification, publication ou
              adaptation de tout ou partie de ces éléments est interdite sans autorisation
              préalable écrite de Certipac SAS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">4. Données personnelles</h2>
            <p>
              Les données personnelles collectées sur ce site sont traitées conformément à notre{' '}
              <a href="/politique-confidentialite" className="text-primary-500 underline">
                politique de confidentialité
              </a>. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification
              et de suppression de vos données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">5. Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et mesurer
              l'audience. Vous pouvez paramétrer vos préférences via le bandeau de consentement
              affiché lors de votre première visite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-surface-900 mb-4">6. Limitation de responsabilité</h2>
            <p>
              Certipac SAS s'efforce de fournir des informations exactes et à jour sur ce site.
              Toutefois, elle ne peut garantir l'exactitude, la complétude ou l'actualité des
              informations diffusées. Certipac SAS décline toute responsabilité pour tout
              dommage résultant de l'utilisation des informations contenues sur ce site.
            </p>
          </section>
        </div>
      </Container>
    </PageWrapper>
  )
}
