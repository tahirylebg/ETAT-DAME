import { prisma } from '@/lib/prisma'
import ProductList from '@/components/menu/ProductList'
import PageHeader from '@/components/layout/PageHeader'
import FloatingFoodIcons from '@/components/home/FloatingFoodIcons'

export default async function EatPage() {
  const categories = await prisma.category.findMany({
    where: { menuType: 'EAT' },
    include: {
      products: {
        where: { available: true },
        orderBy: { order: 'asc' },
      },
    },
    orderBy: { order: 'asc' },
  })

  return (
    <div className="relative px-6 pt-8 pb-6 overflow-hidden">
      <FloatingFoodIcons />
      <div className="relative z-10">
        <PageHeader eyebrow="Menu · Eat" title="Eat" />

        {categories.map((category) => (
          <ProductList
            key={category.id}
            title={category.name}
            products={category.products.map((product) => ({
              id: product.id,
              name: product.name,
              description: product.description ?? undefined,
              price: product.price.toNumber(),
              isNew: product.isNew,
              image: product.image ?? undefined,
            }))}
          />
        ))}
      </div>
    </div>
  )
}
