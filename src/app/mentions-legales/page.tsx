import PageHeader from '@/components/layout/PageHeader'
import FloatingFoodIcons from '@/components/home/FloatingFoodIcons'
import Reveal from '@/components/ui/Reveal'

export default function MentionsLegalesPage() {
  return (
    <div className="relative px-6 pt-8 pb-6 overflow-hidden">
      <FloatingFoodIcons />
      <div className="relative z-10">
        <PageHeader eyebrow="Légal" title="Mentions légales" />

        <div className="flex flex-col gap-6">
          <Reveal delayMs={0}>
            <section>
              <h2 className="font-display text-lg text-creme-900 mb-2">Éditeur du site</h2>
              <p className="text-creme-700">
                État Dame SAS<br />
                12 rue de la République, 30000 Nîmes<br />
                SIRET : 000 000 000 00000<br />
                Contact : contact@etatdame.fr
              </p>
            </section>
          </Reveal>

          <hr className="border-creme-300" />

          <Reveal delayMs={60}>
            <section>
              <h2 className="font-display text-lg text-creme-900 mb-2">Hébergeur</h2>
              <p className="text-creme-700">
                Vercel Inc.<br />
                340 Pine Street, Suite 1200<br />
                San Francisco, CA 94104, USA
              </p>
            </section>
          </Reveal>

          <hr className="border-creme-300" />

          <Reveal delayMs={120}>
            <section>
              <h2 className="font-display text-lg text-creme-900 mb-2">Propriété intellectuelle</h2>
              <p className="text-creme-700">
                L&apos;ensemble du contenu de ce site est protégé par le droit d&apos;auteur. Toute reproduction est interdite sans autorisation préalable écrite de l&apos;éditeur.
              </p>
            </section>
          </Reveal>

          <hr className="border-creme-300" />

          <Reveal delayMs={180}>
            <section>
              <h2 className="font-display text-lg text-creme-900 mb-2">Responsabilité</h2>
              <p className="text-creme-700">
                État Dame s&apos;efforce de maintenir les informations à jour mais ne peut en garantir l&apos;exactitude. La responsabilité de l&apos;éditeur ne saurait être engagée pour toute erreur ou omission.
              </p>
            </section>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
