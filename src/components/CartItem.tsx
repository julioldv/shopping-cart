import type { CartItem as CartItemType } from '../types/CartItem'

type CartItemProps = {
  item: CartItemType
  onIncrease: (productId: number) => void
  onDecrease: (productId: number) => void
  onRemove: (productId: number) => void
}

function CartItem({ item, onIncrease, onDecrease, onRemove }: CartItemProps) {
  return (
    <article className="cart-item">
      <div className="cart-item__image-wrapper">
        <img
          className="cart-item__image"
          src={item.product.image}
          alt={item.product.title}
        />
      </div>

      <div className="cart-item__details">
        <h2>{item.product.title}</h2>
        <p>${item.product.price.toFixed(2)}</p>

        <div className="cart-item__actions">
          <div className="quantity-control">
            <button type="button" onClick={() => onDecrease(item.product.id)}>
              -
            </button>

            <span>{item.quantity}</span>

            <button type="button" onClick={() => onIncrease(item.product.id)}>
              +
            </button>
          </div>

          <button
            className="text-button"
            type="button"
            onClick={() => onRemove(item.product.id)}
          >
            Remove
          </button>
        </div>
      </div>

      <p className="cart-item__subtotal">
        ${(item.product.price * item.quantity).toFixed(2)}
      </p>
    </article>
  )
}

export default CartItem
