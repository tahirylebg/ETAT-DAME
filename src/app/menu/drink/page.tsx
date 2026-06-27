import { prisma } from '@/lib/prisma'
import MenuTabs from '@/components/menu/MenuTabs'
import ProductList from '@/components/menu/ProductList'
import PageHeader from '@/components/layout/PageHeader'
import FloatingFoodIcons from '@/components/home/FloatingFoodIcons'

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
    <div className="relative px-6 pt-8 pb-6 overflow-hidden">
      <FloatingFoodIcons />
      <div className="relative z-10">
        <PageHeader eyebrow="Menu · Drinks" title="Boissons, cafés & matcha" />

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
    </div>
  )
}
