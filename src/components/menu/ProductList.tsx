import ProductItem from './ProductItem'
import type { Product } from '@/types'

interface ProductListProps {
  title?: string
  products: Product[]
}

export default function ProductList({ title, products }: ProductListProps) {
  return (
    <section className="mb-8">
      {title && (
        <p className="text-xs uppercase tracking-wide text-creme-500 mb-2">
          {title}
        </p>
      )}

      {products.length === 0 ? (
        <p className="text-sm text-creme-500 py-4">
          Aucun produit disponible dans cette catégorie pour le moment.
        </p>
      ) : (
        products.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            isNew={product.isNew}
            image={product.image}
          />
        ))
      )}
    </section>
  )
}
