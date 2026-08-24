import type { CartItem as CartItemType } from '../types/CartItem'

type CartItemProps = {
  item: CartItemType
  onIncrease: (productId: number) => void
  onDecrease: (productId: number) => void
  onRemove: (productId: number) => void
}

function CartItem({ item, onIncrease, onDecrease, onRemove }: CartItemProps) {
  return (
    <article>
      <img src={item.product.image} alt={item.product.title} />
      <h2>{item.product.title}</h2>
      <p>${item.product.price}</p>

      <div>
        <button type="button" onClick={() => onDecrease(item.product.id)}>
          -
        </button>

        <span>{item.quantity}</span>

        <button type="button" onClick={() => onIncrease(item.product.id)}>
          +
        </button>
      </div>

      <button type="button" onClick={() => onRemove(item.product.id)}>
        Remove
      </button>
    </article>
  )
}

export default CartItem
