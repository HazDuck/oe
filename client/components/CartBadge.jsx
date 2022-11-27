import { useProduct } from "../context"

const CartBadge = () => {
  const { cart } = useProduct()

  return (
    <span title="Basket Items" aria-label="Total item count" className="header__basket-badge">
      {cart.item_count}
    </span>
  )
}

export default CartBadge