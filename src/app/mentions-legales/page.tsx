export default function MentionsLegalesPage() {
  return (
    <div className="px-6 pt-8 pb-6">
      <p className="text-xs uppercase tracking-wide text-creme-500 mb-2">
        Légal
      </p>
      <h1 className="text-4xl mb-6">Mentions légales</h1>

      <div className="flex flex-col gap-6">
        <section>
          <h2 className="font-display text-lg text-creme-900 mb-2">Éditeur du site</h2>
          <p className="text-creme-700">
            État Dame SAS<br />
            12 rue de la République, 30000 Nîmes<br />
            SIRET : 000 000 000 00000<br />
            Contact : contact@etatdame.fr
          </p>
        </section>

        <hr className="border-creme-300" />

        <section>
          <h2 className="font-display text-lg text-creme-900 mb-2">Hébergeur</h2>
          <p className="text-creme-700">
            Vercel Inc.<br />
            340 Pine Street, Suite 1200<br />
            San Francisco, CA 94104, USA
          </p>
        </section>

        <hr className="border-creme-300" />

        <section>
          <h2 className="font-display text-lg text-creme-900 mb-2">Propriété intellectuelle</h2>
          <p className="text-creme-700">
            L&apos;ensemble du contenu de ce site est protégé par le droit d&apos;auteur. Toute reproduction est interdite sans autorisation préalable écrite de l&apos;éditeur.
          </p>
        </section>

        <hr className="border-creme-300" />

        <section>
          <h2 className="font-display text-lg text-creme-900 mb-2">Responsabilité</h2>
          <p className="text-creme-700">
            État Dame s&apos;efforce de maintenir les informations à jour mais ne peut en garantir l&apos;exactitude. La responsabilité de l&apos;éditeur ne saurait être engagée pour toute erreur ou omission.
          </p>
        </section>
      </div>
    </div>
  )
}