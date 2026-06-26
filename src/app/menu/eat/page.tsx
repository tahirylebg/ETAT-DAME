import { prisma } from '@/lib/prisma'
import ProductList from '@/components/menu/ProductList'

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
    <div className="px-6 pt-8 pb-6">
      <p className="text-xs uppercase tracking-wide text-creme-500 mb-2">
        Menu · Eat
      </p>
      <h1 className="text-4xl mb-6">Eat</h1>

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
  )
}