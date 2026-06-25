import { Resend } from 'resend'
import type { JobApplication } from '@prisma/client'

/*
    Cette fonction envoie un email de notification lorsqu'une nouvelle candidature est soumise.
    Elle utilise l'API Resend pour envoyer l'email à l'adresse spécifiée dans la variable d'environnement NOTIFICATION_EMAIL.
    L'email contient les informations de la candidature, y compris le nom, l'email, le téléphone, le message et un lien pour télécharger le CV.
*/  

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendCandidatureNotification(application: JobApplication) {
  const { error } = await resend.emails.send({
    from: 'État Dame <onboarding@resend.dev>',
    to: process.env.NOTIFICATION_EMAIL!,
    subject: `Nouvelle candidature : ${application.firstName} ${application.lastName}`,
    html: `...`,
  })

  if (error) {
    throw new Error(error.message)
  }
}