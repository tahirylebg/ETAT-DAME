import type { ReactNode } from 'react'

export interface Product {
  id: string
  name: string
  description?: string
  price: number
  isNew?: boolean
  image?: string
}

export interface MenuTab {
  id: string
  label: string
  content: ReactNode
}

export interface CandidatureFieldErrors {
  firstName?: string[]
  lastName?: string[]
  email?: string[]
  phone?: string[]
  message?: string[]
}
