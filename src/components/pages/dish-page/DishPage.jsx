import { useParams } from "react-router"
import { useSelector } from "react-redux"
import { selectDishById } from "../../redux/entities/dishes/slice"
import { DishCounter } from "../../dishcounter/DishCounter"
import styles from "./styles.module.scss"

export const DishPage = () => {
  const { dishId } = useParams()
  const dish = useSelector((state) => selectDishById(state, dishId))
  const user = true
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{dish.name}</h2>
      <p className={styles.price}>Price: ${dish.price}</p>
      <p className={styles.description}>{dish.description}</p>
      <DishCounter user={user} dishId={dish.id} />
    </div>
  )
}
