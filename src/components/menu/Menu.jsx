import styles from "./styles.module.scss"
import { Link } from "react-router-dom"
import { useGetDishesByRestaurantIdQuery } from "../redux/services-api/api"

export const Menu = ({ restaurantId }) => {
  const {
    data: dishes,
    isLoading,
    error,
  } = useGetDishesByRestaurantIdQuery(restaurantId)

  if (isLoading) return <p className={styles.loading}>Loading...</p>
  if (error) return <p className={styles.error}>Error loading dishes</p>
  if (!dishes || dishes.length === 0)
    return <p className={styles.noDishes}>No dishes available</p>

  return (
    <div className={styles.menuContainer}>
      <h3 className={styles.menuTitle}>Menu</h3>
      <ul className={styles.menuList}>
        {dishes.map((dish) => (
          <li key={dish.id} className={styles.menuItem}>
            <Link to={`/dish/${dish.id}`} className={styles.dishLink}>
              {dish.name} <span className={styles.price}>${dish.price}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
