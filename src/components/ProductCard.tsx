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
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          className="product-card__image"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-card__content">
        <h2>{product.title}</h2>
        <p className="product-card__price">${product.price.toFixed(2)}</p>

        <div className="quantity-control">
          <button type="button" onClick={handleDecrease}>
            -
          </button>

          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            aria-label={`Quantity for ${product.title}`}
          />

          <button type="button" onClick={handleIncrease}>
            +
          </button>
        </div>

        <button
          className="primary-button"
          type="button"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
