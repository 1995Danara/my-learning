import { DishCounter } from "../dishcounter/DishCounter"
import styles from "./styles.module.scss"

export const CartItem = ({ dishId, amount, dishName }) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.dishName}>{dishName} -</div>
      <p className={styles.amount}>{amount}</p>
      <DishCounter dishId={dishId} />
    </div>
  )
}
