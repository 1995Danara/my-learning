import { Counter } from "../counter/Counter"
import styles from "./styles.module.scss"
import { useDispatch, useSelector } from "react-redux"
import {
  addToCart,
  removeFromCart,
  selectorAmountById,
} from "../redux/entities/cart/slice"

export const DishCounter = ({ user, dishId }) => {
  const dispatch = useDispatch()
  const count = useSelector((state) => selectorAmountById(state, dishId))
  const onIncrement = () => {
    if (count < 5) {
      dispatch(addToCart(dishId))
    }
  }

  const onDecrement = () => {
    if (count > 0) {
      dispatch(removeFromCart(dishId))
    }
  }
  if (!user) return null
  return (
    <div className={styles.counterContainer}>
      <Counter
        count={count}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  )
}
