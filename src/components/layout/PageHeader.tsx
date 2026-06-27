import type { ReactNode } from 'react'
import Reveal from '@/components/ui/Reveal'

interface PageHeaderProps {
  eyebrow: string
  title: ReactNode
  description?: string
  className?: string
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  className = '',
}: PageHeaderProps) {
  return (
    <div className={`mb-8 text-center ${className}`}>
      <Reveal>
        <p className="text-xs uppercase tracking-wide text-creme-500 mb-2">{eyebrow}</p>
        <div className="flex items-center gap-4 mb-3">
          <span className="flex-1 h-px bg-creme-300" />
          <h1 className="text-3xl md:text-5xl shrink-0">{title}</h1>
          <span className="flex-1 h-px bg-creme-300" />
        </div>
        {description && (
          <p className="text-creme-700 md:text-lg max-w-2xl mx-auto">{description}</p>
        )}
      </Reveal>
    </div>
  )
}
