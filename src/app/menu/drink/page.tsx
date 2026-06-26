import { prisma } from '@/lib/prisma'
import MenuTabs from '@/components/menu/MenuTabs'
import ProductList from '@/components/menu/ProductList'

export default async function DrinkPage() {
  const categories = await prisma.category.findMany({
    where: { menuType: 'DRINK' },
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
        Menu · Drinks
      </p>
      <h1 className="text-4xl mb-6">Boissons, cafés &amp; matcha</h1>

      <MenuTabs
        tabs={categories.map((category) => ({
          id: category.slug,
          label: category.name,
          content: (
            <ProductList
              products={category.products.map((product) => ({
                id: product.id,
                name: product.name,
                description: product.description ?? undefined,
                price: product.price.toNumber(),
                isNew: product.isNew,
                image: product.image ?? undefined,
              }))}
            />
          ),
        }))}
      />
    </div>
  )
}