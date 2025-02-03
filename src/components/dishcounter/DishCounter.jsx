import { useState } from "react"
import { Counter } from "../counter/Counter"
import styles from "./styles.module.scss"

export const DishCounter = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => {
    if (count < 5) {
      setCount(count + 1)
    }
  }

  const onDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

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
