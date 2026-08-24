import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import type { Product } from '../types/Product'

type ShopProps = {
  onAddToCart: (product: Product, quantity: number) => void
}

function Shop({ onAddToCart }: ShopProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')

        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }

        const data: Product[] = await response.json()
        setProducts(data)
      } catch {
        setError('Unable to load products.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (isLoading) {
    return (
      <main className="shop">
        <p>Loading products...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className="shop">
        <p>{error}</p>
      </main>
    )
  }

  return (
    <main className="shop">
      <header className="shop__header">
        <p className="shop__eyebrow">Catalog</p>
        <h1>Shop</h1>
        <p>Browse our current selection of products.</p>
      </header>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </main>
  )
}

export default Shop
