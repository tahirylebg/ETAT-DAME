import { NextRequest, NextResponse } from 'next/server'
import { rateLimit } from '@/lib/security/rate-limit' //Le rate limit est un mécanisme de sécurité qui limite le nombre de requêtes qu'un utilisateur peut effectuer sur une période donnée. Cela aide à prévenir les abus et les attaques par déni de service (DoS).
import { candidatureSchema } from '@/lib/validations/candidature.schema'
import { uploadCv } from '@/lib/cloudinary'
import { prisma } from '@/lib/prisma'
import { sendCandidatureNotification } from '@/lib/email'

/**
 * POST methode pour créer une nouvelle candidature.
 * @param req - L'objet de requête entrant.
 * @returns Le objet de réponse .
 */

export async function POST(req: NextRequest) {
    const ip = req.headers.get('x-forwarded-for') || 'unknown'

    // Vérification du nombre de requêtes effectuées par l'utilisateur à partir de son adresse IP
    const { success } = rateLimit(ip)
    if (!success) {
        return NextResponse.json({ error: 'Trop de requêtes, réessayez plus tard.' }, { status: 429 })
    }

    const formData = await req.formData()

    // Vérification de la présence d'un champ "website" dans les données du formulaire pour détecter les soumissions automatisées (bots)
    if (formData.get('website')) {
        return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
    } 
    
    const parsed = candidatureSchema.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone') || undefined,        
        message: formData.get('message'),
        })

    if (!parsed.success) {
        return NextResponse.json(
            { error: parsed.error.flatten().fieldErrors },
            { status: 400 }
            )
    }

    const cvFile = formData.get('cv') as File | null
    const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]

    if (!cvFile || cvFile.size === 0) {
        return NextResponse.json({ error: 'Le CV est obligatoire.' }, { status: 400 })
    }
    if (!allowedTypes.includes(cvFile.type)) {
        return NextResponse.json({ error: 'Format de CV invalide (PDF ou Word uniquement).' }, { status: 400 })
    }
    if (cvFile.size > 5 * 1024 * 1024) {
        return NextResponse.json({ error: 'Le CV dépasse 5 Mo.' }, { status: 400 })
    }

    let cvUrl: string
    try {
        cvUrl = await uploadCv(cvFile)
    } catch (err) {
        console.error('Erreur upload Cloudinary:', err)
        return NextResponse.json({ error: 'Échec de l\'envoi du CV, réessayez.' }, { status: 502 })
    }

    let application
    try {
        application = await prisma.jobApplication.create({
        data: { ...parsed.data, cvUrl },
        })
    } catch (err) {
        console.error('Erreur écriture base de données:', err)
        return NextResponse.json({ error: 'Erreur serveur, réessayez plus tard.' }, { status: 500 })
    }


    try {
        await sendCandidatureNotification(application)
    } catch (err) {
        console.error('Erreur envoi email:', err)
        // On ne bloque pas la réponse : la candidature est déjà enregistrée en base,
        // un échec d'email ne doit pas faire perdre la candidature au candidat.
    }

    return NextResponse.json({ success: true, id: application.id })

}
