import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  const category = await prisma.category.create({
    data: {
      menuType: 'EAT',
      name: 'Brunch salé',
      slug: 'brunch-sale',
      order: 1,
    },
  })

  await prisma.product.create({
    data: {
      name: 'Œufs Bénédicte',
      price: 14,
      available: true,
      categoryId: category.id,
    },
  })

  console.log('Seed terminé : catégorie et produit créés.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())