import styles from "./styles.module.scss"
import { useSelector } from "react-redux"
import { selectDishes } from "../redux/entities/dishes/slice"

export const Menu = ({ menu }) => {
  const dishes = useSelector(selectDishes)
  const filteredDishes = menu
    .map((dishId) => dishes.find((dish) => dish.id === dishId))
    .filter(Boolean)

  return (
    <div className={styles.menuContainer}>
      <h3 className={styles.menuTitle}>Menu</h3>
      <ul className={styles.menuList}>
        {filteredDishes.map((dish) => (
          <li key={dish.id} className={styles.menuItem}>
            {dish.name} <span className={styles.price}>${dish.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
