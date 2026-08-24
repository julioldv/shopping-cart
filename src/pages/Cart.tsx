import CartItem from '../components/CartItem'
import type { CartItem as CartItemType } from '../types/CartItem'

type CartProps = {
  cart: CartItemType[]
  onIncrease: (productId: number) => void
  onDecrease: (productId: number) => void
  onRemove: (productId: number) => void
}

function Cart({ cart, onIncrease, onDecrease, onRemove }: CartProps) {
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  )

  return (
    <main>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />
          ))}

          <p>Total: ${total.toFixed(2)}</p>
        </div>
      )}
    </main>
  )
}

export default Cart
