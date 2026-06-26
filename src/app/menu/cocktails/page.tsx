import { prisma } from '@/lib/prisma'
import MenuTabs from '@/components/menu/MenuTabs'
import ProductList from '@/components/menu/ProductList'

export default async function CocktailsPage() {
  const categories = await prisma.category.findMany({
    where: { menuType: 'COCKTAIL' },
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
        Menu · Cocktails
      </p>
      <h1 className="text-4xl mb-6">Les signatures du bar</h1>
      <p className="text-creme-700 mb-8">
        Cocktails classiques et créations maison, à apprécier avec modération.
      </p>

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