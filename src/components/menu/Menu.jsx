import styles from "./styles.module.scss"
import { useSelector } from "react-redux"
export const Menu = () => {
  const dishes = useSelector((state) => Object.values(state.dishes.entities))
  return (
    <div className={styles.menuContainer}>
      <h3 className={styles.menuTitle}>Menu</h3>
      <ul className={styles.menuList}>
        {dishes.map((dish) => (
          <li key={dish.id} className={styles.menuItem}>
            {dish.name} <span className={styles.price}>${dish.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
