import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import ProductCard from './ProductCard'
import type { Product } from '../types/Product'

const product: Product = {
  id: 1,
  title: 'Test Backpack',
  price: 49.99,
  image: 'https://example.com/backpack.jpg',
}

describe('ProductCard', () => {
  it('increases and decreases the product quantity', async () => {
    const user = userEvent.setup()

    render(<ProductCard product={product} onAddToCart={vi.fn()} />)

    const quantityInput = screen.getByRole('spinbutton', {
      name: `Quantity for ${product.title}`,
    })

    const increaseButton = screen.getByRole('button', { name: '+' })
    const decreaseButton = screen.getByRole('button', { name: '-' })

    expect(quantityInput).toHaveValue(1)

    await user.click(increaseButton)

    expect(quantityInput).toHaveValue(2)

    await user.click(decreaseButton)

    expect(quantityInput).toHaveValue(1)
  })

  it('calls onAddToCart with the product and selected quantity', async () => {
    const user = userEvent.setup()
    const onAddToCart = vi.fn()

    render(<ProductCard product={product} onAddToCart={onAddToCart} />)

    const increaseButton = screen.getByRole('button', { name: '+' })
    const addToCartButton = screen.getByRole('button', {
      name: 'Add to Cart',
    })

    await user.click(increaseButton)
    await user.click(increaseButton)
    await user.click(addToCartButton)

    expect(onAddToCart).toHaveBeenCalledWith(product, 3)
  })
})
