export default function PolitiqueConfidentialitePage() {
  return (
    <div className="px-6 pt-8 pb-6">
      <p className="text-xs uppercase tracking-wide text-creme-500 mb-2">
        Légal
      </p>
      <h1 className="text-4xl mb-6">Politique de confidentialité</h1>

      <div className="flex flex-col gap-6">
        <section>
          <h2 className="font-display text-lg text-creme-900 mb-2">Données collectées</h2>
          <p className="text-creme-700">
            Nous collectons les données du formulaire de candidature (nom, prénom, email, téléphone, message, CV) uniquement pour traiter votre candidature.
          </p>
        </section>

        <hr className="border-creme-300" />

        <section>
          <h2 className="font-display text-lg text-creme-900 mb-2">Base légale</h2>
          <p className="text-creme-700">
            Le traitement est fondé sur votre consentement explicite lors de l&apos;envoi du formulaire.
          </p>
        </section>

        <hr className="border-creme-300" />

        <section>
          <h2 className="font-display text-lg text-creme-900 mb-2">Durée de conservation</h2>
          <p className="text-creme-700">
            Vos données sont conservées 2 ans maximum, sauf opposition de votre part.
          </p>
        </section>

        <hr className="border-creme-300" />

        <section>
          <h2 className="font-display text-lg text-creme-900 mb-2">Vos droits</h2>
          <p className="text-creme-700">
            Accès, rectification, effacement, portabilité. Contactez-nous : contact@etatdame.fr
          </p>
        </section>

        <hr className="border-creme-300" />

        <section>
          <h2 className="font-display text-lg text-creme-900 mb-2">Cookies</h2>
          <p className="text-creme-700">
            Ce site n&apos;utilise pas de cookies publicitaires. Seuls des cookies techniques essentiels peuvent être déposés.
          </p>
        </section>
      </div>
    </div>
  )
}