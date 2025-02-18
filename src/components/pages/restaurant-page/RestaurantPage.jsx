import { Outlet, NavLink, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectRestaurantEntities } from "../../redux/entities/restaurants/slice"
import styles from "./styles.module.scss"

export const RestaurantPage = () => {
  const { restaurantId } = useParams()
  const restaurantEntities = useSelector(selectRestaurantEntities)
  const restaurant = restaurantEntities[restaurantId]

  return (
    <div>
      <h1>{restaurant?.name}</h1>
      <div className={styles.navLinks}>
        <NavLink
          to={`/restaurants/${restaurantId}/menu`}
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ""}`
          }
        >
          Menu
        </NavLink>
        <NavLink
          to={`/restaurants/${restaurantId}/reviews`}
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ""}`
          }
        >
          Reviews
        </NavLink>
      </div>

      <Outlet />
    </div>
  )
}
