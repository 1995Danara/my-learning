import { useState } from "react"
import { Counter } from "../counter/Counter"
import styles from "./styles.module.scss"
import { use } from "react"
import { UserContextName } from "../usercontext/usercontextname"

export const DishCounter = () => {
  const [count, setCount] = useState(0)
  const { user } = use(UserContextName)

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
