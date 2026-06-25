import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
/**
 * POST methode pour revalider le cache de l'application.
 * @param req - L'objet de requête entrant.
 * @returns Le objet de réponse indiquant si la revalidation a réussi ou non.
 */


const ALLOWED_PATHS = ['/menu', '/menu/eat', '/menu/drink', '/menu/cocktails', '/infos']

export async function POST(req: NextRequest) {
  const token = req.headers.get('authorization')?.replace('Bearer ', '')

  // Vérification du token d'autorisation pour s'assurer que la requête est légitime
  if (token !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  // Récupération du chemin à revalider depuis le corps de la requête
  const { path } = await req.json()

  // Vérification que le chemin à revalider est dans la liste des chemins autorisés
  if (!ALLOWED_PATHS.includes(path)) {
    return NextResponse.json({ error: 'Chemin non autorisé.' }, { status: 400 })
  }

  revalidatePath(path)

  return NextResponse.json({ revalidated: true, path })
}