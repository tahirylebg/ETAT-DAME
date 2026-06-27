import PageHeader from '@/components/layout/PageHeader'
import FloatingFoodIcons from '@/components/home/FloatingFoodIcons'
import Reveal from '@/components/ui/Reveal'

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="relative px-6 pt-8 pb-6 overflow-hidden">
      <FloatingFoodIcons />
      <div className="relative z-10">
        <PageHeader eyebrow="Légal" title="Politique de confidentialité" />

        <div className="flex flex-col gap-6">
          <Reveal delayMs={0}>
            <section>
              <h2 className="font-display text-lg text-creme-900 mb-2">Données collectées</h2>
              <p className="text-creme-700">
                Nous collectons les données du formulaire de candidature (nom, prénom, email, téléphone, message, CV) uniquement pour traiter votre candidature.
              </p>
            </section>
          </Reveal>

          <hr className="border-creme-300" />

          <Reveal delayMs={60}>
            <section>
              <h2 className="font-display text-lg text-creme-900 mb-2">Base légale</h2>
              <p className="text-creme-700">
                Le traitement est fondé sur votre consentement explicite lors de l&apos;envoi du formulaire.
              </p>
            </section>
          </Reveal>

          <hr className="border-creme-300" />

          <Reveal delayMs={120}>
            <section>
              <h2 className="font-display text-lg text-creme-900 mb-2">Durée de conservation</h2>
              <p className="text-creme-700">
                Vos données sont conservées 2 ans maximum, sauf opposition de votre part.
              </p>
            </section>
          </Reveal>

          <hr className="border-creme-300" />

          <Reveal delayMs={180}>
            <section>
              <h2 className="font-display text-lg text-creme-900 mb-2">Vos droits</h2>
              <p className="text-creme-700">
                Accès, rectification, effacement, portabilité. Contactez-nous : contact@etatdame.fr
              </p>
            </section>
          </Reveal>

          <hr className="border-creme-300" />

          <Reveal delayMs={240}>
            <section>
              <h2 className="font-display text-lg text-creme-900 mb-2">Cookies</h2>
              <p className="text-creme-700">
                Ce site n&apos;utilise pas de cookies publicitaires. Seuls des cookies techniques essentiels peuvent être déposés.
              </p>
            </section>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
