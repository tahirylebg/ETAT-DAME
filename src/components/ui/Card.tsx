import { HTMLAttributes, ReactNode } from 'react'
// Le composant Card est un conteneur réutilisable qui applique des styles de carte prédéfinis. Il accepte des enfants React et des attributs HTML supplémentaires pour permettre une personnalisation flexible. Le composant utilise des classes CSS pour définir l'apparence de la carte, y compris le fond, les bordures et le padding.
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function Card({ className = '', children, ...props }: CardProps) {
  return (
    <div
      className={`bg-creme-100 rounded-card p-6 border border-creme-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}