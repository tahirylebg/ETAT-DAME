import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  // Réinitialisation : on supprime les produits avant les catégories
  // (contrainte ON DELETE RESTRICT sur Product.categoryId), pour que
  // ce script reste ré-exécutable sans erreur de doublon sur les slugs.
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()

  // --- EAT ---
  const sale = await prisma.category.create({
    data: { menuType: 'EAT', name: 'Salé', slug: 'eat-sale', order: 1 },
  })
  await prisma.product.createMany({
    data: [
      {
        name: 'Œufs Bénédicte',
        description: 'Pain brioché, jambon cru, œufs pochés, sauce hollandaise maison',
        price: 14,
        categoryId: sale.id,
        order: 1,
      },
      {
        name: 'Toast avocat',
        description: "Pain au levain, avocat écrasé, œuf poché, graines de sésame, piment d'Espelette",
        price: 13,
        isNew: true,
        categoryId: sale.id,
        order: 2,
      },
    ],
  })

  const sucre = await prisma.category.create({
    data: { menuType: 'EAT', name: 'Sucré', slug: 'eat-sucre', order: 2 },
  })
  await prisma.product.createMany({
    data: [
      {
        name: 'Pancakes',
        description: "Pâte maison, sirop d'érable pur, beurre noisette, fruits",
        price: 12,
        categoryId: sucre.id,
        order: 1,
      },
      {
        name: 'Granola bowl',
        description: 'Granola torréfié, yaourt grec, miel de Provence, fruits frais',
        price: 9,
        categoryId: sucre.id,
        order: 2,
      },
    ],
  })

  // --- DRINK ---
  const cafe = await prisma.category.create({
    data: { menuType: 'DRINK', name: 'Café & Espresso', slug: 'drink-cafe-espresso', order: 1 },
  })
  await prisma.product.createMany({
    data: [
      { name: 'Espresso', description: 'Simple ou double', price: 2.5, categoryId: cafe.id, order: 1 },
      { name: 'Cappuccino', description: 'Lait vapeur, mousse onctueuse', price: 4, categoryId: cafe.id, order: 2 },
      { name: 'Flat white', description: 'Double ristretto serré', price: 4.5, categoryId: cafe.id, order: 3 },
      { name: 'Café filtre', description: 'Grain de saison', price: 3, categoryId: cafe.id, order: 4 },
      { name: 'Cold brew', description: 'Extraction 20h à froid', price: 5, categoryId: cafe.id, order: 5 },
      { name: 'Américano', description: 'Espresso allongé', price: 3, categoryId: cafe.id, order: 6 },
    ],
  })

  const the = await prisma.category.create({
    data: { menuType: 'DRINK', name: 'Thés & Matcha', slug: 'drink-thes-matcha', order: 2 },
  })
  await prisma.product.createMany({
    data: [
      { name: 'Matcha latte', price: 5.5, categoryId: the.id, order: 1 },
      { name: 'Thé à l\u2019anglaise', price: 3.5, categoryId: the.id, order: 2 },
    ],
  })

  const frais = await prisma.category.create({
    data: { menuType: 'DRINK', name: 'Frais & pressés', slug: 'drink-frais-presses', order: 3 },
  })
  await prisma.product.createMany({
    data: [
      { name: "Jus d'orange pressé", price: 4.5, categoryId: frais.id, order: 1 },
      { name: 'Limonade maison', price: 4, categoryId: frais.id, order: 2 },
    ],
  })

  // --- COCKTAIL ---
  const classiques = await prisma.category.create({
    data: { menuType: 'COCKTAIL', name: 'Classiques', slug: 'cocktail-classiques', order: 1 },
  })
  await prisma.product.createMany({
    data: [
      { name: 'Mimosa', description: "Prosecco, jus d'orange pressé", price: 8, categoryId: classiques.id, order: 1 },
      { name: 'Spritz Aperol', description: 'Aperol, prosecco, eau pétillante, orange', price: 9, categoryId: classiques.id, order: 2 },
      { name: 'Hugo', description: 'Prosecco, liqueur de sureau, citron vert, menthe', price: 9, categoryId: classiques.id, order: 3 },
      { name: 'Bloody Mary', description: 'Vodka, jus de tomate, épices maison, céleri', price: 10, categoryId: classiques.id, order: 4 },
      { name: 'Negroni', description: 'Gin London Dry, Campari, vermouth rouge, zeste d\u2019orange', price: 11, categoryId: classiques.id, order: 5 },
    ],
  })

  const signatures = await prisma.category.create({
    data: { menuType: 'COCKTAIL', name: 'Signatures', slug: 'cocktail-signatures', order: 2 },
  })
  await prisma.product.createMany({
    data: [
      {
        name: 'État Dame Spritz',
        description: 'Création maison',
        price: 11,
        isNew: true,
        categoryId: signatures.id,
        order: 1,
      },
    ],
  })

  const virgin = await prisma.category.create({
    data: { menuType: 'COCKTAIL', name: 'Virgin', slug: 'cocktail-virgin', order: 3 },
  })
  await prisma.product.createMany({
    data: [
      { name: 'Virgin Mojito', description: 'Citron vert, menthe, eau pétillante', price: 6, categoryId: virgin.id, order: 1 },
    ],
  })

  // --- INFOS PRATIQUES ---
  await prisma.openingHour.deleteMany()
  await prisma.restaurantInfo.deleteMany()

  await prisma.restaurantInfo.create({
    data: {
      address: '12 rue de la République',
      postalCode: '30000',
      city: 'Nîmes',
      region: 'Occitanie',
      phone: '04 66 00 00 00',
      email: 'contact@etatdame.fr',
      instagram: '@etatdame_brunch',
      mapsUrl: 'https://maps.google.com/?q=12+rue+de+la+République,30000+Nîmes',
    },
  })

  // dayOfWeek : 0 = Lundi ... 6 = Dimanche
  await prisma.openingHour.createMany({
    data: [
      { dayOfWeek: 0, service: 'MIDI', openTime: '11:00', closeTime: '15:00' },
      { dayOfWeek: 1, service: 'MIDI', isClosed: true },
      { dayOfWeek: 2, service: 'MIDI', isClosed: true },
      { dayOfWeek: 3, service: 'MIDI', openTime: '11:00', closeTime: '15:00' },
      { dayOfWeek: 3, service: 'SOIR', openTime: '18:30', closeTime: '23:00' },
      { dayOfWeek: 4, service: 'MIDI', openTime: '11:00', closeTime: '15:00' },
      { dayOfWeek: 4, service: 'SOIR', openTime: '18:30', closeTime: '23:00' },
      { dayOfWeek: 5, service: 'MIDI', openTime: '11:00', closeTime: '15:00' },
      { dayOfWeek: 5, service: 'SOIR', openTime: '18:30', closeTime: '23:00' },
      { dayOfWeek: 6, service: 'MIDI', openTime: '11:00', closeTime: '15:00' },
    ],
  })

  console.log('Seed terminé : 8 catégories, leurs produits, les infos et horaires créés.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())