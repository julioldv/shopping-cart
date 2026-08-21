import { useState } from 'react'

type Product = {
  id: number
  title: string
  price: number
  image: string
}

type ProductCardProps = {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function handleIncrease() {
    setQuantity(quantity + 1)
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

        <input type="number" min="1" value={quantity} readOnly />

        <button type="button" onClick={handleIncrease}>
          +
        </button>
      </div>

      <button type="button">Add to Cart</button>
    </article>
  )
}

export default ProductCard
