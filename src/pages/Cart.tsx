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
    <main className="cart">
      <header className="cart__header">
        <p className="cart__eyebrow">Your order</p>
        <h1>Cart</h1>
      </header>

      {cart.length === 0 ? (
        <p className="cart__empty">Your cart is empty.</p>
      ) : (
        <div className="cart__content">
          <div className="cart__items">
            {cart.map((item) => (
              <CartItem
                key={item.product.id}
                item={item}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemove={onRemove}
              />
            ))}
          </div>

          <aside className="cart__summary">
            <h2>Order summary</h2>

            <div className="cart__summary-row">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </aside>
        </div>
      )}
    </main>
  )
}

export default Cart
