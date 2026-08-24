import type { CartItem } from '../types/CartItem'

type CartProps = {
  cart: CartItem[]
}

function Cart({ cart }: CartProps) {
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
            <article key={item.product.id}>
              <img src={item.product.image} alt={item.product.title} />
              <h2>{item.product.title}</h2>
              <p>${item.product.price}</p>
              <p>Quantity: {item.quantity}</p>
            </article>
          ))}

          <p>Total: ${total.toFixed(2)}</p>
        </div>
      )}
    </main>
  )
}

export default Cart
