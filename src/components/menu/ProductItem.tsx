import Image from 'next/image'
import { UtensilsCrossed } from 'lucide-react'

interface ProductItemProps {
  name: string
  description?: string
  price: number
  isNew?: boolean
  image?: string
}

export default function ProductItem({
  name,
  description,
  price,
  isNew,
  image,
}: ProductItemProps) {
  return (
    <div className="flex gap-3 py-4 px-2 -mx-2 rounded-card border-b border-creme-300 transition-colors hover:bg-creme-100">
      <div className="relative w-14 h-14 rounded-card bg-gradient-to-br from-creme-300 to-creme-100 shrink-0 overflow-hidden flex items-center justify-center">
        {image ? (
          <Image src={image} alt={name} fill sizes="56px" className="object-cover" />
        ) : (
          <UtensilsCrossed size={22} strokeWidth={1.5} className="text-creme-50" />
        )}
      </div>

      <div className="flex-1 flex justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <p className="font-display text-base text-creme-900">{name}</p>
            {isNew && (
              <span className="text-[10px] uppercase tracking-wide bg-creme-700 text-creme-50 px-1.5 py-0.5 rounded animate-fade-in-up">
                Nouveau
              </span>
            )}
          </div>
          {description && (
            <p className="text-sm text-creme-700 mt-1">{description}</p>
          )}
        </div>
        <p className="text-sm text-creme-900 font-medium whitespace-nowrap tabular-nums">
          {price.toFixed(2)} €
        </p>
      </div>
    </div>
  )
}
