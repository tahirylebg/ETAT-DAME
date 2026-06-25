import { z } from 'zod'

// Le schema de validation pour les données de candidature. Il définit les règles et les contraintes pour chaque champ du formulaire de candidature.
export const candidatureSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères.').max(50),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères.').max(50),
  email: z.string().email('Adresse email invalide.'),
  phone: z.string().max(20).optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères.').max(2000),
})

// Le type TypeScript pour les données de candidature, dérivé du schéma de validation. Il est utilisé pour assurer la cohérence des types dans le code.
export type CandidatureInput = z.infer<typeof candidatureSchema>