import { NextRequest, NextResponse } from 'next/server'
import { rateLimit } from '@/lib/security/rate-limit'
import { prisma } from '@/lib/prisma'

/*
    Cette fonction gère les requêtes GET pour récupérer les catégories de menu depuis la base de données.
    Elle utilise le rate limit pour limiter le nombre de requêtes par adresse IP et vérifie que le type de menu demandé est valide.
    Les catégories sont triées par ordre croissant et incluent uniquement les produits disponibles.
*/

const MENU_TYPES = ['EAT', 'DRINK', 'COCKTAIL'] as const

export async function GET(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? 'unknown'

  const { success } = rateLimit(ip)
  if (!success) {
    return NextResponse.json(
      { error: 'Trop de requêtes, réessayez plus tard.' },
      { status: 429 }
    )
  }

  const type = req.nextUrl.searchParams.get('type')?.toUpperCase()

  // Vérification que le type de menu demandé est valide (EAT, DRINK ou COCKTAIL)
  if (type && !MENU_TYPES.includes(type as any)) {
    return NextResponse.json({ error: 'Type de menu invalide.' }, { status: 400 })
  }

  // Récupération des catégories de menu depuis la base de données en fonction du type demandé, si fourni
  const categories = await prisma.category.findMany({
    where: type ? { menuType: type as any } : undefined,
    include: { products: { where: { available: true } } },
    orderBy: { order: 'asc' },
  })

  return NextResponse.json(categories)
}