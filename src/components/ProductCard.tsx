import { useState } from 'react'
import type { Product } from '../types/Product'

type ProductCardProps = {
  product: Product
  onAddToCart: (product: Product, quantity: number) => void
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function handleIncrease() {
    setQuantity(quantity + 1)
  }

  function handleQuantityChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuantity = Number(event.target.value)

    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  function handleAddToCart() {
    onAddToCart(product, quantity)
  }

  return (
    <article>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>

      <div>
        <button type="button" onClick={handleDecrease}>
          -
        </button>

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />

        <button type="button" onClick={handleIncrease}>
          +
        </button>
      </div>

      <button type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </article>
  )
}

export default ProductCard
