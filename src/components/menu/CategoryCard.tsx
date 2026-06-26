import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, type LucideIcon } from 'lucide-react'

interface CategoryCardProps {
  title: string
  tagline: string
  description: string
  href: string
  image?: string
  icon?: LucideIcon
}

export default function CategoryCard({
  title,
  tagline,
  description,
  href,
  image,
  icon: Icon,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-card border border-creme-300 overflow-hidden bg-creme-100 mb-4 transition-all duration-200 touch-manipulation hover:-translate-y-1 hover:shadow-lg hover:border-creme-500 focus-visible:outline-2 focus-visible:outline-creme-700 focus-visible:outline-offset-2"
    >
      <div className="relative h-32 bg-gradient-to-br from-creme-300 to-creme-100 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          Icon && (
            <Icon
              size={88}
              strokeWidth={1.25}
              className="absolute -right-3 -bottom-3 text-creme-50 opacity-70 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
            />
          )
        )}
        <span className="absolute bottom-2 left-3 font-display text-2xl text-creme-900 drop-shadow-sm transition-transform duration-200 group-hover:translate-x-1">
          {title}
        </span>
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-creme-500 mb-1">{tagline}</p>
          <p className="text-sm text-creme-900">{description}</p>
        </div>
        <ChevronRight
          size={20}
          className="text-creme-500 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-creme-700"
        />
      </div>
    </Link>
  )
}
