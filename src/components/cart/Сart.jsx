import { CartItemContainer } from "../cart-item/CartItemContainer"
import styles from "./styles.module.scss"
export const Cart = ({ itemsIds }) => {
  return (
    <div className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>Cart</h3>
      <ul className={styles.cartList}>
        {itemsIds.map((id) => (
          <li key={id} className={styles.cartItem}>
            <CartItemContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  )
}
